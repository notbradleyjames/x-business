export type AppStatus = 'live' | 'coming-soon'

export interface App {
  id: string
  name: string
  tagline: string
  status: AppStatus
  icon: string
  color: string
  description: string
}

export const apps: App[] = [
  {
    id: 'xcrawl',
    name: 'X Crawl',
    tagline: 'Web intelligence, automated.',
    status: 'live',
    icon: 'Globe',
    color: '#3B82F6',
    description:
      'Extract structured data from any website. Monitor changes, build datasets, and power your workflows — no third-party APIs.',
  },
  {
    id: 'xops',
    name: 'X Ops',
    tagline: 'Internal ops, simplified.',
    status: 'coming-soon',
    icon: 'Layers',
    color: '#6366F1',
    description:
      'Manage internal processes, approvals, and team workflows without third-party tools.',
  },
  {
    id: 'xdesk',
    name: 'X Desk',
    tagline: 'Customer support, owned.',
    status: 'coming-soon',
    icon: 'MessageSquare',
    color: '#10B981',
    description:
      'A client-facing support and communication layer built into your own infrastructure.',
  },
  {
    id: 'xflow',
    name: 'X Flow',
    tagline: 'Automation without limits.',
    status: 'coming-soon',
    icon: 'Zap',
    color: '#F59E0B',
    description:
      'Visual automation builder for connecting internal tools and external services.',
  },
]
