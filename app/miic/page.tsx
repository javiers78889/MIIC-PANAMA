"use client"

import React from "react"

import { useActionState, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

import generateInfoAction from "@/action/generate-info-action"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "react-toastify"
import { preposicionesArray } from "@/action/get-preposiciones-action"
import { verbosArray } from "@/action/get-verbos-action"
import { interrogantesArray } from "@/action/get-interrogantes-action"


export default function TextGenerator() {


  // Estado para el valor del input de preposciones

    const [value, setValue] = useState(''); // Estado para el valor del input
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value); // Actualiza el valor del input con lo que el usuario escribe
    };

    // Función para manejar la selección de una preposición
    const handleSelect = (palabra: string) => {
      setValue(palabra); // Establece el valor del input a la preposición seleccionada
      setShowSuggestions(false); // Oculta las sugerencias después de la selección
    };



    // Estado para el valor del input de verbos
    
    const [value2, setValue2] = useState(''); // Estado para el valor del input
    const [showSuggestions2, setShowSuggestions2] = useState(false);
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue2(e.target.value); // Actualiza el valor del input con lo que el usuario escribe
    };

    // Función para manejar la selección de una preposición
    const handleSelect2 = (palabra: string) => {
      setValue2(palabra); // Establece el valor del input a la preposición seleccionada
      setShowSuggestions2(false); // Oculta las sugerencias después de la selección
    };



        // Estado para el valor del input de las interrogantes
    
        const [value3, setValue3] = useState(''); // Estado para el valor del input
        const [showSuggestions3, setShowSuggestions3] = useState(false);
        const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
          setValue3(e.target.value); // Actualiza el valor del input con lo que el usuario escribe
        };
    
        // Función para manejar la selección de una preposición
        const handleSelect3 = (palabra: string) => {
          setValue3(palabra); // Establece el valor del input a la preposición seleccionada
          setShowSuggestions3(false); // Oculta las sugerencias después de la selección
        };



    
    const [state, dispatch] = useActionState(generateInfoAction, { success: "", error: [] })
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

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES EL PROBLEMA O EFECTO?</Label>
                  <Input name='problema' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Desempleo" required />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES UNA POSIBLE CAUSA?</Label>
                  <Input name='causa' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Experiencia laboral" required />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES EL SUJETO DE ESTUDIO?</Label>
                  <Input name='sujeto' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Estudiantes" required />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES EL CONTEXTO DONDE SE DESARROLLARÁ LA INVESTIGACIÓN?</Label>
                  <Input name='contexto' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: ISAE Universidad" required />
                </div>

                


                                                                              {/*LAS INTERROGANTES*/}

                  <div className="relative">
                  {/* Etiqueta del input */}
                  <label htmlFor="interrogante" className="block mb-1 font-semibold">
                    ESCRIBA O SELECCIONE LA INTERROGANTE A UTILIZAR:
                  </label>

                  {/* Input para seleccionar la preposición */}
                  <input
                    className="bg-white dark:text-black border-2 rounded-lg py-2 px-2 w-full"
                    name="interrogante"
                    value={value3}
                    onChange={handleChange3} // Llama a handleChange cuando el usuario escribe
                    placeholder="Escribe o selecciona"
                    onFocus={() => setShowSuggestions3(true)} // Muestra las sugerencias cuando el input tiene el foco
                    onBlur={() => setTimeout(() => setShowSuggestions3(false), 100)} // Oculta las sugerencias cuando el input pierde el foco
                  />

                  {/* Muestra las sugerencias cuando showSuggestions es true */}
                  {showSuggestions3 && (
                    <ul className="absolute z-10 bg-white border mt-1 rounded-lg max-h-48 overflow-auto w-full shadow">
                      {interrogantesArray
                        .filter((item) =>
                          item.palabra.toLowerCase().includes(value3.toLowerCase()) // Filtra las sugerencias basadas en lo que el usuario escribe
                        )
                        .map((interrogante) => (
                          <li
                            key={interrogante.palabra}
                            onClick={() => handleSelect3(interrogante.palabra)} // Llama a handleSelect cuando se hace clic en una opción
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                          >
                            <div className="font-bold">{interrogante.palabra}</div>
                            <div className="text-sm text-gray-600">{interrogante.descripcion}</div>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>



                                                                              {/*LOS VERBOS*/}

                <div className="relative">
                  {/* Etiqueta del input */}
                  <label htmlFor="verbo" className="block mb-1 font-semibold">
                    ESCRIBA O SELECCIONE EL VERBO A UTILIZAR:
                  </label>

                  {/* Input para seleccionar la preposición */}
                  <input
                    className="bg-white dark:text-black border-2 rounded-lg py-2 px-2 w-full"
                    name="verbo"
                    value={value2}
                    onChange={handleChange2} // Llama a handleChange cuando el usuario escribe
                    placeholder="Escribe o selecciona"
                    onFocus={() => setShowSuggestions2(true)} // Muestra las sugerencias cuando el input tiene el foco
                    onBlur={() => setTimeout(() => setShowSuggestions2(false), 100)} // Oculta las sugerencias cuando el input pierde el foco
                  />

                  {/* Muestra las sugerencias cuando showSuggestions es true */}
                  {showSuggestions2 && (
                    <ul className="absolute z-10 bg-white border mt-1 rounded-lg max-h-48 overflow-auto w-full shadow">
                      {verbosArray
                        .filter((item) =>
                          item.palabra.toLowerCase().includes(value2.toLowerCase()) // Filtra las sugerencias basadas en lo que el usuario escribe
                        )
                        .map((verbo) => (
                          <li
                            key={verbo.palabra}
                            onClick={() => handleSelect2(verbo.palabra)} // Llama a handleSelect cuando se hace clic en una opción
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                          >
                            <div className="font-bold">{verbo.palabra}</div>
                            <div className="text-sm text-gray-600">{verbo.descripcion}</div>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>





                                                                              {/*LAS PREPOSICIONES*/}

                <div className="relative">
                  {/* Etiqueta del input */}
                  <label htmlFor="preposicion" className="block mb-1 font-semibold">
                    ESCRIBA LA PREPOSICIÓN A UTILIZAR:
                  </label>

                  {/* Input para seleccionar la preposición */}
                  <input
                    className="bg-white dark:text-black border-2 rounded-lg py-2 px-2 w-full"
                    name="preposicion"
                    value={value}
                    onChange={handleChange} // Llama a handleChange cuando el usuario escribe
                    placeholder="Escribe o selecciona"
                    onFocus={() => setShowSuggestions(true)} // Muestra las sugerencias cuando el input tiene el foco
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Oculta las sugerencias cuando el input pierde el foco
                  />

                  {/* Muestra las sugerencias cuando showSuggestions es true */}
                  {showSuggestions && (
                    <ul className="absolute z-10 bg-white border mt-1 rounded-lg max-h-48 overflow-auto w-full shadow">
                      {preposicionesArray
                        .filter((item) =>
                          item.palabra.toLowerCase().includes(value.toLowerCase()) // Filtra las sugerencias basadas en lo que el usuario escribe
                        )
                        .map((preposicion) => (
                          <li
                            key={preposicion.palabra}
                            onClick={() => handleSelect(preposicion.palabra)} // Llama a handleSelect cuando se hace clic en una opción
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                          >
                            <div className="font-bold">{preposicion.palabra}</div>
                            <div className="text-sm text-gray-600">{preposicion.descripcion}</div>
                          </li>
                        ))}
                    </ul>
                  )}
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
                      <div className="animate-fade-in">
                        {state.success && state.success.split('\n').map((linea: string, index: number) => (
                          <React.Fragment key={index}>
                            {linea}
                            <br />
                          </React.Fragment>
                        ))}


                      </div>

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
