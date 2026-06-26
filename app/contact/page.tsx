import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "Contact Us - The Redstone Guest House | Blackpool",
  description:
    "Get in touch with The Redstone Guest House in Blackpool. Call, email, or visit us for bookings, enquiries, or special requests.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  )
}