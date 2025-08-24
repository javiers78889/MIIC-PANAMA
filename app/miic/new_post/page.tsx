'use client'

import { validar } from "@/action/redirect-action"
import { userOnline } from "@/action/user-online-action"
import ListaDePost from "@/components/posts/ListaDePost"
import Posteos from "@/components/posts/Posteos"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

export default function ImageUploadForm() {
  const { data, isLoading } = useQuery({
    queryKey: ["validate"],
    queryFn: userOnline,
  })

  // Redirección solo en useEffect, después de que data esté disponible
  useEffect(() => {
    if (data && data.success[0].role !== "admin") {
      validar() // tu función debe usar router.push() internamente
    }
  }, [data])

  // Mientras carga o redirige, muestra loading
  if (isLoading || (data && data.success[0].role !== "admin")) {
    return (
      <div className="flex text-center items-center justify-center">
        <h2>Cargando...</h2>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 justify-center items-center min-h-screen p-4">
      <Posteos />
      <ListaDePost />
    </div>
  )
}
