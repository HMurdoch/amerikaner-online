import React, { Suspense, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Stories from "./pages/Stories";
import Connections from "./pages/Connections";
import Resources from "./pages/Resources";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CV from "./pages/CV";
import BrainBox from "./pages/BrainBox";
import CMS from "./pages/CMS";
import NavBar from "./components/NavBar";

function Fallback() {
    return <div className="p-4 text-[var(--fg-soft)]">Loading�</div>;
}
function NotFound() {
    return <div className="p-4 text-[var(--fg-soft)]">Not found. Try the menu above.</div>;
}

export default function App() {
    const canvasRef = useRef(null);

    // Init theme once (default = blue)
    useEffect(() => {
        const saved = localStorage.getItem("theme") || "blue";
        if (saved === "blue") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", saved);
        }
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
                appInstance.liquidPlane.material.metalness = 0.75;
                appInstance.liquidPlane.material.roughness = 0.25;
                appInstance.liquidPlane.uniforms.displacementScale.value = 5;
                appInstance.setRain(false);
                window.__liquidBgApp = appInstance;
            } catch (error) {
                console.warn("Liquid background failed to load", error);
            }
        };

        initLiquid();

        return () => {
            isMounted = false;
            if (appInstance?.dispose) {
                appInstance.dispose();
            }
            if (window.__liquidBgApp?.dispose) {
                window.__liquidBgApp.dispose();
            }
            window.__liquidBgApp = undefined;
        };
    }, []);

    return (
        <div className="min-h-screen relative app-bg">
            <div className="background-root" aria-hidden="true">
                <div className="background-image" aria-hidden="true" />
                <canvas id="canvas" ref={canvasRef} className="liquid-canvas" aria-hidden="true" />
            </div>
            <main className="relative z-10 mx-auto max-w-[1694px] px-4 py-6">
                <NavBar />
                <Suspense fallback={<Fallback />}>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/journey" element={<Journey />} />
                        <Route path="/stories" element={<Stories />} />
                        <Route path="/connections" element={<Connections />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/brainbox" element={<BrainBox />} />
                        <Route path="/cms" element={<CMS />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </div>

    );
}