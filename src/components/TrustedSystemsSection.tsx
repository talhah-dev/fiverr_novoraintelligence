"use client";

import Link from "next/link";
import {
    ArrowRight,
    Cloud,
    Workflow,
    Boxes,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stacks = [
    {
        title: "n8n Automation",
        desc: "Reliable orchestration for workflows, triggers, approvals, and routing logic.",
        icon: Workflow,
        tags: ["Workflows", "Approvals", "Retries"],
    },
    {
        title: "AWS Infrastructure",
        desc: "Secure compute, networking, and monitoring for enterprise-grade execution.",
        icon: Cloud,
        tags: ["Security", "Monitoring", "Scale"],
    },
    {
        title: "Google Cloud Services",
        desc: "Data services and integrations to support clean, flexible pipelines.",
        icon: Boxes,
        tags: ["Pipelines", "Services", "Integrations"],
    },
];

const bullets = [
    "Proven tools trusted globally by enterprise teams",
    "Designed to scale high-volume workflows without breaking",
    "Integration-first approach that fits existing systems",
    "Clear controls around what data is accessed and why",
];

export default function TrustedSystemsSection() {
    return (
        <section id="trusted-systems" className="relative bg-[#070B14] py-16 sm:py-20">
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-160px] top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute right-[-160px] bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[150px]" />
                <div className="absolute inset-0 bg-[radial-gradient(820px_520px_at_30%_20%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(780px_500px_at_75%_45%,rgba(59,130,246,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Credibility layer
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                            Enterprise-grade foundation
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Built to scale
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Built on trusted systems — not experimental stacks
                    </h2>

                    <p className="max-w-2xl text-base text-white/70">
                        Our confidence comes from proven infrastructure. We deploy on tools that
                        enterprise teams already trust — then customize workflows for WealthTech.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-12">
                    {/* Left: stack cards */}
                    <div className="grid gap-4 lg:col-span-8 sm:grid-cols-3">
                        {stacks.map((s) => {
                            const Icon = s.icon;
                            return (
                                <Card
                                    key={s.title}
                                    className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/10"
                                >
                                    <CardHeader className="space-y-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                            <Icon className="h-5 w-5 text-cyan-300" />
                                        </div>
                                        <CardTitle className="text-base">{s.title}</CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <p className="text-sm leading-relaxed text-white/70">{s.desc}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {s.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Right: bullets + CTA */}
                    <div className="lg:col-span-4">
                        <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
                            <p className="text-sm font-medium text-white">
                                Why this matters for WealthTech
                            </p>
                            <p className="mt-1 text-sm text-white/65">
                                Stakeholders approve faster when the foundation is familiar and proven.
                            </p>

                            <div className="mt-6 space-y-3">
                                {bullets.map((b) => (
                                    <div key={b} className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                        <p className="text-sm text-white/75">{b}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-3">
                                {/* <Button
                                    asChild
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                                >
                                    <Link href="/trusted-systems">
                                        See the credibility model <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button> */}

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
                </div>
            </div>
        </section>
    );
}
