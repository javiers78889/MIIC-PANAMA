import React from 'react'
import { Input } from '../ui/input'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'


type SubCause = {
    causas: string[],
    agregarCausa: () => void,
    manejarCambioCausa: (index: number, valor: string) => void,
    eliminarSubcausa: (index: number) => void

}

export default function SubCausasMiic({ causas, agregarCausa, manejarCambioCausa,eliminarSubcausa }: SubCause) {
    return (
        <>
            {/* Botón para agregar subcausas */}
            {causas.length < 5 && (
                <Button
                    type="button"
                    onClick={agregarCausa}
                    className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded transition cursor-pointer"
                >
                    + Subcausa
                </Button>
            )}

            {/* Mostrar subcausas solo si hay alguna */}
            {causas.length > 0 && (
                <div className="space-y-4">
                    {causas.map((valor, index) => (
                        <div key={index} className="space-y-1">
                            <Label htmlFor={`subcausa-${index}`}>
                                Subcausa #{index + 1}  <span className="text-xl font-bold text-gray-500">a{index + 1}</span>
                            </Label>
                            <div className="flex gap-2 items-center">
                                <Input
                                    id={`subcausa-${index}`}
                                    name="subcausas[]"
                                    placeholder="Ejemplo: Falta de experiencia laboral"
                                    value={valor}
                                    onChange={(e) => manejarCambioCausa(index, e.target.value)}
                                    className="bg-white dark:text-black w-full p-3 px-5 border border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => eliminarSubcausa(index)}
                                    className="text-red-500 text-xl hover:text-red-700 cursor-pointer"
                                    title="Eliminar"
                                >
                                    ❌
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </>
    )
}
