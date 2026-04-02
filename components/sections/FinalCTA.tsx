import { ArrowRight } from 'lucide-react'
import { ScorpionIcon } from '@/components/ui/AppIcon'

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-surface-muted px-8 py-20 text-center"
          style={{
            background: 'linear-gradient(180deg, #181310 0%, #100D09 50%, #080705 100%)',
          }}
        >
          {/* Top amber accent line */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(to right, transparent 5%, rgba(232,168,48,0.2) 30%, rgba(245,196,66,0.45) 50%, rgba(232,168,48,0.2) 70%, transparent 95%)',
            }}
          />

          {/* Amber radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,168,48,0.07) 0%, transparent 65%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-amber-dim">
              <ScorpionIcon className="h-8 w-8 text-accent-amber" />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-content-primary sm:text-3xl md:text-4xl">
              Ready to work inside X Business?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-content-secondary">
              The hub is being built right now. X Crawl is live. More tools are shipping soon.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-surface-base transition-opacity hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #F5C442 0%, #E8A830 60%, #C4571C 100%)',
                }}
              >
                Enter the Hub
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#xcrawl"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-muted px-6 py-3 text-sm font-medium text-content-secondary transition-colors hover:border-accent-amber/30 hover:text-accent-amber"
              >
                View X Crawl
              </a>
            </div>

            <p className="font-mono text-[10px] tracking-widest text-content-muted uppercase">
              X Business is an internal platform · Access by invite
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
