'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Globe } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientDivider } from '@/components/ui/GradientDivider'
import { staggerContainer, fadeUp } from '@/lib/motion'

const features = [
  'Structured data extraction from any URL',
  'Change monitoring with diff alerts',
  'Export to JSON, CSV, or direct API',
  'Scheduled crawls with cron control',
]

const mockRows = [
  ['Wireless Pro Headset', '$249.99', '/products/wph-01'],
  ['Mechanical Keyboard', '$189.00', '/products/mkb-32'],
  ['USB-C Hub 7-port', '$79.95', '/products/hub-7c'],
  ['4K Webcam Pro', '$159.00', '/products/cam-4k'],
]

export function FeaturedApp() {
  return (
    <section id="xcrawl" className="py-24">
      <GradientDivider className="mb-24" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="overflow-hidden rounded-2xl border border-surface-border bg-surface-raised"
          style={{ boxShadow: '0 0 60px rgba(59,130,246,0.04)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Content */}
            <motion.div
              className="flex flex-col gap-6 p-8 lg:p-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10">
                  <Globe className="h-4 w-4 text-accent-blue" />
                </div>
                <SectionLabel>First App · Live Now</SectionLabel>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-content-primary sm:text-3xl">
                  X Crawl
                </h2>
                <p className="mt-1 text-xl font-medium text-content-secondary">
                  Web Intelligence, Automated.
                </p>
              </motion.div>

              <motion.p variants={fadeUp} className="text-sm leading-relaxed text-content-secondary">
                Extract structured data from any public website. Schedule crawls, monitor changes,
                and pipe results directly into your workflows. No third-party APIs, no per-seat
                pricing.
              </motion.p>

              <motion.ul variants={staggerContainer} className="flex flex-col gap-2.5">
                {features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={fadeUp}
                    className="flex items-start gap-2.5 text-sm text-content-secondary"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-blue" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue transition-opacity hover:opacity-70"
                >
                  View X Crawl
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Mock UI panel */}
            <div className="border-t border-surface-border bg-surface-overlay p-6 lg:border-l lg:border-t-0 lg:p-8">
              <MockCrawlUI />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MockCrawlUI() {
  return (
    <div className="flex h-full flex-col gap-4">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-surface-muted" />
        <div className="h-2 w-2 rounded-full bg-surface-muted" />
        <div className="h-2 w-2 rounded-full bg-surface-muted" />
        <span className="ml-2 font-mono text-[10px] text-content-muted">
          x-crawl · active session
        </span>
      </div>

      {/* URL input bar */}
      <div className="flex gap-2 rounded-lg border border-surface-border bg-surface-base p-1">
        <div className="flex flex-1 items-center gap-2 px-2 py-1">
          <Globe className="h-3 w-3 shrink-0 text-content-muted" />
          <span className="truncate font-mono text-xs text-content-accent">
            https://example.com/products
          </span>
        </div>
        <button className="rounded-md bg-accent-blue px-3 py-1 text-xs font-semibold text-white">
          Crawl
        </button>
      </div>

      {/* Status line */}
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="font-mono text-[10px] text-emerald-400/70">
          Extraction complete · 24 records · 0.8s
        </span>
      </div>

      {/* Data table */}
      <div className="flex-1 overflow-hidden rounded-lg border border-surface-border">
        <div className="grid grid-cols-3 border-b border-surface-border bg-surface-base px-3 py-2">
          {['name', 'price', 'url'].map((col) => (
            <span key={col} className="font-mono text-[10px] font-medium text-content-muted">
              {col}
            </span>
          ))}
        </div>
        {mockRows.map(([name, price, url], i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-b border-surface-border/50 px-3 py-2 last:border-0"
          >
            <span className="truncate font-mono text-[10px] text-content-secondary">{name}</span>
            <span className="font-mono text-[10px] text-emerald-400/70">{price}</span>
            <span className="truncate font-mono text-[10px] text-content-muted">{url}</span>
          </div>
        ))}
      </div>

      {/* Export row */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-content-muted">24 of 24 rows · page 1</span>
        <div className="flex gap-1.5">
          {['JSON', 'CSV', 'API'].map((fmt) => (
            <button
              key={fmt}
              className="rounded border border-surface-border px-2 py-0.5 font-mono text-[10px] text-content-muted transition-colors hover:border-surface-muted hover:text-content-secondary"
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
