"use server"

import { cookies } from "next/headers"

export const LogoutAction = async () => {
(await cookies()).delete('token')
}