"use client"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface LightboxProps {
  images: Array<{
    src: string
    alt: string
  }>
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ images, isOpen, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
        <X className="h-8 w-8" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Image */}
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
