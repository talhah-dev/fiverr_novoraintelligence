"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#070B14] md:pt-10 pt-14">
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute -bottom-24 right-[-80px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_30%_10%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(700px_450px_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.2),rgba(7,11,20,1))]" />
                <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:18px_18px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge
                                variant="secondary"
                                className="border-white/10 bg-white/5 text-white/80"
                            >
                                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-cyan-300" />
                                Safe, non-invasive AI for WealthTech
                            </Badge>
                            <Badge
                                variant="secondary"
                                className="border-white/10 bg-white/5 text-white/80"
                            >
                                <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-blue-300" />
                                Built for regulated environments
                            </Badge>
                        </div>

                        <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            AI Integrations for{" "}
                            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                WealthTech
                            </span>{" "}
                            Systems
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                            We connect your CRM/core systems with secure automation workflows —
                            processing only minimal, non-PII fields — so your team can ship
                            faster with confidence.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            >
                                <Link href="/contact">
                                    Start a 30-Day Pilot
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/15 bg-white/5 hover:text-white text-white hover:bg-white/10"
                            >
                                <Link href="/how-we-work">How we work</Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-2 text-white">
                                    <Zap className="h-4 w-4 text-cyan-300" />
                                    <p className="text-sm font-medium">Manual work</p>
                                </div>
                                <p className="mt-1 text-sm text-white/65">
                                    Reporting + data entry waste hours weekly.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-2 text-white">
                                    <Zap className="h-4 w-4 text-blue-300" />
                                    <p className="text-sm font-medium">Disconnected tools</p>
                                </div>
                                <p className="mt-1 text-sm text-white/65">
                                    Workflows break when systems don’t talk.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-2 text-white">
                                    <ShieldCheck className="h-4 w-4 text-cyan-200" />
                                    <p className="text-sm font-medium">Compliance risk</p>
                                </div>
                                <p className="mt-1 text-sm text-white/65">
                                    AI must be sandboxed and controlled.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-xs uppercase tracking-wider text-white/45">
                                Built on trusted infrastructure
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-3 text-white/55">
                                {["n8n", "AWS", "Google Cloud", "Webhooks", "APIs"].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative">
                        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
                            <div className="mb-5 flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs font-medium text-white/70">
                                        Workflow impact
                                    </p>
                                    <div className="mt-4 h-32 rounded-lg border border-white/10 bg-[linear-gradient(to_top,rgba(34,211,238,0.18),transparent)]" >
                                        <Image src={"/img.png"} alt="img" width={400}  height={400} className="w-full h-32 rounded-lg border border-white/10"  />
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <div className="h-2 w-4/5 rounded-full bg-white/10">
                                            <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                                        </div>
                                        <div className="h-2 w-3/5 rounded-full bg-white/10">
                                            <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                                        </div>
                                        <div className="h-2 w-2/3 rounded-full bg-white/10">
                                            <div className="h-2 w-1/3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs font-medium text-white/70">
                                        Integration safety
                                    </p>
                                    <div className="relative mt-5 flex h-40 items-center justify-center rounded-lg border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_55%)]">
                                        <div className="absolute h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
                                        {[
                                            "top-4 left-1/2 -translate-x-1/2",
                                            "bottom-4 left-1/2 -translate-x-1/2",
                                            "left-4 top-1/2 -translate-y-1/2",
                                            "right-4 top-1/2 -translate-y-1/2",
                                            "top-8 right-10",
                                            "bottom-8 left-10",
                                        ].map((pos, i) => (
                                            <div
                                                key={i}
                                                className={`absolute ${pos} h-3.5 w-3.5 rounded-full bg-cyan-200/90 shadow-[0_0_18px_rgba(34,211,238,0.35)]`}
                                            />
                                        ))}
                                        <div className="absolute inset-0 opacity-60">
                                            <div className="absolute left-1/2 top-6 h-[calc(50%-18px)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/60 to-transparent" />
                                            <div className="absolute left-1/2 bottom-6 h-[calc(50%-18px)] w-px -translate-x-1/2 bg-gradient-to-t from-cyan-300/60 to-transparent" />
                                            <div className="absolute left-6 top-1/2 h-px w-[calc(50%-18px)] -translate-y-1/2 bg-gradient-to-r from-cyan-300/60 to-transparent" />
                                            <div className="absolute right-6 top-1/2 h-px w-[calc(50%-18px)] -translate-y-1/2 bg-gradient-to-l from-cyan-300/60 to-transparent" />
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3">
                                        <p className="text-xs text-white/65">
                                            Minimal fields → Mask/Tokenize → Send result back
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                {[
                                    { k: "Data touched", v: "Non-PII only" },
                                    { k: "Testing", v: "Sandbox first" },
                                    { k: "Control", v: "Human-in-loop" },
                                ].map((x) => (
                                    <div
                                        key={x.k}
                                        className="rounded-xl border border-white/10 bg-white/5 p-4"
                                    >
                                        <p className="text-xs text-white/55">{x.k}</p>
                                        <p className="mt-1 text-sm font-medium text-white">
                                            {x.v}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Outer glow */}
                        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-r from-cyan-500/15 to-blue-500/15 blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
