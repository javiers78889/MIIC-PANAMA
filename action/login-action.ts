"use server"

import { LoginSchema } from "@/src"

type Tlogin = {
    success: string,
    error: string[]
}



export const Login = async (prevState: Tlogin, formData: FormData) => {

    const Data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    const loginData = LoginSchema.safeParse(Data)

    if (!loginData.success) {

        const error = loginData.error.errors.map((e) => (e.message))
        return {
            success: '',
            error: error
        }
    }

    return {
        success: '',
        error: []
    }

}