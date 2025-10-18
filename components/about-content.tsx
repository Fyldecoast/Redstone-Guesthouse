"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Award, MapPin, Users } from "lucide-react";

export function AboutContent() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main About Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Welcome to The Redstone Guest House
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  <strong>
                    Looking for a comfortable place to stay in the heart of
                    Blackpool with free parking? The Redstone offers a relaxed
                    and friendly atmosphere, just a short walk from the beach
                    and many of Blackpool’s favourite attractions.
                  </strong>{" "}
                  Our guest house has been thoughtfully updated to provide modern
                  comfort while keeping its original charm. It’s an ideal spot
                  for families, couples, and anyone wanting a pleasant base to
                  enjoy everything the area has to offer.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  When you book directly with us, you’ll get our best prices,
                  along with free parking and Wi-Fi. We’ll make sure you’re given
                  the best available room in your chosen type, and we’re always
                  happy to help with any special requests. Children are welcome,
                  and we look forward to making your stay enjoyable.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  At The Redstone, we take pride in offering those little touches
                  that make a big difference — from a warm welcome on arrival to
                  a peaceful night’s rest and a freshly prepared breakfast each
                  morning. Whether you’re visiting for a family holiday, a
                  romantic weekend, or a short break by the sea, we aim to make
                  you feel right at home.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-four-in-a-bed-trophy-winner-redstone.JPG-v1g4djiv79OxoXea2No1DIa5oRVBZ7.jpeg"
                  alt="Four in a Bed Winner Award"
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Location & Attractions */}
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-12">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                Perfect Location
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Blackpool has so much on offer; whether you're simply looking to
                relax and unwind or seeking a fun-packed holiday! The sandy beach
                is close by, where you can take in some sea air and soak up some
                rays in the summer months.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                For thrill seekers, visit{" "}
                <strong>Blackpool Pleasure Beach</strong> for roller coasters.
                The world-famous <strong>Blackpool Tower</strong> is within easy
                reach, as are the <strong>Winter Gardens</strong> and the main
                shopping area of the town.
              </p>
            </div>

            {/* Business Guests */}
            <div className="bg-card rounded-2xl p-8 lg:p-12 border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Business Guests
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                A freshly cooked breakfast can be arranged at a time to suit you.
                We provide all the amenities business travellers need for a
                productive and comfortable stay.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://www.theredstoneblackpool.co.uk/en-GB/rooms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Business Stay
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
