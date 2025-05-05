"use server"

import { ResponseSchema } from "@/src"
type Tdata = {
    success: string,
    error: string[]
}
export default async function generateInfoAction(prevState: Tdata, formData: FormData) {
    const url = "http://localhost:3001/generate/"
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
    console.log(json)

    if (!req.ok) {
        return {
            success: "",
            error: ["Token agotados"]
        }
    }
    const validate = ResponseSchema.safeParse(json)

    if (!validate.success) {
      
        return {
            error: ["Token agotados"],
            success: ""

        }
    }

   
    return {
        success: validate.data.pPrincipal,
        error: []
    }
}