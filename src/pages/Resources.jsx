import React from "react";
import GlowPanel from "../components/GlowPanel";
import GlowItem from "../components/GlowItem";

export default function Resources() {
    return (
        <div className="space-y-6">
            <GlowPanel title="Resources">
                <p className="text-[var(--fg-soft)]">
                    Practical resources for every step: documentation checklists, country guides, legal information, and trusted links.
                </p>
            </GlowPanel>

            <div className="grid gap-4 lg:grid-cols-2">
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Document Checklists</h4>
                        <p className="text-[var(--fg-soft)] text-sm">Step-by-step lists for visas, applications, and travel preparation.</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Country Guidance</h4>
                        <p className="text-[var(--fg-soft)] text-sm">Comparison information for destination communities and resettlement support.</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Safety & Verification</h4>
                        <p className="text-[var(--fg-soft)] text-sm">Learn how we verify testimonies and keep community reporting honest.</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Help Links</h4>
                        <p className="text-[var(--fg-soft)] text-sm">Quick access to support contacts, official resources, and legal references.</p>
                    </div>
                </GlowItem>
            </div>
        </div>
    );
}
