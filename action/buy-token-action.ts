"use server"
import { Envs } from "@/src/envs";
import { GetToken } from "@/src/getToken";
import { revalidateTag } from "next/cache";


export const buyTokenAction = async (quantity: number) => {
    try {
        // Capturar el pago


        const token = await GetToken();

        const res = await fetch(`${Envs.url}/auth/buy-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                quantity
            })
        });


        if (!res.ok) {
            throw new Error(`Error en el servidor: ${res.statusText}`);
        }

        revalidateTag('user-online');


     

    } catch (error) {
        console.error("Error en onApprove:", error);

    }
}