import React from "react";
import GlowPanel from "../components/GlowPanel";
import GlowItem from "../components/GlowItem";

export default function Stories() {
    return (
        <div className="space-y-6">
            <GlowPanel title="Stories">
                <p className="text-[var(--fg-soft)]">
                    A live feed of first-hand accounts from people moving to Amerika. Read verified stories, ask questions, and share your own experience.
                </p>
            </GlowPanel>

            <div className="grid gap-4">
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">"We finally moved. The paperwork was the hardest part."</h4>
                        <p className="text-[var(--fg-soft)] text-sm">– Joseph, moved through the program in 2025</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">"My documents took longer than expected, but the support group kept me informed."</h4>
                        <p className="text-[var(--fg-soft)] text-sm">– Lena, currently in transit</p>
                    </div>
                </GlowItem>
                <GlowItem>
                    <div>
                        <h4 className="text-[var(--fg)] font-semibold">"Relocation is real. Here is what I wish I knew before I left."</h4>
                        <p className="text-[var(--fg-soft)] text-sm">– Anders, relocated to Texas</p>
                    </div>
                </GlowItem>
            </div>
        </div>
    );
}
