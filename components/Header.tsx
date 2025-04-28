"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogIn } from 'lucide-react'
import { motion } from "framer-motion"
import Logo from "./ui/Logo"

export default function Header() {
  const [mounted, setMounted] = useState(false)


  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="  bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Flowers & Saints</span>
            <Logo size={12} />
          </Link>
        </div>
        <div className="flex items-center gap-x-12">
          <Link
            href="https://www.flowersandsaints.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold leading-6 text-foreground hover:text-primary transition-colors hover:animate-bounce"
          >
            Work
          </Link>
          <Link
            href="https://www.flowersandsaints.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold leading-6 text-foreground hover:text-primary transition-colors hover:animate-bounce"
          >
            About
          </Link>
          <Link
            href="https://www.flowersandsaints.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold leading-6 text-foreground hover:text-primary transition-colors hover:animate-bounce"
          >
            Contact
          </Link>
          <Link
            href="/miic"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-2 items-center justify-start overflow-hidden bg-amber-400 hover:bg-amber-500 rounded-full px-2 py-2 cursor-pointer font-bold text-white transition-all duration-300 w-fit"
          >
            <LogIn  size={15}/>
            <span className=" hidden h- group-hover:block group-hover:transition-discrete   ">
              APP
            </span>
          </Link>



        </div>

      </nav>
    </motion.header>
  )
}
