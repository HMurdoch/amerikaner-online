import React from "react";
import GlowPanel from "../components/GlowPanel";
import GlowItem from "../components/GlowItem";

export default function Connections() {
    return (
        <div className="space-y-6">
            <GlowPanel title="Connections">
                <p className="text-[var(--fg-soft)]">
                    Build your support network, connect with relocation peers, and find groups that match your route or destination.
                </p>
            </GlowPanel>

            <div className="grid gap-4 lg:grid-cols-2">
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Regional Hubs</h4>
                        <p className="text-[var(--fg-soft)] text-sm">Join groups organized by destination state, region, and visa status.</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">Support Circles</h4>
                        <p className="text-[var(--fg-soft)] text-sm">Find people with similar timelines, document needs, and lived experience.</p>
                    </div>
                </GlowItem>
            </div>
        </div>
    );
}
