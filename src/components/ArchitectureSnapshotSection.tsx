"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Workflow, Eye, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const nodes = [
    {
        title: "Sandbox Build",
        subtitle: "Test data + controlled environment",
        icon: Server,
        tone: "cyan",
    },
    {
        title: "Data Boundary Gate",
        subtitle: "Minimal fields • Mask/Tokenize",
        icon: ShieldCheck,
        tone: "blue",
    },
    {
        title: "Approval Checkpoint",
        subtitle: "Human-in-the-loop for critical actions",
        icon: Eye,
        tone: "cyan",
    },
    {
        title: "Production Workflow",
        subtitle: "Monitoring • Fail-safes • Logging",
        icon: Workflow,
        tone: "blue",
    },
];

function toneClasses(tone: "cyan" | "blue") {
    return tone === "cyan"
        ? {
            ring: "ring-cyan-400/20",
            dot: "bg-cyan-300",
            icon: "text-cyan-200",
            glow: "from-cyan-500/18 to-transparent",
        }
        : {
            ring: "ring-blue-400/20",
            dot: "bg-blue-300",
            icon: "text-blue-200",
            glow: "from-blue-500/18 to-transparent",
        };
}

export default function ArchitectureSnapshotSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* background – unique: “beam” + soft noise */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute right-[-180px] bottom-[-160px] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-[150px]" />
                <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 max-w-3xl">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Architecture snapshot
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Sandbox → Production
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Gatekeeping + approvals
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Auditability
                        </Badge>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        A controlled path from testing to deployment
                    </h2>

                    <p className="mt-4 text-base text-white/70">
                        This is the core safety model: build in a sandbox, enforce boundaries,
                        add approvals where needed, then deploy with monitoring and logs.
                    </p>
                </div>

                {/* Flow */}
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                    {/* top legend */}
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                            <div className="h-2 w-2 rounded-full bg-cyan-300" />
                            Sandbox & controls
                            <div className="ml-4 h-2 w-2 rounded-full bg-blue-300" />
                            Production readiness
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1">
                            <AlertTriangle className="h-4 w-4 text-cyan-200" />
                            <p className="text-xs text-white/70">
                                Sensitive paths blocked by default
                            </p>
                        </div>
                    </div>

                    {/* Nodes */}
                    <div className="grid gap-4 lg:grid-cols-4">
                        {nodes.map((n, idx) => {
                            const Icon = n.icon;
                            const t = toneClasses(n.tone as "cyan" | "blue");
                            return (
                                <div key={n.title} className="relative">
                                    {/* connector line (desktop) */}
                                    {idx !== nodes.length - 1 && (
                                        <div className="pointer-events-none absolute right-[-10px] top-1/2 hidden h-[2px] w-[20px] -translate-y-1/2 bg-gradient-to-r from-white/25 to-transparent lg:block" />
                                    )}

                                    <div
                                        className={[
                                            "relative h-full rounded-2xl border border-white/10 bg-black/20 p-5",
                                            "ring-1",
                                            t.ring,
                                        ].join(" ")}
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b opacity-100" />
                                        <div
                                            className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b ${t.glow} blur-2xl`}
                                        />

                                        <div className="relative">
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                                    <Icon className={`h-5 w-5 ${t.icon}`} />
                                                </div>
                                                <div className={`mt-1 h-2.5 w-2.5 rounded-full ${t.dot}`} />
                                            </div>

                                            <p className="mt-4 text-sm font-medium text-white">{n.title}</p>
                                            <p className="mt-1 text-sm text-white/65">{n.subtitle}</p>

                                            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                                <p className="text-xs text-white/70">
                                                    {idx === 0 && "Dry runs, stakeholder review, test webhooks"}
                                                    {idx === 1 && "Field allow-list, masking, strict routing rules"}
                                                    {idx === 2 && "Approvals for messaging, scheduling, CRM writes"}
                                                    {idx === 3 && "Monitoring, retries, alerts, full audit logs"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA strip */}
                    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-medium text-white">Want this model applied to your stack?</p>
                            <p className="text-sm text-white/65">
                                We’ll define boundaries and approvals before touching production.
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
                                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                            >
                                <Link href="/contact">Talk to an expert</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
