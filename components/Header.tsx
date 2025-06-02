"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Logo from "./ui/Logo"
import NavFunctionButton from "./ui/NavFunctionButton"
import { usePathname } from "next/navigation"
import NavBarDashItem from "./NavBarDashItem"

export default function Header() {


  const router = usePathname()
  console.log(router)
  const botonFun = router !== "/" ? ("/") : ("/miic")
  const botonName = router !== "/" ? ("Volver") : ("App")


  return (
    <motion.header
      className={`bg-red-50`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">

            <Logo size={12} />
          </Link>
        </div>
        <div className="flex items-center gap-x-12">
          {router !== '/' ? ('') : (
            <NavBarDashItem />
          )}

          <NavFunctionButton ref={botonFun} name={botonName} />



        </div>

      </nav>
    </motion.header>
  )
}
