"use client";

import { Workflow, CalendarCheck, BarChart3, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const examples = [
    {
        title: "Lead qualification & routing",
        icon: Users,
        flow: [
            "New lead enters CRM",
            "AI checks completeness + criteria",
            "Routes to correct advisor or queue",
            "Updates CRM status automatically",
        ],
        outcome: "Faster response, fewer dropped leads",
    },
    {
        title: "Scheduling & follow-ups",
        icon: CalendarCheck,
        flow: [
            "Qualified lead triggers scheduling",
            "Availability checked across calendars",
            "Confirmation sent automatically",
            "No-show or reschedule handled cleanly",
        ],
        outcome: "Less manual coordination, fewer delays",
    },
    {
        title: "Operational reporting",
        icon: BarChart3,
        flow: [
            "Data pulled from source systems",
            "Validated and standardized",
            "Reports generated on schedule",
            "Stakeholders notified automatically",
        ],
        outcome: "Clear visibility without spreadsheet work",
    },
];

export default function ProblemsWorkflowExamplesSection() {
    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* subtle background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-white/5 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        What this looks like in practice
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Real workflows
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Low disruption
                        </Badge>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Practical automation examples
                    </h2>

                    <p className="mt-4 text-base text-white/70">
                        These are contained workflows — ideal starting points for a pilot.
                        Each one can be implemented without touching core systems directly.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    {examples.map((e) => {
                        const Icon = e.icon;
                        return (
                            <div
                                key={e.title}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                        <Icon className="h-6 w-6 text-cyan-300" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-white">{e.title}</p>
                                        <p className="mt-1 text-sm text-white/60">
                                            Example workflow
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-2">
                                    {e.flow.map((step, i) => (
                                        <div key={step} className="flex items-start gap-2">
                                            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-black/20 text-xs text-white/70">
                                                {i + 1}
                                            </span>
                                            <p className="text-sm text-white/75">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                                    <div className="flex items-center gap-2">
                                        <Workflow className="h-4 w-4 text-cyan-200" />
                                        <p className="text-sm text-white/75">{e.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
                    <p className="text-sm text-white/75">
                        You don’t need to fix everything — just start with one workflow.
                    </p>

                    <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                    >
                        <Link href="/pilot">
                            Start a 30-Day Pilot <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
