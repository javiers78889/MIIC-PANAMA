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

  
    

    return (
      <div className="bg-amber-50 container mx-auto py-8 w-full">
        <h1 className="mt-6 mb-14 text-4xl font-bold text-center dark:text-black">Formulación de elementos para el protocolo de tesis según la Metodología Invertida para la Investigación (MIIC)</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form on the left */}
          <div>
            <Card className="p-6 border-none shadow-none">
              <form className="space-y-0 flex flex-col gap-8 dark:text-black" action={dispatch}>

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES EL PROBLEMA O EFECTO?</Label>
                  <Input name='problema' className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: Desempleo" required />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES UNA POSIBLE CAUSA?</Label>
                  <Input name='causa' className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: Experiencia laboral" required />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES EL SUJETO DE ESTUDIO?</Label>
                  <Input name='sujeto' className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: Estudiantes" required />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="title">¿CUÁL ES EL CONTEXTO DONDE SE DESARROLLARÁ LA INVESTIGACIÓN?</Label>
                  <Input name='contexto' className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: ISAE Universidad" required />
                </div>

                


                                                                              {/*LAS INTERROGANTES*/}

                  <div className="relative">
                  {/* Etiqueta del input */}
                  <label htmlFor="interrogante" className="block mb-1 font-semibold ">
                    ESCRIBA O SELECCIONE LA INTERROGANTE A UTILIZAR:
                  </label>

                  {/* Input para seleccionar la preposición */}
                  <input
                    className="bg-white dark:text-black rounded-lg py-1 w-full p-2 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                    name="interrogante"
                    value={value3}
                    onChange={handleChange3} // Llama a handleChange cuando el usuario escribe
                    placeholder="Escribe o selecciona"
                    onFocus={() => setShowSuggestions3(true)} // Muestra las sugerencias cuando el input tiene el foco
                    onBlur={() => setTimeout(() => setShowSuggestions3(false), 100)} // Oculta las sugerencias cuando el input pierde el foco
                  />

                  {/* Muestra las sugerencias cuando showSuggestions es true */}
                  {showSuggestions3 && (
                    <ul className="absolute z-20 bg-white border border-gray-300 mt-1 rounded-lg max-h-92 overflow-auto w-full shadow-lg">
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
                    className="bg-white dark:text-black rounded-lg py-1 w-full p-2 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                    name="verbo"
                    value={value2}
                    onChange={handleChange2} // Llama a handleChange cuando el usuario escribe
                    placeholder="Escribe o selecciona"
                    onFocus={() => setShowSuggestions2(true)} // Muestra las sugerencias cuando el input tiene el foco
                    onBlur={() => setTimeout(() => setShowSuggestions2(false), 100)} // Oculta las sugerencias cuando el input pierde el foco
                  />

                  {/* Muestra las sugerencias cuando showSuggestions es true */}
                  {showSuggestions2 && (
                    <ul className="absolute z-20 bg-white border border-gray-300 mt-1 rounded-lg max-h-92 overflow-auto w-full shadow-lg">
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
                    className="bg-white dark:text-black rounded-lg py-1 w-full p-2 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                    name="preposicion"
                    value={value}
                    onChange={handleChange} // Llama a handleChange cuando el usuario escribe
                    placeholder="Escribe o selecciona"
                    onFocus={() => setShowSuggestions(true)} // Muestra las sugerencias cuando el input tiene el foco
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Oculta las sugerencias cuando el input pierde el foco
                  />

                  {/* Muestra las sugerencias cuando showSuggestions es true */}
                  {showSuggestions && (
                    <ul className="absolute z-20 bg-white border border-gray-300 mt-1 rounded-lg max-h-92 overflow-auto w-full shadow-lg">
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




                                                                             {/*LBOTON DE ENVIO*/}

                <Button type="submit" className="relative overflow-hidden px-6 py-3 rounded-lg cursor-pointer
                                                bg-white text-indigo-600 border-2 border-indigo-500
                                                transition-all duration-170 ease-in-out
                                                active:scale-95
                                                before:content-[''] before:absolute before:inset-0
                                                before:bg-indigo-500 before:scale-y-0 before:origin-bottom
                                                hover:before:scale-y-100
                                                before:transition-transform before:duration-230 before:ease-in-out
                                                before:z-0
                                                z-10
                                                hover:text-white">
                  <span className="relative z-10">Obtener Resultado</span>
                </Button>

              </form>
            </Card>
          </div>


          {/* Display box on the right */}
          <div>
            <Card className="p-6 h-full border-0 lg:border-l-1 shadow-none rounded-none dark:text-black">
              <div className="space-y-2">
                <h2 className="pb-5 text-xl text-center font-semibold">Formulación de elementos para el protocolo de tesis según la Metodología Invertida para la Investigación (MIIC)</h2>
                <div className="bg-white border rounded-md p-4 min-h-[300px] bg-muted/30 overflow-y-auto h-170">
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
                      Su resultado aparecerá aquí una vez que envíe el formulario.
                     
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
