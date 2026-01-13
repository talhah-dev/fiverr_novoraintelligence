"use client";

import Link from "next/link";
import { ArrowRight, TriangleAlert, Shuffle, BarChart3, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProblemsHero() {
    return (
        <section className="relative overflow-hidden bg-[#070B14] pt-14">
            {/* Unique background: “warning grid” + diagonal band */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-44 left-[-170px] h-[640px] w-[640px] rounded-full bg-blue-500/10 blur-[190px]" />
                <div className="absolute -bottom-56 right-[-190px] h-[760px] w-[760px] rounded-full bg-cyan-500/10 blur-[210px]" />
                <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:56px_56px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.16),rgba(7,11,20,1))]" />
                <div className="absolute -left-24 top-24 h-[520px] w-[520px] rotate-12 rounded-[80px] border border-white/10 opacity-35" />
                <div className="absolute -right-24 top-44 h-[520px] w-[520px] -rotate-12 rounded-[80px] border border-white/10 opacity-25" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* Left */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <TriangleAlert className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                Common problems
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                WealthTech workflows
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Fix with automation
                            </Badge>
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            The real reasons{" "}
                            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                ops slows down
                            </span>
                            <span className="block">as you scale</span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Most WealthTech teams don’t need more tools — they need workflows that keep
                            systems in sync, reduce manual work, and stay audit-friendly.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            >
                                <Link href="/pilot">
                                    Fix one workflow in 30 days <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/15 hover:text-white bg-white/5 text-white hover:bg-white/10"
                            >
                                <Link href="/security">Review security model</Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                            {[
                                { k: "Manual work", v: "Reporting + data entry", icon: Clock },
                                { k: "Disconnected systems", v: "CRM ↔ Ops ↔ Scheduling", icon: Shuffle },
                                { k: "Underused data", v: "No clear visibility", icon: BarChart3 },
                            ].map((x) => {
                                const Icon = x.icon;
                                return (
                                    <div
                                        key={x.k}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icon className="h-4 w-4 text-cyan-300" />
                                            <p className="text-xs text-white/55">{x.k}</p>
                                        </div>
                                        <p className="mt-2 text-sm font-medium text-white">{x.v}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: “Problem panel” */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                            <div className="border-b border-white/10 bg-black/20 px-6 py-4">
                                <p className="text-sm font-medium text-white">Problems we solve</p>
                                <p className="text-xs text-white/55">
                                    Use these as objection-specific sections
                                </p>
                            </div>

                            <div className="p-6 space-y-3">
                                {[
                                    {
                                        t: "Manual reporting is time-consuming",
                                        d: "Too many tools, too much spreadsheet consolidation.",
                                    },
                                    {
                                        t: "Disconnected systems slow us down",
                                        d: "CRM, scheduling, and ops fall out of sync.",
                                    },
                                    {
                                        t: "Resources are underutilized",
                                        d: "No visibility into capacity, status, or bottlenecks.",
                                    },
                                    {
                                        t: "Compliance reviews stall projects",
                                        d: "Unclear data boundaries and approvals.",
                                    },
                                ].map((p) => (
                                    <div
                                        key={p.t}
                                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                                    >
                                        <p className="text-sm font-semibold text-white">{p.t}</p>
                                        <p className="mt-1 text-sm text-white/65">{p.d}</p>
                                    </div>
                                ))}

                                <div className="mt-2 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-5">
                                    <p className="text-sm text-white/75">
                                        Each problem can become its own page/section as you collect more objections.
                                    </p>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_240px_at_70%_10%,rgba(34,211,238,0.18),transparent_55%)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
