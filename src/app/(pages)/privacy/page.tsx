"use client";

import Link from "next/link";
import { ShieldCheck, LockKeyhole, FileText, Mail, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
    return (
        <main className="relative min-h-screen bg-[#070B14]">
            {/* background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-[-160px] h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[170px]" />
                <div className="absolute -bottom-56 right-[-180px] h-[720px] w-[720px] rounded-full bg-blue-500/10 blur-[190px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.14),rgba(7,11,20,1))]" />
                <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:26px_26px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                            Privacy
                        </Badge>
                        <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                            <LockKeyhole className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
                            Data boundaries
                        </Badge>
                    </div>

                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 text-base text-white/70">
                        This Privacy Policy explains how{" "}
                        <span className="text-white font-medium">novoraintelligence</span> (“we”,
                        “us”, “our”) collects, uses, and protects information when you visit our
                        website or contact us.
                    </p>

                    <p className="mt-3 text-sm text-white/55">Last updated: January 12, 2026</p>
                </div>

                {/* Content */}
                <div className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-10">
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            We may collect information you provide directly, such as your name, company,
                            email address, and any details you submit through forms or messages.
                            We may also collect limited technical information automatically, such as
                            browser type, device information, and basic usage analytics.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">2. How We Use Information</h2>
                        <ul className="space-y-2 text-sm text-white/70">
                            {[
                                "Respond to inquiries and provide requested information",
                                "Evaluate and scope a pilot or engagement",
                                "Improve website performance and user experience",
                                "Maintain security, prevent abuse, and monitor reliability",
                            ].map((x) => (
                                <li key={x} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                    <span>{x}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">3. Cookies & Analytics</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            We may use cookies or similar technologies to understand site usage and improve
                            performance. You can control cookies through your browser settings. If you disable
                            cookies, some site features may not work as intended.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">4. Sharing of Information</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            We do not sell your personal information. We may share information with service
                            providers who help operate the website or support communications (for example,
                            hosting, analytics, or email tools). These providers are permitted to use the
                            information only to perform services for us.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                    <FileText className="h-5 w-5 text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Security practices</p>
                                    <p className="mt-1 text-sm text-white/70">
                                        We use reasonable administrative, technical, and organizational safeguards
                                        designed to protect information. No method of transmission or storage is
                                        100% secure, but we work to reduce risk and limit exposure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">6. Data Retention</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            We retain information only as long as necessary to fulfill the purposes described
                            in this policy, comply with legal obligations, resolve disputes, and enforce
                            agreements.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">7. Your Choices</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            You may request access, correction, or deletion of your information by contacting
                            us. You can also opt out of non-essential communications at any time.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">8. International Visitors</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            If you access the website from outside your country, your information may be
                            processed where we or our service providers operate. By using the website, you
                            consent to such processing.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-white">9. Contact Us</h2>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                        <Mail className="h-5 w-5 text-cyan-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Questions?</p>
                                        <p className="text-sm text-white/70">
                                            Email us at{" "}
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
                                        <Link href="/contact">Contact</Link>
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
                        <h2 className="text-xl font-semibold text-white">10. Changes to This Policy</h2>
                        <p className="text-sm leading-relaxed text-white/70">
                            We may update this Privacy Policy from time to time. Updates will be posted on
                            this page with a revised “Last updated” date.
                        </p>
                    </section>
                </div>

                {/* Bottom nav */}
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link href="/" className="text-sm text-white/70 hover:text-white">
                        ← Back to home
                    </Link>

                    <div className="flex gap-4 text-sm">
                        <Link href="/terms" className="text-white/70 hover:text-white">
                            Terms
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
