export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-base">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-accent-blue text-[9px] font-bold text-white">
                X
              </span>
              <span className="text-sm font-semibold text-content-primary">Business</span>
            </div>
            <p className="text-xs text-content-muted">Your stack. Your rules.</p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-xs text-content-muted transition-colors hover:text-content-secondary">
              Home
            </a>
            <a href="#xcrawl" className="text-xs text-content-muted transition-colors hover:text-content-secondary">
              X Crawl
            </a>
            <a href="#platform" className="text-xs text-content-muted transition-colors hover:text-content-secondary">
              About
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-content-muted">© 2025 X Business</p>
        </div>
      </div>
    </footer>
  )
}
