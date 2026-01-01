import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adnan | Junior Developer Portfolio",
  description:
    "Junior Developer with a security mindset. Building modern web experiences, practical automations, and AI-powered solutions for real businesses.",
  keywords: ["developer", "portfolio", "web development", "automation", "AI", "security", "Belgium"],
  authors: [{ name: "Adnan" }],
  creator: "Adnan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Adnan | Junior Developer Portfolio",
    description:
      "Junior Developer with a security mindset. Building modern web experiences, practical automations, and AI-powered solutions.",
    siteName: "Adnan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan | Junior Developer Portfolio",
    description:
      "Junior Developer with a security mindset. Building modern web experiences, practical automations, and AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
