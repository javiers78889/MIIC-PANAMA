import "./globals.css"
import { Inter } from "next/font/google"


import type React from "react"
import { ToastContainer } from 'react-toastify'
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header"
import Head from "next/head"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MIIC-PANAMÁ",
  description: "PROYECTO MIIC-PANAMÁ",

}

type TChild = {
  readonly children: React.ReactNode
}

export default function RootLayout({
  children,
}: TChild) {

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastContainer />
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
