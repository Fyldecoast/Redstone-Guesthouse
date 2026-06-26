import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"

export const metadata = {
  title: "About Us - The Redstone Guest House | Luxury Accommodation Blackpool",
  description:
    "Learn about The Redstone Guest House in Blackpool. Luxury accommodation with free parking, award-winning service, and a warm welcome.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <Footer />
    </main>
  )
}