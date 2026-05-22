import React from "react";
import GlowPanel from "../components/GlowPanel";
import SectionBackground from "../components/SectionBackground";

export default function Contact() {
    return (
        <SectionBackground className="space-y-6 max-w-3xl">
            <GlowPanel title="Contact Us">
                <p className="text-[var(--fg-soft)]">
                    Need support or want to share a verified story? Reach out and our team will guide you to the right channel.
                </p>
            </GlowPanel>

            <form className="space-y-4">
                <label className="block">
                    <span className="text-sm text-[var(--fg)]">Name</span>
                    <input type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" />
                </label>
                <label className="block">
                    <span className="text-sm text-[var(--fg)]">Email</span>
                    <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" />
                </label>
                <label className="block">
                    <span className="text-sm text-[var(--fg)]">Message</span>
                    <textarea placeholder="How can we help?" rows="5" className="mt-2 w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" />
                </label>
                <button type="submit" className="btn-soft bg-[#0f172a] text-white hover:bg-[#111827]">
                    Send message
                </button>
            </form>
        </SectionBackground>
    );
}
