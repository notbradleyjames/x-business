'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AppIcon } from '@/components/ui/AppIcon'
import type { App } from '@/lib/apps'

interface AppCardProps {
  app: App
  featured?: boolean
}

export function AppCard({ app, featured = false }: AppCardProps) {
  const isLive = app.status === 'live'

  return (
    <div
      className={cn(
        'group relative flex flex-col gap-5 rounded-2xl border p-6 transition-all duration-300 cursor-pointer select-none',
        'hover:-translate-y-1',
        isLive
          ? 'border-surface-muted bg-surface-raised'
          : 'border-surface-border bg-surface-raised/60',
        featured && 'md:col-span-1'
      )}
      style={
        isLive
          ? { boxShadow: '0 0 0 1px rgba(232,168,48,0.08), 0 8px 32px rgba(232,168,48,0.06)' }
          : undefined
      }
    >
      {/* Hover glow border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: isLive
            ? 'inset 0 0 0 1px rgba(232,168,48,0.35)'
            : 'inset 0 0 0 1px rgba(200,170,122,0.15)',
        }}
      />

      {/* Icon tile */}
      <div
        className={cn(
          'relative flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300',
          isLive
            ? 'bg-accent-amber-dim group-hover:shadow-[0_0_20px_rgba(232,168,48,0.25)]'
            : 'bg-surface-overlay'
        )}
      >
        <AppIcon
          icon={app.icon}
          className={cn(
            'h-7 w-7 transition-colors duration-300',
            isLive ? 'text-accent-amber' : 'text-content-muted'
          )}
        />
      </div>

      {/* Name + status */}
      <div className="flex items-center gap-2">
        <span
          className={cn(
            'text-sm font-bold tracking-tight',
            isLive ? 'text-content-primary' : 'text-content-muted'
          )}
        >
          {app.name}
        </span>
        {isLive ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-amber/10 px-2 py-0.5 text-[10px] font-semibold text-accent-amber">
            <span className="h-1 w-1 rounded-full bg-accent-amber" />
            Live
          </span>
        ) : (
          <span className="rounded-full border border-surface-muted px-2 py-0.5 text-[10px] font-medium text-content-muted">
            Soon
          </span>
        )}
      </div>

      {/* Tagline + description */}
      <div className="flex flex-col gap-1">
        <p
          className={cn(
            'text-xs font-medium',
            isLive ? 'text-content-accent' : 'text-content-muted'
          )}
        >
          {app.tagline}
        </p>
        <p
          className={cn(
            'text-xs leading-relaxed',
            isLive ? 'text-content-secondary' : 'text-content-muted/70'
          )}
        >
          {app.description}
        </p>
      </div>

      {/* CTA for live apps */}
      {isLive && (
        <div className="mt-auto pt-1">
          <a
            href="#xcrawl"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-amber transition-opacity hover:opacity-70"
          >
            Open App
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  )
}
