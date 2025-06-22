import { preposicionesArray } from '@/action/get-preposiciones-action'
import React from 'react'

type dat = {
    preposicionSugerida: string;
    ppi: string;
    i1: string;
    i2: string;
    i3: string;
    verbo: string;
    verboOE1: string;
    verboOE2: string;
    verboOE3: string;
    og: string;
    o1: string;
    o2: string;
    o3: string;
};

type TPrepo = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>,
    showSuggestions: boolean,
    handleSelect: (palabra: string) => void
    dataform: dat


}

export default function PreposicionesMiic({ dataform, value, handleChange, setShowSuggestions, showSuggestions, handleSelect }: TPrepo) {
    return (
        <div className="relative">
            {/* Etiqueta del input */}
            <label htmlFor="preposicion" className="block mb-1 font-semibold">
                ESCRIBA O SELECCIONE LA PREPOSICIÓN A UTILIZAR:  <span className="text-xl font-bold text-gray-500">P</span>
            </label>

            {/* Input para seleccionar la preposición */}
            <input
                className="bg-white dark:text-black rounded-lg py-1 w-full p-2 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500 cursor-pointer"
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
    )
}
