"use client"
import React, { startTransition, useActionState, useEffect, useState } from 'react'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import Logo from '@/components/ui/Logo'
import { toast } from 'react-toastify'
import { recoverPasswordValidateToken } from '@/action/recover-password-validate-token-action'
import FormularioNewPwd from '@/components/auth/login/formulario/FormularioNewPwd'


export default function Page() {
    const [token, setToken] = useState('')
    const [completo, setCompleto] = useState(false)
    const [validateToken, setValidateToken] = useState('')

    const ConfirmTokenAccount = recoverPasswordValidateToken.bind(null, token)
    const [state, dispatch] = useActionState(ConfirmTokenAccount, { success: [], error: [] })
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
        if (Array.isArray(state.success) && state.success.length > 0) {
            toast.success(state.success[0].message)
            setValidateToken(state.success[0].tokenizado)
           
        }

        if (Array.isArray(state.error) && state.error.length > 0) {
            state.error.forEach(e => {
                toast.error(e)
            })
        }
    }, [state])

    return (
        <>
            {validateToken.length === 0 ? (

                <>
                    <div className="mb-8 text-center flex flex-col jus items-center justify-center">
                        <Logo size={12} />
                        <h2 className="text-2xl font-bold  dark:text-black">Ingresa el token para restablecer tu contraseña</h2>
                        <p className="text-gray-500 mt-2">El token está en su correo electrónico</p>
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

            ) : (
                <FormularioNewPwd token={validateToken} />
            )}


        </>
    )
}
