"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Slide = {
    id: string
    cloudinaryUrl: string
    title: string
}

const slides: Slide[] = [
    {
        id: "1",
        cloudinaryUrl: "https://res.cloudinary.com/dga0uaurm/video/upload/v1748836237/Ra%C3%BAl_Archibold_Su%C3%A1rez._U_Mayor_de_Cartagena._Colombia_1_op7wlw.mp4",
        title: "Raúl Archibold Suárez. U Mayor de Cartagena. Colombia",
    },
    {
        id: "2",
        cloudinaryUrl: "https://res.cloudinary.com/dga0uaurm/video/upload/v1748836245/Ra%C3%BAl_Archibold_Su%C3%A1rez._Fundaci%C3%B3n_Universitaria_del_%C3%81rea_Andina_Colombia._vvradf.mp4",
        title: "Raúl Archibold Suárez. Fundación Universitaria del Área Andina, Colombia.",
    },
    {
        id: "3",
        cloudinaryUrl: "https://res.cloudinary.com/dga0uaurm/video/upload/v1748836240/Ponente_Ra%C3%BAl_Archibold_Su%C3%A1rez._Universidad_Aut%C3%B3noma_de_Madrid_Espa%C3%B1a_parnum.mp4",
        title: "Raúl Archibold Suárez. Universidad Autónoma de Madrid, España",
    },
    {
        id: "4",
        cloudinaryUrl: "https://res.cloudinary.com/dga0uaurm/video/upload/v1748836238/Semillero_de_investigaci%C3%B3n_de_la_Escuela_Biling%C3%BCe_Rep%C3%BAblica_de_Costa_Rica_1_ig59de.mp4",
        title: "Semillero de investigación de la Escuela Bilingüe República de Costa Rica",
    },
    {
        id: "5",
        cloudinaryUrl: "https://res.cloudinary.com/dga0uaurm/video/upload/v1748836242/Presentaci%C3%B3n___Libro_Metodolog%C3%ADa_de_la_Investigaci%C3%B3n_Cient%C3%ADfica_ISAE_Universidad_por_Thaiska_Tu%C3%B1%C3%B3n_pr2lyf.mp4",
        title: "Presentación : Libro Metodología de la Investigación Científica, ISAE Universidad, por Thaiska Tuñón",
    },
    {
        id: "6",
        cloudinaryUrl: "https://res.cloudinary.com/dga0uaurm/video/upload/v1748836243/Semillero_de_investigaci%C3%B3n_de_la_Escuela_Biling%C3%BCe_Rep%C3%BAblica_de_Costa_Rica_huf5ay.mp4",
        title: "Semillero de investigación de la Escuela Bilingüe República de Costa Rica",
    },

    {
        id: "7",
        cloudinaryUrl: "https://res.cloudinary.com/dga0uaurm/video/upload/v1748836241/Semillero_de_investigaci%C3%B3n_de_la_Escuela_Biling%C3%BCe_Rep%C3%BAblica_de_Costa_vy3e9j.mp4",
        title: "Semillero de investigación de la Escuela Bilingüe República de Costa,",
    },
]

export default function CloudinaryVideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})



    useEffect(() => {
        const timer = setTimeout(() => {

        }, 200)

        return () => clearTimeout(timer)
    }, [currentIndex])

    useEffect(() => {
        const currentSlide = slides[currentIndex]
        const videoElement = videoRefs.current[currentSlide.id]

        const handleVideoEnd = () => {
            goToNextSlide()
        }

        if (videoElement) {
            videoElement.addEventListener("ended", handleVideoEnd)
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener("ended", handleVideoEnd)
            }
        }
    }, [currentIndex])

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 bg-auth bg-cover bg-no-repeat">

            <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Botón anterior */}
                <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 hover:bg-white"
                        onClick={goToPrevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Anterior</span>
                    </Button>
                </div>

                {/* Botón siguiente */}
                <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 hover:bg-white"
                        onClick={goToNextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Siguiente</span>
                    </Button>
                </div>

                {/* Carrusel */}
                <div className="relative w-full aspect-video">
                    {slides.map((slide, index) => (

                        <div key={slide.id}
                            className={`absolute top-0 cursor-pointer left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"}`}
                        >
                            <div className="w-full h-full flex flex-col relative">
                                <div className="w-full flex-1 bg-black relative">
                                    <video
                                        ref={(el) => {
                                            if (el) videoRefs.current[slide.id] = el
                                        }}
                                        className="w-full h-full object-contain"
                                        src={slide.cloudinaryUrl}
                                        muted
                                        onClick={(event) => {
                                            const video = event.currentTarget as HTMLVideoElement
                                            video.play()
                                            video.muted = !video.muted


                                        }}
                                        onMouseEnter={(event) => {
                                            const video = event.currentTarget as HTMLVideoElement

                                            video.play()
                                            
                                        }}
                                    />
                                    {/* Título estilo YouTube */}
                                    <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-sm px-4 py-2">
                                        {slide.title}
                                    </div>
                                </div>
                            </div>
                        </div>




                    ))}
                </div>
            </div>
        </div>
    )
}