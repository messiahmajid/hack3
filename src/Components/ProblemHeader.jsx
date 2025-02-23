// src/components/ProblemHeader/ProblemHeader.jsx
import React from "react";
import "./ProblemHeader.css";

export default function ProblemHeader() {
    return (
        <div className="ProblemHeader">
            <h1 className="ProblemText">
                <span className="BlackText">What's </span>
                <span className="BlackText">the </span>
                <span className="BlueText">problem?</span>
            </h1>
        </div>
    );
}
