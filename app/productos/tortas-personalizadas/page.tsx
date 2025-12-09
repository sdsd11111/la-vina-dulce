import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Heart, Sparkles, Gift, Building2, Cake } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import CustomCakeForm from "@/components/custom-cake-form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "La Viña Dulce - Tortas Personalizadas",
  description: "Tortas personalizadas para bodas, cumpleaños y eventos en Loja. Diseños únicos que harán de tu celebración un momento inolvidable.",
  keywords: "tortas personalizadas Loja, tortas matrimonio, tortas 15 años, tortas infantiles, tortas corporativas",
  openGraph: {
    title: "La Viña Dulce - Tortas Personalizadas",
    description: "Tortas personalizadas para bodas, cumpleaños y eventos en Loja. Diseños únicos que harán de tu celebración un momento inolvidable.",
    images: [
      {
        url: "/imagen destacada.ico",
        width: 1200,
        height: 630,
        alt: "La Viña Dulce - Tortas Personalizadas",
      },
    ],
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com/productos/tortas-personalizadas",
    siteName: "La Viña Dulce",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Viña Dulce - Tortas Personalizadas",
    description: "Tortas personalizadas para bodas, cumpleaños y eventos en Loja. Diseños únicos que harán de tu celebración un momento inolvidable.",
    images: ["/imagen destacada.ico"],
  },
}

const cakeCategories = [
  {
    id: "tortas-matrimonios",
    icon: Heart,
    title: "🥂 TORTAS PARA MATRIMONIOS",
    images: [
      {
        src: "/images/tortas-matrimonio-1.webp",
        alt: "Torta de matrimonio elegante con flores naturales - La Viña Dulce Loja",
      },
      {
        src: "/images/tortas-matrimonio-2.webp",
        alt: "Torta de matrimonio de varios pisos con flores - La Viña Dulce Loja",
      },
      { 
        src: "/images/tortas-matrimonio-3.webp", 
        alt: "Torta de matrimonio minimalista - La Viña Dulce Loja" 
      },
    ],
    description:
      "Celebra tu boda en Loja con una torta a tu estilo. Combinamos diseño y sabor para que tu mesa luzca perfecta. Estamos en la 18 de Noviembre, a 2 cuadras de San Sebastián, fácil de ubicar para retiro o coordinación de entrega.",
    specs: {
      sizes: "30-120 porciones (1-4 pisos)",
      flavors: "Vainilla, frutos rojos, red velvet, chocolate intenso",
      time: "7-10 días",
      delivery: "Retiro en local o envío en Loja (coordinar tarifa)",
    },
    whatsappUrl: "https://wa.me/593995639050?text=Hola%2C%20quiero%20cotizar%20una%20torta%20para%20matrimonio",
  },
  {
    id: "tortas-quince-anos",
    icon: Sparkles,
    title: "💖 TORTAS PARA 15 AÑOS",
    images: [
      { 
        src: "/images/tortas-quince-1.webp", 
        alt: "Torta de 15 años con perlas y degradados en Loja" 
      },
      { 
        src: "/images/tortas-quince-2.webp", 
        alt: "Torta de 15 años colorida con brillos en Loja" 
      },
      { 
        src: "/images/tortas-quince-3.webp", 
        alt: "Torta de 15 años con número decorativo en Loja" 
      },
    ],
    description:
      "Diseños finos y modernos para 15 años. Realzamos tu temática (colores, brillo, iniciales) con terminados profesionales e ingredientes premium.",
    specs: {
      sizes: "20-80 porciones",
      flavors: "Red velvet, frutos del bosque, maracuyá",
      time: "4-6 días",
      delivery: "Retiro o envío en Loja",
    },
    whatsappUrl: "https://wa.me/593995639050?text=Hola%2C%20quiero%20cotizar%20una%20torta%20para%2015%20años",
  },
  {
    id: "tortas-infantiles",
    icon: Gift,
    title: "🎈 TORTAS INFANTILES",
    images: [
      { 
        src: "/images/tortas-infantiles-1.webp", 
        alt: "Torta infantil con personajes y colores vivos en Loja" 
      },
      { 
        src: "/images/tortas-infantiles-2.webp", 
        alt: "Torta infantil con figuras 3D en Loja" 
      },
      { 
        src: "/images/tortas-infantiles-3.webp", 
        alt: "Torta infantil con foto comestible en Loja" 
      },
    ],
    description:
      "La torta favorita de los peques: personajes, colores y foto comestible. Hacemos realidad su idea con decoraciones seguras y comestibles.",
    specs: {
      sizes: "12-60 porciones",
      flavors: "Vainilla, chocolate, oreo",
      time: "3-5 días",
      delivery: "Retiro o envío en Loja",
    },
    whatsappUrl: "https://wa.me/593995639050?text=Hola%2C%20quiero%20cotizar%20una%20torta%20infantil",
  },
  {
    id: "tortas-corporativas",
    icon: Building2,
    title: "🏢 TORTAS CORPORATIVAS",
    images: [
      { 
        src: "/images/tortas-corporativas-1.webp", 
        alt: "Torta corporativa con logo de empresa en Loja" 
      },
      { 
        src: "/images/tortas-corporativas-2.webp", 
        alt: "Torta corporativa con colores de marca en Loja" 
      },
      {
        src: "/images/tortas-corporativas-3.webp",
        alt: "Torta corporativa elegante para celebración empresarial en Loja",
      },
    ],
    description:
      "Tortas para aniversarios, lanzamientos y agradecimientos. Integramos tu logo con impresión comestible y paleta corporativa.",
    specs: {
      sizes: "15-120 porciones",
      flavors: "Vainilla-frutos rojos, chocolate 70%",
      time: "4-7 días",
      delivery: "Retiro o envío (centro de Loja y zonas aledañas)",
    },
    whatsappUrl: "https://wa.me/593995639050?text=Hola%2C%20necesito%20cotización%20para%20torta%20corporativa",
  },
  {
    id: "tortas-clasicas",
    icon: Cake,
    title: "🎂 TORTAS CLÁSICAS PERSONALIZADAS",
    images: [
      { 
        src: "/images/tortas-clasicas-1.webp", 
        alt: "Torta clásica personalizada minimalista en Loja" 
      },
      { 
        src: "/images/tortas-clasicas-2.webp", 
        alt: "Torta clásica con diseño floral elegante en Loja" 
      },
      { 
        src: "/images/tortas-clasicas-3.webp", 
        alt: "Torta clásica personalizada con drip en Loja" 
      },
    ],
    description: "Tu torta clásica con un toque personal: mensaje, colores y acabados que combinan con tu celebración.",
    specs: {
      sizes: "10-60 porciones",
      flavors: "Tres leches, vainilla, chocolate",
      time: "2-4 días",
      delivery: "Retiro o envío en Loja",
    },
    whatsappUrl: "https://wa.me/593995639050?text=Hola%2C%20quiero%20una%20torta%20clásica%20personalizada",
  },
]

