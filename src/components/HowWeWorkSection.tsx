"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, Wrench, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const steps = [
    {
        title: "Discover & Map Workflows",
        desc: "We identify bottlenecks, define success metrics, and map your current flow (CRM → Ops → Reporting).",
        icon: Wrench,
        points: ["Scope in 60 minutes", "Define ROI target", "Choose 1 workflow to pilot"],
    },
    {
        title: "Sandbox & Secure Build",
        desc: "We build in a controlled environment with minimal fields, masking/tokenization, and audit-friendly logging.",
        icon: Lock,
        points: ["Non-PII by design", "Human-in-the-loop checkpoints", "Audit trail + access control"],
    },
    {
        title: "Deploy & Prove ROI",
        desc: "We go live with monitoring, fail-safes, and measurable outcomes—then expand to the next workflow.",
        icon: Rocket,
        points: ["Safe rollout plan", "Monitoring + alerts", "Results in 30 days"],
    },
];

export default function HowWeWorkSection() {
    return (
        <section id="how-we-work" className="relative bg-[#070B14] py-16 sm:py-20">
            {/* subtle background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-10 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[130px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.2),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Process built for trust
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            No big rebuild
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Sandbox first
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Measurable ROI
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        How we work: safe, fast, and enterprise-ready
                    </h2>
                    <p className="max-w-2xl text-base text-white/70">
                        A clear 3-step delivery model designed for WealthTech teams—so you can
                        adopt AI without exposing sensitive data or breaking production systems.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    {steps.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <Card
                                key={s.title}
                                className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm"
                            >
                                <CardHeader className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                            <Icon className="h-5 w-5 text-cyan-300" />
                                        </div>

                                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                                            Step {idx + 1}
                                        </span>
                                    </div>

                                    <CardTitle className="text-lg">{s.title}</CardTitle>
                                    <p className="text-sm leading-relaxed text-white/70">{s.desc}</p>
                                </CardHeader>

                                <CardContent className="space-y-2">
                                    {s.points.map((p) => (
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
                                Prefer a contained proof before expanding?
                            </p>
                            <p className="text-sm text-white/65">
                                Start with a 30-day pilot, then scale workflow-by-workflow.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                            >
                                <Link href="/pilot">
                                    View Pilot Plan <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                            >
                                <Link href="/how-we-work">See full process</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
