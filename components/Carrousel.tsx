"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import getpostsaction from "@/action/get-posts-action"
import Image from "next/image"

export function CloudinaryVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const { data, isPending } = useQuery({
    queryKey: ["files"],
    queryFn: getpostsaction,
  })

  // Efecto autoplay
  useEffect(() => {
    if (!isAutoPlaying || !data?.length) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, data?.length])

  // Estados de carga o vacío
  if (isPending) {
    return (
      <div className="text-center font-black uppercase text-2xl">
        <h2>Cargando...</h2>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center font-black uppercase text-2xl">
        <h2>No hay Publicaciones</h2>
      </div>
    )
  }

  // Funciones de navegación
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative w-full max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Contenedor principal */}
      <div className="relative h-96 overflow-hidden">
        {data.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out",
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            )}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">{image.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 ease-in-out",
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Botón Pausar/Reproducir */}
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="sm"
          className="bg-black/20 hover:bg-black/40 text-white text-xs backdrop-blur-sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? "Pausar" : "Reproducir"}
        </Button>
      </div>
    </div>
  )
}
