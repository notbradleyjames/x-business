'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { apps } from '@/lib/apps'
import { AppCard } from '@/components/ui/AppCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { staggerContainer, fadeUp } from '@/lib/motion'

export function AppsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <section id="apps" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col items-center gap-3 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>The Ecosystem</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold tracking-tight text-content-primary sm:text-3xl"
          >
            Purpose-built tools,{' '}
            <span className="text-content-secondary">all in one place.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-sm text-content-secondary">
            Each app inside X Business does one thing exceptionally well. More modules ship
            directly into the platform — no new logins, no new subscriptions.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory"
          >
            {apps.map((app) => (
              <div key={app.id} className="snap-start shrink-0">
                <AppCard app={app} featured={app.id === 'xcrawl'} />
              </div>
            ))}
            <div className="min-w-4 shrink-0" />
          </div>

          {/* Nav arrows */}
          <div className="mt-6 hidden items-center justify-center gap-2 sm:flex">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-surface-raised text-content-secondary transition-all hover:border-surface-muted hover:text-content-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-surface-raised text-content-secondary transition-all hover:border-surface-muted hover:text-content-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-content-muted">
            More apps shipping soon · Build requests open to team
          </p>
        </div>
      </div>
    </section>
  )
}
