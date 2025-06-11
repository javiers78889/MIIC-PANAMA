"use client"
import React, { useActionState, useEffect } from 'react'
import ItemsForm from './ItemsForm'
import { Login } from '@/action/login-action'
import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function FormularioLogin() {

    const [state, dispatch] = useActionState(Login, { success: '', error: [] })

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
            redirect('/miic')
        }
        if (state.error) {
            state.error.forEach(e => {
                toast.error(e)
            })
        }
    }, [state])
    return (
        <form className="space-y-6 dark:text-black" action={dispatch}>
            <ItemsForm>

            </ItemsForm>
            <Link href="/auth/recovery-password" className="text-blue-600 hover:text-blue-800 cursor-pointer">Olvidó su contraseña?</Link>
            <Button className="w-full bg-red-600 hover:bg-red-800 text-white cursor-pointer">Iniciar Sesión</Button>
            <div className="text-center ">
                No tienes cuenta?{' '}
                <Link href="/auth/register" className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    Crear
                </Link>
            </div>

        </form>
    )
}
