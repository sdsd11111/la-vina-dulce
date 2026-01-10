import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bakery-gradient text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/Logo.webp"
                alt="La Viña Dulce Logo"
                className="h-16 w-auto"
                width={160}
                height={64}
              />
              <h3 className="hidden md:block text-2xl font-bold" style={{ fontFamily: "var(--font-pacifico)" }}>
                La Viña Dulce
              </h3>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Endulzamos tus momentos especiales con nuestras creaciones artesanales hechas con amor y los mejores
              ingredientes.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+593 99 563 9050</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">negocios@lavinadulce.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Calle 18 de Noviembre
                  <br />
                  Loja, Ecuador
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
              Horarios
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div className="text-sm">
                  <p>Lunes a Sábado</p>
                  <p className="opacity-90">8:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div className="text-sm">
                  <p>Domingo</p>
                  <p className="opacity-90">9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
              Enlaces Rápidos
            </h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-sm hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#tortas-personalizadas" className="block text-sm hover:text-primary transition-colors">
                Tortas Personalizadas
              </a>
              <a href="#nosotros" className="block text-sm hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="block text-sm hover:text-primary transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            Diseñado por{" "}
            <a
              href="https://cesarreyesjaramillo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              César Reyes
            </a> | La Viña Dulce 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
