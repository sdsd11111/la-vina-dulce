"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Recomiendo consumir los brazos gitanos que son una delicia para el paladar, especialmente el de chocolate. Excelente atención. Para los apasionados por el chocolate, allí están varias opciones.",
    author: "Ivan Barzallo",
    rating: 5,
  },
  {
    id: 2,
    text: "¡Fui ayer por primera vez y estoy muy impresionada! Todo está muy bien preparado y delicioso. También aprecié mucho el servicio; en esta pastelería me trataron muy bien. Definitivamente regresaré.",
    author: "Amanda Lay",
    rating: 5,
  },
  {
    id: 3,
    text: "Los dulces de esta pastelería son muy buenos, tienen una gran variedad. Se puede hacer pedidos para eventos especiales con los diseños de pasteles que uno desea. ¡La atención es excelente!",
    author: "Josue Montesdeoca C.",
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="min-h-[200px]">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-1">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <cite className="text-primary font-semibold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
              -- {testimonials[currentIndex].author}
            </cite>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
