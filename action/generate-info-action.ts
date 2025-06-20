"use server"

import { ErrorSchema, investigacionSchema, investigacionSchemaType, ResponseSchema } from "@/src"
import { Envs } from "@/src/envs"
import { GetToken } from "@/src/getToken"

type Tdata = {
    success: investigacionSchemaType[],
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
        v1: formData.get("v1"),
        v2: formData.get("v2"),
        v3: formData.get("v3"),
        preposicion: formData.get("preposicion"),
        interrogante: formData.get("interrogante"),
        i1: formData.get("i1"),
        i2: formData.get("i2"),
        i3: formData.get("i3"),
        subproblemas: formData.getAll('subproblemas[]'),
        subcausas: formData.getAll('subcausas[]'),
    }

    const validate = ResponseSchema.safeParse(data)

    if (!validate.success) {
        const error = validate.error.errors.map(e => (e.message))
        return {
            success: [],
            error: error
        }
    }
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(validate.data)
    })

    const json = await req.json()

    if (!req.ok) {
        const error = ErrorSchema.parse(json)
        return {
            success: [],
            error: [error.message]
        }

    }
    const limpio = json
        .replace(/^```json\n?/, '')  // elimina bloque inicial
        .replace(/\n```$/, '')       // elimina bloque final
        .trim();
    console.log(json)
    const parseo = JSON.parse(limpio);
    const validateParse = investigacionSchema.parse(parseo)

    return {
        success: [validateParse],
        error: []
    }
}