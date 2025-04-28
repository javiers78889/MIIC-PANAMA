"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function TextGenerator() {
  const [inputText, setInputText] = useState("")
  const [generatedText, setGeneratedText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate text generation with a timeout
    setTimeout(() => {
      setGeneratedText(inputText)
      setIsGenerating(false)
    }, 500)
  }

  return (
    <div className="container mx-auto py-8 w-full">
      <h1 className="mb-6 text-2xl font-bold text-center">Generador de Texto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form on the left */}
        <div>
          <Card className="p-6 bg-red-500">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input id="title" placeholder="Ingrese un título" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="text-input">Texto</Label>
                <Textarea
                  id="text-input"
                  placeholder="Ingrese su texto aquí..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="style">Estilo</Label>
                <select id="style" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="creative">Creativo</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-amber-400 uppercase font-bold text-white text-lg " >
                {isGenerating ? "Generando..." : "Generar Texto"}
              </Button>
            </form>
          </Card>
        </div>

        {/* Display box on the right */}
        <div>
          <Card className="p-6 h-full">
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
