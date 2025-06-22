import { verbosArray } from '@/action/get-verbos-action'
import React, { useState } from 'react'
import { ResultadoMIIC } from './InterrogantesMiic';


export default function VerbosMiic2({ dataform }: { dataform: ResultadoMIIC }) {
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
    return (
        <div className="relative">
            {/* Etiqueta del input */}
            <label htmlFor="verbo" className="block mb-1 font-semibold">
                ESCRIBA O SELECCIONE EL VERBO A UTILIZAR EN<span className='text-red-500'>OBJETIVO ESPECIFICO 2</span>:  <span className="text-xl font-bold text-gray-500">V</span>
            </label>

            {/* Input para seleccionar la preposición */}
            <input
                className="bg-white dark:text-black rounded-lg py-1 w-full p-2 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500 cursor-pointer"
                name="v3"
                value={value2?value2:dataform.o2}
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
    )
}
