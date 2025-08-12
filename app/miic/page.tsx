"use client"

import React, { useEffect, useRef, useTransition } from "react"

import { useActionState, useState } from "react"
import { Card } from "@/components/ui/card"
import generateInfoAction from "@/action/generate-info-action"
import ResultadoMiic from "@/components/miic/ResultadoMiic"
import ItemsFormulaioMiic from "@/components/miic/FomularioMiic/ItemsFormulaioMiic"
import { toast } from "react-toastify"
import PayPalButton from "@/components/Payment-modal"
import * as Dialog from "@radix-ui/react-dialog";
import { CreditCard } from "lucide-react"
import { userOnline } from "@/action/user-online-action"




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

  const [isPending, startTransition] = useTransition()

  const onSubmit = (formData: FormData) => {

    startTransition(() => {
      dispatch(formData)
    })

  }
  const [open, setOpen] = React.useState(false);
  const [canitdad, setCantidad] = useState(7)
  const [monto, setMonto] = useState(0)



  useEffect(() => {

    if (canitdad === 7) {
      setMonto(2.00)
    }
    if (canitdad === 17) {
      setMonto(5.00)
    }
    if (canitdad === 50) {
      setMonto(10.00)
    }

    console.log(canitdad, monto)

  }, [canitdad])


  const [online, setOnline] = useState({ name: '', cant_token: 0 })
  const [loaded, setLoaded] = useState(false) // para controlar render estable

  useEffect(() => {
    async function fetchData() {
      try {
        const dataOnline = await userOnline()
        if (dataOnline?.success?.length > 0) {
          setOnline(dataOnline.success[0])
        } else {
          setOnline({ name: '', cant_token: 0 }) // valor seguro
        }
      } catch (err) {
        console.error("Error cargando usuario:", err)
        setOnline({ name: '', cant_token: 0 }) // evitar undefined
      } finally {
        setLoaded(true)
      }
    }
    fetchData()

  }, [])


  return (
    <div className="bg-amber-50 container mx-auto py-8 w-full">
      {loaded ? (
        <h2 className="text-black font-bold text-center">
          {online.name} tienes (<span className="font-black text-red-500">{online.cant_token}</span> Tokens)
        </h2>
      ) : (
        <h2 className="text-black font-bold text-center">Cargando usuario...</h2>
      )}

      <div className="flex items-center justify-center pb-6">

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="flex gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-700 cursor-pointer font-bold">
              Comprar Tokens con <span className="text-blue-600 font-black">Pay<span className="text-blue-400">Pal</span></span> <CreditCard />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

            <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md w-full p-6 bg-white rounded shadow-lg -translate-x-1/2 -translate-y-1/2">
              <Dialog.Title className="text-lg font-semibold text-black">Pago con PayPal</Dialog.Title>
              <div className="mt-2 text-sm text-gray-600">
                Completa tu pago usando PayPal
              </div>

              <div className="mt-4 flex flex-col gap-4 justify-center items-center">
                <select className="px-2 py-1 rounded-lg text-black border-2 border-black text-center" value={canitdad} onChange={(e) => setCantidad(Number(e.target.value))}>
                  <option value={7}>7 Token - 2.00 $</option>
                  <option value={17}>17 Tokens - 5.00 $</option>
                  <option value={50}>50 Tokens - 10.00 $</option>
                </select>


                <PayPalButton amount={monto} cantidad={canitdad} />




              </div>

              <Dialog.Close asChild>
                <button
                  className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl font-bold"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>

      <h1 className="mt-6 mb-14 text-4xl font-bold text-center dark:text-black">Formulación de elementos para el protocolo de tesis según la Metodología Invertida para la Investigación Científica (MIIC)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form on the left */}
        <div>
          <Card className="p-6 border-none shadow-none h-[80vh] overflow-y-auto">
            <form className="space-y-0 flex flex-col gap-8 dark:text-black" action={onSubmit} ref={ref}>

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
                setValue3={setValue3}
                setValue={setValue}
                setValue2={setValue2}
              />

            </form>
          </Card>
        </div>

        {/* Display box on the right */}

        <ResultadoMiic state={state.success[0]} isPending={isPending} />




      </div>
    </div >
  )
}
