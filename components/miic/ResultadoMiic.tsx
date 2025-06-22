"use client"
import React, { useActionState } from 'react'
import { Card } from '../ui/card'
import { investigacionSchemaType } from '@/src'
import ButtonChildsave from '../widgets/Button copy'
import SaveDataForm from './SaveDataForm/SaveDataForm'
import { saveData } from '@/action/save-data-action'


type TResult = {
    readonly state: investigacionSchemaType
}

export default function ResultadoMiic({ state }: TResult) {

    const [states, dispatch] = useActionState(saveData, { success: '', error: [] })

    return (
        <div>
            <Card className="p-6 h-full border-0 lg:border-l-1 shadow-none rounded-none dark:text-black">
                <div className="space-y-2">
                    <h2 className="pb-3 text-3xl text-center font-semibold">Formulación de:</h2>
                    <div className="bg-white border rounded-md p-4 min-h-[300px] bg-muted/30 overflow-y-auto h-170">
                        {state ? (
                            <div className="flex flex-col gap-2 ">

                                <div className="animate-fade-in">
                                    <h1 className="font-black text-red-500">1. Pregunta Principal de Investigación (P.P.I)</h1>
                                    <p>{state["1. Pregunta Principal de Investigación (P.P.I)"]}</p>

                                    <h1 className="font-black text-red-500">2. Objetivo General</h1>
                                    <p>{state["2. Objetivo General"]}</p>

                                    <h1 className="font-black text-red-500">3. Título del Proyecto</h1>
                                    <p>{state["3. Título del Proyecto"]}</p>

                                    <h1 className="font-black text-red-500">4. Hipótesis</h1>
                                    <p>{state["4. Hipótesis"]}</p>

                                    <h1 className="font-black text-red-500">5. Hipótesis Nula</h1>
                                    <p>{state["5. Hipótesis Nula"]}</p>

                                    <h1 className="font-black text-red-500">6. Pregunta Secundaria 1</h1>
                                    <p>{state["6. Pregunta Secundaria 1"]}</p>

                                    <h1 className="font-black text-red-500">7. Pregunta Secundaria 2</h1>
                                    <p>{state["7. Pregunta Secundaria 2"]}</p>

                                    <h1 className="font-black text-red-500">8. Pregunta Secundaria 3</h1>
                                    <p>{state["8. Pregunta Secundaria 3"]}</p>

                                    <h1 className="font-black text-red-500">9. Objetivo Específico 1</h1>
                                    <p>{state["9. Objetivo Específico 1"]}</p>

                                    <h1 className="font-black text-red-500">10. Objetivo Específico 2</h1>
                                    <p>{state["10. Objetivo Específico 2"]}</p>

                                    <h1 className="font-black text-red-500">11. Objetivo Específico 3</h1>
                                    <p>{state["11. Objetivo Específico 3"]}</p>


                                </div>

                            </div>
                        ) : (
                            <div className="text-muted-foreground text-center h-full flex items-center justify-center">
                                Su resultado aparecerá aquí una vez que envíe el formulario.

                            </div>
                        )}
                    </div>
                    {state ? (
                        <form action={dispatch}>

                            <SaveDataForm state={state} />
                            <ButtonChildsave>Guardar Datos</ButtonChildsave>
                        </form>
                    ) : ''}

                </div>
            </Card>
        </div>
    )
}
