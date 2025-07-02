import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedBackground from "@/components/AnimatedBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raj Makwana",
  description: "A showcase of my work, skills, and journey as a developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <AnimatedBackground />
            <Navbar />
            <main className="flex-grow z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
