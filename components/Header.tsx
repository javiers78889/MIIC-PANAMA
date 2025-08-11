"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Logo from "./ui/Logo"
import NavFunctionButton from "./ui/NavFunctionButton"
import { usePathname } from "next/navigation"
import NavBarDashItem from "./NavBarDashItem"
import { Button } from "./ui/button"
import { LogoutAction } from "@/action/logout-action"

export default function Header() {
  const router = usePathname()
  const botonFun = router !== "/" ? "/" : "/auth/login"
  const botonName = router !== "/" ? "Volver" : "App"


 
  return (
    <motion.header
      className="bg-red-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl gap-2 items-center justify-between py-3 px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Logo size={12} />
          </Link>
        </div>

        <div className="lg:flex items-center lg:visible hidden gap-x-12">
          {router !== '/' ? null : <NavBarDashItem />}
        </div>

        {router === '/miic' ? (
          <div className="flex gap-2 items-center">
            <Button
              onClick={() => LogoutAction()}
              className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
            >
              Salir
            </Button>
          
          </div>
        ) : (
          <NavFunctionButton ref={botonFun} name={botonName} />
        )}
      </nav>
    </motion.header>
  )
}
