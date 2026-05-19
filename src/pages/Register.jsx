import React from "react";
import { Link } from "react-router-dom";
import GlowPanel from "../components/GlowPanel";

export default function Register() {
    return (
        <div className="space-y-6 max-w-3xl">
            <GlowPanel title="Register">
                <p className="text-[var(--fg-soft)]">
                    Create your Amerikaner.online account to share verified experiences, track your migration journey, and join the community.
                </p>
            </GlowPanel>
            <div className="space-y-4 rounded-3xl border border-slate-300/20 bg-white/8 p-6 shadow-xl shadow-slate-900/10">
                <input className="w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black" placeholder="Full name" />
                <input className="w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black" placeholder="Email address" />
                <input type="password" className="w-full rounded-xl border border-slate-300 bg-white/8 px-4 py-3 text-black" placeholder="Create a password" />
                <button className="btn-soft w-full bg-[#0f172a] text-white hover:bg-[#111827]">Create account</button>
                <div className="text-sm text-[var(--fg-soft)]">
                    Already registered? <Link to="/login" className="text-sky-400 hover:text-sky-300">Login</Link>
                </div>
            </div>
        </div>
    );
}
