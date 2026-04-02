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
    icon: 'Scorpion',
    color: '#E8A830',
    description:
      'Extract structured data from any website. Monitor changes, build datasets, and power your workflows — no third-party APIs.',
  },
  {
    id: 'xread',
    name: 'X Read',
    tagline: 'Deep reading, distilled.',
    status: 'coming-soon',
    icon: 'BookOpen',
    color: '#9E8B6E',
    description:
      'Parse, summarize, and annotate documents, articles, and research — all within your own infrastructure.',
  },
  {
    id: 'xops',
    name: 'X Ops',
    tagline: 'Internal ops, simplified.',
    status: 'coming-soon',
    icon: 'Layers',
    color: '#9E8B6E',
    description:
      'Manage internal processes, approvals, and team workflows without third-party tools.',
  },
  {
    id: 'xdesk',
    name: 'X Desk',
    tagline: 'Customer support, owned.',
    status: 'coming-soon',
    icon: 'MessageSquare',
    color: '#9E8B6E',
    description:
      'A client-facing support and communication layer built into your own infrastructure.',
  },
  {
    id: 'xflow',
    name: 'X Flow',
    tagline: 'Automation without limits.',
    status: 'coming-soon',
    icon: 'Zap',
    color: '#9E8B6E',
    description:
      'Visual automation builder for connecting internal tools and external services.',
  },
]
