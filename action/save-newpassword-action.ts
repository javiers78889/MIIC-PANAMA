"use server"

import { ErrorSchema, newDataSchema, successSchema } from "@/src"
import { Envs } from "@/src/envs"
import Tlogin from "@/src/prevData"

export const SaveNewPassword = async (prevState: Tlogin, formData: FormData) => {
    const url = `${Envs.url}/auth/new-user-password`

    const data = {
        token: formData.get('token'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password')
    }

    const validate = newDataSchema.safeParse(data)

    if (!validate.success) {
        const error = validate.error.errors.map(e => e.message)

        return {
            success: '',
            error: error
        }
    }

    const DataForm = {
        token: validate.data.token,
        password: validate.data.password
    }

    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataForm)
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