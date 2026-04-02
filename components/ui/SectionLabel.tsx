import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs font-medium uppercase tracking-widest text-content-muted',
        className
      )}
    >
      {children}
    </span>
  )
}
