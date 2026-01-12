"use client";

import Link from "next/link";
import { ArrowRight, Building2, Layers, ShieldCheck, KeyRound, Users, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const requirements = [
    {
        title: "1 workflow to pilot",
        desc: "Pick a contained workflow with clear start/end (routing, scheduling, reporting, CRM updates).",
        icon: Layers,
    },
    {
        title: "Stakeholder owner",
        desc: "One point of contact for approvals and feedback during the pilot.",
        icon: Users,
    },
    {
        title: "Sandbox access (preferred)",
        desc: "Test environment or staging credentials to validate safely before production.",
        icon: ShieldCheck,
    },
    {
        title: "Integration method",
        desc: "API keys / webhooks / service accounts with least-privilege permissions.",
        icon: KeyRound,
    },
];

const notes = [
    "We start with minimal fields (non-PII by default).",
    "Production rollouts are gradual with monitoring and fail-safes.",
    "Critical actions can require human approval.",
    "Everything is documented for governance and handoff.",
];

export default function PilotRequirementsSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: corner frame */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-cyan-500/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                    {/* Left header */}
                    <div className="lg:col-span-5">
                        <p className="text-xs uppercase tracking-wider text-white/50">
                            What we need from you
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Quick setup
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Least-privilege access
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Stakeholder sign-off
                            </Badge>
                        </div>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            A pilot should be easy to start
                        </h2>

                        <p className="mt-4 text-base text-white/70">
                            We keep requirements light. You provide one workflow, a stakeholder owner,
                            and a safe integration path. We handle design, implementation, and reporting.
                        </p>

                        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                    <Building2 className="h-5 w-5 text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Typical pilot inputs</p>
                                    <p className="text-sm text-white/65">
                                        Tools: CRM, scheduling, reporting, internal ops systems
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 space-y-2">
                                {notes.map((n) => (
                                    <div key={n} className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                        <p className="text-sm text-white/75">{n}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right requirements list (clean rows, not cards grid) */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                            <div className="space-y-3">
                                {requirements.map((r) => {
                                    const Icon = r.icon;
                                    return (
                                        <div
                                            key={r.title}
                                            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 sm:flex-row sm:items-start sm:justify-between"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                                    <Icon className="h-5 w-5 text-cyan-300" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-white">{r.title}</p>
                                                    <p className="mt-1 text-sm text-white/65">{r.desc}</p>
                                                </div>
                                            </div>

                                            <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                                                Required
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                                >
                                    <Link href="/contact">
                                        Start the pilot <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                                >
                                    <Link href="/security">Review security model</Link>
                                </Button>
                            </div>

                            <p className="mt-4 text-xs text-white/45">
                                Note: This is UI-only. We can add a checklist form later if you want.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
