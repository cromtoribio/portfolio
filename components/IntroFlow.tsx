import Image from "next/image";
import React from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

interface Props {
    onClick: () => void;
}

const IntroFlow = ({ onClick }: Props) => {
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const messages = [
                "Hello there, friend! 🌹",
                "It is a pleasure to see you here!",
                "I’m Chris — the caretaker and curator of The Compendium!",
                "This space is a living, breathing collection woven from my own journeys —",
                "a place where stories of creativity, wonder, and world-building find their home.",
                "Though the walls may shift and reshape with time,",
                "many rooms are already waiting for you to explore ✨",
                "Just let your curiosity lead the way!",
                "Welcome to The Compendium! ❤️",
            ];

            const tl = gsap.timeline({ defaults: { ease: "none" } });

            // Fade in + rise up the bubble
            tl.from("#intro-bubble", {
                opacity: 0,
                width: 0,
                y: 20,
                duration: 0.5,
                ease: "expo.in",
            });

            messages.forEach((msg, i) => {
                tl.add(() => {
                    // Clear the previous message before typing the next one
                    const el = document.getElementById("intro-text");
                    if (el) el.textContent = "";
                });

                tl.to(
                    "#intro-text",
                    {
                        text: msg,
                        duration: Math.max(msg.length / 30, 2),
                    },
                    "+=0.5"
                );

                // Add delay after typing before next message starts
                tl.to({}, { duration: 1.5 });
            });
        });

        return () => ctx.revert();
    }, []);

    const bubbleClass =
        "bg-white/80 py-4 rounded-lg px-8 sm:mr-4 text-center w-[80%] mx-auto";

    return (
        <>
            <div className="flex flex-col items-center justify-center max-sm:justify-end sm:max-w-[600px] text-black font-visueltMed w-full h-screen">
                <div className="flex items-center justify-center max-sm:flex-col max-sm:justify-items-start max-sm:items-end w-full sm:bg-stone-950 sm:pl-8 py-10 rounded-sm">
                    <div
                        id="intro-bubble"
                        className={bubbleClass}
                    >
                        <p id="intro-text"></p>
                    </div>
                    <Image
                        src="/images/bitmoji/side_wave.png"
                        width={500}
                        height={500}
                        alt="hero"
                        className="max-w-[210px]"
                    />
                </div>
            </div>
            <button
                className="px-5 py-3 cursor-pointer sticky bottom-0 text-stone-300 font-visueltReg"
                onClick={onClick}
            >
                Skip Intro
            </button>
        </>
    );
};

export default IntroFlow;
