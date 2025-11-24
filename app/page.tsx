import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, MapPin, Clock, Users, Award, PartyPopper } from "lucide-react"

export const metadata: Metadata = {
  title: "La Viña Dulce - Pastelería",
  description: "De lo mejor de Loja, pide lo que necesites, disfruta nuestros servicios.",
  openGraph: {
    title: "La Viña Dulce - Pastelería",
    description: "De lo mejor de Loja, pide lo que necesites, disfruta nuestros servicios.",
    images: [
      {
        url: "/imagen destacada.ico",
        width: 1200,
        height: 630,
        alt: "La Viña Dulce - Pastelería",
      },
    ],
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com",
    siteName: "La Viña Dulce",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Viña Dulce - Pastelería",
    description: "De lo mejor de Loja, pide lo que necesites, disfruta nuestros servicios.",
    images: ["/imagen destacada.ico"],
  },
}

export default function HomePage() {
  const whatsappUrl = "https://wa.me/593995639050?text=Hola%2C%20quiero%20hacer%20un%20pedido%20para%20mi%20celebración"

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section id="inicio" className="pt-16 bakery-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                Tortas Personalizadas y Panadería Artesanal en Loja
              </h1>
              <p
                className="text-xl md:text-2xl opacity-90 leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Celebra sin preocupaciones: tortas únicas con entrega puntual y 8 años de confianza en el corazón de
                Loja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Haz tu Pedido por WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                  style={{ fontFamily: "var(--font-poppins)" }}
                  asChild
                >
                  <a href="#productos">Ver Catálogo de Tortas</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-cake.webp"
                alt="Torta personalizada elegante de La Viña Dulce"
                className="rounded-2xl shadow-2xl w-full h-auto"
                width={600}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Decorative drip effect */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-background"></div>
          <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* Proceso de Pedido */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              ¿Cómo Hacer tu Pedido en 4 Pasos?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                Elige tu producto
              </h3>
              <p className="text-muted-foreground">Elige tu producto o envía tu idea por WhatsApp</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                Cotiza detalles
              </h3>
              <p className="text-muted-foreground">Cotiza con todos los detalles y recibe presupuesto</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                Confirma pedido
              </h3>
              <p className="text-muted-foreground">Confirma tu pedido con la anticipación requerida</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                Retira o recibe
              </h3>
              <p className="text-muted-foreground">Retira en nuestro local o coordina entrega en Loja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              Nuestros Productos para Cada Ocasión
            </h2>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8 hidden">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/tortas-personalizadas.webp"
                  alt="Tortas personalizadas para bodas y eventos en Loja - La Viña Dulce"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={300}
                  height={250}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <h3
                  className="text-xl font-semibold leading-tight h-14 flex items-center"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Tortas Personalizadas
                  <br />
                  en Loja
                </h3>
                <p className="text-muted-foreground text-sm h-12 flex items-center">
                  Diseños únicos para bodas, quinceañeros, bautizos y eventos especiales
                </p>
                <div className="mt-auto">
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <a href="/productos/tortas-personalizadas">Ver más</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/pan-dulce.webp"
                  alt="Tortas frescas del día disponibles en La Viña Dulce Loja"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={300}
                  height={250}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <h3
                  className="text-xl font-semibold leading-tight h-14 flex items-center"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Tortas del Diario
                  <br />
                  Listas para Llevar
                </h3>
                <p className="text-muted-foreground text-sm h-12 flex items-center">
                  Tortas frescas disponibles todos los días para llevar inmediatamente
                </p>
                <div className="mt-auto">
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <a href="/productos/tortas-del-diario">Ver más</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/reposteria-artesanal.webp"
                  alt="Pan lojano tradicional y repostería artesanal en Loja"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={300}
                  height={250}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <h3
                  className="text-xl font-semibold leading-tight h-14 flex items-center"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Repostería Artesanal,
                  <br />
                  Pan y Café Lojano
                </h3>
                <p className="text-muted-foreground text-sm h-12 flex items-center">
                  Pan tradicional lojano, dulces artesanales y café de la región
                </p>
                <div className="mt-auto">
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <a href="/reposteria-cafeteria-loja">Ver más</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/catering-eventos.webp"
                  alt="Servicio de catering para eventos y celebraciones en Loja"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={300}
                  height={250}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <h3
                  className="text-xl font-semibold leading-tight h-14 flex items-center"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Catering para Eventos
                  <br />
                  en Loja
                </h3>
                <p className="text-muted-foreground text-sm h-12 flex items-center">
                  Servicio completo de catering para bodas, eventos corporativos y celebraciones
                </p>
                <div className="mt-auto">
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <a href="/catering-para-eventos-loja">Ver más</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:hidden">
            <div className="products-slider overflow-x-auto">
              <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-80 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/images/tortas-personalizadas.webp"
                      alt="Tortas personalizadas para bodas y eventos en Loja - La Viña Dulce"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      width={300}
                      height={250}
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <h3
                      className="text-xl font-semibold leading-tight h-14 flex items-center"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Tortas Personalizadas
                      <br />
                      en Loja
                    </h3>
                    <p className="text-muted-foreground text-sm h-12 flex items-center">
                      Diseños únicos para bodas, quinceañeros, bautizos y eventos especiales
                    </p>
                    <div className="mt-auto">
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <a href="/productos/tortas-personalizadas">Ver más</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-80 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/images/pan-dulce.webp"
                      alt="Tortas frescas del día disponibles en La Viña Dulce Loja"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      width={300}
                      height={250}
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <h3
                      className="text-xl font-semibold leading-tight h-14 flex items-center"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Tortas del Diario
                      <br />
                      Listas para Llevar
                    </h3>
                    <p className="text-muted-foreground text-sm h-12 flex items-center">
                      Tortas frescas disponibles todos los días para llevar inmediatamente
                    </p>
                    <div className="mt-auto">
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <a href="/productos/tortas-del-diario">Ver más</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-80 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/images/reposteria-artesanal.webp"
                      alt="Pan lojano tradicional y repostería artesanal en Loja"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      width={300}
                      height={250}
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <h3
                      className="text-xl font-semibold leading-tight h-14 flex items-center"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Repostería Artesanal,
                      <br />
                      Pan y Café Lojano
                    </h3>
                    <p className="text-muted-foreground text-sm h-12 flex items-center">
                      Pan tradicional lojano, dulces artesanales y café de la región
                    </p>
                    <div className="mt-auto">
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <a href="/reposteria-cafeteria-loja">Ver más</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-80 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/images/catering-eventos.webp"
                      alt="Servicio de catering para eventos y celebraciones en Loja"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      width={300}
                      height={250}
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <h3
                      className="text-xl font-semibold leading-tight h-14 flex items-center"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Catering para Eventos
                      <br />
                      en Loja
                    </h3>
                    <p className="text-muted-foreground text-sm h-12 flex items-center">
                      Servicio completo de catering para bodas, eventos corporativos y celebraciones
                    </p>
                    <div className="mt-auto">
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <a href="/catering-para-eventos-loja">Ver más</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              Lo Que Dicen Nuestros Clientes en Loja
            </h2>
          </div>

          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/cBrstfesu3w"
                title="Testimonios de clientes La Viña Dulce Loja"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Credenciales */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              La Calidad y Confianza que Buscas en Loja
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Ingredientes de Primera
                </h3>
                <p className="text-muted-foreground">Usamos materia prima de calidad para un sabor inolvidable.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Puntualidad Garantizada
                </h3>
                <p className="text-muted-foreground">Tu pedido estará listo justo a tiempo, como lo esperas.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Recomendados en Eventos
                </h3>
                <p className="text-muted-foreground">
                  Confianza ganada en cientos de celebraciones familiares y sociales en Loja.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <PartyPopper className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Más de 8 Años de Experiencia
                </h3>
                <p className="text-muted-foreground">Perfeccionando recetas y sonrisas en la ciudad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geolocalización */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              Encuéntranos en el Corazón de Loja
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Visítanos en nuestra céntrica ubicación en la calle 18 de Noviembre, a solo dos cuadras del Parque San
                Sebastián y cerca de la zona de León. Un punto de fácil acceso para recoger tu pedido.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "var(--font-poppins)" }}
                asChild
              >
                <a href="https://maps.app.goo.gl/uahd3i2pUNFrovri7" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Abrir en Google Maps
                </a>
              </Button>
            </div>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/images/mapa-ubicacion-poster.jpg" 
                alt="Ubicación de La Viña Dulce en Loja"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bakery-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-pacifico)" }}>
              ¿Listo para Disfrutar el Sabor de La Viña Dulce?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ fontFamily: "var(--font-poppins)" }}
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ordena tu Torta Personalizada Ahora
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                style={{ fontFamily: "var(--font-poppins)" }}
                asChild
              >
                <a href="#productos">Ver Todos los Productos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
