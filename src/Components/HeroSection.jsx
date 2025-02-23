// src/components/HeroSection/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <section className="HeroSection">
            <div className="HeroTextWrapper">
                <h2 className="HeroTitle">
                    Block scams before they strike.
                    <br />
                    <span className="TitleAccent">Shield personal data.</span>
                    <br />
                    Detect threats in real-time.
                </h2>
                <p className="HeroSubtitle">
                    Stay safe online with AI-powered protection that’s always watching—so you don’t have to.
                </p>
            </div>
            <div className="HeroVideoWrapper">
                <video
                    className="HeroVideo"
                    src="/cyber2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}
