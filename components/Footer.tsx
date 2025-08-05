import Link from "next/link"
import Logo from "./ui/Logo"
import { Copyright } from "lucide-react"

export default function Footer() {
  const date = new Date()

  return (
    <footer className="bg-gray-800 border-t border-border text-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["About", "Work", "Services", "Contact", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href="https://www.flowersandsaints.com.au"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-muted-foreground hover:text-foreground font-bold hover:animate-bounce"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex gap-2 items-center justify-center flex-col">
          <Logo size={12} />
          <div className="flex gap-2 items-center">
            <Copyright size={12} />
            <p className=" text-center text-sm leading-5 text-muted-foreground font-bold">
              METODOLOGÍA INVERTIDA PARA LA INVESTIGACIÓN CIENTÍFICA (MIIC)  - {date.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
