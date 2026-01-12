"use client";

import { Cloud, GitBranch, Cpu, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tools = [
    {
        name: "n8n",
        role: "Workflow orchestration",
        desc: "Visual, auditable workflows with retries, branching, and human approvals.",
        icon: GitBranch,
    },
    {
        name: "AWS",
        role: "Infrastructure & security",
        desc: "Secure compute, secrets management, logging, and environment isolation.",
        icon: Cloud,
    },
    {
        name: "Google Cloud",
        role: "AI & data services",
        desc: "Scalable AI services and data tooling where appropriate.",
        icon: Cpu,
    },
    {
        name: "Governance Layer",
        role: "Controls & compliance",
        desc: "Allow-lists, approvals, monitoring, and full audit trails.",
        icon: ShieldCheck,
    },
];

export default function HowWeWorkToolsSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: stacked panels */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-white/5 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Tools & stack
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Enterprise-grade
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Vendor-agnostic
                        </Badge>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Built on trusted systems
                    </h2>

                    <p className="mt-4 text-base text-white/70">
                        We don’t reinvent infrastructure. We assemble proven tools into a controlled,
                        observable workflow layer that fits your existing stack.
                    </p>
                </div>

                {/* Horizontal stack layout (not grid-heavy) */}
                <div className="space-y-4">
                    {tools.map((t, idx) => {
                        const Icon = t.icon;
                        return (
                            <div
                                key={t.name}
                                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                            <Icon className="h-6 w-6 text-cyan-300" />
                                        </div>

                                        <div>
                                            <p className="text-lg font-semibold text-white">{t.name}</p>
                                            <p className="text-sm text-white/55">{t.role}</p>
                                        </div>
                                    </div>

                                    <span className="w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                                        Core layer
                                    </span>
                                </div>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
                                    {t.desc}
                                </p>

                                {/* subtle divider */}
                                {idx !== tools.length - 1 && (
                                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
                    <p className="text-sm font-medium text-white">
                        Why this matters
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                        Using trusted infrastructure reduces risk, speeds up approvals, and keeps
                        workflows maintainable long after the pilot.
                    </p>
                </div>
            </div>
        </section>
    );
}
