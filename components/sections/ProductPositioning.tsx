'use client'

import { motion } from 'framer-motion'
import { Boxes, DollarSign, Puzzle } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientDivider } from '@/components/ui/GradientDivider'
import { staggerContainer, fadeUp } from '@/lib/motion'

const points = [
  {
    icon: Boxes,
    title: 'Centralized',
    body: 'Every tool your team needs lives in one place. One login, one interface, one platform.',
  },
  {
    icon: DollarSign,
    title: 'Cost-efficient',
    body: 'Replace a dozen SaaS subscriptions with tools built specifically for how you work.',
  },
  {
    icon: Puzzle,
    title: 'Extensible',
    body: 'New modules ship inside X Business. Your stack grows with your needs, not vendor roadmaps.',
  },
]

export function ProductPositioning() {
  return (
    <section id="platform" className="py-24">
      <GradientDivider className="mb-24" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: Text */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why X Business</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold tracking-tight text-content-primary sm:text-3xl"
            >
              Stop renting tools.
              <br />
              <span className="text-content-secondary">Start owning your stack.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm leading-relaxed text-content-secondary">
              Most teams stitch together a dozen separate tools, each with its own pricing, login,
              and support contract. X Business replaces that sprawl with a single platform you
              control completely.
            </motion.p>

            <motion.div className="flex flex-col gap-6 pt-2" variants={staggerContainer}>
              {points.map(({ icon: Icon, title, body }) => (
                <motion.div key={title} variants={fadeUp} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-border bg-surface-raised">
                    <Icon className="h-4 w-4 text-content-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-content-primary">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-content-secondary">{body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Ecosystem visual */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <EcosystemVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EcosystemVisual() {
  const nodes = [
    { label: 'X Crawl', abbr: 'XC', color: '#3B82F6' },
    { label: 'X Ops', abbr: 'XO', color: '#6366F1' },
    { label: 'X Desk', abbr: 'XD', color: '#10B981' },
    { label: 'X Flow', abbr: 'XF', color: '#F59E0B' },
    { label: 'Soon', abbr: '···', color: '#2A2F36' },
    { label: 'Soon', abbr: '···', color: '#2A2F36' },
  ]

  return (
    <div className="relative w-full max-w-xs">
      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-blue/30 bg-surface-overlay"
          style={{ boxShadow: '0 0 32px rgba(59,130,246,0.12)' }}
        >
          <span className="font-mono text-xs font-bold text-accent-blue">XB</span>
        </div>
      </div>

      {/* SVG connector lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 280 260"
        fill="none"
        aria-hidden="true"
      >
        {[
          [140, 130, 50, 45],
          [140, 130, 230, 45],
          [140, 130, 25, 145],
          [140, 130, 255, 145],
          [140, 130, 65, 225],
          [140, 130, 215, 225],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#1E2328"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* App nodes grid */}
      <div className="grid grid-cols-3 gap-3 p-6">
        {nodes.map((node, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-raised font-mono text-[11px] font-semibold"
              style={{ color: node.color }}
            >
              {node.abbr}
            </div>
            <span className="text-[9px] tracking-wide text-content-muted">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
