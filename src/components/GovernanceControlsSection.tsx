"use client";

import {
    Eye,
    CheckCircle2,
    ClipboardCheck,
    UserCheck,
    ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const controls = [
    {
        title: "Human-in-the-loop approvals",
        desc: "Critical actions pause for explicit human confirmation before execution.",
        icon: UserCheck,
    },
    {
        title: "Role-based access",
        desc: "Only authorized roles can trigger, modify, or approve workflows.",
        icon: ShieldCheck,
    },
    {
        title: "Full audit trail",
        desc: "Every action, input, and outcome is logged for review and compliance.",
        icon: ClipboardCheck,
    },
    {
        title: "Continuous visibility",
        desc: "Teams can observe workflows in real time with clear status indicators.",
        icon: Eye,
    },
];

export default function GovernanceControlsSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* background – horizontal light wash (new pattern) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-cyan-500/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.1),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 max-w-3xl">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        Governance & control
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Oversight-first
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            No black-box automation
                        </Badge>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        You stay in control — at every step
                    </h2>

                    <p className="mt-4 text-base text-white/70">
                        Automation should never remove accountability. Our workflows are designed
                        so humans can observe, approve, and intervene whenever needed.
                    </p>
                </div>

                {/* Controls layout – vertical timeline style */}
                <div className="relative ml-4 border-l border-white/10">
                    {controls.map((c, idx) => {
                        const Icon = c.icon;
                        return (
                            <div
                                key={c.title}
                                className="relative mb-10 pl-10 last:mb-0"
                            >
                                {/* Node */}
                                <div className="absolute -left-[18px] top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <Icon className="h-4 w-4 text-cyan-300" />
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-sm font-medium text-white">{c.title}</p>
                                    <p className="mt-1 text-sm text-white/65">{c.desc}</p>

                                    {idx === 0 && (
                                        <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                                            <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                                            <p className="text-xs text-white/70">
                                                Example: Lead routing pauses until approved by Ops
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom reassurance */}
                <div className="mt-10 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
                    <p className="text-sm font-medium text-white">
                        Designed for sign-off, not surprises
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                        This governance model is intentionally easy to explain to compliance,
                        security, and executive stakeholders.
                    </p>
                </div>
            </div>
        </section>
    );
}
