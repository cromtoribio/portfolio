import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const recoletaBold = localFont({
    src: "./fonts/recoleta-bold.woff2",
    variable: "--font-recoleta-bold",
    weight: "700",
});

const visueltMed = localFont({
    src: "./fonts/VisueltPro-Medium.ttf",
    variable: "--font-visuelt-medium",
    weight: "500",
});

export const metadata: Metadata = {
    title: "The Compendium",
    description:
        "The Compendium is a living, breathing collection of creative journeys, curious wanderings, and world-building projects.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${recoletaBold.variable} ${visueltMed.variable} antialiased bg-slate-100`}
            >
                {children}
            </body>
        </html>
    );
}