export default function TortasPersonalizadasPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/productos" className="hover:text-primary transition-colors">
                Productos
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Tortas Personalizadas</span>
            </nav>
          </div>

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-pacifico text-primary mb-6 leading-tight">
                Tortas Personalizadas en Loja: Tu Idea, Hecha Sabor
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Diseñamos la torta que imaginas con ingredientes de calidad y entrega puntual. 8 años de confianza en
                Loja: cero sorpresas, solo recuerdos dulces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/593995639050?text=Hola%2C%20quiero%20cotizar%20una%20torta%20personalizada%20para%20mi%20evento"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Pedir mi Torta por WhatsApp
                </a>
                <a
                  href="#tortas-matrimonios"
                  className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-300 border-2 border-secondary"
                >
                  Ver Tipos de Tortas
                </a>
              </div>
            </div>
          </section>

          {/* Internal Navigation */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-pacifico text-primary mb-8">Elige la Ocasión y Personalizamos tu Torta</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cakeCategories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="flex items-center justify-center gap-3 bg-card text-card-foreground p-4 rounded-lg hover:bg-accent transition-colors duration-300 border border-border"
                    >
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">{category.title.replace(/🥂|💖|🎈|🏢|🎂/, "").trim()}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Cake Categories */}
          {cakeCategories.map((category, index) => (
            <section key={category.id} id={category.id} className="container mx-auto px-4 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-pacifico text-primary mb-4">{category.title}</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image Slider */}
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <ImageSlider images={category.images} />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{category.description}</p>

                    <div className="bg-card p-6 rounded-lg border border-border mb-6">
                      <h3 className="font-semibold text-lg mb-4 text-primary">Especificaciones:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          <strong>Tamaños:</strong> {category.specs.sizes}
                        </li>
                        <li>
                          <strong>Sabores recomendados:</strong> {category.specs.flavors}
                        </li>
                        <li>
                          <strong>Tiempo mínimo:</strong> {category.specs.time}
                        </li>
                        <li>
                          <strong>Entrega:</strong> {category.specs.delivery}
                        </li>
                      </ul>
                    </div>

                    <a
                      href={category.whatsappUrl}
                      className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Pedir Ahora por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Custom Cake Form */}
          <section className="container mx-auto px-4 py-16 bg-accent/10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-pacifico text-primary mb-4">
                  ¿Tienes un Diseño en Mente? Lo Hacemos Realidad
                </h2>
                <p className="text-lg text-muted-foreground">
                  Completa los datos y adjunta tu imagen (logo, foto del homenajeado o referencia). Imprimimos en papel
                  comestible y adaptamos la decoración.
                </p>
              </div>

              <CustomCakeForm />
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
