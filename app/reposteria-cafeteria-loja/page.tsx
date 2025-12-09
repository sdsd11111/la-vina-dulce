import type { Metadata } from "next"
import { ChevronRight, Star, Coffee, Croissant } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "La Viña Dulce - Repostería y Cafetería",
  description: "Deliciosa repostería artesanal, pan recién horneado y el mejor café de Loja. Visítanos en la 18 de Noviembre y descubre nuestros sabores tradicionales.",
  keywords: "repostería Loja, pan lojano, cafetería, café especialidad, empanadas, galletas, bollos, La Viña Dulce",
  openGraph: {
    title: "La Viña Dulce - Repostería y Cafetería",
    description: "Deliciosa repostería artesanal, pan recién horneado y el mejor café de Loja. Visítanos en la 18 de Noviembre y descubre nuestros sabores tradicionales.",
    images: [
      {
        url: "/imagen destacada.ico",
        width: 1200,
        height: 630,
        alt: "La Viña Dulce - Repostería y Cafetería",
      },
    ],
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com/reposteria-cafeteria-loja",
    siteName: "La Viña Dulce",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Viña Dulce - Repostería y Cafetería",
    description: "Deliciosa repostería artesanal, pan recién horneado y el mejor café de Loja. Visítanos en la 18 de Noviembre y descubre nuestros sabores tradicionales.",
    images: ["/imagen destacada.ico"],
  },
}

