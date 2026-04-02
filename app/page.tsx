import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { AppsShowcase } from '@/components/sections/AppsShowcase'
import { FeaturedApp } from '@/components/sections/FeaturedApp'
import { Philosophy } from '@/components/sections/Philosophy'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppsShowcase />
        <FeaturedApp />
        <Philosophy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
