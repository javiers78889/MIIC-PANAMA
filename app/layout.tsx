import "./globals.css"
import { Inter } from "next/font/google"


import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Creative Agency",
  description: "Apple-inspired design portfolio",
}

type TChild = {
  readonly children: React.ReactNode
}

export default function RootLayout({
  children,
}: TChild) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className=" sticky top-0 z-50 border-b-1 ">
            <Header />
          </div>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
