"use client"
import React from 'react'
import { Card } from '../ui/card'


type TResult = {
    state: { success: string, error: string[] }
}

export default function ResultadoMiic({ state }: TResult) {
    console.log(state.success)
    return (
        <div>
            <Card className="p-6 h-full border-0 lg:border-l-1 shadow-none rounded-none dark:text-black">
                <div className="space-y-2">
                    <h2 className="pb-3 text-3xl text-center font-semibold">Formulación de:</h2>
                    <div className="bg-white border rounded-md p-4 min-h-[300px] bg-muted/30 overflow-y-auto h-170">
                        {state.success.length ? (
                            <div className="flex flex-col gap-2 ">
                                
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
    )
}
