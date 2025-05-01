import Link from 'next/link'
import React from 'react'

export default function NavBarDashItem() {
    return (
        <>
            <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black font-bold leading-6 hover:text-primary transition-colors hover:animate-bounce border-r-1 px-6 py-1"
            >
                Work
            </Link>
            <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold leading-6 text-black hover:text-primary transition-colors hover:animate-bounce border-r-1 px-6 py-1"
            >
                About
            </Link>
            <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold leading-6 text-black hover:text-primary transition-colors hover:animate-bounce"
            >
                Contact
            </Link>
        </>
    )
}
