"use client";

import { ShieldCheck, XCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const allowed = [
    { title: "Operational status fields", desc: "Stage, task status, workflow flags, routing labels." },
    { title: "Non-sensitive metadata", desc: "Timestamps, IDs (internal), source tags, queue names." },
    { title: "System event signals", desc: "Webhook triggers, success/failure codes, retry states." },
    { title: "Masked / tokenized values", desc: "Only when necessary — irreversible masking preferred." },
];

const blocked = [
    { title: "PII (personal identifiers)", desc: "Names, emails, phone numbers, addresses, national IDs." },
    { title: "Financial account details", desc: "Account numbers, balances, transaction-level raw records." },
    { title: "Credentials & secrets", desc: "Passwords, API keys, private tokens, auth cookies." },
    { title: "Sensitive documents", desc: "KYC docs, passports, statements, uploaded files content." },
];

export default function DataBoundariesSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-140px] top-10 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute right-[-160px] bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[150px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">Data boundaries</p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                            Minimal-field policy
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <AlertTriangle className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
                            Clear “touch / don’t touch”
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        What we access — and what we never touch
                    </h2>

                    <p className="max-w-2xl text-base text-white/70">
                        Stakeholders approve faster when boundaries are explicit. We design workflows
                        to use the minimum viable fields required to deliver outcomes.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    {/* Allowed */}
                    <Card className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm">
                        <CardHeader className="space-y-2">
                            <div className="inline-flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                    <ShieldCheck className="h-5 w-5 text-cyan-300" />
                                </span>
                                <CardTitle className="text-base">Allowed (typical)</CardTitle>
                            </div>
                            <p className="text-sm text-white/65">
                                Non-PII signals used to route, automate, and report safely.
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-3">
                            {allowed.map((a) => (
                                <div
                                    key={a.title}
                                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                                >
                                    <p className="text-sm font-medium text-white">{a.title}</p>
                                    <p className="mt-1 text-sm text-white/65">{a.desc}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Blocked */}
                    <Card className="border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-sm">
                        <CardHeader className="space-y-2">
                            <div className="inline-flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                    <XCircle className="h-5 w-5 text-blue-300" />
                                </span>
                                <CardTitle className="text-base">Never accessed</CardTitle>
                            </div>
                            <p className="text-sm text-white/65">
                                We explicitly block sensitive paths unless you require a different policy.
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-3">
                            {blocked.map((b) => (
                                <div
                                    key={b.title}
                                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                                >
                                    <p className="text-sm font-medium text-white">{b.title}</p>
                                    <p className="mt-1 text-sm text-white/65">{b.desc}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
                    <p className="text-sm font-medium text-white">Policy note</p>
                    <p className="mt-1 text-sm text-white/65">
                        If your use case requires sensitive fields, we can design a stricter governance model
                        (masking, tokenization, approvals, and restricted environments). Default approach stays non-PII.
                    </p>
                </div>
            </div>
        </section>
    );
}
