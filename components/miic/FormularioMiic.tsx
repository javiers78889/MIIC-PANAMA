"use client"
import React, { useActionState, useEffect } from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import generateInfoAction from '@/action/generate-info-action'

export default function FormularioMiic() {
    const [state, dispatch] = useActionState(generateInfoAction,{success:[], error:[]})
    useEffect(()=>{

      if(state.success)
      {
        toast.success(state.success)
        toast
      }
      
      
      ,[state]}
  return (
    <form className="space-y-4 flex flex-col gap-8" action={dispatch}>
              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES EL PROBLEMA O EFECTO?</Label>
                <Input name='problema' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Desempleo" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES UNA POSIBLE CAUSA?</Label>
                <Input name='causa' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Experiencia laboral" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES EL SUJETO DE ESTUDIO?</Label>
                <Input name='sujeto' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: Estudiantes" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">¿CUÁL ES EL CONTEXTO DONDE SE DESARROLLARÁ LA INVESTIGACIÓN?</Label>
                <Input name='contexto' className='bg-white dark:text-black' id="title" placeholder="Ejemplo: ISAE Universidad" />
              </div>


              <Button type="submit" className="w-full bg-amber-400 uppercase font-bold text-white text-lg " >
                Generar Texto
              </Button>
              {
                state.success.length ? (
                  <>
                  <p className="text-black">
                  
                  
                  {
                    state.success[0].pPrincipal
                  }  
                  </p>
                  </>
                ) : ""
              }
            </form>
  )
}
