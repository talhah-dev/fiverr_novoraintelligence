"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Timer, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const outcomes = [
    {
        title: "Reduce manual handling",
        desc: "Automate repetitive steps while keeping approvals for critical actions.",
        icon: Timer,
    },
    {
        title: "Increase reliability",
        desc: "Monitoring, retries, and fail-safes prevent workflow breakage at scale.",
        icon: ShieldCheck,
    },
    {
        title: "Improve throughput",
        desc: "Faster routing, scheduling logic, and consistent system sync.",
        icon: Workflow,
    },
];

const kpiTemplate = [
    "Time saved per week (hours reclaimed)",
    "Error reduction (manual mistakes avoided)",
    "Throughput (requests processed / day)",
    "SLA improvements (response time)",
    "Governance (audit trail coverage)",
];

export default function RoiMeasurementSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: subtle diagonal band */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%,transparent_55%,rgba(255,255,255,0.04))]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                    {/* Left: copy + outcomes */}
                    <div className="lg:col-span-7">
                        <p className="text-xs uppercase tracking-wider text-white/50">
                            Measurement model
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                KPI-driven
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Executive-ready reporting
                            </Badge>
                        </div>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            We don’t promise ROI — we measure it
                        </h2>

                        <p className="mt-4 max-w-2xl text-base text-white/70">
                            During the pilot, we agree on KPIs upfront and report the before/after impact.
                            That way expansion decisions are based on data, not opinions.
                        </p>

                        <div className="mt-8 space-y-3">
                            {outcomes.map((o) => {
                                const Icon = o.icon;
                                return (
                                    <div
                                        key={o.title}
                                        className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                                <Icon className="h-5 w-5 text-cyan-300" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{o.title}</p>
                                                <p className="mt-1 text-sm text-white/65">{o.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: KPI template panel */}
                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-sm">
                            <p className="text-sm font-medium text-white">KPI Template</p>
                            <p className="mt-1 text-sm text-white/65">
                                Common metrics we track during the pilot.
                            </p>

                            <div className="mt-6 space-y-3">
                                {kpiTemplate.map((k) => (
                                    <div
                                        key={k}
                                        className="flex items-start gap-2 rounded-2xl border border-white/10 bg-black/20 p-4"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                        <p className="text-sm text-white/75">{k}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-4">
                                <p className="text-sm text-white/75">
                                    End result: a clear ROI summary + expansion roadmap.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                                >
                                    <Link href="/pilot">
                                        Start a 30-Day Pilot <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                                >
                                    <Link href="/security">Security model</Link>
                                </Button>
                            </div>

                            <p className="mt-4 text-xs text-white/45">
                                You can later replace this panel with a downloadable PDF.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
