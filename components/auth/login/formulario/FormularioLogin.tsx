"use client"
import React, { useActionState, useEffect } from 'react'
import ItemsForm from './ItemsForm'
import { Link } from 'lucide-react'
import { Login } from '@/action/login-action'
import { toast } from 'react-toastify'


export default function FormularioLogin() {
    const [state, dispatch] = useActionState(Login, { success: '', error: [] })

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
        }
        if (state.error) {
            state.error.map(e => {
                toast.error(e)
            })
        }
    }, [state])
    return (
        <form className="space-y-6" action={dispatch}>
            <ItemsForm />
            <div className="text-center text-sm">
                No tienes cuenta?{" "}
                <Link href="/auth/register" className="text-blue-600 hover:underline">
                    Crear
                </Link>
            </div>

        </form>
    )
}
