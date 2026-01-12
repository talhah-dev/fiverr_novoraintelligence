"use client";

import { ArrowDownRight, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const before = [
    {
        title: "Manual reporting & spreadsheet cleanup",
        desc: "Ops teams spend hours consolidating updates across tools.",
    },
    {
        title: "Broken handoffs between systems",
        desc: "CRM ↔ scheduling ↔ internal ops fall out of sync.",
    },
    {
        title: "Unclear accountability",
        desc: "No consistent audit trail for what changed and why.",
    },
    {
        title: "Slow lead handling",
        desc: "Delays in routing and follow-up reduce conversion readiness.",
    },
];

const after = [
    {
        title: "Automated reporting with governance",
        desc: "Reports generated reliably with logs and controlled inputs.",
    },
    {
        title: "Connected workflows across your stack",
        desc: "Triggers, routing, and updates stay synchronized end-to-end.",
    },
    {
        title: "Audit-friendly operations",
        desc: "Traceable actions, checkpoints, and clear approvals.",
    },
    {
        title: "Faster throughput, fewer mistakes",
        desc: "Less manual handling leads to fewer errors and quicker response.",
    },
];

export default function RoiBeforeAfterSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: split panel wash */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-b from-white/0 via-white/5 to-white/0 opacity-80" />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-white/0 via-white/5 to-white/0 opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Before vs after
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Executive-friendly
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Clear outcomes
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            No hype
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Make the impact obvious
                    </h2>
                    <p className="max-w-2xl text-base text-white/70">
                        This is how stakeholders think: what changes operationally, what reduces risk,
                        and what improves throughput. We measure this during the pilot.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    {/* BEFORE */}
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-6 shadow-lg backdrop-blur-sm">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm font-medium text-white">Before</p>
                                <p className="text-sm text-white/60">Manual, fragile, slow</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                <ArrowDownRight className="h-5 w-5 text-blue-200" />
                            </div>
                        </div>

                        <div className="mt-5 space-y-3">
                            {before.map((b) => (
                                <div
                                    key={b.title}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                >
                                    <div className="flex items-start gap-2">
                                        <XCircle className="mt-0.5 h-4 w-4 text-blue-200" />
                                        <div>
                                            <p className="text-sm font-medium text-white">{b.title}</p>
                                            <p className="mt-1 text-sm text-white/65">{b.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AFTER */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm font-medium text-white">After</p>
                                <p className="text-sm text-white/60">Controlled, measurable, scalable</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                <ArrowUpRight className="h-5 w-5 text-cyan-200" />
                            </div>
                        </div>

                        <div className="mt-5 space-y-3">
                            {after.map((a) => (
                                <div
                                    key={a.title}
                                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                                >
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                        <div>
                                            <p className="text-sm font-medium text-white">{a.title}</p>
                                            <p className="mt-1 text-sm text-white/65">{a.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-4">
                            <p className="text-sm text-white/75">
                                Result: fewer errors, faster ops, clearer governance — with proof in the ROI report.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
