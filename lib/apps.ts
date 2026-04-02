export type AppStatus = 'live' | 'coming-soon'

export interface App {
  id: string
  name: string
  tagline: string
  status: AppStatus
  icon: string
  gradient: [string, string]
  description: string
  href: string
}

export const apps: App[] = [
  {
    id: 'xcrawl',
    name: 'X Crawl',
    tagline: 'Web intelligence, automated.',
    status: 'live',
    icon: 'Globe',
    gradient: ['#3B82F6', '#06B6D4'],
    description: 'Extract structured data from any website. Scrape, monitor, and build datasets — powered by Firecrawl.',
    href: '/xcrawl',
  },
  {
    id: 'xops',
    name: 'X Ops',
    tagline: 'Internal ops, simplified.',
    status: 'coming-soon',
    icon: 'Layers',
    gradient: ['#6366F1', '#8B5CF6'],
    description: 'Manage internal processes, approvals, and team workflows without third-party tools.',
    href: '#',
  },
  {
    id: 'xdesk',
    name: 'X Desk',
    tagline: 'Customer support, owned.',
    status: 'coming-soon',
    icon: 'MessageSquare',
    gradient: ['#10B981', '#34D399'],
    description: 'A client-facing support and communication layer built into your own infrastructure.',
    href: '#',
  },
  {
    id: 'xflow',
    name: 'X Flow',
    tagline: 'Automation without limits.',
    status: 'coming-soon',
    icon: 'Zap',
    gradient: ['#F59E0B', '#EF4444'],
    description: 'Visual automation builder for connecting internal tools and external services.',
    href: '#',
  },
  {
    id: 'xdata',
    name: 'X Data',
    tagline: 'Your data, your rules.',
    status: 'coming-soon',
    icon: 'Database',
    gradient: ['#EC4899', '#F43F5E'],
    description: 'Centralized data warehouse and analytics — no external BI tools required.',
    href: '#',
  },
  {
    id: 'xmail',
    name: 'X Mail',
    tagline: 'Email at scale, controlled.',
    status: 'coming-soon',
    icon: 'Mail',
    gradient: ['#14B8A6', '#0EA5E9'],
    description: 'Transactional and marketing email infrastructure you own and operate yourself.',
    href: '#',
  },
]
