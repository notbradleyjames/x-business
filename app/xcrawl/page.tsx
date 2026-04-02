'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ArrowLeft, Search, Loader2, AlertCircle, Copy, Check } from 'lucide-react'
import Link from 'next/link'

type ScrapeStatus = 'idle' | 'loading' | 'success' | 'error'

interface ScrapeResult {
  markdown?: string
  html?: string
  metadata?: {
    title?: string
    description?: string
    url?: string
    statusCode?: number
  }
}

export default function XCrawlPage() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState<ScrapeStatus>('idle')
  const [result, setResult] = useState<ScrapeResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'markdown' | 'metadata'>('markdown')

  async function handleScrape(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setStatus('loading')
    setResult(null)
    setError(null)

    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error ?? 'Scrape failed')
      }

      setResult(data)
      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('error')
    }
  }

  async function handleCopy() {
    const text = result?.markdown ?? ''
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#050709]">
      {/* Top bar */}
      <header className="flex items-center gap-4 border-b border-surface-border px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs text-content-muted transition-colors hover:text-content-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <div className="h-4 w-px bg-surface-border" />

        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ background: 'linear-gradient(135deg, #3B82F626, #06B6D41A)', border: '1px solid #3B82F633' }}
          >
            <Globe className="h-3.5 w-3.5 text-[#3B82F6]" />
          </div>
          <span className="text-sm font-semibold text-content-primary">X Crawl</span>
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            Live
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden p-6">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-xl font-bold text-content-primary">Web Scraper</h1>
          <p className="mt-1 text-sm text-content-secondary">
            Enter a URL to extract clean markdown content from any webpage.
          </p>
        </motion.div>

        {/* URL input form */}
        <motion.form
          onSubmit={handleScrape}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 flex gap-3"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-content-muted" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
              className="w-full rounded-xl border border-surface-border bg-surface-raised py-2.5 pl-10 pr-4 text-sm text-content-primary placeholder-content-muted outline-none transition-colors focus:border-[#3B82F6]/60 focus:ring-1 focus:ring-[#3B82F6]/30"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
          >
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Scrape'
            )}
          </button>
        </motion.form>

        {/* Results area */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Idle state */}
            {status === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-full flex-col items-center justify-center gap-3 text-center"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, #3B82F626, #06B6D41A)', border: '1px solid #3B82F633' }}
                >
                  <Globe className="h-7 w-7 text-[#3B82F6]" />
                </div>
                <p className="text-sm font-medium text-content-secondary">Enter a URL above to begin scraping</p>
                <p className="text-xs text-content-muted">Powered by Firecrawl</p>
              </motion.div>
            )}

            {/* Loading state */}
            {status === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-full flex-col items-center justify-center gap-3"
              >
                <Loader2
                  className="h-8 w-8 animate-spin"
                  style={{ color: '#3B82F6' }}
                />
                <p className="text-sm text-content-secondary">Scraping page…</p>
              </motion.div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex h-full flex-col items-center justify-center gap-3 text-center"
              >
                <AlertCircle className="h-8 w-8 text-red-400" />
                <p className="text-sm font-medium text-content-primary">Scrape failed</p>
                <p className="max-w-sm text-xs text-content-secondary">{error}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs text-[#3B82F6] hover:underline"
                >
                  Try again
                </button>
              </motion.div>
            )}

            {/* Success state */}
            {status === 'success' && result && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex h-full flex-col gap-3"
              >
                {/* Result header */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {(['markdown', 'metadata'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                          activeTab === tab
                            ? 'bg-surface-overlay text-content-primary'
                            : 'text-content-muted hover:text-content-secondary'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                  {activeTab === 'markdown' && result.markdown && (
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs text-content-secondary transition-colors hover:text-content-primary"
                    >
                      {copied ? (
                        <Check className="h-3 w-3 text-emerald-400" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto rounded-xl border border-surface-border bg-surface-raised p-4">
                  {activeTab === 'markdown' ? (
                    <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-content-secondary">
                      {result.markdown ?? 'No markdown content returned.'}
                    </pre>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {result.metadata ? (
                        Object.entries(result.metadata).map(([key, value]) => (
                          <div key={key} className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-content-muted">
                              {key}
                            </span>
                            <span className="text-xs text-content-secondary break-all">
                              {String(value ?? '—')}
                            </span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-content-muted">No metadata available.</p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
