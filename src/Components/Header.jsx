// src/components/Header/Header.jsx
import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="Header">
            <div className="LogoArea">
                {/* Replace with your own logo or brand text */}
                <img
                    src="/logo.png"
                    alt="Your Logo"
                    className="Logo"
                />
                <h1 className="BrandName">ScamSpot</h1>
            </div>

            <nav className="Nav">
                <a href="#solution" className="NavLink">Our Solution</a>
                <a href="#demo" className="NavLink">Demo</a>
                <a href="#team" className="NavLink">Meet The Team</a>
            </nav>
        </header>
    );
}