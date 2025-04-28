import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
type TButton = {
    readonly ref: string,
    readonly color?: string,
    readonly name: string
}

export default function NavFunctionButton({ ref, color,name }: TButton) {
    const colores = color ? (`bg-${color}-400 hover:bg-${color}-500`) : (`bg-amber-400 hover:bg-amber-500`)
    return (
        <Link
            href={ref}
            rel="noopener noreferrer"
            className={`group flex gap-2 items-center justify-start overflow-hidden rounded-full px-2 py-2 cursor-pointer ${colores}  text-white transition-all duration-300 w-fit`}
        >
            <LogIn size={15} />
            <span className=" hidden h- group-hover:block group-hover:transition-discrete text-sm  ">
                {name}
            </span>
        </Link>
    )
}
