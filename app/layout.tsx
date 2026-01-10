import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://lavinadulce.com"),
  title: "La Viña Dulce - Pastelería y Panadería Artesanal en Loja",
  description:
    "Deliciosas tortas personalizadas, repostería artesanal y catering para eventos en Loja, Ecuador. ¡Endulza tus celebraciones con nosotros!",
  generator: "v0.app",
  keywords:
    "pastelería, panadería, tortas, Loja, Ecuador, artesanal, catering, eventos, tortas personalizadas, repostería fresca",
  authors: [{ name: "La Viña Dulce" }],
  creator: "La Viña Dulce",
  publisher: "La Viña Dulce",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://lavinadulce.com",
    siteName: "La Viña Dulce",
    title: "La Viña Dulce - Pastelería y Panadería Artesanal en Loja",
    description:
      "Deliciosas tortas personalizadas, repostería artesanal y catering para eventos en Loja, Ecuador. ¡Endulza tus celebraciones con nosotros!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Viña Dulce - Pastelería Artesanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lavinadulce",
    creator: "@lavinadulce",
    title: "La Viña Dulce - Pastelería y Panadería Artesanal en Loja",
    description: "Deliciosas tortas personalizadas, repostería artesanal y catering para eventos en Loja, Ecuador.",
    images: ["/og-image.jpg"],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="La Viña Dulce" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600;700&family=Nunito:wght@300;400;500;600&family=Dancing+Script:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600;700&family=Nunito:wght@300;400;500;600&family=Dancing+Script:wght@400;700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "La Viña Dulce",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 18 de Noviembre",
                addressLocality: "Loja",
                addressRegion: "Loja",
                postalCode: "110150",
                addressCountry: "EC",
              },
              telephone: "+593995639050",
              email: "negocios@lavinadulce.com",
              url: "https://lavinadulce.com",
              logo: "https://lavinadulce.com/icon-512.png",
              image: "https://lavinadulce.com/og-image.jpg",
              sameAs: [
                "https://www.facebook.com/lavinadulceloja",
                "https://www.instagram.com/lavinadulce.loja",
                "https://wa.me/593995639050"
              ],
              openingHours: ["Mo-Sa 08:00-20:00", "Su 09:00-14:00"],
              servedCuisine: "Bakery, Pastries, Custom Cakes",
              priceRange: "$",
              geo: {
                "@type": "GeoCoordinates",
                latitude: -4.001655644624821,
                longitude: -79.20631532425732,
              },
              description:
                "Pastelería artesanal especializada en tortas personalizadas, repostería fresca y catering para eventos en Loja, Ecuador.",
            }),
          }}
        />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
              (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Lazy loading with Intersection Observer
              const images = document.querySelectorAll('img[data-src]');
              const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                  }
                });
              });
              images.forEach(img => imageObserver.observe(img));

              // Smooth scroll for anchor links
              document.addEventListener('DOMContentLoaded', function() {
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  });
                });

                // Keyboard navigation support
                document.addEventListener('keydown', (e) => {
                  if (e.key === 'Tab') {
                    document.body.classList.add('keyboard-navigation');
                  }
                });

                // WhatsApp click tracking
                document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
                  link.addEventListener('click', () => {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'whatsapp_click', {
                        'event_category': 'engagement',
                        'event_label': link.textContent || 'WhatsApp'
                      });
                    }
                  });
                });

                const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                };

                const scrollObserver = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('animate');
                    }
                  });
                }, observerOptions);

                // Observe all scroll-animate elements
                document.querySelectorAll('.scroll-animate').forEach((el, index) => {
                  el.style.setProperty('--animation-order', index.toString());
                  scrollObserver.observe(el);
                });

                document.querySelectorAll('.animate-on-scroll').forEach(el => {
                  scrollObserver.observe(el);
                });
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
