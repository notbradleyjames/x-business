import {
  Globe,
  Layers,
  MessageSquare,
  Zap,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { App } from '@/lib/apps'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  MessageSquare,
  Zap,
}

interface AppCardProps {
  app: App
  featured?: boolean
}

export function AppCard({ app, featured = false }: AppCardProps) {
  const Icon = iconMap[app.icon] ?? Globe

  return (
    <div
      className={cn(
        'group relative flex flex-col gap-4 rounded-2xl border border-surface-border bg-surface-raised p-6 transition-all duration-300',
        'hover:-translate-y-0.5',
        featured ? 'min-w-[320px]' : 'min-w-[280px]'
      )}
    >
      {/* Hover border glow — pure CSS via box-shadow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${app.color}40` }}
      />

      {/* Icon */}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${app.color}1A` }}
      >
        <Icon className="h-5 w-5" style={{ color: app.color }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-content-primary">{app.name}</span>
          {app.status === 'live' ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Live
            </span>
          ) : (
            <span className="rounded-full border border-surface-muted px-2 py-0.5 text-xs font-medium text-content-muted">
              Coming soon
            </span>
          )}
        </div>
        <p className="text-xs font-medium text-content-accent">{app.tagline}</p>
        <p className="mt-1 text-xs leading-relaxed text-content-secondary">{app.description}</p>
      </div>

      {/* CTA for live apps */}
      {app.status === 'live' && (
        <div className="mt-auto pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-70"
            style={{ color: app.color }}
          >
            Open App
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  )
}
