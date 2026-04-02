'use client'

import { motion } from 'framer-motion'
import { apps } from '@/lib/apps'
import { AppCard } from '@/components/ui/AppCard'

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050709]">
      {/* Deep radial base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 30% 60%, rgba(14,30,60,0.9) 0%, #050709 65%)',
        }}
      />

      {/* Animated orb 1 — blue */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          top: '10%',
          left: '-8%',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated orb 2 — cyan */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 380,
          height: 380,
          bottom: '5%',
          left: '20%',
          background:
            'radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Animated orb 3 — indigo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '45%',
          right: '5%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 20, -40, 0], y: [0, -40, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #A8B5C8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Horizontal scan line animation */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 40%, rgba(6,182,212,0.4) 60%, transparent 100%)',
        }}
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Corner glow */}
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: 400,
          height: 300,
          background:
            'radial-gradient(ellipse at bottom left, rgba(59,130,246,0.08) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#050709]">
      {/* LEFT — Animated visual panel */}
      <div className="relative hidden flex-1 lg:flex">
        <AnimatedBackground />

        {/* Branding overlay */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lg font-bold tracking-widest text-content-primary uppercase">
              X Business
            </span>
          </motion.div>

          {/* Center text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white">
              One Platform.
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Every Tool.
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-content-secondary">
              Build and run powerful internal tools — without paying for dozens of SaaS apps.
              Own your stack, end to end.
            </p>
          </motion.div>

          {/* Bottom status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-content-muted">All systems operational</span>
          </motion.div>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="hidden lg:block w-px bg-surface-border" />

      {/* RIGHT — App selection panel */}
      <div className="w-full lg:w-[440px] flex flex-col bg-surface-base overflow-hidden">
        {/* Header */}
        <div className="border-b border-surface-border px-6 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mobile-only logo */}
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-content-muted lg:hidden">
              X Business
            </p>
            <h2 className="text-base font-semibold text-content-primary">Select an application</h2>
            <p className="mt-0.5 text-xs text-content-secondary">
              {apps.filter((a) => a.status === 'live').length} live &middot;{' '}
              {apps.filter((a) => a.status === 'coming-soon').length} coming soon
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 gap-3">
            {apps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <AppCard app={app} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-surface-border px-6 py-3">
          <p className="text-[11px] text-content-muted">
            X Business &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}
