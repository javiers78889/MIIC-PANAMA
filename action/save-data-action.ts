"use server"

import { dataSchema } from "@/src";

type save = {
    success: string,
    error: string[]
}


export const saveData = async (prevState: save, formData: FormData) => {

    const data = {
        ppi: formData.get('ppi'),
        og: formData.get('og'),
        tp: formData.get('tp'),
        hp: formData.get('hp'),
        hpn: formData.get('hpn'),
        ps1: formData.get('ps1'),
        ps2: formData.get('ps2'),
        ps3: formData.get('ps3'),
        oe1: formData.get('oe1'),
        oe2: formData.get('oe2'),
        oe3: formData.get('oe3'),
    };


    const validateData = dataSchema.safeParse(data)
    if (!validateData.success) {
        const error = validateData.error.errors.map(e => e.message)

        return {
            success: '',
            error
        }
    }
    console.log(validateData.data)
    return {
        success: '',
        error: []
    }

}