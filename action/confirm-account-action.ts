"use server"

import { ErrorSchema, successSchema } from "@/src";
import { Envs } from "@/src/envs";
import Tlogin from "@/src/prevData";

export const confirmAccount = async (token: string, prevState: Tlogin) => {
    const url = `${Envs.url}/auth/validate-account`
    const Data = {
        token: token
    }

    const req = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        })

    const json = await req.json()


    if (!req.ok) {
        const error = ErrorSchema.parse(json)

        return {
            success: '',
            error: [error.message]
        }
    }


    const {message}= successSchema.parse(json)
    return { success: message, error: [] }
}