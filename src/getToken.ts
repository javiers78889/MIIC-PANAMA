import { cookies } from "next/headers"

export const GetToken = async () => {

    return (await cookies()).get('token')?.value
}