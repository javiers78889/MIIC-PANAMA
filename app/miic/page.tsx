"use client"

import React, { useEffect, useRef } from "react"

import { useActionState, useState } from "react"
import { Card } from "@/components/ui/card"
import generateInfoAction from "@/action/generate-info-action"
import ResultadoMiic from "@/components/miic/ResultadoMiic"
import ItemsFormulaioMiic from "@/components/miic/FomularioMiic/ItemsFormulaioMiic"
import { toast } from "react-toastify"



export default function TextGenerator() {
  const ref = useRef<HTMLFormElement>(null) // evita que se recargue la pantalla al hacer submit

  // Estado para el valor del input de preposciones
  const [state, dispatch] = useActionState(generateInfoAction, { success: [], error: [] }); // Estado para manejar el resultado de la acción
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

  // Función para manejar los subproblemas
  const [subproblemas, setSubproblemas] = useState<string[]>([]);

  const agregarSubproblema = () => {
    if (subproblemas.length < 5) {
      setSubproblemas([...subproblemas, ""]);
    }
  };

  const manejarCambio = (index: number, valor: string) => {
    const nuevos = [...subproblemas];
    nuevos[index] = valor;
    setSubproblemas(nuevos);
  };

  const eliminarSubproblema = (index: number) => {
    const nuevos = subproblemas.filter((_, i) => i !== index);
    setSubproblemas(nuevos);
  };


  // Función para manejar las subcausas
  const [causas, setCausas] = useState<string[]>([]);

  const agregarCausa = () => {
    if (causas.length < 5) {
      setCausas((prev) => [...prev, ""]);
    }
  };

  const manejarCambioCausa = (index: number, valor: string) => {
    setCausas((prev) => {
      const nuevos = [...prev];
      nuevos[index] = valor;
      return nuevos;
    });
  };

  const eliminarSubcausa = (index: number) => {
    setCausas((prev) => prev.filter((_, i) => i !== index));
  };
  useEffect(() => {
    if (state.error) {
      state.error.map(e => {
        toast.error(e)
      })
    }
    if (state.success) {
      ref.current?.reset()
    }
  }, [state])

  return (
    <div className="bg-amber-50 container mx-auto py-8 w-full">
      <h1 className="mt-6 mb-14 text-4xl font-bold text-center dark:text-black">Formulación de elementos para el protocolo de tesis según la Metodología Invertida para la Investigación (MIIC)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form on the left */}
        <div>
          <Card className="p-6 border-none shadow-none">
            <form className="space-y-0 flex flex-col gap-8 dark:text-black" action={dispatch} ref={ref}>

              <ItemsFormulaioMiic
                subproblemas={subproblemas}
                manejarCambio={manejarCambio}
                eliminarSubproblema={eliminarSubproblema}
                agregarSubproblema={agregarSubproblema}

                causas={causas}
                agregarCausa={agregarCausa}
                manejarCambioCausa={manejarCambioCausa}
                eliminarSubcausa={eliminarSubcausa}

                value3={value3}
                handleChange3={handleChange3}
                setShowSuggestions3={setShowSuggestions3}
                showSuggestions3={showSuggestions3}
                handleSelect3={handleSelect3}

                value2={value2}
                handleChange2={handleChange2}
                setShowSuggestions2={setShowSuggestions2}
                showSuggestions2={showSuggestions2}
                handleSelect2={handleSelect2}

                value={value}
                handleChange={handleChange}
                setShowSuggestions={setShowSuggestions}
                showSuggestions={showSuggestions}
                handleSelect={handleSelect}
              />

            </form>
          </Card>
        </div>

        {/* Display box on the right */}
        <ResultadoMiic state={state.success[0]} />
      </div>
    </div >
  )
}
