import { interrogantesArray } from '@/action/get-interrogantes-action'
import React, { useState } from 'react'


export default function InterrogantesMiic1() {
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
    
    return (
        <div className="relative">
            {/* Etiqueta del input */}
            <label htmlFor="interrogante" className="block mb-1 font-semibold ">
                ESCRIBA O SELECCIONE LA INTERROGANTE A UTILIZAR EN<span className='text-red-500'>PREGUNTA SECUNDARIA 1</span>:  <span className="text-xl font-bold text-gray-500">I</span>
            </label>

            {/* Input para seleccionar la preposición */}
            <input
                className="bg-white dark:text-black rounded-lg py-1 w-full p-2 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500 cursor-pointer"
                name="i1"
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
    )
}
