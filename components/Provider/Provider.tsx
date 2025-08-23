// app/Providers.tsx
"use client"

import { ThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import React from "react"

const queryClient = new QueryClient()

export function Providers({ children }: { readonly children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ToastContainer />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
