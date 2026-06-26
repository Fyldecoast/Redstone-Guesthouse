"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RoomModal } from "@/components/room-modal"
import { Users, Eye, Bed, Bath, Tv, Wifi, Coffee } from "lucide-react"

const rooms = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    subtitle: "Sleeps up to 3 • King bed • Child only",
    price: "From £120/night",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-bAbZK20iAa2WQzpr9ZQ6Z8hWClASf5.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-bAbZK20iAa2WQzpr9ZQ6Z8hWClASf5.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-oJTR7dcUxkwGLdpPD1CuxFSDNrvTNw.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-9vY4uaJWzDqz7WgMpBmI4tGVNIZYlV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Deluxe-Double-King-Room-Ensuite-Room-4.JPG-2IoJnBpvi5Ma2GWrqSZI7xfX89Ikpp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-Deluxe%20Double%20King%20Room%20Ensuite%20Room%208.JPG-hzg31JG7p8Cwe8OJnahlNXUKyJN46o.jpeg",
    ],
    features: [
      "Partial Sea & Tower views (front-facing) with window seating",
      "Large ensuite: deep bath/power shower, luxury toiletries, fluffy towels, robes & slippers",
      "Haird