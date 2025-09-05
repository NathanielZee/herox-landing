import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Herox - Your Ultimate Anime Streaming Experience",
  description:
    "Stream and download your favorite anime in HD with HeroX. Fast servers, no ads while watching, and offline downloads. Built for anime fans, by anime fans.",
  generator: "v0.app",
  openGraph: {
    title: "Herox - Your Ultimate Anime Streaming Experience",
    description:
      "Stream and download your favorite anime in HD with HeroX. Fast servers, no ads while watching, and offline downloads.",
    type: "website",
    url: "https://herox-app.vercel.app",
    images: [
      {
        url: "/herox-og.png",
        width: 1200,
        height: 630,
        alt: "Herox Anime Streaming App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herox - Your Ultimate Anime Streaming Experience",
    description:
      "Stream and download your favorite anime in HD with HeroX. Fast servers, no ads while watching, and offline downloads.",
    images: ["/herox-og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="KQCzOeh4icZNFrZLuf9iqS-WFLcmT3aVhmvScCIu5Bg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}> 
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
