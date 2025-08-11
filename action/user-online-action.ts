"use server"
import { ErrorSchema, userOnlineSchema } from "@/src";
import { Envs } from "@/src/envs";
import { GetToken } from "@/src/getToken";

export const userOnline = async () => {

    const token = await GetToken();

    const req = await fetch(`${Envs.url}/auth/user-online`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`
        },next: {tags: ['user-online']}

    });
    const json = await req.json();

    if (!req.ok) {
        const error = ErrorSchema.parse(json)

        return {
            success: [],
            error: [error.message]
        }
    }



    const validate = userOnlineSchema.safeParse(json)
    if (!validate.success) {
        return {
            success: [],
            error: validate.error.errors.map(e => e.message)
        }
    }
    return { success: [validate.data], error: [] };




}