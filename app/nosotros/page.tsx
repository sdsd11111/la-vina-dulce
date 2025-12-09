import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "La Viña Dulce - Nosotros",
  description: "Conoce nuestra historia y tradición en repostería artesanal en Loja. Más de 8 años endulzando momentos especiales.",
  keywords: "La Viña Dulce historia, pastelería Loja, panadería artesanal, valores empresa, repostería tradicional",
  openGraph: {
    title: "La Viña Dulce - Nosotros",
    description: "Conoce nuestra historia y tradición en repostería artesanal en Loja. Más de 8 años endulzando momentos especiales.",
    images: [
      {
        url: "/imagen destacada.ico",
        width: 1200,
        height: 630,
        alt: "La Viña Dulce - Nosotros",
      },
    ],
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com/nosotros",
    siteName: "La Viña Dulce",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Viña Dulce - Nosotros",
    description: "Conoce nuestra historia y tradición en repostería artesanal en Loja. Más de 8 años endulzando momentos especiales.",
    images: ["/imagen destacada.ico"],
  },
}

export default function NosotrosPage() {
  const whatsappUrl = "https://wa.me/593995639050?text=Hola%2C%20quiero%20conocer%20más%20sobre%20La%20Viña%20Dulce"

  const valores = [
    {
      title: "Calidad",
      description:
        "Usamos ingredientes frescos y seleccionados. Creemos que el buen sabor empieza con la mejor materia prima.",
      icon: "🌟",
    },
    {
      title: "Creatividad",
      description: "Cada torta personalizada es un lienzo. Tu idea es nuestra inspiración para crear algo único.",
      icon: "🎨",
    },
    {
      title: "Tradición",
      description: "Preservamos y honramos el sabor del pan lojano auténtico y la repostería que nos identifica.",
      icon: "🏛️",
    },
    {
      title: "Servicio",
      description: "Creemos en una atención cercana, rápida y confiable. Tu satisfacción es nuestra mayor recompensa.",
      icon: "❤️",
    },
  ]

  const fortalezas = [
    "Más de 8 años de experiencia en repostería artesanal",
    "Ingredientes frescos y de primera calidad",
    "Diseños personalizados únicos para cada cliente",
    "Entrega puntual y servicio confiable",
    "Especialistas en pan lojano tradicional",
    "Atención personalizada y cercana",
    "Precios justos y competitivos",
    "Ubicación céntrica y accesible en Loja",
  ]

  const testimonios = [
    {
      texto: "Aquí encontré el mejor café acompañado de pan lojano. Un rincón perfecto en Loja.",
      autor: "María P.",
      rating: 5,
    },
    {
      texto: "Las tortas personalizadas superaron mis expectativas. Atención 10/10.",
      autor: "Pablo R.",
      rating: 5,
    },
    {
      texto: "Un excelente servicio, cuentan con muy buena atención y sus cakes son deliciosos.",
      autor: "Jerry Ordoñez",
      rating: 5,
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="text-foreground">Nosotros</span>
            </nav>
          </div>

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-pacifico">
                La Viña Dulce: Pastelería y Panadería Artesanal en Loja
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Más que una pastelería: un lugar donde cada receta guarda tradición, amor y el sabor auténtico de Loja.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📲 Escríbenos por WhatsApp
              </a>
            </div>
          </section>

          {/* Nuestra Historia */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6 font-pacifico">
                    Un Sueño Horneado en el Corazón de Loja
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nacimos en el corazón de Loja con un sueño: llevar a cada familia tortas, panes y postres que
                    unieran tradición y creatividad. Hoy, con más de 8 años de trayectoria, somos una pastelería
                    reconocida, pero seguimos trabajando con la misma dedicación y amor de nuestros inicios.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/images/nosotros-historia.webp"
                    alt="Historia de La Viña Dulce, 8 años sirviendo a Loja"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Nuestros Valores */}
          <section className="bg-muted/30 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary text-center mb-12 font-pacifico">
                  Los Ingredientes que Nos Definen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {valores.map((valor, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-4xl mb-4 text-center">{valor.icon}</div>
                      <h3 className="text-xl font-bold text-primary mb-3 text-center">{valor.title}</h3>
                      <p className="text-muted-foreground text-center leading-relaxed">{valor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Nuestras Fortalezas */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12 font-pacifico">
                Por Qué Confían en Nosotros
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {fortalezas.map((fortaleza, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground">{fortaleza}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reseñas Reales */}
          <section className="bg-muted/30 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary text-center mb-12 font-pacifico">
                  La Opinión de Nuestra Gente
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {testimonios.map((testimonio, index) => (
                    <div key={index} className="bg-background rounded-2xl p-6 shadow-lg">
                      <div className="flex mb-4">
                        {[...Array(testimonio.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">
                            ⭐️
                          </span>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonio.texto}"</p>
                      <p className="font-semibold text-primary">-- {testimonio.autor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
