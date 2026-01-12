"use client";

import { CalendarDays, ClipboardList, ShieldCheck, Rocket, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const weeks = [
    {
        week: "Week 1",
        title: "Scope & Success Metrics",
        icon: ClipboardList,
        details: [
            "Select one contained workflow (high impact, low disruption)",
            "Define inputs/outputs, boundaries, and approval checkpoints",
            "Set KPIs (time saved, error reduction, throughput, reliability)",
        ],
    },
    {
        week: "Week 2",
        title: "Build in Sandbox",
        icon: ShieldCheck,
        details: [
            "Implement allow-listing and minimal-field policy",
            "Dry runs with test data + stakeholder walkthrough",
            "Add logging, retry rules, and failure handling",
        ],
    },
    {
        week: "Week 3",
        title: "Controlled Deployment",
        icon: Rocket,
        details: [
            "Gradual rollout with monitoring and alerting",
            "Human-in-the-loop for critical actions (where needed)",
            "Stability checks + fine-tuning based on real usage",
        ],
    },
    {
        week: "Week 4",
        title: "ROI Report & Expansion Plan",
        icon: TrendingUp,
        details: [
            "Report results against KPIs with before/after comparison",
            "Document governance + operational runbook",
            "Propose next workflows ranked by impact and effort",
        ],
    },
];

export default function PilotBreakdownSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: top ribbon + subtle vignette */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-blue-500/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-[0.16] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Detailed timeline
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                            4-week plan
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Sandbox-first
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Stakeholder-ready
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Exactly what happens each week
                    </h2>

                    <p className="max-w-2xl text-base text-white/70">
                        Clear milestones keep the pilot moving. Each phase ends with a review so
                        stakeholders can sign off before the next step.
                    </p>
                </div>

                {/* Timeline layout (not a card grid) */}
                <div className="relative">
                    <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent sm:block" />

                    <div className="space-y-4">
                        {weeks.map((w) => {
                            const Icon = w.icon;
                            return (
                                <div
                                    key={w.week}
                                    className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
                                >
                                    {/* marker */}
                                    <div className="hidden sm:block">
                                        <div className="absolute left-5 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
                                    </div>

                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                                <Icon className="h-5 w-5 text-cyan-300" />
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-white/50">
                                                    {w.week}
                                                </p>
                                                <p className="mt-1 text-lg font-semibold text-white">
                                                    {w.title}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                                            Review checkpoint included
                                        </span>
                                    </div>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                        {w.details.map((d) => (
                                            <div
                                                key={d}
                                                className="rounded-2xl border border-white/10 bg-black/20 p-4"
                                            >
                                                <p className="text-sm text-white/75">{d}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
