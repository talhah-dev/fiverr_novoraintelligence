"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Clock, Shuffle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const problems = [
    {
        icon: Clock,
        title: "Manual reporting is time-consuming",
        pain: "Teams waste hours every week consolidating status updates across spreadsheets and tools.",
        impacts: ["Lost time", "Human errors", "Slow decision-making"],
        fix: {
            title: "Automated reporting workflows",
            points: [
                "Generate reports from source systems automatically",
                "Standardize data transforms and validation rules",
                "Create audit-friendly logs of what was generated and when",
            ],
        },
    },
    {
        icon: Shuffle,
        title: "Disconnected systems slow us down",
        pain: "CRM, scheduling, and ops tools drift out of sync — causing rework and missed handoffs.",
        impacts: ["Broken handoffs", "Duplicate entry", "Inconsistent status"],
        fix: {
            title: "System-to-system workflow sync",
            points: [
                "Event-driven updates across tools (webhooks/API)",
                "Retries and fail-safes for reliability",
                "Approvals for high-impact writes (optional)",
            ],
        },
    },
    {
        icon: BarChart3,
        title: "Resources are underutilized",
        pain: "Capacity is unclear, bottlenecks aren’t visible, and workload distribution becomes reactive.",
        impacts: ["Poor visibility", "Backlogs", "Inefficient allocation"],
        fix: {
            title: "Capacity & visibility dashboards",
            points: [
                "Surface operational status in one place",
                "Highlight bottlenecks and queue health",
                "Trigger alerts when thresholds are hit",
            ],
        },
    },
    {
        icon: ShieldCheck,
        title: "Compliance concerns stall projects",
        pain: "Security and compliance teams need boundaries, approvals, and audit trails before green-lighting changes.",
        impacts: ["Delays", "Unclear governance", "Risk perception"],
        fix: {
            title: "Governance-first automation",
            points: [
                "Minimal-field policy (non-PII by default)",
                "Data masking/tokenization where needed",
                "Human-in-the-loop checkpoints and audit logs",
            ],
        },
    },
];

export default function ProblemsGridSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: soft top highlight */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-white/5 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Problems → fixes
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Objection-ready
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Workflow-level solutions
                        </Badge>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Pick the pain. We’ll show the workflow.
                    </h2>

                    <p className="mt-4 text-base text-white/70">
                        Use these sections for sales conversations. Each one can become its own page
                        later as you gather more objections and scenarios.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    {problems.map((p) => {
                        const Icon = p.icon;
                        return (
                            <div
                                key={p.title}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                            <Icon className="h-6 w-6 text-cyan-300" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold text-white">{p.title}</p>
                                            <p className="mt-2 text-sm text-white/65">{p.pain}</p>
                                        </div>
                                    </div>

                                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                                        Common
                                    </span>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {p.impacts.map((i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                                        >
                                            {i}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                                    <p className="text-sm font-medium text-white">{p.fix.title}</p>
                                    <div className="mt-3 space-y-2">
                                        {p.fix.points.map((x) => (
                                            <div key={x} className="flex items-start gap-2">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                                <p className="text-sm text-white/75">{x}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
                    <div>
                        <p className="text-sm font-medium text-white">Want to start with just one?</p>
                        <p className="mt-1 text-sm text-white/65">
                            Pick a contained workflow and we’ll prove value in 30 days.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
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
                            className="border-white/15 hover:text-white bg-white/5 text-white hover:bg-white/10"
                        >
                            <Link href="/contact">Talk to us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
