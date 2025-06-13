import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type TProblema = {
    subproblemas: string[],
    eliminarSubproblema: (index: number) => void,
    manejarCambio: (index: number, valor: string) => void,
    agregarSubproblema: () => void

}

export default function SubProblemaMiic({ subproblemas, manejarCambio, eliminarSubproblema, agregarSubproblema }: TProblema) {
    return (
        <>
            {/* Botón para agregar subproblemas */}
            {subproblemas.length < 5 && (
                <Button type="button" onClick={agregarSubproblema} className="bg-orange-400 hover:bg-orange-500 cursor-pointer text-white font-semibold px-4 py-2 rounded transition">
                    + Subproblema
                </Button>
            )}
            {subproblemas.length > 0 && (
                <div className="space-y-4">
                    {subproblemas.map((valor, index) => (
                        <div key={index} className="space-y-1 flex items-center gap-2">
                            <div className="flex-1">
                                <Label htmlFor={`subproblema-${index}`}>
                                    Subproblema #{index + 1}  <span className="text-xl font-bold text-gray-500">b{index + 1}</span>
                                </Label>
                                <Input
                                    id={`subproblema-${index}`}
                                    name="subproblemas[]"
                                    placeholder="Ejemplo: Falta de oportunidades laborales"
                                    value={valor}
                                    onChange={(e) => manejarCambio(index, e.target.value)}
                                    className="bg-white dark:text-black w-full p-3 px-5 border border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                                />
                            </div>
                            {/* Botón eliminar al lado derecho */}
                            <button
                                type="button"
                                onClick={() => eliminarSubproblema(index)}
                                className="text-red-500 text-xl hover:text-red-700 cursor-pointer"
                                title="Eliminar"
                            >
                                ❌
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
