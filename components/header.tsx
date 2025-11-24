"use client"

import { useState, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsProductsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false)
    }, 300) // 300ms delay before closing
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/Logo.webp" 
              alt="La Viña Dulce Logo" 
              className="h-12 w-auto"
              width={120}
              height={48}
            />
            <h1 className="hidden md:block text-2xl font-bold text-secondary" style={{ fontFamily: "var(--font-pacifico)" }}>
              La Viña Dulce
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-secondary transition-colors font-medium">
              Inicio
            </a>

            {/* Products Dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-foreground hover:text-secondary transition-colors font-medium">
                Productos
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border py-2">
                  <a
                    href="/productos/tortas-personalizadas"
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                  >
                    Tortas Personalizadas
                  </a>
                  <a
                    href="/productos/tortas-del-diario"
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                  >
                    Tortas del Diario
                  </a>
                  <a
                    href="/reposteria-cafeteria-loja"
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                  >
                    Repostería/Pan/Cafetería
                  </a>
                  <a
                    href="/catering-para-eventos-loja"
                    className="block px-4 py-2 text-foreground hover:text-secondary transition-colors"
                  >
                    Catering para Eventos
                  </a>
                </div>
              )}
            </div>

            <a href="/nosotros" className="text-foreground hover:text-secondary transition-colors font-medium">
              Nosotros
            </a>
            <a href="/contacto" className="text-foreground hover:text-secondary transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-secondary transition-colors font-medium">
                Inicio
              </a>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Productos</p>
                <div className="pl-4 space-y-2">
                  <a
                    href="/productos/tortas-personalizadas"
                    className="block text-muted-foreground hover:text-secondary transition-colors"
                  >
                    Tortas Personalizadas
                  </a>
                  <a
                    href="/productos/tortas-del-diario"
                    className="block text-muted-foreground hover:text-secondary transition-colors"
                  >
                    Tortas del Diario
                  </a>
                  <a
                    href="/reposteria-cafeteria-loja"
                    className="block text-muted-foreground hover:text-secondary transition-colors"
                  >
                    Repostería/Pan/Cafetería
                  </a>
                  <a
                    href="/catering-para-eventos-loja"
                    className="block text-muted-foreground hover:text-secondary transition-colors"
                  >
                    Catering para Eventos
                  </a>
                </div>
              </div>
              <a href="/nosotros" className="text-foreground hover:text-secondary transition-colors font-medium">
                Nosotros
              </a>
              <a href="/contacto" className="text-foreground hover:text-secondary transition-colors font-medium">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
