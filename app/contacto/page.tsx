"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/contact-form'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function ContactoPage() {
  const whatsappUrgente = "https://wa.me/593995639050?text=Hola%2C%20tengo%20una%20consulta%20urgente"

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600">
                    Inicio
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Contacto</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Columna Izquierda - Formulario */}
              <div>
                <div className="text-center lg:text-left mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-pacifico">
                    Contáctanos
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <ContactForm />
                </div>
              </div>

              {/* Columna Derecha - Información de Contacto */}
              <div className="space-y-8">
                {/* Canales Directos */}
                <div className="bg-background rounded-2xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold text-primary mb-6 font-pacifico">
                    ¿Prefieres una Atención Inmediata?
                  </h2>
                  <div className="space-y-4">
                    <a
                      href={whatsappUrgente}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                    >
                      <div className="text-2xl">📲</div>
                      <div>
                        <h3 className="font-semibold text-green-700 group-hover:text-green-800">WhatsApp</h3>
                        <p className="text-green-600">Respuesta inmediata</p>
                      </div>
                    </a>

                    <a
                      href="tel:+593995639050"
                      className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                    >
                      <div className="text-2xl">📞</div>
                      <div>
                        <h3 className="font-semibold text-blue-700 group-hover:text-blue-800">Teléfono</h3>
                        <p className="text-blue-600">+593 99 563 9050</p>
                      </div>
                    </a>

                    <a
                      href="mailto:negocios@lavinadulce.com"
                      className="flex items-center gap-4 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group"
                    >
                      <div className="text-2xl">📧</div>
                      <div>
                        <h3 className="font-semibold text-purple-700 group-hover:text-purple-800">Email</h3>
                        <p className="text-sm text-muted-foreground">negocios@lavinadulce.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Ubicación y Horarios */}
                <div className="bg-background rounded-2xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold text-primary mb-6 font-pacifico">Visítanos en Nuestro Local</h2>

                  <div className="mb-6">
                    <Image
                      src="/images/local-tienda.webp"
                      alt="Local de La Viña Dulce en Loja"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl object-cover"
                      priority
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-xl">📍</div>
                      <div>
                        <h3 className="font-semibold text-foreground">Dirección</h3>
                        <p className="text-muted-foreground">
                          Calle 18 de Noviembre, a dos cuadras del Parque San Sebastián y cerca de León, Loja
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-xl">🕒</div>
                      <div>
                        <h3 className="font-semibold text-foreground">Horarios</h3>
                        <p className="text-muted-foreground">Lunes a Sábado: 8h00-20h00</p>
                        <p className="text-muted-foreground">Domingo: 9h00-14h00</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-xl shadow-lg" style={{ height: '300px' }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.346123535321!2d-79.21313496709003!3d-4.011485430117617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb4801bfbd8e7f%3A0x76dd4d348a7beab6!2sPasteler%C3%ADa%20La%20Vi%C3%B1a%20Dulce!5e0!3m2!1ses-419!2sec!4v1764003747199!5m2!1ses-419!2sec" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de La Viña Dulce en Google Maps"
                    ></iframe>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/gCPBeAZykmrS5c1VA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors text-center"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
