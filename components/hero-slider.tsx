"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/community-youth.png",
    title: "Welcome to Difference Driven",
    description:
      "The Difference Driven Community Center is a vibrant hub where you can feel a sense of belonging and empowerment. Our engaging programs and activities are designed to build skills, foster connections, and create positive change in our community.",
    buttonText: "Join Today!",
    buttonLink: "/membership/join",
  },
  {
    id: 2,
    image: "/youth-basketball.png",
    title: "Empowering Our Youth",
    description:
      "Our youth programs provide a safe, supportive environment where young people can develop leadership skills, explore their creativity, and build confidence through mentorship and hands-on learning experiences.",
    buttonText: "Youth Programs",
    buttonLink: "/community/programs",
  },
  {
    id: 3,
    image: "/community-art-group.png",
    title: "Community in Action",
    description:
      "From cultural celebrations to educational workshops, our events bring people together to share experiences, learn from one another, and strengthen the bonds that make our community resilient and vibrant.",
    buttonText: "View Calendar",
    buttonLink: "/community/events",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="hero-slider relative">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`hero-slide ${index === currentSlide ? "active" : ""}`}>
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover high-contrast-image"
              priority
            />
            <div className="absolute inset-0 bg-dark-gray/40" />
          </div>
          <div className="relative flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl rebel-border">
                  {slide.title}
                </h1>
                <p className="mt-8 max-w-xl text-lg text-white">{slide.description}</p>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-dark-gray font-bold px-8 py-6 text-lg"
                  >
                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-primary" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
