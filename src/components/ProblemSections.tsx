"use client";

import Link from "next/link";
import { ArrowRight, ShieldAlert, Workflow, FileText, Gauge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const problems = [
    {
        title: "Manual Reporting & Data Entry",
        desc: "Teams waste hours every week on repetitive admin and spreadsheet cleanup.",
        icon: FileText,
        href: "/problems/manual-work",
    },
    {
        title: "Disconnected Systems",
        desc: "CRMs, core platforms, and ops tools don’t sync — workflows break constantly.",
        icon: Workflow,
        href: "/problems/disconnected-systems",
    },
    {
        title: "Compliance & Security Risk",
        desc: "AI feels risky when it touches sensitive fields. You need safe-by-design workflows.",
        icon: ShieldAlert,
        href: "/security",
    },
    {
        title: "Underutilized Teams",
        desc: "Smart people spend time on tasks that should be automated and audited.",
        icon: Gauge,
        href: "/roi",
    },
];

export default function ProblemSections() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Start with the real problems
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        The bottlenecks that slow WealthTech teams down
                    </h2>
                    <p className="max-w-2xl text-base text-white/70">
                        Each section below has its own dedicated page — so you can send prospects
                        directly to the exact objection they have.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {problems.map((p) => {
                        const Icon = p.icon;
                        return (
                            <Card
                                key={p.title}
                                className="group border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/10"
                            >
                                <CardHeader className="space-y-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                        <Icon className="h-5 w-5 text-cyan-300" />
                                    </div>
                                    <CardTitle className="text-base">{p.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm leading-relaxed text-white/70">
                                        {p.desc}
                                    </p>

                                    {/* <Button
                                        asChild
                                        variant="ghost"
                                        className="h-auto p-0 text-cyan-200 hover:bg-transparent hover:text-cyan-100"
                                    >
                                        <Link href={p.href} className="inline-flex items-center gap-2">
                                            Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                        </Link>
                                    </Button> */}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-white">
                            Want a quick win instead of a big rebuild?
                        </p>
                        <p className="text-sm text-white/65">
                            Start with a contained workflow and prove ROI in 30 days.
                        </p>
                    </div>
                    <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                    >
                        <Link href="/pilot">Start a 30-Day Pilot</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
