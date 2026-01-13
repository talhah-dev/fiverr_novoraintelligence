"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, LockKeyhole, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SecurityHero() {
    return (
        <section className="relative pt-14 overflow-hidden bg-[#070B14]">
            {/* Unique background: diagonal glass + grid */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/12 blur-[140px]" />
                <div className="absolute -bottom-40 right-[-120px] h-[620px] w-[620px] rounded-full bg-blue-500/10 blur-[160px]" />
                <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_35%,transparent_60%,rgba(255,255,255,0.04))]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.2),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* Left content */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                Security-first delivery
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <LockKeyhole className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
                                Minimal-field access
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <BadgeCheck className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                Audit-friendly
                            </Badge>
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Security & Compliance,
                            <span className="block bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                built into every workflow
                            </span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                            WealthTech teams don’t need black-box AI. You need controlled automation
                            with clear data boundaries, approvals, and traceability — so stakeholders
                            can sign off with confidence.
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
                                <Link href="/contact">Talk to an expert</Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                            {[
                                { k: "Data scope", v: "Non-PII by default" },
                                { k: "Deployment", v: "Sandbox → Production" },
                                { k: "Governance", v: "Approvals + logging" },
                            ].map((x) => (
                                <div
                                    key={x.k}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                >
                                    <p className="text-xs text-white/55">{x.k}</p>
                                    <p className="mt-1 text-sm font-medium text-white">{x.v}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: unique “security console” panel */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-5 py-4">
                                <p className="text-sm font-medium text-white">Security Controls</p>
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                                    Read-only view
                                </span>
                            </div>

                            <div className="p-5">
                                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                                    <p className="text-xs uppercase tracking-wider text-white/45">
                                        Data boundary policy
                                    </p>

                                    <div className="mt-4 grid gap-2">
                                        {[
                                            { label: "Sensitive PII fields", status: "Blocked" },
                                            { label: "Minimal operational fields", status: "Allowed" },
                                            { label: "Critical actions", status: "Approval required" },
                                            { label: "Workflow events", status: "Logged" },
                                        ].map((row) => (
                                            <div
                                                key={row.label}
                                                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                                            >
                                                <p className="text-sm text-white/75">{row.label}</p>
                                                <span className="rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-600/25 px-3 py-1 text-xs text-white/80">
                                                    {row.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                                    <p className="text-xs uppercase tracking-wider text-white/45">
                                        Audit trail snapshot
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        {[
                                            "Lead routed → approval checkpoint passed",
                                            "Scheduling logic executed → logged",
                                            "CRM updated → verified + recorded",
                                        ].map((line) => (
                                            <div
                                                key={line}
                                                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                                            >
                                                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                                                <p className="text-sm text-white/70">{line}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_70%_20%,rgba(34,211,238,0.18),transparent_55%)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
