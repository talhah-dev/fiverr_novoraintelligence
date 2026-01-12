"use client";

import Link from "next/link";
import { ArrowRight, FileText, Gauge, ShieldCheck, Workflow, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const deliverables = [
    {
        title: "1 Production Workflow",
        desc: "One contained workflow running safely with monitoring + fail-safes.",
        icon: Workflow,
        chips: ["Reliable", "Observable", "Expandable"],
    },
    {
        title: "Security Boundaries",
        desc: "Explicit allow-listing, approvals, and audit-friendly logging.",
        icon: ShieldCheck,
        chips: ["Non-PII default", "Approvals", "Audit trail"],
    },
    {
        title: "ROI Summary Report",
        desc: "A clear write-up for stakeholders: time saved, errors reduced, speed improved.",
        icon: FileText,
        chips: ["KPIs", "Before/After", "Next steps"],
    },
    {
        title: "Expansion Roadmap",
        desc: "A prioritized plan for the next workflows based on impact and effort.",
        icon: Gauge,
        chips: ["Quick wins", "Cost/Impact", "Sequence"],
    },
];

const proofPoints = [
    "Measurable impact in 30 days (time saved, reliability, throughput)",
    "Contained scope to reduce risk and speed up approvals",
    "Clear governance model for compliance and security sign-off",
    "Workflow-by-workflow scaling — no big rebuild required",
];

export default function PilotDeliverablesSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique background: “window” spotlight */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent)] blur-2xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        What you get
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Clear deliverables
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Stakeholder-friendly
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Built to expand
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Outcomes that teams can approve and measure
                    </h2>

                    <p className="max-w-2xl text-base text-white/70">
                        The pilot is designed to produce something real: a production workflow,
                        proven controls, and a clear ROI summary that makes the next decision easy.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-12">
                    {/* Deliverables cards */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                        {deliverables.map((d) => {
                            const Icon = d.icon;
                            return (
                                <Card
                                    key={d.title}
                                    className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/10"
                                >
                                    <CardHeader className="space-y-3">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                                <Icon className="h-5 w-5 text-cyan-300" />
                                            </div>
                                            <div className="flex flex-wrap justify-end gap-2">
                                                {d.chips.map((c) => (
                                                    <span
                                                        key={c}
                                                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                                                    >
                                                        {c}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <CardTitle className="text-base">{d.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-white/70">{d.desc}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Proof panel */}
                    <div className="lg:col-span-4">
                        <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-sm">
                            <p className="text-sm font-medium text-white">Why this works</p>
                            <p className="mt-1 text-sm text-white/65">
                                A pilot isn’t a demo — it’s a controlled proof.
                            </p>

                            <div className="mt-6 space-y-3">
                                {proofPoints.map((p) => (
                                    <div key={p} className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                        <p className="text-sm text-white/75">{p}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-3">
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

                                <p className="text-xs text-white/45">
                                    Optional: add a downloadable “Pilot One-Pager” PDF later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
