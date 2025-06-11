"use server"
import { ErrorSchema, successSchema, validateEmailSchema } from "@/src";
import { Envs } from "@/src/envs";
import Tlogin from "@/src/prevData";

export const RecoveryPassword = async (prevState: Tlogin, formData: FormData) => {

    const url = `${Envs.url}/auth/recovery-password`
    const email = { email: formData.get('email') }

    const validate = validateEmailSchema.safeParse(email)

    if (!validate.success) {
        const error = validate.error.message
        return {
            success: '',
            error: [error]
        }
    }


    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })

    const json = await req.json()


    if (!req.ok) {
        const error = ErrorSchema.parse(json)

        return {
            success: '',
            error: [error.message]
        }
    }


    const { message } = successSchema.parse(json)

    return {
        success: message,
        error: []
    }

}