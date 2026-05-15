"use client";

import { GeoProvider } from "@/app/context/GeoContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <GeoProvider>{children}</GeoProvider>;
}
