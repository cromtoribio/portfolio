import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Fonts
 */

// Recoleta
const recoletaBold = localFont({
    src: "./fonts/recoleta-bold.woff2",
    variable: "--font-recoleta-bold",
    weight: "700",
});

//Visuelt
const visueltReg = localFont({
    src: "./fonts/VisueltPro-Regular.woff2",
    variable: "--font-visuelt-regular",
    weight: "400",
});

const visueltMed = localFont({
    src: "./fonts/VisueltPro-Medium.ttf",
    variable: "--font-visuelt-medium",
    weight: "500",
});

// Rune
const rune = localFont({
    src: "./fonts/darune.otf",
    variable: "--font-rune",
    weight: "400",
});

/**
 * Metadata
 */
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
                className={`${recoletaBold.variable} ${visueltMed.variable} ${rune.variable} antialiased bg-slate-100`}
            >
                {children}
            </body>
        </html>
    );
}