export default function ReposteriaCafeteria() {
  const reposteriaPan = [
    {
      id: "pan-lojano",
      emoji: "🥖",
      title: "Pan Lojano Tradicional",
      description: "Receta ancestral con ingredientes locales. Crujiente por fuera, suave por dentro.",
      specs: "Variedades: Integral, blanco, centeno | Horneado: Diario 6:00 AM | Disponibilidad: Todo el día",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20pan%20lojano%20tradicional",
      images: [
        { src: "/images/pan-lojano-1.webp", alt: "Pan Lojano Tradicional 1" },
        { src: "/images/pan-lojano-2.webp", alt: "Pan Lojano Tradicional 2" },
        { src: "/images/pan-lojano-3.webp", alt: "Pan Lojano Tradicional 3" },
      ],
    },
    {
      id: "bollos-roscas",
      emoji: "🥯",
      title: "Bollos y Roscas Típicas",
      description: "Dulces tradicionales de la región sur del Ecuador. Perfectos para el desayuno.",
      specs: "Tipos: Bollos de yuca, roscas de maíz, pan de dulce | Horario: Mañanas | Ingredientes: Locales",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20bollos%20y%20roscas%20típicas",
      images: [
        { src: "/images/bollos-1.webp", alt: "Bollos y Roscas Típicas 1" },
        { src: "/images/bollos-2.webp", alt: "Bollos y Roscas Típicas 2" },
        { src: "/images/bollos-3.webp", alt: "Bollos y Roscas Típicas 3" },
      ],
    },
    {
      id: "empanadas-dulces",
      emoji: "🥐",
      title: "Empanadas y Dulces Artesanales",
      description: "Empanadas de viento, quesadillas y dulces típicos hechos con técnicas ancestrales.",
      specs: "Rellenos: Queso, dulce de leche, frutas | Masa: Artesanal | Horneado: Fresco diario",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20empanadas%20y%20dulces%20artesanales",
      images: [
        { src: "/images/empanadas-1.webp", alt: "Empanadas y Dulces Artesanales 1" },
        { src: "/images/empanadas-2.webp", alt: "Empanadas y Dulces Artesanales 2" },
        { src: "/images/empanadas-3.webp", alt: "Empanadas y Dulces Artesanales 3" },
      ],
    },
    {
      id: "galletas-gigantes",
      emoji: "🍪",
      title: "Galletas Gigantes",
      description: "Galletas de tamaño generoso con chispas de chocolate, avena y frutas secas.",
      specs: "Sabores: Chocolate, avena-pasas, coco | Tamaño: 15cm diámetro | Textura: Crujiente-suave",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20galletas%20gigantes",
      images: [
        { src: "/images/galletas-1.webp", alt: "Galletas Gigantes 1" },
        { src: "/images/galletas-2.webp", alt: "Galletas Gigantes 2" },
        { src: "/images/galletas-3.webp", alt: "Galletas Gigantes 3" },
      ],
    },
    {
      id: "temporada",
      emoji: "🌿",
      title: "Repostería de Temporada",
      description: "Dulces especiales según la época del año con frutas y sabores estacionales.",
      specs: "Temporadas: Navidad, Carnaval, Finados | Ingredientes: Frutas de estación | Disponibilidad: Limitada",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20consultar%20repostería%20de%20temporada",
      images: [
        { src: "/images/temporada-1.webp", alt: "Repostería de Temporada 1" },
        { src: "/images/temporada-2.webp", alt: "Repostería de Temporada 2" },
        { src: "/images/temporada-3.webp", alt: "Repostería de Temporada 3" },
      ],
    },
  ]

  const cafeteria = [
    {
      id: "cafe-especialidad",
      emoji: "☕",
      title: "Café Lojano de Especialidad",
      description: "Granos selectos de las montañas de Loja, tostado artesanal y preparación perfecta.",
      specs: "Origen: Loja, Ecuador | Tostado: Medio, oscuro | Preparación: Espresso, filtrado, prensa",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20probar%20el%20café%20lojano%20de%20especialidad",
      images: [
        { src: "/images/cafe-1.webp", alt: "Café Lojano de Especialidad 1" },
        { src: "/images/cafe-2.webp", alt: "Café Lojano de Especialidad 2" },
        { src: "/images/cafe-3.webp", alt: "Café Lojano de Especialidad 3" },
      ],
    },
    {
      id: "calientes",
      emoji: "🫖",
      title: "Capuchinos y Bebidas Calientes",
      description: "Capuchinos cremosos, lattes artísticos y bebidas calientes reconfortantes.",
      specs: "Opciones: Capuchino, latte, mocha, chocolate caliente | Leche: Entera, deslactosada, vegetal",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20capuchino%20y%20bebidas%20calientes",
      images: [
        { src: "/images/capuchino-1.webp", alt: "Capuchinos y Bebidas Calientes 1" },
        { src: "/images/capuchino-2.webp", alt: "Capuchinos y Bebidas Calientes 2" },
        { src: "/images/capuchino-3.webp", alt: "Capuchinos y Bebidas Calientes 3" },
      ],
    },
    {
      id: "frias",
      emoji: "🧊",
      title: "Bebidas Frías y Frappés",
      description: "Refrescantes bebidas frías, frappés cremosos y smoothies naturales.",
      specs: "Variedades: Frappé café, smoothies frutas, té helado | Base: Hielo, frutas naturales",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20bebidas%20frías%20y%20frappés",
      images: [
        { src: "/images/frappes-1.webp", alt: "Bebidas Frías y Frappés 1" },
        { src: "/images/frappes-2.webp", alt: "Bebidas Frías y Frappés 2" },
        { src: "/images/frappes-3.webp", alt: "Bebidas Frías y Frappés 3" },
      ],
    },
    {
      id: "postres",
      emoji: "🍰",
      title: "Postres Artesanales para Acompañar",
      description: "Pequeños postres perfectos para acompañar tu café o té favorito.",
      specs: "Opciones: Tiramisú, flan, mousse | Porciones: Individuales | Presentación: Elegante",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20postres%20para%20acompañar",
      images: [
        { src: "/images/postres-1.webp", alt: "Postres Artesanales 1" },
        { src: "/images/postres-2.webp", alt: "Postres Artesanales 2" },
        { src: "/images/postres-3.webp", alt: "Postres Artesanales 3" },
      ],
    },
    {
      id: "snacks",
      emoji: "🥪",
      title: "Snacks y Opciones Ligeras",
      description: "Sándwiches artesanales, ensaladas frescas y opciones saludables.",
      specs: "Opciones: Sándwiches, wraps, ensaladas | Ingredientes: Frescos, locales | Horario: Todo el día",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20snacks%20y%20opciones%20ligeras",
      images: [
        { src: "/images/snacks-1.webp", alt: "Snacks y Opciones Ligeras 1" },
        { src: "/images/snacks-2.webp", alt: "Snacks y Opciones Ligeras 2" },
        { src: "/images/snacks-3.webp", alt: "Snacks y Opciones Ligeras 3" },
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
              <span className="text-foreground font-medium">Repostería, Pan y Cafetería</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              Repostería Artesanal, Pan Lojano y Café de Origen
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Sabores de siempre con insumos de calidad. Disfruta la tradición lojana en nuestro local o llévala a casa.
              Te esperamos en la calle 18 de Noviembre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pan-lojano"
                className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
              >
                Ver Menú de Repostería y Café
              </a>
              <a
                href="https://wa.me/593995639050?text=Hola%2C%20quiero%20pedir%20pan%20lojano%20tradicional"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors"
              >
                Pedir Pan Lojano por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Repostería y Pan Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Croissant className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-pacifico)" }}>
                  Lo Más Pedido de Nuestra Tradición Lojana
                </h2>
              </div>
            </div>

            {/* Internal Navigation - Repostería */}
            <nav className="flex flex-wrap justify-center gap-4 mb-16">
              {reposteriaPan.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted hover:bg-secondary hover:text-white transition-colors"
                >
                  <span>{item.emoji}</span>
                  <span className="font-medium">{item.title}</span>
                </a>
              ))}
            </nav>

            <div className="space-y-20">
              {reposteriaPan.map((item, index) => (
                <div key={item.id} id={item.id} className="scroll-mt-24">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <ImageSlider images={item.images} alt={`${item.title} en La Viña Dulce Loja`} />
                    </div>
                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-4xl">{item.emoji}</span>
                        <h3
                          className="text-3xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-pacifico)" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                      <div className="bg-muted/50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-accent" />
                          Especificaciones
                        </h4>
                        <p className="text-muted-foreground">{item.specs}</p>
                      </div>
                      <a
                        href={item.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Pedir por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cafetería Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Coffee className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-pacifico)" }}>
                  Un Espacio para Disfrutar en el Centro de Loja
                </h2>
              </div>
            </div>

            {/* Internal Navigation - Cafetería */}
            <nav className="flex flex-wrap justify-center gap-4 mb-16">
              {cafeteria.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white hover:bg-secondary hover:text-white transition-colors"
                >
                  <span>{item.emoji}</span>
                  <span className="font-medium">{item.title}</span>
                </a>
              ))}
            </nav>

            <div className="space-y-20">
              {cafeteria.map((item, index) => (
                <div key={item.id} id={item.id} className="scroll-mt-24">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <ImageSlider images={item.images} alt={`${item.title} en La Viña Dulce Loja`} />
                    </div>
                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-4xl">{item.emoji}</span>
                        <h3
                          className="text-3xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-pacifico)" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                      <div className="bg-white/70 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-accent" />
                          Especificaciones
                        </h4>
                        <p className="text-muted-foreground">{item.specs}</p>
                      </div>
                      <a
                        href={item.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Pedir por WhatsApp
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
