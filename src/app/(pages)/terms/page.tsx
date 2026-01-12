"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    FileText,
    ShieldCheck,
    AlertTriangle,
    Mail,
    Scale,
} from "lucide-react";

export default function TermsPage() {
    return (
        <main className="relative min-h-screen bg-[#070B14]">
            {/* background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-44 left-[-160px] h-[640px] w-[640px] rounded-full bg-blue-500/10 blur-[180px]" />
                <div className="absolute -bottom-56 right-[-180px] h-[740px] w-[740px] rounded-full bg-cyan-500/10 blur-[190px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.14),rgba(7,11,20,1))]" />
                <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:26px_26px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <FileText className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                            Terms
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <Scale className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
                            Usage rules
                        </Badge>
                    </div>

                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Terms of Service
                    </h1>

                    <p className="mt-4 text-base text-white/70">
                        These Terms of Service (“Terms”) govern your use of the{" "}
                        <span className="text-white font-medium">novoraintelligence</span> website
                        and related communications. By accessing or using the site, you agree to these Terms.
                    </p>

                    <p className="mt-3 text-sm text-white/55">Last updated: January 12, 2026</p>
                </div>

                {/* Content */}
                <div className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-10">
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">1. Use of the Website</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            You may use this website for lawful purposes only. You agree not to misuse
                            the website, attempt to gain unauthorized access, interfere with performance,
                            or use the site in a way that violates applicable laws or regulations.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">2. No Professional Advice</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            Information on this website is provided for general informational purposes
                            only and does not constitute legal, financial, or professional advice. You
                            should consult appropriate professionals for advice tailored to your situation.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">3. Intellectual Property</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            The website and its contents (text, graphics, brand elements, and design)
                            are owned by or licensed to novoraintelligence and are protected by applicable
                            intellectual property laws. You may not copy, modify, distribute, or create
                            derivative works without prior written permission.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">4. Third-Party Services & Links</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            The website may reference or link to third-party services. We do not control
                            those services and are not responsible for their content, policies, or practices.
                            Your use of third-party services is at your own risk and subject to their terms.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">5. Disclaimers</h2>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                    <AlertTriangle className="h-5 w-5 text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Website provided “as is”</p>
                                    <p className="mt-1 text-sm text-white/70">
                                        The website is provided on an “as is” and “as available” basis. We make
                                        no warranties, express or implied, regarding accuracy, reliability, or
                                        availability. We do not guarantee the website will be uninterrupted or error-free.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">6. Limitation of Liability</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            To the maximum extent permitted by law, novoraintelligence will not be liable
                            for any indirect, incidental, special, consequential, or punitive damages, or
                            any loss of profits or revenues, arising out of your use of (or inability to use)
                            the website.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">7. Indemnification</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            You agree to indemnify and hold harmless novoraintelligence from and against
                            any claims, liabilities, damages, losses, and expenses (including reasonable
                            attorneys’ fees) arising out of or related to your violation of these Terms
                            or misuse of the website.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">8. Changes to the Website or Terms</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            We may update the website or these Terms from time to time. Updates will be
                            posted on this page with a revised “Last updated” date. Continued use of the
                            website after changes are posted constitutes acceptance of the updated Terms.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">9. Contact</h2>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                        <Mail className="h-5 w-5 text-cyan-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Questions about these Terms?</p>
                                        <p className="text-sm text-white/70">
                                            Email{" "}
                                            <a
                                                href="mailto:hello@novoraintelligence.com"
                                                className="text-cyan-300 hover:text-cyan-200"
                                            >
                                                hello@novoraintelligence.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                                    >
                                        <Link href="/privacy">Privacy</Link>
                                    </Button>

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
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">10. Governing Law</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            These Terms are governed by applicable laws in the jurisdiction where
                            novoraintelligence operates, without regard to conflict-of-law principles.
                            If any provision is found unenforceable, the remaining provisions will remain in effect.
                        </p>

                        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                    <ShieldCheck className="h-5 w-5 text-cyan-300" />
                                </div>
                                <p className="text-sm text-white/70">
                                    Note: Replace “Governing Law” details with your official jurisdiction once your
                                    business entity and location are finalized.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Bottom nav */}
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link href="/" className="text-sm text-white/70 hover:text-white">
                        ← Back to home
                    </Link>

                    <div className="flex gap-4 text-sm">
                        <Link href="/privacy" className="text-white/70 hover:text-white">
                            Privacy
                        </Link>
                        <Link href="/security" className="text-white/70 hover:text-white">
                            Security
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
