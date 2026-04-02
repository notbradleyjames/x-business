import { cn } from '@/lib/utils'

interface GradientDividerProps {
  className?: string
}

export function GradientDivider({ className }: GradientDividerProps) {
  return (
    <div
      className={cn('h-px w-full', className)}
      style={{
        background:
          'linear-gradient(to right, transparent, #2C2218 20%, #2C2218 80%, transparent)',
      }}
    />
  )
}
