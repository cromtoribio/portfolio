"use client";

import React from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

interface Props {
    onClick: () => void;
}

const Welcome = ({ onClick }: Props) => {
    const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
    });

    useGSAP(() => {
        gsap.set("#scramble", {
            opacity: 0,
        });

        gsap.set("#button", {
            opacity: 0,
            y: 50,
        });

        tl.to("#scramble", {
            duration: 1,
            opacity: 1,
        })
            .to(
                "#scrambleText1",
                {
                    duration: 3,
                    scrambleText: {
                        text: "{original}",
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                        speed: 0.8,
                        revealDelay: 0.2,
                        oldClass: "rune",
                        newClass: "header-main",
                    },
                },
                "<"
            )
            .to(
                "#button",
                {
                    opacity: 1,
                    y: 0,
                },
                ">-0.5"
            )
            .to(
                "#button",
                {
                    duration: 2,
                    scrambleText: {
                        text: "{original}",
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                        speed: 0.8,
                        revealDelay: 0.8,
                        oldClass: "rune",
                        newClass: "visuelt-med",
                    },
                },
                "<"
            );
    });

    return (
        <div className="flex flex-col items-center justify-center text-white md:h-[60vh] h-screen py-15 px-4">
            <h1
                id="scramble"
                className="font-bold text-center max-sm:text-[9vw] text-5xl uppercase drop-shadow-[0px_0px_8px_rgba(255,255,255,0.6)]"
            >
                <span id="scrambleText1">The Compendium</span>
            </h1>

            <button
                type="button"
                id="button"
                onClick={onClick}
                className="border-1 rounded-lg bg-black/70 text-white px-8 py-2 mt-4 drop-shadow-[0px_0px_8px_rgba(255,255,255,0.6)] font-visueltMed"
            >
                ENTER
            </button>
        </div>
    );
};

export default Welcome;
