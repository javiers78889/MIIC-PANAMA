import LeftHalf from "@/components/auth/login/leftHalf"
import { Card } from "@/components/ui/card"


export const metadata = {
  title: "MIIC-PANAMÁ",
  description: "PROYECTO MIIC-PANAMÁ",

}

type TChild = {
  readonly children: React.ReactNode
}

export default function RootLayout({
  children,
}: TChild) {
    

  return (
       <div className="flex min-h-screen bg-gray-50">
      {/* Left half - Branding/Visual section */}
      <LeftHalf />

      {/* Right half - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md p-8 shadow-lg">
        

         {children}
        </Card>
      </div>
    </div>
  )
}
