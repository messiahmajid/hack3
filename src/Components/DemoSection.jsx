// src/components/DemoSection/DemoSection.jsx
import React from "react";
import "./DemoSection.css";

export default function DemoSection() {
    return (
        <section className="DemoSection" id="demo">
            <div className="DemoContent">
                {/* Text Heading placed above the video */}
                <div className="DemoTextContainer">
                    <h2 className="DemoHeading">
                        <span className="BlackText">See How </span>
                        <span className="BlueText">ScamSpot </span>
                        <span className="BlackText">Detects </span>
                        <span className="BlueText">  Social Engineering Scams</span>

                    </h2>
                </div>
                {/* Demo video embed */}
                <div className="DemoVideoContainer">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/VIDEO_ID"  // Replace VIDEO_ID with your actual demo video id
                        title="Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
