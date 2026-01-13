"use client";

import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Rocket, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HowWeWorkHero() {
    return (
        <section className="relative overflow-hidden bg-[#070B14] pt-14">
            {/* Unique background: “process lanes” */}
            <div className="pointer-events-none absolute md:block hidden inset-0">
                <div className="absolute -top-40 left-[-140px] h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[170px]" />
                <div className="absolute -bottom-48 right-[-160px] h-[720px] w-[720px] rounded-full bg-blue-500/10 blur-[190px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.16),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* Left */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <Workflow className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                Workflow-first delivery
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Sandbox → Production
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Audit-friendly
                            </Badge>
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            A simple process that{" "}
                            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                stakeholders approve
                            </span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                            We don’t “drop AI into your systems.” We build controlled workflows with
                            boundaries, approvals, and reporting — then scale one workflow at a time.
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
                                <Link href="/security">See security model</Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                            {[
                                { k: "Step 1", v: "Discover + map", icon: Wrench },
                                { k: "Step 2", v: "Sandbox + controls", icon: ShieldCheck },
                                { k: "Step 3", v: "Deploy + measure", icon: Rocket },
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

                    {/* Right: unique “steps ribbon” */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                            <div className="border-b border-white/10 bg-black/20 px-6 py-4">
                                <p className="text-sm font-medium text-white">Delivery model</p>
                                <p className="text-xs text-white/55">What happens in a real engagement</p>
                            </div>

                            <div className="p-6">
                                <div className="space-y-3">
                                    {[
                                        {
                                            t: "Discover + Map",
                                            d: "Choose a workflow, define KPIs, agree on boundaries.",
                                            icon: Wrench,
                                        },
                                        {
                                            t: "Sandbox + Secure Build",
                                            d: "Implement allow-listing, approvals, logging, retries.",
                                            icon: ShieldCheck,
                                        },
                                        {
                                            t: "Deploy + Measure",
                                            d: "Controlled rollout, monitoring, and ROI summary.",
                                            icon: Rocket,
                                        },
                                    ].map((s, i) => {
                                        const Icon = s.icon;
                                        return (
                                            <div
                                                key={s.t}
                                                className="rounded-2xl border border-white/10 bg-black/20 p-4"
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="flex items-start gap-3">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                                            <Icon className="h-5 w-5 text-cyan-300" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-white">{s.t}</p>
                                                            <p className="mt-1 text-sm text-white/65">{s.d}</p>
                                                        </div>
                                                    </div>

                                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                                                        {i + 1}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-5">
                                    <p className="text-sm text-white/75">
                                        Result: controlled workflows your team can expand confidently.
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
