"use server"

type Tdata = {
    success: string,
    error: string[]
}
export default async function generateInfoAction(prevState: Tdata, formData: FormData) {
    const url = "https://miic-panama-backf.onrender.com/generate/"
    const data = {
        causa: formData.get("causa"),
        problema: formData.get("problema"),
        sujeto: formData.get("sujeto"),
        contexto: formData.get("contexto"),
        verbo: formData.get("verbo"),
        preposicion: formData.get("preposicion"),
        interrogante: formData.get("interrogante"),
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
    

   

   
    return {
        success: json,
        error: []
    }
}