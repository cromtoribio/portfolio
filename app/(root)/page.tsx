"use client";
import { useState } from "react";
import Welcome from "@/components/Welcome";
import IntroFlow from "@/components/IntroFlow";

export default function Home() {
    const [homeState, setHomeState] = useState({
        showWelcome: true,
        showIntroFlow: false,
        showHomeMain: false,
    });

    const handleWelcomeScreenClose = () => {
        setHomeState((prev) => ({
            ...prev,
            showWelcome: false,
            showIntroFlow: true,
        }));
    };

    const handleSkipIntro = () => {
        setHomeState((prev) => ({
            ...prev,
            showIntroFlow: false,
            showHomeMain: true,
        }));
    };

    let backgroundClass = "bg-[url('/images/hero-earthy.jpg')]";

    if (homeState.showIntroFlow) {
        backgroundClass = "bg-teal-950";
    }

    if (homeState.showHomeMain) {
        backgroundClass = "bg-[url('/images/hero-night.jpg')]";
    }

    return (
        <main>
            <div
                className={`flex flex-col items-center justify-center h-screen ${backgroundClass} bg-center bg-cover`}
            >
                {homeState.showWelcome && (
                    <Welcome onClick={handleWelcomeScreenClose} />
                )}
                {homeState.showIntroFlow && (
                    <IntroFlow onClick={handleSkipIntro} />
                )}
            </div>
            {/* Rest of the homepage */}
        </main>
    );
}
