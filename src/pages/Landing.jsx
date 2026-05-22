// src/pages/Landing.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlowPanel from "../components/GlowPanel";
import GlowItem from "../components/GlowItem";
import QuoteHero from "../components/QuoteHero";
import SectionBackground from "../components/SectionBackground";

function LogoCarousel() {
    const logos = [
        "/images/amerikaner.online_site/amerikaner_hero_1.png",
        "/images/amerikaner.online_site/amerikaner_hero_2.png",
    ];
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timeout = window.setTimeout(() => setActive((value) => 1 - value), 18000);
        return () => window.clearTimeout(timeout);
    }, [active]);

    return (
        <div className="hero-logo-frame">
            {logos.map((src, index) => (
                <img
                    key={src}
                    src={src}
                    alt={`Amerikaner hero logo ${index + 1}`}
                    className={`hero-logo-img ${active === index ? "is-active" : ""}`}
                    loading="eager"
                    decoding="sync"
                />
            ))}
        </div>
    );
}

export default function Landing() {
    return (
        <SectionBackground className="space-y-10">
            <LogoCarousel />
            <section className="landing-hero">
                <div className="glow-panel rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_50px_120px_-40px_rgba(15,23,42,0.65)]">
                    <div className="hero-intro">
                        <p className="uppercase tracking-[0.5em] text-slate-400 mt-6 site-name">Amerikaner Online</p>
                        <h1>Real Journeys. Verified Stories. A New Beginning.</h1>
                        
                        <p className="mt-4 text-[var(--fg-soft)]">
                            Amerikaner Online is a verified community platform for people exploring relocation opportunities through the South African refugee program.
                        </p><br />

                        <p className="mt-4 text-[var(--fg-soft)]">
                            A trusted platform documenting verified relocation journeys under the South African refugee program.
                        </p><br />

                        <p className="mt-4 text-[var(--fg-soft)]">
                            Explore authentic testimonies from people at every stage of the process — from uncertainty and preparation to relocation and rebuilding life in the United States.
                        </p><br />

                        <h1 className="text-black">Because life-changing decisions deserve real stories.</h1>

                        <p className="mt-4 text-[var(--fg-soft)]">
                            Read real testimonies from verified participants navigating every stage of the journey:
                        </p><br />

                            <ul>
                                <li>Thinking of Leaving</li>
                                <li>In Progress</li>
                                <li>Relocated</li>
                            </ul><br />

                        <p className="mt-4 text-[var(--fg-soft)]">
                            Built around transparency, shared experience, practical guidance, and trusted information — verified through Veri-Q.
                        </p>


                        <div className="hero-buttons">
                            <Link to="/journey" className="btn-soft bg-white text-[#0f172a] hover:bg-slate-200">
                                Explore Journeys
                            </Link>
                            <Link to="/stories" className="btn-soft bg-white text-[#0f172a] hover:bg-slate-200">
                                Read Q&A
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="landing-section-grid mt-10">
                    <GlowPanel title="Journey categories">
                        <div className="grid gap-4 md:grid-cols-3">
                            <GlowItem>
                                <div>
                                    <h4 className="text-[var(--fg)] font-semibold">Thinking of Leaving?</h4>
                                    <img src="images/amerikaner.online_site/stage_1_1.png" alt="Thinking of leaving?" className="my-2 w-full rounded-lg object-cover" />
                                    <p className="text-[var(--fg-soft)] text-sm">
                                        Early-stage research, destination comparisons, and the first questions before you commit.
                                    </p>
                                </div>
                            </GlowItem>
                            <GlowItem>
                                <div>
                                    <h4 className="text-[var(--fg)] font-semibold">In Progress</h4>
                                    <img src="images/amerikaner.online_site/stage_2_1.png" alt="In Progress" className="my-2 w-full rounded-lg object-cover" />
                                    <p className="text-[var(--fg-soft)] text-sm">
                                        Application status updates, document checklists, and community support while you wait.
                                    </p>
                                </div>
                            </GlowItem>
                            <GlowItem>
                                <div>
                                    <h4 className="text-[var(--fg)] font-semibold">Relocated</h4>
                                    <img src="images/amerikaner.online_site/stage_3_1.png" alt="Relocated?" className="my-2 w-full rounded-lg object-cover" />
                                    <p className="text-[var(--fg-soft)] text-sm">
                                        Real arrival stories, settling advice, and life after the move.
                                    </p>
                                </div>
                            </GlowItem>
                        </div>
                    </GlowPanel>

                </div>
                <div className="landing-section-grid mt-10">
                    <GlowPanel title="Verified testimony">
                        <p className="text-[var(--fg-soft)] text-sm">
                            Every story on Amerikaner.online is reviewed to ensure it reflects real experience from the migration pathway, not speculation.
                        </p>
                        <div className="mt-4 space-y-4">
                            <GlowItem>
                                <div>
                                    <h4 className="text-[var(--fg)] font-semibold">Authenticity first</h4>
                                    <p className="text-[var(--fg-soft)] text-sm">Submission validation helps keep the platform anchored in real refugee journeys.</p>
                                </div>
                            </GlowItem>
                            <GlowItem>
                                <div>
                                    <h4 className="text-[var(--fg)] font-semibold">Community trust</h4>
                                    <p className="text-[var(--fg-soft)] text-sm">Readers can follow the true timeline and outcomes of each shared experience.</p>
                                </div>
                            </GlowItem>
                        </div>
                    </GlowPanel>
                </div>

                <QuoteHero />
            </section>

            <section className="landing-section-grid">
                <GlowPanel title="Featured stories">
                    <div className="space-y-4">
                        <GlowItem>
                            <div>
                                <h4 className="text-[var(--fg)] font-semibold">"I am moving with verified support and a clear plan."</h4>
                                <p className="text-[var(--fg-soft)] text-sm">– Sizwe, relocation planning</p>
                            </div>
                        </GlowItem>
                        <GlowItem>
                            <div>
                                <h4 className="text-[var(--fg)] font-semibold">"Documentation took time, but the community helped every step."</h4>
                                <p className="text-[var(--fg-soft)] text-sm">– Thandi, in progress</p>
                            </div>
                        </GlowItem>
                    </div>
                </GlowPanel>

                <GlowPanel title="Quick links">
                    <div className="space-y-3 text-[var(--fg-soft)] text-sm">
                        <p>• Verify a testimony</p>
                        <p>• Explore journey categories</p>
                        <p>• Join the community</p>
                    </div>
                </GlowPanel>
            </section>
        </SectionBackground>
    );
}
