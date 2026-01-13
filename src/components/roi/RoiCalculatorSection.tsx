"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ArrowRight, Calculator, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

function fmt(num: number) {
    return new Intl.NumberFormat("en-US").format(Math.round(num));
}

export default function RoiCalculatorSection() {
    const [hoursPerWeek, setHoursPerWeek] = React.useState<number>(15);
    const [teamMembers, setTeamMembers] = React.useState<number>(3);
    const [costPerHour, setCostPerHour] = React.useState<number>(35);

    const weeklyCost = hoursPerWeek * teamMembers * costPerHour;
    const monthlyCost = weeklyCost * 4;
    const yearlyCost = weeklyCost * 52;

    return (
        <section className="relative bg-[#070B14] py-16 sm:py-20">
            {/* unique bg: calculator spotlight */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-160px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
                <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                        ROI calculator
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Stakeholder-ready numbers
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            Quick estimate
                        </Badge>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Estimate the cost of manual work
                    </h2>
                    <p className="max-w-2xl text-base text-white/70">
                        This is a simple model: hours per week × team size × cost per hour.
                        Use it to frame the value of one workflow automation.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-12">
                    {/* Inputs */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                    <Calculator className="h-5 w-5 text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Inputs</p>
                                    <p className="text-sm text-white/65">Adjust to match your team</p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-white/80">Manual hours per week</Label>
                                        <span className="text-sm text-white/70">{hoursPerWeek} hrs</span>
                                    </div>
                                    <Slider
                                        value={[hoursPerWeek]}
                                        onValueChange={(v) => setHoursPerWeek(v[0] ?? 15)}
                                        min={1}
                                        max={60}
                                        step={1}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-white/80">Team members involved</Label>
                                        <span className="text-sm text-white/70">{teamMembers}</span>
                                    </div>
                                    <Slider
                                        value={[teamMembers]}
                                        onValueChange={(v) => setTeamMembers(v[0] ?? 3)}
                                        min={1}
                                        max={20}
                                        step={1}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-white/80">Cost per hour (USD)</Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="number"
                                            value={costPerHour}
                                            onChange={(e) => setCostPerHour(Number(e.target.value || 0))}
                                            className="border-white/10 bg-black/20 text-white placeholder:text-white/40"
                                            min={0}
                                        />
                                        <span className="text-sm text-white/60">/ hour</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                                <p className="text-sm text-white/75">
                                    Tip: Use fully-loaded cost (salary + overhead) for a more accurate estimate.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outputs */}
                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                    <Clock className="h-5 w-5 text-blue-200" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Results</p>
                                    <p className="text-sm text-white/65">Estimated manual-work cost</p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                                    <p className="text-xs text-white/55">Weekly</p>
                                    <p className="mt-1 text-2xl font-semibold text-white">
                                        ${fmt(weeklyCost)}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                                    <p className="text-xs text-white/55">Monthly (≈ 4 weeks)</p>
                                    <p className="mt-1 text-2xl font-semibold text-white">
                                        ${fmt(monthlyCost)}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                                    <p className="text-xs text-white/55">Yearly</p>
                                    <p className="mt-1 text-2xl font-semibold text-white">
                                        ${fmt(yearlyCost)}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-4">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="h-4 w-4 text-cyan-200" />
                                    <p className="text-sm text-white/75">
                                        Automating even one workflow can reclaim meaningful capacity.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-2">
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
                                    <Link href="/how-we-work">See how we deliver</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
