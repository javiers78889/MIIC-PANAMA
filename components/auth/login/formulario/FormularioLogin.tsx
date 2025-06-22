"use client"
import React, { useActionState, useEffect, useTransition } from 'react'
import ItemsForm from './ItemsForm'
import { Login } from '@/action/login-action'
import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function FormularioLogin() {

    const [state, dispatch] = useActionState(Login, { success: '', error: [] })
    const [isPending, startTransition] = useTransition()
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

    const onSubmit = (formData: FormData) => {
        startTransition(() => {

            dispatch(formData)
        })
    }
    return (
        <form className="space-y-6 dark:text-black" action={onSubmit}>
            <ItemsForm>

            </ItemsForm>
            <Link href="/auth/recovery-password" className="text-blue-600 hover:text-blue-800 cursor-pointer">Olvidó su contraseña?</Link>
            {isPending ? (
                <div className='flex items-center justify-center'>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                        />
                    </motion.svg>
                </div>

            ) : (
                <Button className="w-full bg-red-600 hover:bg-red-800 text-white cursor-pointer">Iniciar Sesión</Button>
            )}
            <div className="text-center ">
                No tienes cuenta?{' '}
                <Link href="/auth/register" className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    Crear
                </Link>
            </div>


        </form>
    )
}
