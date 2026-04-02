import { ScorpionIcon } from '@/components/ui/AppIcon'

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-base">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-black text-surface-base"
                style={{
                  background: 'linear-gradient(135deg, #F5C442, #E8A830)',
                }}
              >
                X
              </span>
              <span className="text-sm font-bold text-content-primary">Business</span>
            </div>
            <p className="text-xs text-content-muted">Your stack. Your rules.</p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-xs text-content-muted transition-colors hover:text-content-secondary">
              Home
            </a>
            <a
              href="#xcrawl"
              className="flex items-center gap-1.5 text-xs text-content-muted transition-colors hover:text-content-secondary"
            >
              <ScorpionIcon className="h-3 w-3 text-accent-amber/60" />
              X Crawl
            </a>
            <a href="#platform" className="text-xs text-content-muted transition-colors hover:text-content-secondary">
              About
            </a>
          </nav>

          {/* Copyright */}
          <p className="font-mono text-[10px] text-content-muted">© 2026 X Business</p>
        </div>
      </div>
    </footer>
  )
}
