"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, ClipboardList, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const weeks = [
    {
        title: "Week 1 — Scope & Success Metrics",
        icon: ClipboardList,
        points: [
            "Pick 1 workflow (contained, high-impact)",
            "Define inputs/outputs + approval checkpoints",
            "Set KPI target (time saved, error reduction, speed)",
        ],
    },
    {
        title: "Week 2 — Build in Sandbox",
        icon: ShieldCheck,
        points: [
            "Non-PII fields only (or masked/tokenized)",
            "Audit-friendly logging + access controls",
            "Dry runs with test data + stakeholder review",
        ],
    },
    {
        title: "Week 3 — Controlled Deployment",
        icon: Rocket,
        points: [
            "Gradual rollout with fail-safes",
            "Monitoring + alerts for reliability",
            "Human-in-the-loop for critical actions",
        ],
    },
    {
        title: "Week 4 — Measure ROI & Expand",
        icon: CalendarDays,
        points: [
            "Report results against KPIs",
            "Document the workflow for governance",
            "Plan the next workflow expansion",
        ],
    },
];

export default function PilotTimelineSection() {
    return (
        <section id="pilot" className="relative bg-[#070B14] py-16 sm:py-20">
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-160px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute right-[-160px] bottom-[-140px] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-[150px]" />
                <div className="absolute inset-0 bg-[radial-gradient(850px_520px_at_30%_25%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(820px_500px_at_75%_45%,rgba(59,130,246,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        30-day pilot
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Low risk
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Measurable
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Workflow-by-workflow scaling
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Start small. Prove value. Expand safely.
                    </h2>
                    <p className="max-w-2xl text-base text-white/70">
                        A structured pilot designed for regulated WealthTech teams — built in a
                        sandbox first, then deployed with controls and monitoring.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    {weeks.map((w) => {
                        const Icon = w.icon;
                        return (
                            <Card
                                key={w.title}
                                className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/10"
                            >
                                <CardHeader className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                            <Icon className="h-5 w-5 text-cyan-300" />
                                        </div>
                                        <CardTitle className="text-base">{w.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {w.points.map((p) => (
                                        <div key={p} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                            <p className="text-sm text-white/75">{p}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-medium text-white">
                                Ready to test one workflow with full control?
                            </p>
                            <p className="text-sm text-white/65">
                                We’ll scope it, build it safely, and report ROI — in 30 days.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            >
                                <Link href="/contact">
                                    Start the Pilot <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                            >
                                <Link href="/pilot">Pilot details</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
