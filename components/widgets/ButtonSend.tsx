import React from 'react'
import { Button } from '../ui/button'

type TChild = {
    readonly children: React.ReactNode
}

export default function ButtonSend({ children }: TChild) {
    return (
        <Button type="submit" className="relative overflow-hidden px-6 py-3 rounded-lg cursor-pointer
                                                bg-white text-orange-400 border-2 border-orange-400
                                                transition-all duration-170 ease-in-out
                                                active:scale-95
                                                before:content-[''] before:absolute before:inset-0
                                                before:bg-orange-500 before:scale-y-0 before:origin-bottom
                                                hover:before:scale-y-100
                                                before:transition-transform before:duration-230 before:ease-in-out
                                                before:z-0
                                                z-10
                                                hover:text-white">
            <span className="relative z-10">{children}</span>
        </Button>
    )
}
