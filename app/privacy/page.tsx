import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PrivacyHero } from "@/components/privacy-hero"
import { PrivacyContent } from "@/components/privacy-content"

export const metadata = {
  title: "Privacy Policy - The Redstone Guest House | Blackpool",
  description:
    "Read our privacy policy to understand how The Redstone Guest House protects and uses your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </main>
  )
}