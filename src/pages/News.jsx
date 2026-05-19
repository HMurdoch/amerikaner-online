import React from "react";
import GlowPanel from "../components/GlowPanel";
import GlowItem from "../components/GlowItem";

export default function News() {
    return (
        <div className="space-y-6">
            <GlowPanel title="News & Updates">
                <p className="text-[var(--fg-soft)]">
                    Stay informed with the latest policy updates, platform announcements, and verified relocation news.
                </p>
            </GlowPanel>

            <div className="grid gap-4">
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">New program guidance released</h4>
                        <p className="text-[var(--fg-soft)] text-sm">Read the latest update on verification and resettlement support for applicants from South Africa.</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Community verification roll-out</h4>
                        <p className="text-[var(--fg-soft)] text-sm">How Amerikaner.online confirms refugee testimony and keeps stories honest.</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Resources update: document checklists</h4>
                        <p className="text-[var(--fg-soft)] text-sm">New checklist sections for travel prep, interviews, and resettlement logistics.</p>
                    </div>
                </GlowItem>
            </div>
        </div>
    );
}
