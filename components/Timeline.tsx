"use client"

import { useState } from "react"

const timelineEvents = [
  {
    year: 2013,
    title: "Nacimiento",
    description:
      "La Metodología Invertida para la Investigación Científica (MIIC) nace como un proyecto de aula en la Universidad del Istmo, Panamá.",
    details:
      "Fue desarrollada por el Dr. Raúl Archibold Suárez, Ph.D., como autor principal, en colaboración con la Dra. Thaiska Tuñón Solano de Archibold, Ph.D., y el Dr. Sebastián Reyes, Ph.D.",
  },
  {
    year: 2014,
    title: "Implementación en ISAE Universidad",
    description:
      "El modelo MIIC se implementa como un proyecto de intervención educativa.",
    details:
      "Aplicado para la enseñanza de la metodología de la investigación en ISAE Universidad, Panamá.",
  },
  {
    year: "2015-2025",
    title: "Desarrollo continuo",
    description:
      "Desarrollo del modelo MIIC en contexto educativo.",
    details:
      "Se aplica como proyecto de intervención educativa en la Escuela Bilingüe República de Costa Rica.",
  },
  {
    year: 2017,
    title: "Primera presentación oficial",
    description:
      "Presentación en el I Congreso de Cultura Investigativa en la Educación Superior de Panamá.",
    details:
      "Organizado por el Instituto de Investigación de la Asociación de Universidades Privadas de Panamá (AUPPA).",
  },
  {
    year: 2018,
    title: "Congreso de Investigación Areandino - Bogotá",
    description:
      "Exposición del modelo MIIC en Colombia.",
    details:
      "Participación en el Congreso de Investigación Areandino, organizado por la Fundación Universitaria del Área Andina en Bogotá.",
  },
  {
    year: 2018,
    title: "Foro Internacional en Cartagena",
    description:
      "Presentación del MIIC en evento internacional.",
    details:
      "III Foro Internacional y IX Nacional de Pensamiento Moderno y Contemporáneo, en Cartagena de Indias, Colombia.",
  },
  {
    year: 2019,
    title: "Congreso en Madrid",
    description:
      "Participación internacional del modelo MIIC en Europa.",
    details:
      "XIX Congreso Internacional de Investigación Educativa en la Universidad Autónoma de Madrid, España.",
  },
  {
    year: 2019,
    title: "Congreso Areandino - Valledupar",
    description:
      "Nueva presentación del modelo MIIC en Colombia.",
    details:
      "X Congreso Internacional de Investigación Areandino, organizado por la Fundación Universitaria del Área Andina en Valledupar.",
  },
  {
    year: "Junio 2019",
    title: "Primera edición del libro MIIC",
    description:
      "Publicación formal del modelo MIIC.",
    details:
      "Lanzamiento de la primera edición del libro *Metodología Invertida para la Investigación Científica (MIIC)*.",
  },
  {
    year: "Agosto 2019",
    title: "Segunda edición del libro MIIC",
    description:
      "Ampliación de la obra escrita sobre el modelo.",
    details:
      "Lanzamiento de la segunda edición del libro *Metodología Invertida para la Investigación Científica (MIIC)*.",
  },
  {
    year: "Agosto 2020",
    title: "Artículo científico sobre el método MIIC",
    description:
      "Publicación académica formal del modelo.",
    details:
      "Publicado en la revista de divulgación científica ESPILA de ISAE Universidad.",
  },
  {
    year: 2024,
    title: "Nueva publicación de libro MIIC",
    description:
      "Se publica un libro con aplicaciones del modelo en nuevas áreas.",
    details:
      "Libro *Metodología de la Investigación. Método MIIC. Casos: educación y jurídico*, publicado en La Chorrera, Panamá.",
  },
  {
    year: 2025,
    title: "Prototipo Web MIIC Panamá",
    description:
      "Digitalización del modelo MIIC.",
    details:
      "Creación del prototipo de la Aplicación Web MIIC Panamá.",
  },
  {
    year: "Internacional",
    title: "Presentaciones internacionales del MIIC",
    description:
      "El modelo MIIC ha sido expuesto en múltiples países.",
    details:
      "Eventos en Panamá, Colombia, Paraguay, México, España, Costa Rica, El Salvador, entre otros.",
  },
];


export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900 sm:text-4xl">Nuestra Trayectoria</h2>
          <p className="mt-4 text-lg dark:text-white text-gray-600 ">La evolución del proyecto MIIC a través de los años</p>
        </div>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={index}
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
