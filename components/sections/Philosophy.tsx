'use client'

import { motion } from 'framer-motion'
import { GradientDivider } from '@/components/ui/GradientDivider'
import { staggerContainer, fadeIn } from '@/lib/motion'

const pillars = [
  {
    number: '01',
    title: 'Speed',
    body: 'Fast by default. No bloat, no overhead. Every tool is optimized for real work.',
  },
  {
    number: '02',
    title: 'Control',
    body: 'Your data, your infrastructure, your rules. No vendor lock-in, no surprise pricing.',
  },
  {
    number: '03',
    title: 'Modularity',
    body: 'Add new tools without rebuilding the platform. Ship independently, deploy together.',
  },
  {
    number: '04',
    title: 'Ownership',
    body: 'The work you do here is yours. Every tool we build becomes a permanent asset.',
  },
]

export function Philosophy() {
  return (
    <section id="platform" className="py-24">
      <GradientDivider className="mb-24" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="font-mono text-[10px] font-medium tracking-widest text-content-muted uppercase">
            Our Principles
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-content-primary sm:text-3xl">
            Built different.{' '}
            <span className="text-content-secondary">By design.</span>
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {pillars.map(({ number, title, body }) => (
            <motion.div
              key={number}
              variants={fadeIn}
              className="flex flex-col gap-3 rounded-xl border border-surface-border bg-surface-raised p-6 transition-colors hover:border-surface-muted"
            >
              <span className="font-mono text-xs font-medium text-accent-amber/50">{number} /</span>
              <h3 className="text-base font-semibold text-content-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-content-secondary">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
