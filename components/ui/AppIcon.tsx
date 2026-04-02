import { BookOpen, Layers, MessageSquare, Zap, type LucideIcon } from 'lucide-react'

// Inline scorpion SVG — used for X Crawl
export function ScorpionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Head */}
      <ellipse cx="20" cy="11" rx="3" ry="2.5" fill="currentColor" />
      {/* Body */}
      <ellipse cx="20" cy="20" rx="4" ry="6.5" fill="currentColor" />

      {/* Left pincer arm */}
      <path
        d="M17 10 C14 8 12 8 11 9.5 C10 11 11 12 12.5 11.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left claw tips */}
      <path d="M11 9.5 L9.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 11.5 L11.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Right pincer arm */}
      <path
        d="M23 10 C26 8 28 8 29 9.5 C30 11 29 12 27.5 11.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right claw tips */}
      <path d="M29 9.5 L30.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27.5 11.5 L28.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left legs */}
      <path d="M17 16 L10 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16.5 19 L9 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17 22 L10 24.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Right legs */}
      <path d="M23 16 L30 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M23.5 19 L31 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M23 22 L30 24.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Tail — curves up to the right */}
      <path
        d="M20 26.5 C20 29 23 30 25 32 C27 34 29.5 34.5 30 33 C30.5 32 29 31 27.5 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Stinger */}
      <path d="M30 33 L32 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

// Map icon names to components
const lucideMap: Record<string, LucideIcon> = {
  BookOpen,
  Layers,
  MessageSquare,
  Zap,
}

interface AppIconProps {
  icon: string
  className?: string
}

export function AppIcon({ icon, className }: AppIconProps) {
  if (icon === 'Scorpion') {
    return <ScorpionIcon className={className} />
  }
  const Icon = lucideMap[icon]
  if (!Icon) return null
  return <Icon className={className} />
}
