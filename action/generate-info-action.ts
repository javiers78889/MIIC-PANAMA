"use server"

import { ResponseSchema } from "@/src"
import { cache } from "react"
type TRes =
    {
        Pprincipal: string,
        objPrincipal: string,
        titulo: string,
        hipotesis: string,
        hipotesis_nula: string
    }
type Tdata = {
    success: TRes[],
    error: string[]
}
export default async function generateInfoAction(prevState: Tdata, formData: FormData) {
    const url = "https://miic-panama-backf.onrender.com/generate/"
    const data = {
        causa: formData.get("causa"),
        problema: formData.get("problema"),
        sujeto: formData.get("sujeto"),
        contexto: formData.get("contexto"),
    }
    console.log(data)
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const json = await req.json()

    const validate = ResponseSchema.safeParse(json)
    if (!req.ok) {
        return {
            success: [],
            error: [json]
        }
    }

    if (!validate.success) {
        const error = validate.error.errors.map(error=> error.message)
        return {
            error,
            success: []

        }
    }

   
    return {
        success: [validate.data],
        error: []
    }
}