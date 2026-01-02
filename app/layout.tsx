import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SUNTOP INC - Custom Promotional Products Factory | Logo Apparel & Bulk Merchandise",
  description:
    "Help businesses bring their brand to life with high-quality custom promotional products. From logo apparel and bulk merchandise to gift giveaways and everyday items. Factory direct pricing, 7-day delivery, ISO 9001 certified.",
  keywords: [
    "custom promotional products",
    "logo apparel",
    "bulk merchandise",
    "branded products",
    "corporate gifts",
    "promotional items factory",
    "custom t-shirts",
    "branded drinkware",
  ],
  authors: [{ name: "SUNTOP INC" }],
  creator: "SUNTOP INC",
  publisher: "SUNTOP INC",
  metadataBase: new URL("https://suntopinc.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suntopinc.com",
    title: "SUNTOP INC - Custom Promotional Products Factory",
    description:
      "Help businesses bring their brand to life with high-quality custom promotional products. Factory direct pricing with 7-day delivery.",
    siteName: "SUNTOP INC",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUNTOP INC - Custom Promotional Products Factory",
    description:
      "Help businesses bring their brand to life with high-quality custom promotional products. Factory direct pricing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
