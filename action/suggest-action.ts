"use server"

import { IASchema, resultadoMIICSchema, Tresults } from "@/src"
import { Envs } from "@/src/envs"
import { GetToken } from "@/src/getToken"

type TData = {
    problema: string,
    causa: string,
    sujeto: string,
    contexto: string
}

type TPrev={
    success: Tresults[], 
    error: string[]
}

export const SuggestAction = async (data: TData,prevState:TPrev) => {
    const url = `${Envs.url}/generate/suggest`
    const token = await GetToken()

    console.log(data)
    const validateData = IASchema.safeParse(data)


    if (!validateData.success) {
        return {
            success: [],
            error: validateData.error?.errors.map(e => e.message)
        }
    }

    const req = await fetch(url, {
        method: 'POST', headers: {
            'content-type': 'application/json',
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })


    const json = await req.json()

    const validate = resultadoMIICSchema.safeParse(json)


    if (!validate.success) {


        return { success: [], 
            error: validate.error.errors.map(e => e.message) }
    }

 
    console.log(validate.data)
    return { success: [validate.data], 
        error: [] }


}