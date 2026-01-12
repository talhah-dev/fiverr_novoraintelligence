"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, LockKeyhole, FileKey2, Eye, Server, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const controls = [
    {
        title: "Non-PII by Design",
        desc: "We minimize fields and avoid sensitive data paths wherever possible.",
        icon: FileKey2,
    },
    {
        title: "Sandbox First",
        desc: "Everything is tested in a controlled environment before production.",
        icon: Server,
    },
    {
        title: "Human-in-the-Loop",
        desc: "Approval checkpoints for critical actions to prevent unsafe automation.",
        icon: Eye,
    },
    {
        title: "Audit-Friendly Logging",
        desc: "Traceability for actions, inputs, and outcomes—built for compliance.",
        icon: BadgeCheck,
    },
];

const promises = [
    "Minimal-field integrations (reduce exposure surface)",
    "Role-based access & least-privilege practices",
    "Fail-safes + monitoring for workflow reliability",
    "Clear boundaries on what data is accessed",
];

export default function SecurityComplianceSection() {
    return (
        <section id="security" className="relative bg-[#070B14] py-16 sm:py-20">
            {/* background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
                <div className="absolute right-[-140px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_25%_20%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(700px_450px_at_75%_40%,rgba(59,130,246,0.10),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.15),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Security & compliance
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                            Regulated-ready
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <LockKeyhole className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
                            Controlled access
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        AI that respects your data boundaries
                    </h2>

                    <p className="max-w-2xl text-base text-white/70">
                        WealthTech teams don’t need “black-box AI.” You need secure workflows with
                        clear controls, minimal exposure, and auditability.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-12">
                    {/* Left: controls grid */}
                    <div className="grid gap-4 lg:col-span-8 sm:grid-cols-2">
                        {controls.map((c) => {
                            const Icon = c.icon;
                            return (
                                <Card
                                    key={c.title}
                                    className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/10"
                                >
                                    <CardHeader className="space-y-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                            <Icon className="h-5 w-5 text-cyan-300" />
                                        </div>
                                        <CardTitle className="text-base">{c.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-white/70">{c.desc}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Right: promise card */}
                    <div className="lg:col-span-4">
                        <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
                            <p className="text-sm font-medium text-white">What you can expect</p>
                            <p className="mt-1 text-sm text-white/65">
                                A safety-first approach that stakeholders can sign off on.
                            </p>

                            <div className="mt-6 space-y-3">
                                {promises.map((p) => (
                                    <div key={p} className="flex items-start gap-2">
                                        <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-200" />
                                        <p className="text-sm text-white/75">{p}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-3">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                                >
                                    <Link href="/security">
                                        View Security Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                                >
                                    <Link href="/pilot">Start a 30-Day Pilot</Link>
                                </Button>

                                <p className="text-xs text-white/45">
                                    Tip: Link this section from ads to reduce compliance objections fast.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
