import React from "react";
import GlowPanel from "../components/GlowPanel";
import GlowItem from "../components/GlowItem";
import SectionBackground from "../components/SectionBackground";

export default function Journey() {
    return (
        <SectionBackground className="space-y-6">
            <GlowPanel title="Journey Categories">
                <div className="grid gap-4 md:grid-cols-3">
                    <GlowItem>
                        <div>
                            <h4 className="text-[var(--fg)] font-semibold">Thinking of Leaving?</h4>
                            <img src="images/amerikaner.online_site/stage_1_1.png" alt="Thinking of leaving?" className="my-2 w-full rounded-lg object-cover" />
                            <p className="text-[var(--fg-soft)] text-sm">
                                Early-stage guidance, country comparisons, research tips, and a place to ask the first hard questions.
                            </p>
                        </div>
                    </GlowItem>
                    <GlowItem>
                        <div>
                            <h4 className="text-[var(--fg)] font-semibold">In Progress</h4>
                            <img src="images/amerikaner.online_site/stage_2_1.png" alt="In Progress" className="my-2 w-full rounded-lg object-cover" />
                            <p className="text-[var(--fg-soft)] text-sm">
                                Document checklists, application tracking, process updates, and community help during waiting periods.
                            </p>
                        </div>
                    </GlowItem>
                    <GlowItem>
                        <div>
                            <h4 className="text-[var(--fg)] font-semibold">Relocated</h4>
                            <img src="images/amerikaner.online_site/stage_3_1.png" alt="Relocated?" className="my-2 w-full rounded-lg object-cover" />
                            <p className="text-[var(--fg-soft)] text-sm">
                                Success stories, settling-in advice, cultural adaptation tips, and life after arrival.
                            </p>
                        </div>
                    </GlowItem>
                </div>
            </GlowPanel><br />

            <GlowPanel title="What You’ll Find">
                <div className="grid gap-4 lg:grid-cols-2">
                    <GlowItem>
                        <div>
                            <h4 className="text-[var(--fg)] font-semibold">Guides & Checklists</h4>
                            <p className="text-[var(--fg-soft)] text-sm">Practical migration tools and document trackers for each phase of the journey.</p>
                        </div>
                    </GlowItem>
                    <GlowItem>
                        <div>
                            <h4 className="text-[var(--fg)] font-semibold">Verified Community Input</h4>
                            <p className="text-[var(--fg-soft)] text-sm">Real testimony from verified travelers, good and bad, so others can learn from the true experience.</p>
                        </div>
                    </GlowItem>
                </div>
            </GlowPanel>
        </SectionBackground>
    );
}
