
import FormularioLogin from '@/components/auth/login/formulario/FormularioLogin'
import Logo from '@/components/ui/Logo'





import React from 'react'

export default function page() {

  return (

    <>
      <div className="mb-8 text-center">
         <Logo size={12}/>
        <h2 className="text-2xl font-bold  dark:text-black">Inicia Sesión</h2>
        <p className="text-gray-500 mt-2">Accede al formulario MIIC </p>
      </div>
      <FormularioLogin />
      
    </>

  )
}
