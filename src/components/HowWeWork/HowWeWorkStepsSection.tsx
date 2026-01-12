"use client";

import { Wrench, ShieldCheck, Rocket, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
    {
        step: "Step 1",
        title: "Discover & Map the Workflow",
        icon: Wrench,
        desc: "We align on one contained workflow, define success metrics, and map the current process end-to-end.",
        bullets: [
            "Pick 1 workflow with clear start/end",
            "Define KPIs (time saved, throughput, reliability)",
            "Set boundaries + approval checkpoints",
        ],
    },
    {
        step: "Step 2",
        title: "Build in Sandbox with Controls",
        icon: ShieldCheck,
        desc: "We implement allow-listing, approvals, logging, and fail-safes before any production rollout.",
        bullets: [
            "Minimal-field policy (non-PII by default)",
            "Human-in-the-loop for critical actions",
            "Audit trail + retries + failure handling",
        ],
    },
    {
        step: "Step 3",
        title: "Deploy, Monitor & Measure ROI",
        icon: Rocket,
        desc: "We deploy gradually with monitoring and produce a stakeholder-ready ROI summary to guide expansion.",
        bullets: [
            "Controlled rollout + monitoring/alerts",
            "Operational runbook for your team",
            "Before/after ROI summary + next steps",
        ],
    },
];

export default function HowWeWorkStepsSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: dotted spine */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent lg:block" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        The full process
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            No big rebuild
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Stakeholder-friendly checkpoints
                        </Badge>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        A repeatable delivery model
                    </h2>

                    <p className="mt-4 text-base text-white/70">
                        Each phase ends with a review so security, compliance, and operations can
                        sign off before moving forward.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    {steps.map((s, idx) => {
                        const Icon = s.icon;
                        const emphasis = idx === 1; // make middle card feel “core”
                        return (
                            <div
                                key={s.title}
                                className={[
                                    "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm",
                                    emphasis ? "ring-1 ring-cyan-400/20" : "",
                                ].join(" ")}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-white/50">
                                            {s.step}
                                        </p>
                                        <p className="mt-1 text-lg font-semibold text-white">
                                            {s.title}
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                        <Icon className="h-5 w-5 text-cyan-300" />
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-white/70">
                                    {s.desc}
                                </p>

                                <div className="mt-5 space-y-2">
                                    {s.bullets.map((b) => (
                                        <div key={b} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                            <p className="text-sm text-white/75">{b}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_220px_at_80%_10%,rgba(34,211,238,0.14),transparent_55%)]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
