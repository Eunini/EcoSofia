import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate viewport export as recommended by Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "EcoSofia - Природне здоров'я та сучасні рішення",
    template: "%s | EcoSofia"
  },
  description: "EcoSofia - ваш надійний партнер у сфері здоров'я. Ми пропонуємо кваліфікованих спеціалістів, якісні послуги та екологічні рішення для вашого здоров'я.",
  keywords: ["здоров'я", "медицина", "екологія", "консультації", "лікарі", "нутриціолог", "дієтолог", "гастроентеролог", "EcoSofia"],
  authors: [{ name: "EcoSofia Team" }],
  creator: "EcoSofia",
  publisher: "EcoSofia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ecosofia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'uk-UA': '/uk',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "EcoSofia - Природне здоров'я та сучасні рішення",
    description: "Ваш надійний партнер у сфері здоров'я. Кваліфіковані спеціалісти, якісні послуги та екологічні рішення.",
    url: 'https://ecosofia.com',
    siteName: 'EcoSofia',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'EcoSofia Logo',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EcoSofia - Природне здоров'я та сучасні рішення",
    description: "Ваш надійний партнер у сфері здоров'я. Кваліфіковані спеціалісти, якісні послуги та екологічні рішення.",
    images: ['/logo.png'],
    creator: '@ecosofia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
        color: '#E8888A',
      },
    ],
  },
  manifest: '/manifest.json',
  category: 'healthcare',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <meta name="theme-color" content="#E8888A" />
        <meta name="msapplication-TileColor" content="#E8888A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
