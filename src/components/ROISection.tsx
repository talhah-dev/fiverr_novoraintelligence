"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Timer, Layers, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
    {
        label: "Time saved",
        value: "10–25 hrs/week",
        icon: Timer,
        note: "Typical ops + reporting workflows",
    },
    {
        label: "Workflow reliability",
        value: "99%+",
        icon: Layers,
        note: "With monitoring + fail-safes",
    },
    {
        label: "ROI window",
        value: "≤ 30 days",
        icon: TrendingUp,
        note: "Pilot-first delivery model",
    },
];

const outcomes = [
    "Automate reporting, follow-ups, and scheduling logic",
    "Reduce manual data handling and operational mistakes",
    "Improve lead handling speed and conversion readiness",
    "Create audit-friendly, repeatable workflows",
];

export default function ROISection() {
    return (
        <section id="roi" className="relative bg-[#070B14] py-16 sm:py-20">
            {/* background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-160px] bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute right-[-160px] top-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(700px_480px_at_70%_20%,rgba(59,130,246,0.10),transparent_60%),radial-gradient(750px_500px_at_20%_60%,rgba(34,211,238,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.15),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Measurable outcomes
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Fast wins
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Low risk
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Workflow-by-workflow scaling
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        ROI you can show to stakeholders
                    </h2>
                    <p className="max-w-2xl text-base text-white/70">
                        No hype. We focus on operational impact—time saved, fewer errors, and
                        systems that keep working as volume grows.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-12">
                    {/* left: stats */}
                    <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
                        {stats.map((s) => {
                            const Icon = s.icon;
                            return (
                                <Card
                                    key={s.label}
                                    className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm"
                                >
                                    <CardHeader className="space-y-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                            <Icon className="h-5 w-5 text-cyan-300" />
                                        </div>
                                        <CardTitle className="text-sm text-white/70">{s.label}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-1">
                                        <p className="text-2xl font-semibold text-white">{s.value}</p>
                                        <p className="text-sm text-white/60">{s.note}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* right: outcomes + CTA */}
                    <div className="lg:col-span-4">
                        <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
                            <p className="text-sm font-medium text-white">
                                Typical outcomes after the pilot
                            </p>
                            <p className="mt-1 text-sm text-white/65">
                                Deliver one contained workflow, prove value, then expand.
                            </p>

                            <div className="mt-6 space-y-3">
                                {outcomes.map((o) => (
                                    <div key={o} className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                        <p className="text-sm text-white/75">{o}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-3">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                                >
                                    <Link href="/pilot">
                                        View 30-Day Pilot <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/15 hover:text-white bg-white/5 text-white hover:bg-white/10"
                                >
                                    <Link href="/roi">See ROI Details</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
