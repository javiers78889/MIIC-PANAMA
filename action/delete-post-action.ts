"use server"

import { Envs } from "@/src/envs"
import { GetToken } from "@/src/getToken"
import { DeleteParams } from "@/src/interface"




export const deleteAction = async ({ id }: DeleteParams) => {

    const data = {
        "id": id
    }


    const token = await GetToken()
    const req = await fetch(`${Envs.url}/posts`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })


    const json = await req.json()


    return json.message


}