"use client";

import Link from "next/link";
import React from "react";

const Welcome = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url('/images/hero-night.jpg')] bg-center bg-cover">
            <div className="flex flex-col items-center justify-between text-white md:h-[60vh] h-screen py-15 px-4 mt-[-7vh]">
                <h1 className="font-bold text-center max-sm:text-[9vw] text-5xl uppercase drop-shadow-[0px_0px_8px_rgba(255,255,255,0.6)]">
                    Welcome to <br /> The Compendium
                </h1>

                <Link
                    href="/ethos"
                    className="border-1 rounded-lg bg-black/70 text-white px-8 py-2 mt-4 drop-shadow-[0px_0px_8px_rgba(255,255,255,0.6)] font-[var(--font-visuelt-medium)]"
                >
                    ENTER
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
