import React from "react";
import GlowPanel from "../components/GlowPanel";

export default function About() {
    return (
        <div className="space-y-6">
            <GlowPanel title="About Amerikaner.online">
                <p className="text-[var(--fg-soft)]">
                    Amerikaner.online is a community platform built for people navigating relocation under the South Africa refugee program. We bring verified testimony, practical guides, and peer-led support together in one trusted space.
                </p>
            </GlowPanel>

            <div className="grid gap-6 lg:grid-cols-3">
                <GlowPanel title="Mission">
                    <p className="text-[var(--fg-soft)]">
                        Provide honest stories, clear guidance, and a shared roadmap for anyone planning a major move to Amerika.
                    </p>
                </GlowPanel>

                <GlowPanel title="How It Works">
                    <p className="text-[var(--fg-soft)]">
                        Members submit testimony, ask questions, and explore curated resources. Every story is verified for authenticity before publication.
                    </p>
                </GlowPanel>

                <GlowPanel title="Community Values">
                    <p className="text-[var(--fg-soft)]">
                        Trust, practical support, transparency, and a human-first approach guide our platform.
                    </p>
                </GlowPanel>
            </div>
        </div>
    );
}
