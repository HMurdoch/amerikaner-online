// src/components/ParticlesBackground.jsx
import { useEffect, useRef } from "react";

const PARTICLES_CDN = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
const STATS_CDN = "https://threejs.org/examples/js/libs/stats.min.js";

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const existing = Array.from(document.scripts).find((s) => s.src === src);
        if (existing && (window.particlesJS || window.Stats)) return resolve();
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = (e) => reject(e);
        document.head.appendChild(s);
    });
}

function destroyParticles() {
    try {
        if (window.pJSDom && window.pJSDom.length) {
            window.pJSDom.forEach(({ pJS }) => {
                pJS.fn.vendors.destroypJS();
            });
            window.pJSDom = [];
        }
        const el = document.getElementById("particles-js");
        if (el) el.innerHTML = "";
    } catch {
        /* noop */
    }
}

function configFor(theme) {
    const red = "#ff3b3b";
    const blue = "#22b7ff";
    const particle = theme === "red" ? red : blue;

    return {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: particle },
            shape: {
                type: "circle",
                stroke: { width: 0, color: particle },
                polygon: { nb_sides: 5 },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: particle,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    };
}

export default function ParticlesBackground() {
    const themeRef = useRef(document.documentElement.getAttribute("data-theme") || "blue");

    useEffect(() => {
        let mounted = true;
        let statsInstance = null;
        let rafId = null;

        const init = async (theme) => {
            try {
                await loadScript(PARTICLES_CDN);
                await loadScript(STATS_CDN);
                if (!mounted) return;

                destroyParticles();

                const cfg = configFor(theme);
                // eslint-disable-next-line no-undef
                window.particlesJS("particles-js", cfg);

                // stats setup
                if (window.Stats) {
                    statsInstance = new window.Stats();
                    statsInstance.setMode && statsInstance.setMode(0);
                    statsInstance.domElement.style.position = "absolute";
                    statsInstance.domElement.style.left = "0px";
                    statsInstance.domElement.style.top = "0px";
                    document.body.appendChild(statsInstance.domElement);
                }

                const count_particles = document.querySelector(".js-count-particles");

                const update = () => {
                    if (!mounted) return;
                    if (statsInstance) {
                        statsInstance.begin();
                        statsInstance.end();
                    }
                    try {
                        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                            if (count_particles) count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
                        }
                    } catch (e) {
                        // ignore
                    }
                    rafId = requestAnimationFrame(update);
                };

                rafId = requestAnimationFrame(update);
            } catch (e) {
                // decorative only
            }
        };

        init(themeRef.current);

        const onThemeChanged = (e) => {
            themeRef.current = e.detail || "blue";
            init(themeRef.current);
        };
        window.addEventListener("theme-changed", onThemeChanged);

        return () => {
            mounted = false;
            window.removeEventListener("theme-changed", onThemeChanged);
            if (rafId) cancelAnimationFrame(rafId);
            try {
                if (statsInstance && statsInstance.domElement && statsInstance.domElement.parentNode) {
                    statsInstance.domElement.parentNode.removeChild(statsInstance.domElement);
                }
            } catch {}
            destroyParticles();
        };
    }, []);

    const css = `
/* ---- reset ---- */
#particles-js { position: absolute; width: 100%; height: 100%; background-color: #ffffff; background-image: url("/images/amerikaner.online_site/background_v1.jpeg"); background-repeat: no-repeat; background-size: cover; background-position: 50% 50%; }
canvas { display: block; vertical-align: bottom; }
.count-particles { background: #000022; position: absolute; top: 48px; left: 0; width: 80px; color: #13e8e9; font-size: 0.8em; text-align: left; text-indent: 4px; line-height: 14px; padding-bottom: 2px; font-family: Helvetica, Arial, sans-serif; font-weight: bold; }
.js-count-particles { font-size: 1.1em; }
#stats, .count-particles { -webkit-user-select: none; margin-top: 5px; margin-left: 5px; }
#stats { border-radius: 3px 3px 0 0; overflow: hidden; }
.count-particles { border-radius: 0 0 3px 3px; }
`;

    return (
        <>
            <style>{css}</style>
            <div id="particles-js" aria-hidden="true" />
            <div className="count-particles">
                <span className="js-count-particles">--</span> particles
            </div>
        </>
    );
}
