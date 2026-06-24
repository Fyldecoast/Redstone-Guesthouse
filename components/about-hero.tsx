import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-redstone-hotel-reception-blackpool.jpg.JPG-P2ugfuZRfEOIFdhEUD72iR1GAKHdyN.jpeg)`,
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance animate-fade-in">
            About The Redstone
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Luxury accommodation that blends traditional features with contemporary style — steps from the promenade and
            Blackpool's top attractions
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
          >
            <a
              href="https://booking-directly.com/widgets/Z6eD6SoPu7GpU8mBBkUvmgXj1zB5lxbm6PX8ymNw522QV2lFnqRrJhW7HBTpL/properties/unit-selection?search_stay_dates=%7B%2522checkInDate%2522:%25222026-06-24%2522,%2522checkOutDate%2522:%25222026-06-25%2522%7D&search_occupancies=%5B%7B%2522numberOfAdults%2522:2,%2522children%2522:%5B%5D%7D%5D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Stay
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
