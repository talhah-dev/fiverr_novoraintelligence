"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Timer, Gauge, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function RoiHero() {
    return (
        <section className="relative overflow-hidden bg-[#070B14]">
            {/* Unique background: “metric board” with corner frames */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 left-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[150px]" />
                <div className="absolute -bottom-40 right-[-140px] h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[160px]" />
                <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.16),rgba(7,11,20,1))]" />
                {/* corner frame */}
                <div className="absolute left-6 top-6 h-20 w-20 rounded-2xl border border-white/10" />
                <div className="absolute right-6 top-6 h-20 w-20 rounded-2xl border border-white/10" />
                <div className="absolute left-6 bottom-6 h-20 w-20 rounded-2xl border border-white/10" />
                <div className="absolute right-6 bottom-6 h-20 w-20 rounded-2xl border border-white/10" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* Left */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <TrendingUp className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                Measurable outcomes
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Stakeholder-friendly reporting
                            </Badge>
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            ROI that’s easy to{" "}
                            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                prove
                            </span>
                            <span className="block">and safe to scale</span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                            We focus on operational impact: time saved, fewer errors, faster throughput,
                            and workflows that don’t break as volume grows — delivered with a clear
                            before/after report.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            >
                                <Link href="/pilot">
                                    Start a 30-Day Pilot <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                            >
                                <Link href="/how-we-work">See how we deliver</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right: KPI tiles (unique layout) */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-white">ROI Snapshot</p>
                                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                                    Example metrics
                                </span>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    {
                                        k: "Time saved",
                                        v: "10–25 hrs/week",
                                        icon: Timer,
                                        hint: "Ops + reporting workflows",
                                    },
                                    {
                                        k: "Throughput",
                                        v: "↑ Faster routing",
                                        icon: Gauge,
                                        hint: "Less backlog, fewer delays",
                                    },
                                    {
                                        k: "Reliability",
                                        v: "99%+",
                                        icon: BarChart3,
                                        hint: "Monitoring + fail-safes",
                                    },
                                    {
                                        k: "Decision speed",
                                        v: "≤ 30 days",
                                        icon: TrendingUp,
                                        hint: "Pilot proves value fast",
                                    },
                                ].map((x) => {
                                    const Icon = x.icon;
                                    return (
                                        <div
                                            key={x.k}
                                            className="rounded-2xl border border-white/10 bg-black/20 p-4"
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                <p className="text-xs text-white/55">{x.k}</p>
                                                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                                    <Icon className="h-4 w-4 text-cyan-300" />
                                                </div>
                                            </div>
                                            <p className="mt-3 text-lg font-semibold text-white">{x.v}</p>
                                            <p className="mt-1 text-sm text-white/60">{x.hint}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-4">
                                <p className="text-sm text-white/75">
                                    You’ll receive a before/after ROI summary built for executive sign-off.
                                </p>
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_260px_at_70%_10%,rgba(34,211,238,0.18),transparent_55%)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
