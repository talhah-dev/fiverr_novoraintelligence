"use client";

import Link from "next/link";
import { Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactCTASection() {
  return (
    <section id="contact" className="relative bg-[#070B14] py-16 sm:py-20">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[-160px] top-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(820px_520px_at_30%_60%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(820px_520px_at_75%_30%,rgba(59,130,246,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,20,0.12),rgba(7,11,20,1))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-wider text-white/50">Get started</p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-cyan-200" />
              Low-risk pilot
            </Badge>
            <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
              Enterprise-ready
            </Badge>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start a 30-day pilot
          </h2>

          <p className="max-w-2xl text-base text-white/70">
            Tell us your current stack and the workflow you want to improve. We’ll
            recommend a safe, contained pilot you can measure and scale.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {/* Left info */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                  <Mail className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">What happens next?</p>
                  <p className="text-sm text-white/65">A short call + pilot outline.</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-white/75">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <p>
                    We confirm the workflow, stakeholders, and data boundaries.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
                  <p>
                    We propose a sandbox-first pilot plan with measurable KPIs.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-200" />
                  <p>
                    You get a clean rollout plan with controls and auditability.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                >
                  <Link href="/pilot">
                    View Pilot Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-white/15 hover:text-white bg-white/5 text-white hover:bg-white/10"
                >
                  <Link href="/security">Security overview</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <Card className="border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm text-white/80">Name</label>
                      <Input
                        placeholder="Your name"
                        className="border-white/10 bg-black/20 py-5 mt-1.5 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-white/80">Work email</label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        className="border-white/10 bg-black/20 py-5 mt-1.5 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Company / Product</label>
                    <Input
                      placeholder="Company name or product"
                      className="border-white/10 bg-black/20 py-5 mt-1.5 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/80">
                      What workflow should we improve?
                    </label>
                    <Textarea
                      placeholder="Example: Automate lead routing + scheduling + CRM updates..."
                      className="min-h-[120px] border-white/10 bg-black/20 mt-1.5 text-white placeholder:text-white/40"
                    />
                  </div>

                  <Button
                    type="button"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                  >
                    Request a Pilot Call
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
