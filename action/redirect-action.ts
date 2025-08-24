"use server"

import { redirect } from "next/navigation"

export const validar = async () => {
    redirect('/miic')
}