import Link from 'next/link'
import React from 'react'

export default function NavBarDashItem() {
    return (
        <div className="lg:visible  invisible">
            <a
                href="https://jscarr12.pythonanywhere.com/formulario/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black font-bold leading-6 hover:text-primary transition-colors hover:animate-bounce border-r-1 px-6 py-1"
            >
                Formulario
            </a>
            <Link
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold leading-6 text-black hover:text-primary transition-colors hover:animate-bounce border-r-1 px-6 py-1"
            >
                Historia
            </Link>
            <Link
                href="#SobreNosotros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold leading-6 text-black hover:text-primary transition-colors hover:animate-bounce pl-1"
            >
                Sobre Nosotros
            </Link>
        </div>
    )
}
