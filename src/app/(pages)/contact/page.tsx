"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Clock,
    ShieldCheck,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Wrapper from "@/app/Wrapper";

type FormState = {
    name: string;
    email: string;
    company: string;
    role: string;
    interest: string;
    message: string;
};

const interests = [
    "30-Day Pilot",
    "Security & Compliance Review",
    "Workflow Automation",
    "AI Integrations",
    "Partnership",
    "Other",
];

export default function ContactPage() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        company: "",
        role: "",
        interest: "30-Day Pilot",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const mailtoHref = useMemo(() => {
        const subject = `Contact — ${form.interest} (${form.company || "Company"})`;
        const body = [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Company: ${form.company}`,
            `Role: ${form.role}`,
            `Interest: ${form.interest}`,
            "",
            "Message:",
            form.message || "(no message provided)",
        ].join("\n");
        return `mailto:hello@novoraintelligence.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    }, [form]);

    function update<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((p) => ({ ...p, [key]: value }));
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
        window.location.href = mailtoHref;
    }

    return (
        <Wrapper>
            <main className="relative min-h-screen bg-[#070B14] pt-20">
                {/* background */}
                <div className="pointer-events-none md:block hidden absolute inset-0">
                    <div className="absolute -top-44 left-[-170px] h-[640px] w-[640px] rounded-full bg-cyan-500/10 blur-[180px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.16),rgba(7,11,20,1))]" />
                    <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:26px_26px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                Contact
                            </Badge>
                            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
                                <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
                                Non-PII by default
                            </Badge>
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Contact Us
                        </h1>

                        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
                            Tell us what you’re trying to automate. We’ll reply with a clear path to a safe,
                            measurable pilot — without disrupting production.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-12">
                        {/* Form */}
                        <div className="lg:col-span-7">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                                <div className="mb-6 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-white">Send a message</p>
                                        <p className="mt-1 text-sm text-white/65">
                                            This form opens your email client with the details pre-filled.
                                        </p>
                                    </div>

                                    <span className="rounded-full md:inline hidden border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                                        UI-only
                                    </span>
                                </div>

                                <form onSubmit={onSubmit} className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-xs text-white/60">Full name</label>
                                            <Input
                                                value={form.name}
                                                onChange={(e) => update("name", e.target.value)}
                                                placeholder="Your name"
                                                className="mt-2 border-white/10 bg-black/20 text-white placeholder:text-white/40"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs text-white/60">Email</label>
                                            <Input
                                                value={form.email}
                                                onChange={(e) => update("email", e.target.value)}
                                                placeholder="you@company.com"
                                                type="email"
                                                className="mt-2 border-white/10 bg-black/20 text-white placeholder:text-white/40"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-xs text-white/60">Company</label>
                                            <Input
                                                value={form.company}
                                                onChange={(e) => update("company", e.target.value)}
                                                placeholder="Company name"
                                                className="mt-2 border-white/10 bg-black/20 text-white placeholder:text-white/40"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs text-white/60">Role</label>
                                            <Input
                                                value={form.role}
                                                onChange={(e) => update("role", e.target.value)}
                                                placeholder="Ops / Product / Engineering"
                                                className="mt-2 border-white/10 bg-black/20 text-white placeholder:text-white/40"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs text-white/60">What are you interested in?</label>
                                        <div className="mt-2 grid gap-2 sm:grid-cols-3">
                                            {interests.map((i) => {
                                                const active = form.interest === i;
                                                return (
                                                    <button
                                                        type="button"
                                                        key={i}
                                                        onClick={() => update("interest", i)}
                                                        className={[
                                                            "rounded-2xl border px-4 py-3 text-left text-sm transition",
                                                            active
                                                                ? "border-cyan-300/40 bg-white/10 text-white"
                                                                : "border-white/10 bg-black/20 text-white/75 hover:bg-white/5",
                                                        ].join(" ")}
                                                    >
                                                        {i}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs text-white/60">Message</label>
                                        <Textarea
                                            value={form.message}
                                            onChange={(e) => update("message", e.target.value)}
                                            placeholder="Describe the workflow you want to automate, the tools involved (CRM, scheduling, ops), and any constraints."
                                            className="mt-2 min-h-[140px] border-white/10 bg-black/20 text-white placeholder:text-white/40"
                                        />
                                        <p className="mt-2 text-xs text-center text-white/45">
                                            Avoid sharing sensitive personal data. We can review data boundaries on a call.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                                        <Button
                                            type="submit"
                                            className="bg-gradient-to-r w-full from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                                        >
                                            Send message <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>

                                    {submitted && (
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                                <p className="text-sm text-white/75">
                                                    Your email client should open now. If it didn’t, you can email us directly:
                                                    {" "}
                                                    <a
                                                        href="mailto:hello@novoraintelligence.com"
                                                        className="text-cyan-300 hover:text-cyan-200"
                                                    >
                                                        hello@novoraintelligence.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-5">
                            <div className="space-y-4">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                                    <p className="text-sm font-medium text-white">Direct contact</p>
                                    <div className="mt-5 space-y-6">
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                                <Mail className="h-5 w-5 text-cyan-300" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white">hello@novoraintelligence.com</p>
                                                <p className="text-sm text-white/60">General inquiries</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                                <Phone className="h-5 w-5 text-cyan-300" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white">+1 (000) 000-0000</p>
                                                <p className="text-sm text-white/60">Replace with your number</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                                <MapPin className="h-5 w-5 text-cyan-300" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white">Remote / Global</p>
                                                <p className="text-sm text-white/60">Replace with your HQ if needed</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                                                <Clock className="h-5 w-5 text-cyan-300" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white">Response time</p>
                                                <p className="text-sm text-white/60">Typically within 24–48 hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-sm">
                                    <p className="text-sm font-medium text-white">What happens next</p>
                                    <p className="mt-1 text-sm text-white/65">
                                        We’ll reply with the fastest path to a safe pilot.
                                    </p>

                                    <div className="mt-5 space-y-3">
                                        {[
                                            "15-minute scoping call",
                                            "Define boundaries + approvals",
                                            "Sandbox validation",
                                            "Pilot kickoff timeline",
                                        ].map((x) => (
                                            <div key={x} className="flex items-start gap-2">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />
                                                <p className="text-sm text-white/75">{x}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                        </div>
                    </div>
                </div>
            </main>
        </Wrapper>
    );
}
