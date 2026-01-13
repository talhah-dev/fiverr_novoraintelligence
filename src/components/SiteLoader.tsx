"use client";

export default function SiteLoader({ visible }: { visible: boolean }) {
    return (
        <div
            className={[
                "fixed inset-0 z-[9999] grid place-items-center bg-[#070B14] transition-all duration-700",
                visible ? "opacity-100" : "pointer-events-none opacity-0",
            ].join(" ")}
            aria-busy="true"
            role="status"
        >
            {/* background accents */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 left-[-160px] h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[180px]" />
                <div className="absolute -bottom-56 right-[-180px] h-[720px] w-[720px] rounded-full bg-blue-500/10 blur-[200px]" />
                <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:26px_26px]" />
            </div>

            {/* loader card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
                <div className="relative mx-auto grid h-24 w-24 place-items-center">
                    {/* rings */}
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-[12px] rounded-full border border-white/10 opacity-60" />

                    {/* spinner */}
                    <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-cyan-300/70 border-r-blue-300/60 [animation-duration:1.1s]" />

                    {/* core */}
                    <div className="h-10 w-10 animate-pulse rounded-2xl bg-gradient-to-br from-cyan-300/40 to-blue-300/30 ring-1 ring-white/10 shadow-[0_0_30px_rgba(34,211,238,0.25)]" />
                </div>

                <p className="mt-6 text-center text-sm font-medium text-white">
                    Loading
                    <span className="animate-pulse">…</span>
                </p>

                <p className="mt-2 text-center text-xs text-white/55">
                    Initializing trusted systems
                </p>
            </div>
        </div>
    );
}
