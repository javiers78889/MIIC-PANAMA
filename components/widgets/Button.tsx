import React from 'react'
import { Button } from '../ui/button'
type TChild = {
  readonly children: React.ReactNode
}
export default function ButtonChild({children}: TChild) {
  return (
  
    <Button className="w-full bg-red-600 hover:bg-red-800 text-white cursor-pointer">{children}</Button>
  
  )
}
