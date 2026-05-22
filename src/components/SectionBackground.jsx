import React from "react";
import StatesBackground from "./StatesBackground";

export default function SectionBackground({ children, className = "" }) {
    return (
        <div className={`landing-page-wrapper page-background-wrapper ${className}`.trim()}>
            <div className="landing-bg-layer page-bg-layer">
                <StatesBackground />
            </div>
            <div className="landing-content page-content">
                {children}
            </div>
        </div>
    );
}
