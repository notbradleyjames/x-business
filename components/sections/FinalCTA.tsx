import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-surface-border px-8 py-20 text-center"
          style={{
            background: 'linear-gradient(180deg, #0E1114 0%, #080A0C 100%)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(to right, transparent 5%, rgba(59,130,246,0.25) 35%, rgba(59,130,246,0.4) 50%, rgba(59,130,246,0.25) 65%, transparent 95%)',
            }}
          />

          {/* Subtle glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold tracking-tight text-content-primary sm:text-3xl md:text-4xl">
              Ready to build inside X Business?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-content-secondary">
              The workspace is being built right now. X Crawl is live. More is coming.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Enter Workspace
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#xcrawl"
                className="inline-flex items-center gap-2 rounded-xl border border-accent-blue/30 px-6 py-3 text-sm font-medium text-accent-blue transition-colors hover:border-accent-blue/60 hover:bg-accent-blue/5"
              >
                View X Crawl
              </a>
            </div>

            <p className="text-xs text-content-muted">
              X Business is an internal platform. Access is by invite.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
