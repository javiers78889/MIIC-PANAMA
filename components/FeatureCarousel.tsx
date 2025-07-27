"use client"

import Image from "next/image"

const features = [
  {
    title: "Dr. Raúl Archibold, Ph.D.",
    description: " Doctor en Educación con énfasis en Investigación. ",
    icon: "/raul.jpg",
  },
  {
    title: "Ing. Javier Solis",
    description: "Licenciado en Ing. de Sistemas & Computación.",
    icon: "/javier.jpg",
  },
  {
    title: "Ing. Jesús Carreiro",
    description: "Licenciado en Ing. de Sistemas & Computación.",
    icon: "/jesus.jpg",
  },
  {
    title: "Ing. Héctor Degracia",
    description: "Licenciado en Ing. de Sistemas con énfasis en construcción de aplicaciones",
    icon: "/hector.jpeg",
  },
]


export default function FeatureCarousel() {
  return (
    <div id='sobreNosotros' className="bg-cyan-200 py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Sobre Nosotros</h2>

        <div className="cursor-grab overflow-hidden">
          <div className="flex w-full justify-center lg:flex-row flex-col items-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative flex flex-col items-center w-full max-w-sm cursor-pointer">
                {/* Imagen */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Capa oscura encima de la imagen */}
                  <div className="absolute inset-0 bg-black/10 z-10" />

                  {/* Título blanco, siempre visible */}
                  <div className="absolute bottom-4 w-full text-center z-20">
                    <h3 className="text-white text-2xl font-bold">{feature.title}</h3>
                  </div>
                </div>

                {/* Descripción que aparece al hacer hover */}
                <div className="mt-4 w-full text-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}