"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, TrendingUp, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PilotHero() {
    return (
        <section className="relative overflow-hidden bg-[#070B14]">
            {/* Unique background: split glow + “timeline rail” */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-full w-[55%] bg-[radial-gradient(900px_520px_at_20%_20%,rgba(34,211,238,0.14),transparent_60%)]" />
                <div className="absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(900px_520px_at_80%_25%,rgba(59,130,246,0.14),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.18),rgba(7,11,20,1))]" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent opacity-60" />
                <div className="absolute left-1/2 top-24 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
                <div className="absolute left-1/2 top-56 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.45)]" />
                <div className="absolute left-1/2 top-96 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="grid items-start gap-10 lg:grid-cols-12">
                    {/* Left */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                30-day pilot
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
                                Sandbox-first
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <TrendingUp className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                Measurable ROI
                            </Badge>
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Prove value in{" "}
                            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                30 days
                            </span>
                            <span className="block">without disrupting production</span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Start with one contained workflow. We scope it, build it safely in a sandbox,
                            deploy with controls, and report outcomes you can show stakeholders.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            >
                                <Link href="/contact">
                                    Start the pilot <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                            >
                                <Link href="/security">Review security model</Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                            {[
                                { k: "Time to scope", v: "60 minutes", icon: Timer },
                                { k: "Risk level", v: "Low (contained)", icon: ShieldCheck },
                                { k: "Output", v: "ROI report", icon: TrendingUp },
                            ].map((x) => {
                                const Icon = x.icon;
                                return (
                                    <div
                                        key={x.k}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                    >
                                        <div className="flex items-center gap-2 text-white">
                                            <Icon className="h-4 w-4 text-cyan-300" />
                                            <p className="text-xs text-white/55">{x.k}</p>
                                        </div>
                                        <p className="mt-2 text-sm font-medium text-white">{x.v}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: “pilot card” with 4-week mini timeline */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                            <div className="border-b border-white/10 bg-black/20 px-6 py-4">
                                <p className="text-sm font-medium text-white">Pilot Timeline</p>
                                <p className="text-xs text-white/55">Week-by-week deliverables</p>
                            </div>

                            <div className="p-6">
                                <div className="space-y-3">
                                    {[
                                        { w: "Week 1", t: "Scope + success metrics", s: "Define KPIs, boundaries, approvals" },
                                        { w: "Week 2", t: "Build in sandbox", s: "Dry runs, reviews, safe controls" },
                                        { w: "Week 3", t: "Controlled deployment", s: "Monitoring, fail-safes, rollout" },
                                        { w: "Week 4", t: "ROI report + next workflow", s: "Measure impact, plan expansion" },
                                    ].map((row, i) => (
                                        <div
                                            key={row.w}
                                            className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/5"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-white/50">
                                                        {row.w}
                                                    </p>
                                                    <p className="mt-1 text-sm font-medium text-white">
                                                        {row.t}
                                                    </p>
                                                    <p className="mt-1 text-sm text-white/65">{row.s}</p>
                                                </div>
                                                <div className="mt-1 h-8 w-8 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                                                    <span className="text-sm font-semibold text-white/80">
                                                        {i + 1}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-5">
                                    <p className="text-sm font-medium text-white">
                                        Your end result:
                                    </p>
                                    <p className="mt-1 text-sm text-white/65">
                                        One production workflow running safely — plus a clear ROI summary
                                        to justify expansion.
                                    </p>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_240px_at_80%_10%,rgba(34,211,238,0.18),transparent_55%)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
