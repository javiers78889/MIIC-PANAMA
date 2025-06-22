"use client"
import Excepciones from '@/components/Excepciones'
import Link from 'next/link'

import React from 'react'

export default function error() {
    return (
        <Excepciones title='Fuera de Servicio, Volveremos Pronto'>
           Volver
        </Excepciones>
    )
}
