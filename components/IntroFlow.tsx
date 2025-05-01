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
                "Hey there, Dreamer ✨",
                "I’m so glad you’re here 🙌🏽",
                "I’m Chris — part guide, part tinkerer, full-time steward of this strange little world.",
                "The Compendium is a world in motion —",
                "realms woven from sparks of curiosity, design mischief, and world-shifting dreams.",
                "These rooms hold pieces of my path so far —",
                "and yet, there’s space for others to leave their mark...",
                "...perhaps yours will echo here someday 👀",
                "Until then, take what you need — and leave whatever you feel called to.",
                "Welcome to The Compendium ❤️",
                "Let’s wander a while 🙏🏽",
            ];

            const tl = gsap.timeline({ defaults: { ease: "none" } });

            // Fade in + rise up the bubble
            tl.from("#intro-container", {
                opacity: 0,
                width: 0,
                duration: 0.8,
                ease: "expo.in",
            })
                .from("#sidewave-bitmoji", {
                    x: 300,
                    duration: 0.8,
                    ease: "expo.in",
                })
                .from("#intro-bubble", {
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
                        duration: 0.05 * msg.length,
                    },
                    "+=0.5"
                );

                // Add delay after typing before next message starts
                tl.to({}, { duration: 1.5 });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center max-sm:justify-end md:max-w-[500px] text-stone-50 font-visueltMed w-full h-screen">
                <div
                    id="intro-container"
                    className=" overflow-hidden flex items-center justify-center max-sm:flex-col max-sm:justify-items-start max-sm:items-end w-full sm:bg-stone-950 rounded-sm"
                >
                    <div
                        id="intro-bubble"
                        className=" py-4 rounded-lg px-8 sm:mr-4 text-center w-[80%] mx-auto leading-relaxed"
                    >
                        <p id="intro-text"></p>
                    </div>
                    <Image
                        src="/images/bitmoji/side_wave.png"
                        width={500}
                        height={500}
                        alt="bitmoji saying hello"
                        id="sidewave-bitmoji"
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
