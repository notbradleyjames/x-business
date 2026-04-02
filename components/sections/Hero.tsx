'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { GlowBadge } from '@/components/ui/GlowBadge'
import { staggerContainer, fadeUp } from '@/lib/motion'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-14">

      {/* Radial glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #A8B5C8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <GlowBadge>Now in Early Access</GlowBadge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-tight tracking-tight text-content-primary sm:text-5xl md:text-6xl"
        >
          One Platform.
          <br />
          <span className="text-content-secondary">Every Tool You&apos;ll Ever Need.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-xl text-base leading-relaxed text-content-secondary sm:text-lg"
        >
          X Business is where we build and run our own tools — from data pipelines to client
          workflows. No more paying for a dozen SaaS apps.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-blue px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Enter Workspace
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#apps"
            className="inline-flex items-center gap-2 rounded-xl border border-surface-border px-5 py-2.5 text-sm font-medium text-content-secondary transition-colors hover:border-surface-muted hover:text-content-primary"
          >
            Explore Apps
          </a>
          <a
            href="#xcrawl"
            className="inline-flex items-center gap-2 rounded-xl border border-accent-blue/30 px-5 py-2.5 text-sm font-medium text-accent-blue transition-colors hover:border-accent-blue/60 hover:bg-accent-blue/5"
          >
            View X Crawl
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-xs text-content-muted">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-content-muted" />
      </motion.div>
    </section>
  )
}
