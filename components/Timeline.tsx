"use client"

import { useState } from "react"

const timelineEvents = [
  {
    year: 2018,
    title: "Fundación de la Agencia",
    description: "Nuestro viaje comenzó con una pasión por el diseño minimalista y la creatividad.",
    details:
      "Fundada por dos diseñadores visionarios, nuestra agencia comenzó como un pequeño estudio en el centro de la ciudad, combinando su amor por el diseño minimalista y la innovación digital.",
  },
  {
    year: 2019,
    title: "Primera Exposición Importante",
    description: "Mostramos nuestra mezcla única de arte digital y diseño en el Festival de Diseño.",
    details:
      "Nuestra exposición 'Digital Bloom' atrajo a más de 10,000 visitantes y recibió elogios de la crítica por su enfoque innovador para fusionar tecnología con elementos creativos.",
  },
  {
    year: 2020,
    title: "Lanzamiento de Tienda Online",
    description: "Expandimos nuestro alcance llevando nuestras creaciones al mundo digital.",
    details:
      "En respuesta a los cambios globales, nos orientamos al comercio electrónico, ofreciendo nuestros diseños únicos y talleres virtuales a una audiencia mundial.",
  },
  {
    year: 2021,
    title: "Colaboración con Grandes Marcas",
    description: "Nos asociamos con marcas líderes para crear colecciones exclusivas.",
    details:
      "Nuestras colaboraciones incluyeron ediciones limitadas con importantes marcas de moda y una línea de productos personalizados.",
  },
  {
    year: 2022,
    title: "Reconocimiento Internacional",
    description: "Recibimos el prestigioso Premio Internacional de Diseño.",
    details:
      "Nuestra instalación 'Ecos Etéreos', que combinaba proyecciones holográficas con elementos interactivos, ganó la medalla de oro en la Exposición Internacional de Diseño.",
  },
  {
    year: 2023,
    title: "Expansión a Tiendas Físicas",
    description: "Abrimos nuestra primera tienda insignia en el corazón de la ciudad.",
    details:
      "Nuestra ubicación cuenta con una experiencia inmersiva, combinando instalaciones digitales con una selección curada de productos de diseño y artículos de estilo de vida.",
  },
]

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900 sm:text-4xl">Nuestra Trayectoria</h2>
          <p className="mt-4 text-lg dark:text-white text-gray-600 ">La evolución de nuestra agencia a través de los años</p>
        </div>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>
      <div className="w-5/12 cursor-pointer transition-transform duration-300 hover:scale-105" onClick={onToggle}>
        <div className="p-4 bg-white rounded-lg shadow-md border border-blue-100">
          <span className="font-bold text-blue-500">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1 text-gray-900">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-500">{event.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
