import React from 'react'
import Logo from './ui/Logo'
import Link from 'next/link'

type Child = {
    readonly title: string,
    readonly children: React.ReactNode
}

export default function Excepciones({ title, children }: Child) {
    return (
        <div className='flex flex-col items-center justify-center text-center p-50 gap-5'>

            <Logo size={50} />

            <h1 className='uppercase text-4xl'>{title}</h1>


            <Link className="w-50 bg-red-600 hover:bg-red-800 text-white cursor-pointer py-2 font-black" href='/'>{children}</Link>
        </div>
    )
}
