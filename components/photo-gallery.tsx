"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/lightbox"

const galleryImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-Y51E5NccwNCpjd56IpekDLVW8iNf3x.jpeg",
    category: "Rooms",
    title: "Deluxe King Room",
    description: "Spacious deluxe room with elegant furnishings and modern amenities",
  },
  // ... (all other gallery images)
]

const categories = ["All", "Rooms", "Lounge", "Surroundings"]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter((image) => image.category === selectedCategory))
    }
  }, [selectedCategory])

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Explore Our Property</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our luxury accommodations and elegant spaces
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-white/80 text-xs">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Ready to Experience The Redstone?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book your stay and experience the luxury and elegance you've seen in our gallery.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              <a href="https://www.theredstoneblackpool.co.uk/en-GB/rooms" target="_blank" rel="noopener noreferrer">
                Book Your Stay
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <Lightbox
          images={filteredImages}
          currentImageId={lightboxImage}
          onClose={closeLightbox}
          onNavigate={setLightboxImage}
        />
      )}
    </section>
  )
}