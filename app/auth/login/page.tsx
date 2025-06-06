
import FormularioLogin from '@/components/auth/login/formulario/FormularioLogin'
import LeftHalf from '@/components/auth/login/leftHalf'
import { Card } from '@/components/ui/card'



import React from 'react'

export default function page() {
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left half - Branding/Visual section */}
      <LeftHalf />

      {/* Right half - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md p-8 shadow-lg">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Inicia Sesión</h2>
            <p className="text-gray-500 mt-2">Regístrate y obtén 3 tokens grátis</p>
          </div>

          <FormularioLogin />
        </Card>
      </div>
    </div>
  )
}
