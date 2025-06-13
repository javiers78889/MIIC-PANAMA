"use server"

import { Envs } from "@/src/envs"
import { GetToken } from "@/src/getToken"

type Tdata = {
    success: string,
    error: string[]
}
export default async function generateInfoAction(prevState: Tdata, formData: FormData) {
    const url = `${Envs.url}/generate/`
    const token = await GetToken()
    const data = {
        causa: formData.get("causa"),
        problema: formData.get("problema"),
        sujeto: formData.get("sujeto"),
        contexto: formData.get("contexto"),
        verbo: formData.get("verbo"),
        preposicion: formData.get("preposicion"),
        interrogante: formData.get("interrogante"),
        subproblemas: formData.getAll('subproblemas[]'),
        subcausas: formData.getAll('subcausas[]'),
    }
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    const json = await req.json()

    if (!req.ok) {
        return {
            success: "",
            error: ["Token agotados"]
        }
    }





    return {
        success: json,
        error: []
    }
}