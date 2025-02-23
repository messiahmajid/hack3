// src/components/ImpactSection/ImpactSection.jsx
import React from "react";
import "./ImpactSection.css";

export default function InfoSection() {
    const sections = [
        {
            title: "Social Engineering Scams:",
            highlight: "The Silent Epidemic",
            text: "Fraudsters weaponize urgency and trust, flooding browsers with fake lottery wins, 'urgent' bank alerts, or impersonated loved ones. Victims in developing countries—often elderly or low-income—click malicious links, surrender savings, or share personal data, unaware until it’s too late.",
            video: "/data2.mp4",
        },
        {
            title: "...Who Is",
            highlight: "Impacted",
            text: "The poorest communities, elderly populations, and low-literacy individuals in developing countries—groups disproportionately targeted by scams due to limited access to education, digital safeguards, and financial instability.",
            video: "crying.mp4",
        },
        {
            title: "...Why It",
            highlight: " Matters",
            text: "A single scam can shatter lives: a grandmother loses her life savings, a family’s meager income vanishes, hope turns to despair. Existing tools ignore those who need protection most—people who rely on browsers (not apps) and lack the literacy to spot danger.",
            video: "/hacker.mp4",
        },
        {
            title: "...What We",
            highlight: "Solve",
            text: "Our Chrome extension acts as a guardian: silently scanning every page, link, and pop-up for scams. No tech skills needed—just a click to safety. We meet users where they’re most vulnerable: their browser, their lifeline to the digital world.",
            video: "/extension.mp4",
        },
    ];

    return (
        <section className="InfoSection">
            {sections.map((section, index) => (
                <div key={index} className={`InfoRow ${index % 2 === 1 ? "reverse" : ""}`}>
                    <div className="InfoText">
                        <h2>
                            <span className="BlackText">{section.title} </span>
                            <span className="BlueText">{section.highlight}</span>
                        </h2>
                        <p>{section.text}</p>
                    </div>
                    <div className="InfoMedia">
                        <video
                            className="InfoVideo"
                            src={section.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}
