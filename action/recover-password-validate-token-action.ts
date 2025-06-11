"use server"

import { ErrorSchema, successSchema } from "@/src";
import { Envs } from "@/src/envs";

type content={
message:string,
tokenizado:string
}
type Data = {
    success: content[],
    error: string[]
}

export const recoverPasswordValidateToken = async (token: string, prevState: Data) => {

    const url = `${Envs.url}/auth/verify-token-recovery`
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
    console.log(json)


    if (!req.ok) {
        const error = ErrorSchema.parse(json)

        return {
            success: [],
            error: [error.message]
        }
    }


    const { message, token: cupon } = successSchema.parse(json)

    const tokenizado = cupon!


    return { success: [{ tokenizado, message }], error: [] }

}