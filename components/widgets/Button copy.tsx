import React from 'react'
import { Button } from '../ui/button'
type TChild = {
  readonly children: React.ReactNode
}
export default function ButtonChildsave({children}: TChild) {
  return (
    <>
    <Button className="w-full bg-green-600 hover:bg-green-800 text-white cursor-pointer">{children}</Button>
    </>
  )
}
