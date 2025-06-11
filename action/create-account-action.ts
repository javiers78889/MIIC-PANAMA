"use server"

import { CreateAccountSchema, ErrorSchema, successSchema } from "@/src";
import { Envs } from "@/src/envs";
import Tlogin from "@/src/prevData";

export const CreateAccountAction = async (prevState: Tlogin, formData: FormData) => {

    const url = `${Envs.url}/auth/create-user`

    const Data={
        name: formData.get('name')?.toString(),
        lastname: formData.get('lastname')?.toString(),
        email: formData.get('email')?.toString(),
        confirm_email: formData.get('confirm_email')?.toString(),
        password: formData.get('password')?.toString(),
        confirm_password: formData.get('confirm_password')?.toString(),
        cedula: formData.get('cedula')?.toString()
    }


    const validation = CreateAccountSchema.safeParse(Data)

    if(!validation.success){
        const error = validation.error.errors.map(err=> err.message)


        return {
            success:'',
            error: error
        }
    }

    const createData={
        name: Data.name,
        lastname: Data.lastname,
        email: Data.email,
        password: Data.password,
        cedula: Data.cedula
    }

    const req = await fetch(url,
        {method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createData)
        }
    )

    const json = await req.json()

    console.log(json)

    if(!req.ok){
        const error = ErrorSchema.parse(json)
        return{
            success:'',
            error: [error.message]
        }
    }

    const {message}= successSchema.parse(json)

    return{
        success: message,
        error: []
    }
}