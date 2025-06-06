import Logo from '@/components/ui/Logo'
import React from 'react'

export default function LeftHalf() {
    return (
        <div className="hidden md:flex md:w-1/2 bg-red-600 text-white flex-col justify-center items-center p-8">
            <div className="max-w-md text-center">
                <h1 className="text-5xl font-bold mb-6">MIIC APP</h1>
                <div className="h-50 w-50 bg-white rounded-full flex items-center justify-center mx-auto">
                    <Logo size={15} />

                </div>
                <p className="text-lg mb-8 ">
                    Recursos didácticos y tecnológicos para formular protocolos de tésis.
                </p>
            </div>
        </div>
    )
}
