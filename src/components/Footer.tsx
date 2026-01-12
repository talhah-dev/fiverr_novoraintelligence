"use client";

import Link from "next/link";
import { ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#05080f] border-t border-white/10">
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Top */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">
                            novora<span className="text-cyan-400">intelligence</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-white/65">
                            Safe, non-invasive AI integrations for WealthTech systems.
                            Built on trusted infrastructure and designed for regulated environments.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                            <ShieldCheck className="h-4 w-4 text-cyan-300" />
                            Enterprise-grade • Sandbox-first • Audit-friendly
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-white">Company</p>
                        <ul className="space-y-2 text-sm text-white/65">
                            <li>
                                <Link href="/how-we-work" className="hover:text-white">
                                    How we work
                                </Link>
                            </li>
                            <li>
                                <Link href="/trusted-systems" className="hover:text-white">
                                    Trusted systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/security" className="hover:text-white">
                                    Security & compliance
                                </Link>
                            </li>
                            <li>
                                <Link href="/roi" className="hover:text-white">
                                    ROI
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-white">Solutions</p>
                        <ul className="space-y-2 text-sm text-white/65">
                            <li>
                                <Link href="/problems/manual-work" className="hover:text-white">
                                    Manual workflows
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/problems/disconnected-systems"
                                    className="hover:text-white"
                                >
                                    Disconnected systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/pilot" className="hover:text-white">
                                    30-day pilot
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-white">Contact</p>
                        <ul className="space-y-2 text-sm text-white/65">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-cyan-300" />
                                <a href="mailto:hello@novoraintelligence.com" className="hover:text-white">
                                    hello@novoraintelligence.com
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
                                >
                                    Start a pilot <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/45">
                        © {new Date().getFullYear()} novoraintelligence. All rights reserved.
                    </p>

                    <div className="flex gap-4 text-xs text-white/50">
                        <Link href="/privacy" className="hover:text-white">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-white">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
