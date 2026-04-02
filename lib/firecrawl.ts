import Firecrawl, { Document, ScrapeOptions } from '@mendable/firecrawl-js'

const firecrawl = new Firecrawl({
  apiKey: process.env.FIRECRAWL_API_KEY!,
})

export async function scrapeUrl(url: string, options?: ScrapeOptions): Promise<Document> {
  return firecrawl.scrape(url, options)
}

export default firecrawl
