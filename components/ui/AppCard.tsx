import {
  Globe,
  Layers,
  MessageSquare,
  Zap,
  Database,
  Mail,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import type { App } from '@/lib/apps'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  MessageSquare,
  Zap,
  Database,
  Mail,
}

export function AppCard({ app }: { app: App }) {
  const Icon = iconMap[app.icon] ?? Globe
  const [colorA, colorB] = app.gradient
  const isLive = app.status === 'live'

  return (
    <Link
      href={isLive ? app.href : '#'}
      className={`group relative flex flex-col gap-3 rounded-xl border border-surface-border bg-surface-raised p-4 transition-all duration-200 ${
        isLive
          ? 'cursor-pointer hover:-translate-y-0.5 hover:border-surface-muted'
          : 'cursor-default opacity-70'
      }`}
      onClick={!isLive ? (e) => e.preventDefault() : undefined}
    >
      {/* Gradient top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl opacity-80 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${colorA}, ${colorB})`,
        }}
      />

      {/* Subtle gradient glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 0%, ${colorA}0D 0%, transparent 60%)`,
        }}
      />

      {/* Icon with gradient background */}
      <div
        className="relative flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          background: `linear-gradient(135deg, ${colorA}26, ${colorB}1A)`,
          border: `1px solid ${colorA}33`,
        }}
      >
        <Icon className="h-4 w-4" style={{ color: colorA }} />
      </div>

      {/* Name + status */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-1">
          <span className="text-sm font-semibold leading-none text-content-primary">
            {app.name}
          </span>
          {isLive ? (
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Live
            </span>
          ) : (
            <span className="rounded-full border border-surface-muted px-1.5 py-0.5 text-[10px] font-medium text-content-muted">
              Soon
            </span>
          )}
        </div>

        <p className="text-[11px] leading-relaxed text-content-secondary line-clamp-2">
          {app.description}
        </p>
      </div>

      {/* CTA arrow for live apps */}
      {isLive && (
        <div
          className="mt-auto flex items-center gap-1 text-[11px] font-medium transition-opacity duration-150 group-hover:opacity-80"
          style={{ color: colorA }}
        >
          Open
          <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
        </div>
      )}
    </Link>
  )
}
