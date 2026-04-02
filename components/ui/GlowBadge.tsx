import { cn } from '@/lib/utils'

interface GlowBadgeProps {
  children: React.ReactNode
  className?: string
}

export function GlowBadge({ children, className }: GlowBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/10 px-3 py-1 text-xs font-medium tracking-wide text-accent-blue',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
      {children}
    </span>
  )
}
