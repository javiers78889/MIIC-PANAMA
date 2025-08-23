"use client"
import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ImageIcon, Upload, X } from 'lucide-react'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { uploadPost } from '@/action/create-post-action'
import { ImageFile } from '@/src/interface'


export default function Posteos() {
    const queryClient = useQueryClient()
    const [image, setImage] = useState<ImageFile | null>(null)

    // Mutation de React Query
    const mutation = useMutation<any, Error, FormData>({
        mutationFn: uploadPost,
        onSuccess: () => {
            if (image) URL.revokeObjectURL(image.preview)
            setImage(null)
            queryClient.invalidateQueries({ queryKey: ["posts"] })
            console.log("Imagen subida correctamente!")
        },
        onError: (error) => {
            console.error("Error al subir:", error)
        }
    })

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        const newImage: ImageFile = {
            id: uuidv4(),
            file,
            name: file.name,
            preview: URL.createObjectURL(file),
        }

        if (image) URL.revokeObjectURL(image.preview)
        setImage(newImage)

        event.target.value = ""
    }

    const removeImage = () => {
        if (!image) return
        URL.revokeObjectURL(image.preview)
        setImage(null)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!image) return

        const formData = new FormData()
        formData.append("file", image.file)
        formData.append("name", image.name)

        mutation.mutate(formData)
    }

    return (
        <div>
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ImageIcon className="h-6 w-6" />
                            Subir Imagen
                        </CardTitle>
                        <CardDescription>
                            Selecciona una imagen y asigna un nombre
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Área de selección de archivo */}
                            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <Label htmlFor="file-upload" className="cursor-pointer">
                                    <span className="text-lg font-medium">Seleccionar imagen</span>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Arrastra un archivo aquí o haz clic para seleccionar
                                    </p>
                                </Label>

                                <Input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    name='file'
                                    onChange={handleFileSelect}
                                    className="hidden"
                                />
                            </div>

                            {/* Vista previa de la imagen seleccionada */}
                            {image && (
                                <div className="flex items-center gap-4 p-4 border rounded-lg">
                                    <img
                                        src={image.preview || "/placeholder.svg"}
                                        alt={image.name}
                                        className="h-16 w-16 object-cover rounded-md"
                                    />
                                    <div className="flex-1 space-y-2">
                                        <Label htmlFor={`name-${image.id}`}>Nombre de la imagen</Label>
                                        <Input
                                            id={`name-${image.id}`}
                                            value={image.name}
                                            name='name'
                                            placeholder="Ingresa un nombre para la imagen"
                                            onChange={(e) =>
                                                setImage((prev) => prev ? { ...prev, name: e.target.value } : null)
                                            }
                                        />
                                    </div>
                                    <Button type="button" className='hover:bg-red-400 cursor-pointer' variant="outline" size="icon" onClick={removeImage}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}

                            {/* Botón de envío */}
                            <Button
                                type="submit"
                                disabled={!image || mutation.isPending}
                                className="w-full hover:bg-red-400 cursor-pointer"
                            >
                                {mutation.isPending ? "Subiendo..." : "Subir imagen"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
