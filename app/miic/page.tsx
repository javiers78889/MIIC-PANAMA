"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import FormularioMiic from "@/components/miic/FormularioMiic"

export default function TextGenerator() {
  const [inputText, setInputText] = useState("")
  const [generatedText, setGeneratedText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)


  return (
    <div className="container mx-auto py-8 w-full">
      <h1 className="mb-6 text-2xl font-bold text-center">Generador de Texto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form on the left */}
        <div>
          <Card className="p-6 border-none shadow-none">
            <FormularioMiic/>
          </Card>
        </div>

        {/* Display box on the right */}
        <div>
          <Card className="p-6 h-full border-0 lg:border-l-1 shadow-none rounded-none">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Texto Generado</h2>
              <div className="border rounded-md p-4 min-h-[300px] bg-muted/30">
                {generatedText ? (
                  <div className="animate-fade-in">{generatedText}</div>
                ) : (
                  <div className="text-muted-foreground text-center h-full flex items-center justify-center">
                    El texto generado aparecerá aquí
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
