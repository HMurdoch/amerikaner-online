import React from "react";
import { Link } from "react-router-dom";
import GlowPanel from "../components/GlowPanel";

export default function Login() {
    return (
        <div className="space-y-6 max-w-3xl">
            <GlowPanel title="Login">
                <p className="text-[var(--fg-soft)]">
                    Sign in to access your journey dashboard, contribute verified stories, and connect with fellow travelers.
                </p>
            </GlowPanel>
            <div className="space-y-4 rounded-3xl border border-slate-300/20 bg-white/8 p-6 shadow-xl shadow-slate-900/10">
                <input className="w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black" placeholder="Email address" />
                <input type="password" className="w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black" placeholder="Password" />
                <button className="btn-soft w-full bg-[#0f172a] text-white hover:bg-[#111827]">Continue</button>
                <div className="text-sm text-[var(--fg-soft)]">
                    Don’t have an account? <Link to="/register" className="text-sky-400 hover:text-sky-300">Register</Link>
                </div>
            </div>
        </div>
    );
}
