"use client"

import React, { useActionState, useEffect } from 'react'
import ItemsForm from './ItemsForm'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { CreateAccountAction } from '@/action/create-account-action'
import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'


export default function FormularioRegister() {
    const [state, dispatch] = useActionState(CreateAccountAction, { success: '', error: [] })


    useEffect(() => {

        if (state.error) {
            state.error.forEach(err => {
                toast.error(err)
            })
        }
        if (state.success) {
            toast.success(state.success)
            redirect('/auth/login')
        }

    }, [state])
    return (
        <form className="space-y-6 dark:text-black" action={dispatch}>
            <div className="space-y-2 text-sm dark:text-black">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name='name' type="text" placeholder="John" />
            </div>
            <div className="space-y-2 text-sm dark:text-black">
                <Label htmlFor="lastname">Apellido</Label>
                <Input id="lastname" name='lastname' type="text" placeholder="Doe" />
            </div>
            <div className="space-y-2 text-sm dark:text-black">
                <Label htmlFor="cedula">Cedula</Label>
                <Input id="cedula" name='cedula' type="text" placeholder="0-000-000" />
            </div>
            <ItemsForm>
                <div className="space-y-2 text-sm dark:text-black">
                    <Label htmlFor="email">Confirmar Email</Label>
                    <Input id="confirm_email" name='confirm_email' type="email" placeholder="name@example.com" />
                </div>
            </ItemsForm>
            <div className="space-y-2 text-sm dark:text-black">
                <div className="flex items-center justify-between">
                    <Label htmlFor="confirm_password">Confirm_Password</Label>

                </div>
                <Input id="confirm_password" name='confirm_password' type="password" placeholder="••••••••" />
            </div>


            
        </form>
    )
}
