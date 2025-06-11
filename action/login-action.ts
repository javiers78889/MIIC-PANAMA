"use server"

import { ErrorSchema, LoginSchema, successSchema } from "@/src"
import { Envs } from "@/src/envs"
import Tlogin from "@/src/prevData"
import { cookies } from "next/headers"




export const Login = async (prevState: Tlogin, formData: FormData) => {

    const url = `${Envs.url}/auth/login`

    const Data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    const loginData = LoginSchema.safeParse(Data)



    if (!loginData.success) {

        return {
            success: '',
            error: loginData.error.errors.map(e => e.message)
        }
    }

    const req = await fetch(url,
        {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loginData.data)
        })
    const json = await req.json()
    if (!req.ok) {
        const error = ErrorSchema.parse(json)

        return {
            success: '',
            error: [error.message]
        }
    }

    const { message, token } = successSchema.parse(json)

    if (token) {
        ; (await cookies()).set('token', token)
    }



    return {
        success: message,
        error: []
    }


}