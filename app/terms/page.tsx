import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TermsHero } from "@/components/terms-hero"
import { TermsContent } from "@/components/terms-content"

export const metadata = {
  title: "Terms & Conditions - The Redstone Guest House | Blackpool",
  description:
    "Read the terms and conditions for bookings at The Redstone Guest House in Blackpool. Important information about your stay.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TermsHero />
      <TermsContent />
      <Footer />
    </main>
  )
}