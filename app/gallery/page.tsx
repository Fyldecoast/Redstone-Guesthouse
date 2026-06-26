import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { PhotoGallery } from "@/components/photo-gallery"

export const metadata = {
  title: "Gallery - The Redstone Guest House | Luxury Accommodation Blackpool",
  description:
    "Explore our photo gallery of The Redstone Guest House in Blackpool. View our luxury rooms, elegant lounge, and beautiful surroundings.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <PhotoGallery />
      <Footer />
    </main>
  )
}