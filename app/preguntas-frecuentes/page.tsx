import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/faq-accordion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | La Viña Dulce - Pastelería y Panadería Loja",
  description:
    "Resuelve tus dudas sobre pedidos, entregas, métodos de pago y productos de La Viña Dulce. FAQ completa de nuestra pastelería en Loja.",
  keywords: "preguntas frecuentes, FAQ La Viña Dulce, pedidos tortas, entregas Loja, métodos pago",
  openGraph: {
    title: "Preguntas Frecuentes | La Viña Dulce - Pastelería y Panadería Loja",
    description: "Resuelve tus dudas sobre pedidos, entregas, métodos de pago y productos de La Viña Dulce. FAQ completa de nuestra pastelería en Loja.",
    images: ["/og-image.png"],
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com/preguntas-frecuentes",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
}

export default function PreguntasFrecuentesPage() {
  const whatsappFAQ =
    "https://wa.me/593995639050?text=Hola%2C%20tengo%20una%20pregunta%20que%20no%20está%20en%20las%20FAQ"

  const faqItems = [
    {
      question: "¿Con cuánta anticipación debo hacer mi pedido?",
      answer:
        "Tortas personalizadas: 3-10 días según complejidad. Tortas del diario: 1-2 días. Catering para eventos: 1-2 semanas. Pan y repostería: disponible diariamente sin pedido previo. Para fechas especiales (Día de la Madre, Navidad), recomendamos anticipar hasta 15 días.",
    },
    {
      question: "¿Hacen entregas a domicilio en Loja?",
      answer:
        "Sí, ofrecemos servicio de entrega en el centro de Loja y sectores cercanos. El costo de entrega varía según la distancia (desde $2). Para pedidos superiores a $25, la entrega es gratuita en el centro. Horarios de entrega: 9h00-19h00 de lunes a sábado.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Efectivo, transferencias bancarias y tarjetas de débito/crédito. Para pedidos grandes, aceptamos 50% de anticipo y 50% contra entrega. También trabajamos con pagos por WhatsApp y transferencias a nuestras cuentas bancarias.",
    },
    {
      question: "¿Pueden hacer tortas sin gluten o veganas?",
      answer:
        "Sí, ofrecemos opciones especiales bajo pedido: tortas sin gluten, veganas, sin azúcar y para diabéticos. Requieren 5-7 días de anticipación y tienen un costo adicional del 20-30%. Consultanos por ingredientes específicos y restricciones alimentarias.",
    },
    {
      question: "¿Cómo garantizan la frescura de los productos?",
      answer:
        "Elaboramos nuestros productos diariamente con ingredientes frescos. El pan se hornea 2 veces al día (mañana y tarde). Las tortas se preparan máximo 24h antes de la entrega. Usamos refrigeración adecuada y empaques que preservan la calidad.",
    },
    {
      question: "¿Puedo ver el diseño de mi torta antes de la entrega?",
      answer:
        "Para tortas personalizadas complejas, enviamos fotos previas por WhatsApp para tu aprobación. Realizamos hasta 2 ajustes menores sin costo adicional. Para diseños simples, trabajamos con la descripción acordada inicialmente.",
    },
    {
      question: "¿Qué pasa si necesito cancelar mi pedido?",
      answer:
        "Cancelaciones con más de 48h de anticipación: reembolso completo. Entre 24-48h: reembolso del 70%. Menos de 24h: no hay reembolso, pero puedes reprogramar la entrega. Para eventos, aplicamos políticas especiales según el caso.",
    },
    {
      question: "¿Tienen servicio para eventos grandes (más de 100 personas)?",
      answer:
        "Sí, manejamos catering para eventos grandes: bodas, graduaciones, eventos corporativos. Ofrecemos menús completos, montaje, servicio de meseros y coordinación del evento. Requiere cotización personalizada y mínimo 2 semanas de anticipación.",
    },
    {
      question: "¿El pan lojano se hornea diariamente?",
      answer:
        "Sí, nuestro pan lojano tradicional se hornea fresco todos los días en dos horarios: 7h00 y 15h00. Mantenemos la receta tradicional con ingredientes locales. También tenemos pan integral, de dulce y otras variedades regionales.",
    },
    {
      question: "¿Puedo hacer cambios a mi pedido una vez confirmado?",
      answer:
        "Cambios menores se pueden coordinar hasta 24h antes de la entrega: colores, mensaje, pequeños detalles. Cambios mayores (tamaño, sabor, diseño completo) solo hasta 48h antes y pueden tener costo adicional. Contactanos por WhatsApp para coordinar.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      <Header />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="text-foreground">Preguntas Frecuentes</span>
            </nav>
          </div>

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-pacifico">
                Preguntas Frecuentes | La Viña Dulce Loja
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Resuelve tus dudas sobre nuestros productos, tiempos de entrega, métodos de pago y más. Si no encuentras
                tu respuesta, contáctanos por WhatsApp.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12 font-pacifico">
                Las Preguntas Más Comunes de Nuestros Clientes
              </h2>

              <FAQAccordion items={faqItems} />

              {/* CTA Final */}
              <div className="text-center mt-12">
                <a
                  href={whatsappFAQ}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ¿No encontraste tu respuesta? Pregúntanos por WhatsApp
                </a>
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
