"use client"
import { RecoveryPassword } from '@/action/recovery-password-action'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Logo from '@/components/ui/Logo'
import ButtonChild from '@/components/widgets/Button'
import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Page() {

    const [state, dispatch] = useActionState(RecoveryPassword, { success: '', error: [] })

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

        <form className="space-y-6 dark:text-black" action={dispatch}>
            <div className="mb-8 text-center flex flex-col justify-center items-center">
                <Logo size={12} />
                <h2 className="text-2xl font-bold  dark:text-black">Recuperar Cuenta</h2>
                <p className="text-gray-500 mt-2">Ingrese su correo y siga los pasos</p>
            </div>
            <div className="space-y-2 text-sm dark:text-black">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name='email' type="email" placeholder="name@example.com" />
            </div>

            <ButtonChild>Recuperar Cuenta</ButtonChild>
        </form>



    )
}
