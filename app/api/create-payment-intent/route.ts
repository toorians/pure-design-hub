import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const CRM_BASE_URL = 'https://pixelperfektsolutions.com/payment/public';
// const CRM_BASE_URL = 'https://dev.pixelperfektsolutions.com';
const CRM_AUTH_EMAIL = process.env.CRM_AUTH_EMAIL;
const CRM_AUTH_PASSWORD = process.env.CRM_AUTH_PASSWORD;
const CRM_CLIENT_DEFAULT_PASSWORD = process.env.CRM_CLIENT_DEFAULT_PASSWORD;

export async function POST(req: Request) {
    try {
        if (!CRM_AUTH_EMAIL || !CRM_AUTH_PASSWORD || !CRM_CLIENT_DEFAULT_PASSWORD) {
            throw new Error("Missing CRM auth environment variables");
        }

        const data = await req.json();
        const { amount, payment_method, billing_details, currency: requestedCurrencyRaw } = data;
        const amountNumber = Number(amount);
        if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
            throw new Error("Invalid amount");
        }

        // 1. Currency resolve by what UI shows (default USD)
        // Accept: "usd"/"gbp" or symbols "$"/"£". If missing/unknown => USD.
        const normalizeCurrency = (value?: string) => {
            if (!value) return null;
            const v = String(value).trim().toLowerCase();
            if (v === '$' || v === 'usd' || v === 'us' || v === 'usa') return 'usd';
            if (v === '£' || v === 'gbp' || v === 'uk' || v === 'gb') return 'gbp';
            return null;
        };

        const currency = normalizeCurrency(requestedCurrencyRaw) ?? 'usd';
        const currency_id = currency === 'usd' ? 21 : 22;

        // 2. CRM Login
        console.log("--- [STEP 1] CRM Login ---");
        const loginRes = await fetch(`${CRM_BASE_URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                email: CRM_AUTH_EMAIL,
                password: CRM_AUTH_PASSWORD,
            }).toString(),
        });
        if (!loginRes.ok) throw new Error("CRM Login API failed");
        const loginData = await loginRes.json();
        const token = loginData?.data?.token;

        if (!token) throw new Error("CRM Login failed");

        // 3. Create/Retrieve Client
        console.log("--- [STEP 2] Creating CRM Client ---");
        let last_ClientId;
        const clientPayload = {
            name: `${billing_details.firstName} ${billing_details.lastName}`,
            email: billing_details.email,
            mobile: billing_details.phone,
            company_name: billing_details.companyName || '',
            address: billing_details.address,
            email_notifications: 0,
            password: CRM_CLIENT_DEFAULT_PASSWORD,
            brand_id: 11,
            sendMail: 'no',
        };

        const clientRes = await fetch(`${CRM_BASE_URL}/api/v1/client`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientPayload),
        });
        const res = await clientRes.json();
        console.log("CRM Client Creation Response:", JSON.stringify(res));

        last_ClientId = res?.data?.id;

        if (!last_ClientId) {
            throw new Error(res?.error?.message || "Client creation failed - No ID returned from CRM");
        }
        console.log("--- [STEP 2b] Client ID Secured:", last_ClientId);

        // 4. Get last Invoice Number
        console.log("--- [STEP 3] Fetching Last Invoice Number ---");
        const invNumRes = await fetch(`${CRM_BASE_URL}/api/v1/invoice/lastInvoiceNumber`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!invNumRes.ok) throw new Error("Failed to fetch last invoice number from CRM");
        const invNumber = await invNumRes.text();

        // 5. Create Invoice
        const currentDate = new Date().toISOString().split('T')[0];
        const dueDate = currentDate; // Set due date to today

        const invoicePayload = {
            invoice_number: invNumber,
            issue_date: currentDate,
            due_date: dueDate,
            sub_total: amountNumber,
            total: amountNumber,
            currency_id: currency_id,
            client_id: last_ClientId,
            status: 'unpaid',
            allowed_payment_modes: '["stripe"]',
            added_from: 699,
            sale_agent: 699,
            brand_id: 11,
            item_name: [billing_details.packageName],
            item_summary: [billing_details.description || 'Package Purchase'],
            cost_per_item: [amountNumber],
            quantity: [1],
            amount: [amountNumber],
        };

        const invoiceRes = await fetch(`${CRM_BASE_URL}/api/v1/invoice`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoicePayload),
        });
        if (!invoiceRes.ok) throw new Error("Invoice creation API failed");
        const invoiceData = await invoiceRes.json();
        const last_InvoiceId = invoiceData?.data?.id;

        if (!last_InvoiceId) throw new Error("Invoice creation failed");
        console.log("--- [STEP 4] Invoice Created:", last_InvoiceId);

        // 6. Stripe Payment (Confirm)
        console.log("--- [STEP 5] Processing Stripe Payment ---");
        let paymentIntent;
        try {
            paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(amountNumber * 100),
                currency: currency,
                payment_method: payment_method,
                automatic_payment_methods: {
                    enabled: true,
                    allow_redirects: 'never',
                },
                confirm: true,
                receipt_email: billing_details.email,
                metadata: {
                    pkgTitle: billing_details.packageName,
                },
            });

            // 7. Success logic - update CRM stripe-pay
            console.log("--- [STEP 6] Updating CRM Payment Status (Success) ---");
            const dataPayment = {
                invoice_id: last_InvoiceId,
                transaction_id: paymentIntent.id,
                customer_id: last_ClientId,
                status: 1, // success
                fname: billing_details.firstName,
                lname: billing_details.lastName,
                email: billing_details.email,
                mobile: billing_details.phone,
                address: billing_details.address,
                cname: billing_details.companyName || '',
                country_id: billing_details.country,
                state: billing_details.state,
                city: billing_details.city,
                zcode: billing_details.zipCode,
                response: paymentIntent,
            };

            const stripePayRes = await fetch(`${CRM_BASE_URL}/api/v1/stripe-pay`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPayment),
            });
            const stripePayData = await stripePayRes.json();

            return NextResponse.json({
                status: 200,
                message: "Payment Successful",
                stripeResponse: stripePayData,
                paymentIntent,
                currency,
                currency_id
            });

        } catch (err: any) {
            // 8. Decline/Error logic - log to CRM
            console.error("--- [STEP 6] Updating CRM Payment Status (Failure) ---", err.message);
            const dataPaymentDecline = {
                invoice_id: last_InvoiceId,
                transaction_id: '',
                customer_id: last_ClientId,
                status: 0, // decline
                fname: billing_details.firstName,
                lname: billing_details.lastName,
                email: billing_details.email,
                mobile: billing_details.phone,
                address: billing_details.address,
                cname: billing_details.companyName || '',
                country_id: billing_details.country,
                state: billing_details.state,
                city: billing_details.city,
                zcode: billing_details.zipCode,
                response: err.message,
            };

            await fetch(`${CRM_BASE_URL}/api/v1/stripe-pay`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPaymentDecline),
            });

            return NextResponse.json({ status: 500, message: err.message }, { status: 500 });
        }

    } catch (err: any) {
        console.error("General API error:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
