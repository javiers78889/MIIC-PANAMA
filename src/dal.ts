import "server-only"
import { cache } from "react"
import { GetToken } from "./getToken"
import { redirect } from "next/navigation"
import { Envs } from "./envs"

export const verifyToken = cache(async () => {

    const url = `${Envs.url}/auth/validate-token`
    const token = await GetToken()

    const data={
        token: token
    }

    const req = await fetch(url, {
        method:'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)


    })

    await req.json()
 
    if(!req.ok){
        redirect('/auth/login')
    }


})