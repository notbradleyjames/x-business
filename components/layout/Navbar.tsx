'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ScorpionIcon } from '@/components/ui/AppIcon'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-border bg-surface-base/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* Wordmark */}
        <a href="/" className="flex items-center gap-2.5">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-black tracking-tight text-surface-base"
            style={{
              background: 'linear-gradient(135deg, #F5C442 0%, #E8A830 60%, #C4571C 100%)',
            }}
          >
            X
          </span>
          <span className="text-sm font-bold tracking-tight text-content-primary">
            Business
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href="#apps"
            className="text-xs font-medium text-content-muted transition-colors hover:text-content-primary"
          >
            Hub
          </a>
          <a
            href="#xcrawl"
            className="flex items-center gap-1.5 text-xs font-medium text-content-muted transition-colors hover:text-content-primary"
          >
            <ScorpionIcon className="h-3 w-3 text-accent-amber/70" />
            X Crawl
          </a>
          <a
            href="#platform"
            className="text-xs font-medium text-content-muted transition-colors hover:text-content-primary"
          >
            About
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="#"
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-content-secondary transition-colors hover:bg-surface-raised hover:text-content-primary"
          >
            Sign In
          </a>
          <a
            href="#apps"
            className="rounded-lg px-3 py-1.5 text-xs font-bold text-surface-base transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #F5C442 0%, #E8A830 60%)',
            }}
          >
            Enter Hub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg text-content-secondary transition-colors hover:bg-surface-raised hover:text-content-primary sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-surface-border bg-surface-base px-4 py-4 sm:hidden">
          <nav className="flex flex-col gap-3">
            <a
              href="#apps"
              className="text-sm font-medium text-content-secondary"
              onClick={() => setMobileOpen(false)}
            >
              Hub
            </a>
            <a
              href="#xcrawl"
              className="flex items-center gap-2 text-sm font-medium text-content-secondary"
              onClick={() => setMobileOpen(false)}
            >
              <ScorpionIcon className="h-4 w-4 text-accent-amber" />
              X Crawl
            </a>
            <a
              href="#platform"
              className="text-sm font-medium text-content-secondary"
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            <div className="mt-2 flex flex-col gap-2 border-t border-surface-border pt-3">
              <a
                href="#apps"
                className="rounded-lg px-3 py-2 text-center text-sm font-bold text-surface-base"
                style={{ background: 'linear-gradient(135deg, #F5C442, #E8A830)' }}
                onClick={() => setMobileOpen(false)}
              >
                Enter Hub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
