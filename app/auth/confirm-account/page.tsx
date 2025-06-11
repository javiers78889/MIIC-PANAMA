"use client"
import React, { startTransition, useActionState, useEffect, useState } from 'react'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import Logo from '@/components/ui/Logo'
import { confirmAccount } from '@/action/confirm-account-action'
import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'


export default function Page() {
    const [token, setToken] = useState('')
    const [completo, setCompleto] = useState(false)

    const ConfirmTokenAccount = confirmAccount.bind(null, token)
    const [state, dispatch] = useActionState(ConfirmTokenAccount, { success: '', error: [] })
    const onWrite = (data: string) => {
        setToken(data)
    }
    const onComplete = () => {

        setCompleto(!completo)
    }

    useEffect(() => {
        if (token.length === 4) {

            startTransition(() => {

                dispatch()
            })
        }
    }, [completo])


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
        <>
            <div className="mb-8 text-center flex flex-col jus items-center">
                <Logo size={12} />
                <h2 className="text-2xl font-bold  dark:text-black">Confirma tu Cuenta</h2>
                <p className="text-gray-500 mt-2">Revisa tu correo y obten el token de confirmacion</p>
            </div>


            <div className='flex justify-center gap-5 my-10'>

                <PinInput
                    value={token}
                    onChange={onWrite}
                    onComplete={onComplete}

                >
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center dark:text-black' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center dark:text-black' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center dark:text-black' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center dark:text-black' />

                </PinInput>
            </div>


        </>
    )
}
