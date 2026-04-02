'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-14">

      {/* Deep amber radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(232,168,48,0.1) 0%, rgba(196,87,28,0.04) 50%, transparent 70%)',
        }}
      />

      {/* Warm vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(16,10,4,0.6) 0%, transparent 60%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8AA7A 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Horizontal accent line */}
      <div
        className="pointer-events-none absolute left-0 right-0"
        style={{
          top: '56px',
          height: '1px',
          background:
            'linear-gradient(to right, transparent 5%, rgba(232,168,48,0.08) 30%, rgba(232,168,48,0.12) 50%, rgba(232,168,48,0.08) 70%, transparent 95%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center gap-7 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Hub badge */}
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-muted bg-surface-raised/80 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-amber animate-pulse" />
            <span className="font-mono text-[11px] font-medium tracking-widest text-content-accent uppercase">
              The X Business Hub
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-content-primary sm:text-5xl md:text-6xl"
        >
          One hub.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F5C442 0%, #E8A830 40%, #C4571C 100%)',
            }}
          >
            Every tool we build.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-lg text-base leading-relaxed text-content-secondary sm:text-lg"
        >
          X Business is the central hub for all our apps, tools, and skills — built in-house, owned
          completely. No SaaS subscriptions. No vendor lock-in.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#apps"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-surface-base transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #F5C442 0%, #E8A830 60%, #C4571C 100%)',
            }}
          >
            Browse the Hub
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#xcrawl"
            className="inline-flex items-center gap-2 rounded-xl border border-surface-muted bg-surface-raised/60 px-6 py-3 text-sm font-medium text-content-secondary backdrop-blur-sm transition-colors hover:border-surface-muted hover:text-content-primary"
          >
            View X Crawl
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-8 pt-2"
        >
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-lg font-bold text-content-primary">1</span>
            <span className="text-[10px] tracking-widest text-content-muted uppercase">Live App</span>
          </div>
          <div className="h-6 w-px bg-surface-border" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-lg font-bold text-content-primary">4+</span>
            <span className="text-[10px] tracking-widest text-content-muted uppercase">In Progress</span>
          </div>
          <div className="h-6 w-px bg-surface-border" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-lg font-bold text-content-primary">∞</span>
            <span className="text-[10px] tracking-widest text-content-muted uppercase">Owned</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <span className="font-mono text-[10px] tracking-widest text-content-muted uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-content-muted" />
      </motion.div>
    </section>
  )
}
