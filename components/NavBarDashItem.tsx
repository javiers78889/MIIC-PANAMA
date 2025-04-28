import Link from 'next/link'
import React from 'react'

export default function NavBarDashItem() {
    return (
        <>
            <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white font-bold leading-6 hover:text-primary transition-colors hover:animate-bounce"
            >
                Work
            </Link>
            <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold leading-6 text-white hover:text-primary transition-colors hover:animate-bounce"
            >
                About
            </Link>
            <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold leading-6 text-white hover:text-primary transition-colors hover:animate-bounce"
            >
                Contact
            </Link>
        </>
    )
}
