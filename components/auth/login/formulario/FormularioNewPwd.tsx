"use client"
import { SaveNewPassword } from '@/action/save-newpassword-action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { redirect } from 'next/navigation'
import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function FormularioNewPwd({ token }: { token: string }) {

    const [state, dispatch] = useActionState(SaveNewPassword, { success: '', error: [] })

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
            redirect('/auth/login')
        }
        if (state.error) {
            state.error.map(e => {
                toast.error(e)
            })
        }

    }, [state])
    return (
        <form className="space-y-6 dark:text-black" action={dispatch}>


            <Input value={token} name='token' hidden />

            <div className="space-y-2 text-sm dark:text-black">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">New Password</Label>

                </div>
                <Input id="password" name='password' type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2 text-sm dark:text-black">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Confirm New Password</Label>

                </div>
                <Input id="confirm_password" name='confirm_password' type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-800 text-white cursor-pointer">Iniciar Sesión</Button>


        </form>
    )
}
