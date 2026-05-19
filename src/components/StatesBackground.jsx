import React, { useEffect, useRef, useState } from "react";
import Plasma from "./Plasma";
import "../styles/states-background.css";

export default function StatesBackground() {
    const canvasRef = useRef(null);
    const [color, setColor] = useState(() => {
        const theme = document.documentElement.dataset.theme || "blue";
        return theme === "red" ? "#dc2626" : "#1e40af";
    });

    useEffect(() => {
        const handleThemeChanged = (event) => {
            const theme = event?.detail || document.documentElement.dataset.theme || "blue";
            setColor(theme === "red" ? "#dc2626" : "#1e40af");
        };

        window.addEventListener("theme-changed", handleThemeChanged);
        return () => window.removeEventListener("theme-changed", handleThemeChanged);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let appInstance = null;
        let isMounted = true;

        const initLiquid = async () => {
            try {
                const module = await import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js");
                const LiquidBackground = module.default || module.LiquidBackground || module;
                if (!isMounted || !LiquidBackground) return;

                appInstance = LiquidBackground(canvas);
                appInstance.liquidPlane.material.metalness = 0.5;
                appInstance.liquidPlane.material.roughness = 0.4;
                appInstance.liquidPlane.uniforms.displacementScale.value = 3;
                appInstance.setRain(false);
                window.__statesLiquidApp = appInstance;
            } catch (error) {
                console.warn("States liquid background failed to load", error);
            }
        };

        initLiquid();

        return () => {
            isMounted = false;
            if (appInstance?.dispose) {
                appInstance.dispose();
            }
            if (window.__statesLiquidApp?.dispose) {
                window.__statesLiquidApp.dispose();
            }
            window.__statesLiquidApp = undefined;
        };
    }, []);

    return (
        <div className="states-background-container">
            <div className="states-plasma-layer">
                <Plasma
                    color={color}
                    speed={0.25}
                    direction="pingpong"
                    scale={3}
                    opacity={1}
                    mouseInteractive
                />
            </div>
            <div className="states-liquid-layer">
                <canvas id="states-canvas" ref={canvasRef} className="states-liquid-canvas" aria-hidden="true" />
            </div>
            <img
                src="/images/amerikaner.online_site/states_v1.png"
                alt="US States Map"
                className="states-map-overlay"
                loading="eager"
                decoding="async"
            />
        </div>
    );
}
