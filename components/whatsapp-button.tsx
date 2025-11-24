"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "593995639050"
    const message = "Hola, quiero hacer un pedido para mi celebración"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300"
      size="icon"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  )
}
