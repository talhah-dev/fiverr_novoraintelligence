"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { label: "Problems", href: "/#problems" },
    { label: "How we work", href: "/#how-we-work" },
    { label: "Security", href: "/#security" },
    { label: "ROI", href: "/#roi" },
    { label: "Pilot", href: "/#pilot" },
];

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* Full-width glass bar */}
            <div className="w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 rounded-xl px-2 py-1"
                        aria-label="novoraintelligence home"
                    >
                        <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 shadow-sm" />
                        <div className="leading-tight">
                            <p className="text-sm font-semibold text-white">
                                novora<span className="text-cyan-400">intelligence</span>
                            </p>
                            <p className="text-[11px] text-white/55">WealthTech AI Integrations</p>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-1 md:flex">
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-2 md:flex">
                        <Button
                            asChild
                            variant="outline"
                            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                        >
                            <Link href="/contact">Contact</Link>
                        </Button>

                        <Button
                            asChild
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                        >
                            <Link href="/pilot">
                                Start Pilot <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile with shadcn Sheet */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="border-white/10 bg-black/40 text-white backdrop-blur-2xl"
                            >
                                <SheetHeader className="space-y-1">
                                    <SheetTitle className="text-left text-white">
                                        novora<span className="text-cyan-400">intelligence</span>
                                    </SheetTitle>
                                    <p className="text-left text-sm text-white/60">
                                        WealthTech AI Integrations
                                    </p>
                                </SheetHeader>

                                <div className="mt-6 grid gap-2">
                                    {navLinks.map((l) => (
                                        <Link
                                            key={l.href}
                                            href={l.href}
                                            className="rounded-xl px-3 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                                        >
                                            {l.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-6 grid gap-2">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                                    >
                                        <Link href="/contact">Contact</Link>
                                    </Button>

                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                                    >
                                        <Link href="/pilot">
                                            Start Pilot <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>

                                <p className="mt-6 text-xs text-white/45">
                                    Smooth slide animation powered by shadcn Sheet.
                                </p>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
