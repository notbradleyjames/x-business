'use client'

import { motion } from 'framer-motion'
import { apps } from '@/lib/apps'
import { AppCard } from '@/components/ui/AppCard'
import { staggerContainer, fadeUp } from '@/lib/motion'

export function AppsShowcase() {
  return (
    <section id="apps" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col items-center gap-3 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp}>
            <span className="font-mono text-[10px] font-medium tracking-widest text-content-muted uppercase">
              The Ecosystem
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold tracking-tight text-content-primary sm:text-3xl"
          >
            Choose your tool.
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-sm text-sm text-content-secondary">
            Each app does one thing exceptionally well. More ship directly into the hub — no new
            logins, no new subscriptions.
          </motion.p>
        </motion.div>

        {/* Hub grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {apps.map((app) => (
            <motion.div key={app.id} variants={fadeUp}>
              <AppCard app={app} featured={app.id === 'xcrawl'} />
            </motion.div>
          ))}

          {/* Placeholder tile */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-surface-border bg-surface-raised/30 p-6 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-overlay">
              <span className="font-mono text-lg font-bold text-content-muted">+</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-content-muted">More coming</p>
              <p className="mt-0.5 text-xs text-content-muted/60">
                Build requests open to team
              </p>
            </div>
          </motion.div>
        </motion.div>

        <p className="mt-10 text-center font-mono text-[10px] tracking-widest text-content-muted uppercase">
          All tools live inside X Business · No extra logins
        </p>
      </div>
    </section>
  )
}
