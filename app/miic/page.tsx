"use client"

import type React from "react"

import { useActionState, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

import generateInfoAction from "@/action/generate-info-action"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "react-toastify"


export default function TextGenerator() {
  const [state, dispatch] = useActionState(generateInfoAction, { success: [], error: [] })
  useEffect(() => {

    if (state.error) {
      state.error.map(error => {
        toast.error(error)
      })
    }

  }, [state])

  return (
    <div className="container mx-auto py-8 w-full">
      <h1 className="mb-6 text-2xl font-bold text-center">Generador de Texto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form on the left */}
        <div>
          <Card className="p-6 border-none shadow-none">
            <form className="space-y-4 flex flex-col gap-8" action={dispatch}>
              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES EL PROBLEMA O EFECTO?</Label>
                <Input name='problema' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Desempleo" required/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES UNA POSIBLE CAUSA?</Label>
                <Input name='causa' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Experiencia laboral" required/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES EL SUJETO DE ESTUDIO?</Label>
                <Input name='sujeto' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Estudiantes" required/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES EL CONTEXTO DONDE SE DESARROLLARÁ LA INVESTIGACIÓN?</Label>
                <Input name='contexto' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: ISAE Universidad"required />
              </div>


              <Button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 cursor-pointer uppercase font-bold text-white text-lg " >
                Generar Texto
              </Button>

            </form>
          </Card>
        </div>

        {/* Display box on the right */}
        <div>
          <Card className="p-6 h-full border-0 lg:border-l-1 shadow-none rounded-none  ">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Texto Generado</h2>
              <div className="border rounded-md p-4 min-h-[300px] bg-muted/30 overflow-y-auto h-110">
                {state.success.length ? (
                  <div className="flex flex-col gap-2 ">
                    <h1 className="font-bold text-xl">Pregunta Principal</h1>
                    <div className="animate-fade-in">{state.success[0].Pprincipal}</div>
                    <h1 className="font-bold text-xl">Objetivo General</h1>
                    <div className="animate-fade-in">{state.success[0].objPrincipal}</div>
                    <h1 className="font-bold text-xl">Titulo</h1>
                    <div className="animate-fade-in">{state.success[0].titulo}</div>
                    <h1 className="font-bold text-xl">Hipotesis</h1>
                    <div className="animate-fade-in">{state.success[0].hipotesis}</div>
                    <h1 className="font-bold text-xl">Hipostesis Nula</h1>
                    <div className="animate-fade-in">{state.success[0].hipotesis_nula}</div>

                  </div>
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
