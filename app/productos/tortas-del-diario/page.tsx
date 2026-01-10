import type { Metadata } from "next"
import { ChevronRight, Star } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "La Viña Dulce - Tortas del Día",
  description: "Disfruta de nuestras tortas frescas del día en Loja. Chocolate, tres leches, vainilla y más. Hechas con ingredientes frescos y mucho amor.",
  keywords: "tortas del día Loja, tortas frescas, chocolate, tres leches, cheesecake, red velvet, La Viña Dulce",
  openGraph: {
    title: "La Viña Dulce - Tortas del Día",
    description: "Disfruta de nuestras tortas frescas del día en Loja. Chocolate, tres leches, vainilla y más. Hechas con ingredientes frescos y mucho amor.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Viña Dulce - Tortas del Día",
      },
    ],
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com/productos/tortas-del-diario",
    siteName: "La Viña Dulce",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Viña Dulce - Tortas del Día",
    description: "Disfruta de nuestras tortas frescas del día en Loja. Chocolate, tres leches, vainilla y más. Hechas con ingredientes frescos y mucho amor.",
    images: ["/og-image.jpg"],
  },
}

export default function TortasDelDiario() {
  const categories = [
    {
      id: "chocolate",
      emoji: "🍫",
      title: "Torta de Chocolate Clásica",
      description: "Chocolate intenso y textura húmeda. Ideal para antojos y celebraciones pequeñas en Loja.",
      specs: "Porciones: 8, 12, 16 | Rellenos: Ganache, trufa, avellana | Disponibilidad: Diaria (consultar stock)",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20ordenar%20torta%20de%20chocolate%20clásica",
      images: [
        { src: "/images/chocolate-1.webp", alt: "Torta de Chocolate Clásica 1" },
        { src: "/images/chocolate-2.webp", alt: "Torta de Chocolate Clásica 2" },
        { src: "/images/chocolate-3.webp", alt: "Torta de Chocolate Clásica 3" },
      ],
    },
    {
      id: "tres-leches",
      emoji: "🥛",
      title: "Torta de Tres Leches",
      description: "Suave, cremosa y con el toque perfecto de dulce de leche. Un clásico que nunca falla.",
      specs: "Porciones: 8, 12, 16 | Topping: Merengue, canela, frutas | Disponibilidad: Diaria",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20ordenar%20torta%20de%20tres%20leches",
      images: [
        { src: "/images/tres-leches-1.webp", alt: "Torta de Tres Leches 1" },
        { src: "/images/tres-leches-2.webp", alt: "Torta de Tres Leches 2" },
        { src: "/images/tres-leches-3.webp", alt: "Torta de Tres Leches 3" },
      ],
    },
    {
      id: "vainilla",
      emoji: "🌼",
      title: "Torta de Vainilla Casera",
      description: "Sabor tradicional y esponjosa textura. Perfecta para acompañar con café o té.",
      specs: "Porciones: 8, 12, 16 | Rellenos: Crema, frutas, dulce de leche | Disponibilidad: Diaria",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20ordenar%20torta%20de%20vainilla%20casera",
      images: [
        { src: "/images/vainilla-1.webp", alt: "Torta de Vainilla Casera 1" },
        { src: "/images/vainilla-2.webp", alt: "Torta de Vainilla Casera 2" },
        { src: "/images/vainilla-3.webp", alt: "Torta de Vainilla Casera 3" },
      ],
    },
    {
      id: "cheesecake",
      emoji: "🍓",
      title: "Cheesecake de Frutas",
      description: "Cremoso cheesecake con frutas frescas de temporada. Ligero y refrescante.",
      specs: "Porciones: 8, 12 | Frutas: Fresa, mora, maracuyá | Disponibilidad: Consultar",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20ordenar%20cheesecake%20de%20frutas",
      images: [
        { src: "/images/cheesecake-1.webp", alt: "Cheesecake de Frutas 1" },
        { src: "/images/cheesecake-2.webp", alt: "Cheesecake de Frutas 2" },
        { src: "/images/cheesecake-3.webp", alt: "Cheesecake de Frutas 3" },
      ],
    },
    {
      id: "red-velvet",
      emoji: "❤️",
      title: "Red Velvet",
      description: "Suave textura aterciopelada con su característico color rojo y cream cheese frosting.",
      specs: "Porciones: 8, 12, 16 | Frosting: Cream cheese | Disponibilidad: Fines de semana",
      whatsapp: "https://wa.me/593995639050?text=Hola%2C%20quiero%20ordenar%20red%20velvet",
      images: [
        { src: "/images/red-velvet-1.webp", alt: "Torta Red Velvet 1" },
        { src: "/images/red-velvet-2.webp", alt: "Torta Red Velvet 2" },
        { src: "/images/red-velvet-3.webp", alt: "Torta Red Velvet 3" },
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
              <span className="text-foreground font-medium">Tortas del Diario</span>
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
              Tortas del Diario en Loja
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Sabor casero y disponibilidad diaria. Pasa por nuestro local en la 18 de Noviembre o pide por WhatsApp y
              retira sin filas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#chocolate"
                className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
              >
                Ver Disponibles Hoy
              </a>
              <a
                href="https://wa.me/593995639050?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20de%20tortas%20del%20día"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors"
              >
                Pedir por WhatsApp
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

        {/* Products Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {categories.map((category, index) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                      <ImageSlider images={category.images} />
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
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
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
