import { verifyToken } from "@/src/dal"

type TChild = {
    readonly children: React.ReactNode
}

export default async function RootLayout({
    children,
}: TChild) {

    await verifyToken()
    

    return (
        <>
        {children}
        </>
    )
}