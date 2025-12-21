import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Wedding Turbans in Jaipur | Safawala Safa & Pagdi Services | 40+ Years Heritage",
  description:
    "Safawala - India's best wedding turban service in Jaipur since 1980s. Expert safa, pagdi, feta & sehra tying for grooms & baraatis. Premium Rajasthani wedding turbans. Same-day delivery & on-site styling. Book now!",
  keywords:
    "wedding turban Jaipur, safa Jaipur, pagdi tying service, groom turban, Rajasthani turban, wedding safa, turban rental Jaipur, best turban service Jaipur, feta, sehra, barati safa, groom pagdi, traditional turban, custom wedding turban, turban tying near me, wedding turban price, destination wedding turban, groom pagdi design, wedding turban styling",
  authors: [{ name: "Safawala Wedding Turbans Jaipur" }],
  creator: "Safawala Wedding Turbans",
  publisher: "Safawala Wedding Turbans",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://safawala.com"),
  alternates: {
    canonical: "https://safawala.com",
  },
  openGraph: {
    title: "Premium Wedding Turbans in Jaipur | Safawala - 40+ Years of Heritage",
    description:
      "Expert safa, pagdi, feta & sehra tying for grooms, baraatis & destination weddings. Premium Rajasthani wedding turbans. Same-day service & styling available.",
    url: "https://safawala.com",
    siteName: "Safawala Wedding Turbans Jaipur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/SAFAWALA LOGO.png",
        width: 1200,
        height: 630,
        alt: "Safawala - Premium Wedding Turbans & Safa Service in Jaipur",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safawala - Premium Wedding Turbans Jaipur | Expert Safa & Pagdi Service",
    description: "40+ years of heritage. Expert turban tying, safa & pagdi services for Rajasthani weddings in Jaipur. Same-day delivery & styling.",
    images: ["/SAFAWALA LOGO.png"],
    creator: "@safawalaofficial",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Wedding Services",
  classification: "Wedding Turban & Safa Service",
  applicationName: "Safawala Wedding Turbans",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Safawala Wedding Turbans",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/image.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/image.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png?v=1" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
