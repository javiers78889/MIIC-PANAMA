"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2 } from "lucide-react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getpostsaction from "@/action/get-posts-action"
import Image from "next/image"
import { deleteAction } from "@/action/delete-post-action"
import { DeleteParams } from "@/src/interface"
import { toast } from "react-toastify"


export default function ListaDePost() {
  const queryClient = useQueryClient()



  const { data, isPending, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getpostsaction
  })

  ////
  const mutation = useMutation<any, Error, DeleteParams>({
    mutationFn: deleteAction,
    onSuccess: (e) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
      toast.success(e)
    },
    onError: (error) => {
      console.error("Error al eliminar:", error)
    }
  })
  if (isPending) return "Cargando..."
  return (
    <div className="container mx-auto py-8 px-4 sticky top-0 z-50 max-h-screen overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Lista de Eventos</h1>
        <p className="text-muted-foreground">Gestiona tus eventos con la opción de eliminar cada uno</p>
      </div>

      {data?.length! === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">No hay posts disponibles</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {data?.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{post.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">

                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => mutation.mutate({ id: post.id })}
                    className="ml-4 text-destructive hover:text-destructive-foreground hover:bg-destructive hover:bg-red-400 cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Eliminar post</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Image src={post.url} alt="posteos" width={100} height={100} />
              </CardContent>
            </Card>
          ))}
        </div>
      )}


    </div>
  )
}
