import { scrapeUrl } from '@/lib/firecrawl'

export async function POST(request: Request) {
  const { url } = await request.json()

  if (!url || typeof url !== 'string') {
    return Response.json({ error: 'url is required' }, { status: 400 })
  }

  const result = await scrapeUrl(url)
  return Response.json(result)
}
