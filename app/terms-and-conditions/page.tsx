"use client";

import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const body =
  "mb-4 text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base text-pretty";

const h2 =
  "mb-3 mt-10 text-balance text-2xl font-black leading-snug text-[color:var(--brand-ink)] first:mt-0 sm:text-3xl md:mb-4 md:mt-14 md:text-[2rem]";

const h3 =
  "mb-2 mt-8 text-xl font-bold leading-snug text-[color:var(--brand-ink)] sm:text-2xl md:mt-10";

const list = `${body} list-disc space-y-2 pl-6 marker:text-[color:var(--brand-primary)]`;

export default function TermsAndConditions() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[color:color-mix(in_srgb,var(--surface-2)_95%,#e8f4e8)] from-35% to-[color:var(--brand-primary)] to-100%">
        <Header />
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20 lg:py-24">
          <h1 className="text-4xl font-black leading-[1.12] text-[color:var(--brand-ink)] sm:text-5xl md:text-6xl lg:text-7xl">
            Terms{" "}
            <span className="text-[color:var(--brand-accent)]">&amp; Conditions</span>
          </h1>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-3xl px-4 md:px-8 2xl:max-w-4xl">
          <p className={body}>
            Your use of this Website and/or our services constitutes Your agreement to the following terms and conditions. If You do not agree with any of these terms and conditions, please do not use this Website or Our services. If You are under legal age of consent for Your respective district, you are not allowed to access or use this Website or Our services. You acknowledge and agree that You must be of legal age to purchase any of Our products or services available on this Website or otherwise. By submitting an order and/or payment, you are acknowledging that You have read and understand these terms and conditions. By submitting an order and/or payment, you are also agreeing to be legally bound by these terms and conditions, which form the entire agreement between You and puredesignhub.com.
          </p>

          <h2 className={h2}>REVISION POLICY</h2>
          <p className={body}>
            The allotted number of revisions is based on your selected package and you can demand as much revisions as stated in your package details. We focus on providing the best services to our customers and will continue revising until your needs is met. You are not liable to pay additional price if the design concepts are not changed. You will have your revised design in 48 hours.
          </p>
          <p className={body}>
            Any changes/revisions requested after the logo/website designs are finalized will be treated as a new order and might charge separately.
          </p>

          <h2 className={h2}>REFUND POLICY</h2>
          <p className={body}>Pure Design refund policy will be nil if:</p>
          <ul className={list}>
            <li>You have chosen a special package or received any discount.</li>
            <li>The primary design concept has been approved.</li>
            <li>You have demanded unrealistic revisions.</li>
            <li>The cancellation has been made due to reasons non-related to the company.</li>
            <li>The company has not been contacted for more than 2 weeks of project.</li>
            <li>Company&apos;s policies, or policy, have been violated.</li>
            <li>Other company or designer has been approached for the same project.</li>
            <li>The creative brief is lacking in required information.</li>
            <li>A complete design change has been demanded.</li>
            <li>The claim has crossed the given &apos;request for refund&apos; time span.</li>
            <li>The business is closing or changing name or business.</li>
            <li>
              Reasons such as <strong className="text-[color:var(--brand-ink)]">&apos;change of mind&apos;, &apos;disagreement with partner&apos;</strong> or other reasons that do not pertain to the service will not be subject to refund under any circumstances.
            </li>
            <li>
              If a client subscribes for a service bundle and happens to be dissatisfied with a particular service, refund will only be applicable on that particular service and &apos;not&apos; the entire bundle.
            </li>
            <li>The client will not be entitled to any refunds after 7 days, from the date of purchase.</li>
            <li>
              Services including but not limited to Social Media Marketing/Management, Search Engine Optimization (SEO), Domain Registration, Logo Copyrights &amp; Trademarks, Web Hosting &amp; Paid Plugins (SSL/DDoS) are not entitled to refunds under any circumstances.
            </li>
            <li>
              In case of websites, refunds will not be entertained once the client has approved the design and the website is sent for development.
            </li>
            <li>Refund requests will not be entertained once the logo/website designs are approved.</li>
            <li>
              A partial refund (not exceeding 25%) could be availed, if client fails to provide the initial brief for the logo/web design within 10 days of placing the order.
            </li>
          </ul>
          <p className={body}>
            <strong className="text-[color:var(--brand-ink)]">Note:</strong> Pure Design holds all rights to reject any project or cancel the contract whenever it deems necessary. After the refund, you will not have any rights to use the designs for any purpose; they will be the sole property of Pure Design. The company will be the rightful owner of the designs.
          </p>

          <h2 className={h2}>CLAIM YOUR REFUND</h2>
          <p className={body}>
            To claim your refund in accordance with our refund policy, follow the following steps:
          </p>
          <h2 className={h2}>All refund requests will be fulfilled as per the following arrangement:</h2>
          <ul className={list}>
            <li>Dialing our Toll-Free Number # +1 940 2454 561</li>
            <li>Sending us an Email: support@puredesignhub.com</li>
          </ul>
          <p className={body}>
            As soon as we receive your refund request, we will respond to it at our earliest, once the required analysis is completed we will initiate the process which generally take 20-25 Working Days.
          </p>
          <p className={body}>
            After you have received your refund, you will not have any rights to any designs/source code submitted by Pure Design, the information will be submitted the Copyright Acquisition of the Government Copyright Agencies to maintain legality.
          </p>

          <h2 className={h2}>QUALITY ASSURANCE POLICY</h2>
          <p className={body}>
            We do our best to meet your requirements and our designers do their best to fulfill your expectations. We believe in providing best designs and each of our designs is well researched and well crafted.
          </p>

          <h2 className={h2}>WE OFFER SATISFACTION GUARANTEE</h2>
          <ul className={list}>
            <li>Our unlimited revisions policy is to make sure that you are satisfied.</li>
            <li>We aim at exceeding your expectations and strive to accomplish it.</li>
            <li>
              We do not stop our revisions until you are completely satisfied with your design (number of revisions will be according to your package).
            </li>
          </ul>

          <h2 className={h2}>DELIVERY POLICY</h2>
          <ul className={list}>
            <li>
              The complete order will be sent to the mentioned account on the date stated on Order Confirmation as well as a confirmation email will also be sent.
            </li>
            <li>The turnaround time will be according to the package, the minimum time required is 2 business days.</li>
            <li>In case of urgent order, contact our customer support team.</li>
          </ul>

          <h2 className={h2}>RECORD MAINTENANCE</h2>
          <p className={body}>
            Pure Design keeps the records of finalized designs so that in case of any misplaced order, you will be provided the exact file.
          </p>

          <h2 className={h2}>CUSTOMER SUPPORT</h2>
          <p className={body}>
            Our customer support is present 24/7 to answer all of your concerns and queries, our team will answer your concerns anytime and every time.
          </p>

          <h2 className={h2}>DISPUTE/CHARGEBACK POLICIES</h2>

          <h3 className={h3}>Fraudulent</h3>
          <p className={body}>
            Our company do not charge any credit/debit card without customer authorization &amp; customer always pay us through the payment link generated from merchant and our company do not support any fraudulent activities.
          </p>

          <h3 className={h3}>Product Not Received</h3>
          <p className={body}>
            Customers claiming Product not received during the time frame when Project is still going on with the company, and if there is any delay in delivery because customer changed their requirements of project or any kind of delay occurred from customer even once for any reason, our company is not responsible to deliver it within the time frame decided in the start of project, as it is clearly mentioned in our T&amp;C that &quot;Change of Requirement&quot; (Can effect on Time &amp; Cost of projects).
          </p>
          <p className={body}>
            <strong className="text-[color:var(--brand-ink)]">
              If still they do not want to continue then they need to submit cancellation with valid reason, &amp; it will be reviewed by our QA team and offered partial refund if customer is eligible for it according to our mentioned T&amp;C&apos;s
            </strong>
          </p>

          <h3 className={h3}>Product/Service Unacceptable</h3>
          <p className={body}>
            If customer claims that product is unacceptable then we do not process anything without customer&apos;s approval, once design is approved then customer can&apos;t claim product unacceptable or damage, as we also provide unlimited revisions for design/development until we resolve customer&apos;s query, we also recreate it from scratch to keep customer satisfaction on priorities basis, We have a dedicated team working for every project so customer cannot claim a full reimbursement on a project claiming Product unacceptable.
          </p>
          <p className={body}>
            <strong className="text-[color:var(--brand-ink)]">
              Additionally, we do not provide any product in hard form, &amp; our service is always open to redo it if they are not satisfied during a limited time frame.
            </strong>
          </p>

          <h3 className={h3}>Credit not processed</h3>
          <p className={body}>
            Customer can only claim credit not processed if the refund is committed by the Company&apos;s Billing or Customer Care in written and we have not processed it on given time frame.
          </p>

          <h3 className={h3}>General/Other</h3>
          <p className={body}>
            If any dispute occurs in general/other terms then we do not entertain change of mind from customer as company invest their resource to provide services to customer.
          </p>
          <p className={body}>
            <strong className="text-[color:var(--brand-ink)]">
              We care for our company image so to resolve any kind of issue we always provide refund resolutions in case of any dispute between Company &amp; Customer, For More Information Reach Us Out at support@puredesignhub.com
            </strong>
          </p>

          <h3 className={h3}>COMMUNICATION POLICY</h3>
          <ul className={list}>
            <li>
              YOU agree that Pure Design is not liable for any correspondence from email address (es) other than the ones followed by our own domain i.e. &quot;..@puredesignhub.com&quot; or/and any toll free number that is not mentioned on our website. Pure Design should not be held responsible for any damage(s) caused by such correspondence. We only take responsibility of any communication through email address (es) under our own domain name or/and via toll free number i.e. already mentioned on Pure Design Website.
            </li>
            <li>We are not responsible for any damages caused due to other contact details not provided by us.</li>
            <li>Project activation charges will apply if client fails to respond over a period of 25 days.</li>
            <li>We take full responsibility of all the information provided through our official domains.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
