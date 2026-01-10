import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "La Viña Dulce - Contacto",
  description: "Contáctanos para pedidos especiales, consultas o visitar nuestra pastelería en Loja. Estamos para servirte.",
  openGraph: {
    title: "La Viña Dulce - Contacto",
    description: "Contáctanos para pedidos especiales, consultas o visitar nuestra pastelería en Loja. Estamos para servirte.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Viña Dulce - Contacto",
      },
    ],
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com/contacto",
    siteName: "La Viña Dulce",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Viña Dulce - Contacto",
    description: "Contáctanos para pedidos especiales, consultas o visitar nuestra pastelería en Loja. Estamos para servirte.",
    images: ["/og-image.jpg"],
  },
}
