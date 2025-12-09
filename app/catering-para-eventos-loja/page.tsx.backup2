import type { Metadata } from "next"
import { ChevronRight, Star, PartyPopper } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Catering para Eventos en Loja - Sabor que Celebra | La Viña Dulce",
  description:
    "Servicio de catering profesional en Loja para matrimonios, cumpleaños, eventos empresariales. Paquetes versátiles y presentación impecable.",
  keywords: "catering Loja, eventos matrimonios, cumpleaños empresarial, mesa dulce, coffee break, La Viña Dulce",
}

export default function CateringEventos() {
  const categories = [
    {
      id: "catering-matrimonio",
      emoji: "💍",
      title: "Catering para Matrimonios",
      description:
        "Menús elegantes y presentación impecable para el día más especial. Desde la mesa dulce hasta el banquete completo.",
      specs:
        "Servicios: Mesa dulce, torta nupcial, bocaditos | Capacidad: 50-300 personas | Incluye: Montaje, servicio, desmontaje",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20necesito%20cotización%20para%20catering%20de%20matrimonio",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "catering-cumple",
      emoji: "🎂",
      title: "Catering para Cumpleaños",
      description:
        "Celebraciones memorables con tortas temáticas, bocaditos y decoración festiva para todas las edades.",
      specs:
        "Opciones: Infantil, adultos, temático | Incluye: Torta personalizada, bocaditos, decoración | Capacidad: 20-150 personas",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20necesito%20cotización%20para%20catering%20de%20cumpleaños",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "catering-empresarial",
      emoji: "🧑‍💼",
      title: "Catering Empresarial",
      description:
        "Soluciones profesionales para reuniones, conferencias y eventos corporativos con puntualidad garantizada.",
      specs:
        "Servicios: Desayunos, almuerzos, coffee breaks | Modalidad: Buffet, servido, box lunch | Horarios: Flexibles",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20necesito%20cotización%20para%20catering%20empresarial",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "mesa-dulce",
      emoji: "🍭",
      title: "Mesa Dulce y Postres",
      description: "Espectaculares mesas dulces con variedad de postres, cupcakes, macarons y dulces artesanales.",
      specs:
        "Incluye: Cupcakes, macarons, cake pops, dulces | Presentación: Elegante con decoración | Personalización: Temática",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20necesito%20cotización%20para%20mesa%20dulce",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "coffee-break",
      emoji: "☕",
      title: "Coffee Break",
      description: "Pausas perfectas con café de especialidad, bocaditos dulces y salados para eventos y reuniones.",
      specs: "Incluye: Café, té, bocaditos dulces/salados | Duración: 30-60 minutos | Servicio: Continuo o por turnos",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20necesito%20cotización%20para%20coffee%20break",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-secondary transition-colors">
                Inicio
              </a>
              <ChevronRight className="h-4 w-4" />
              <span className="hover:text-secondary transition-colors">Productos</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Catering para Eventos</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <PartyPopper className="h-12 w-12 text-secondary" />
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                Catering para Eventos en Loja
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Paquetes versátiles, presentación profesional y puntualidad. Deja la mesa en nuestras manos, disfruta tu
              evento sin estrés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593995639050?text=Hola%2C%20necesito%20cotización%20para%20catering%20de%20mi%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Solicitar Cotización por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Internal Navigation */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <nav className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted hover:bg-secondary hover:text-white transition-colors"
                >
                  <span>{category.emoji}</span>
                  <span className="font-medium">{category.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {categories.map((category, index) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <ImageSlider images={category.images} alt={`${category.title} en La Viña Dulce Loja`} />
                    </div>
                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-4xl">{category.emoji}</span>
                        <h2
                          className="text-3xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-pacifico)" }}
                        >
                          {category.title}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                      <div className="bg-muted/50 p-4 rounded-lg mb-6">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-accent" />
                          Especificaciones
                        </h3>
                        <p className="text-muted-foreground">{category.specs}</p>
                      </div>
                      <a
                        href={category.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Cotizar por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
