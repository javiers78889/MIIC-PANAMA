import FormularioRegister from '@/components/auth/login/formulario/FormularioRegister'
import Logo from '@/components/ui/Logo'
import ButtonChild from '@/components/widgets/Button'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <div className="mb-8 text-center flex flex-col justify-center items-center">
                <Logo size={12} />
                <h2 className="text-2xl font-bold  dark:text-black">Registro</h2>
                <p className="text-gray-500 mt-2">Regístrate y obtén 3 tokens grátis</p>
            </div>

            <FormularioRegister />
            <ButtonChild>Crear Cuenta</ButtonChild>
        
            <p className='text-center'> Ya tienes cuenta?. <Link href={'/auth/login'} className='text-blue-500 hover:text-blue-800'>Login</Link></p>

        </>
    )
}
