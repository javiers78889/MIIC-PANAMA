"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Eye, Target, Zap } from "lucide-react"
import Logo from "./ui/Logo"

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4 inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
            Desde 2015 - Panamá
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">🧠 ¿Quiénes somos?</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Somos una comunidad académica comprometida con la transformación del aprendizaje investigativo. Promovemos
            el desarrollo de nuevos investigadores mediante el uso del Método MIIC, una propuesta innovadora que
            facilita el diseño de protocolos científicos desde niveles básicos hasta superiores.
          </p>
         
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-red-200">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-600">🌟 Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser referentes en la formación de investigadores en América Latina, impulsando un modelo educativo que
                  prioriza el pensamiento conceptual, la creatividad científica y la solución de problemas reales desde
                  la educación primaria hasta el nivel doctoral.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-600">🎯 Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fomentar el aprendizaje significativo de la investigación científica a través de la Metodología
                  Invertida para la Investigación Científica (MIIC), capacitando a docentes y estudiantes en el uso de
                  algoritmos conceptuales para el diseño de proyectos, tesis y emprendimientos con impacto social y
                  académico.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-16 px-4 bg-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🔍 Sobre el Método MIIC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una propuesta innovadora que facilita el diseño de protocolos científicos desde niveles básicos hasta
              superiores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🔄 Algoritmos Conceptuales</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="font-mono text-lg text-center mb-2">
                    <span className="text-red-600 font-bold">A</span> →{" "}
                    <span className="text-blue-600 font-bold">B</span>
                  </div>
                  <div className="text-sm text-gray-600 text-center">Variable Independiente → Variable Dependiente</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="font-mono text-sm text-center mb-2">
                    <span className="text-red-600">{"a₁ + a₂ + a₃..."}</span> →{" "}
                    <span className="text-blue-600">{"b₁ + b₂ + b₃..."}</span>
                  </div>
                  <div className="text-sm text-gray-600 text-center">Subcausas → Subproblemas</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🧠 Aplicaciones</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Planteamiento del problema</h4>
                    <p className="text-gray-600 text-sm">
                      Identifica causas y efectos desde una perspectiva conceptual
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Diseño de objetivos</h4>
                    <p className="text-gray-600 text-sm">Permite formular objetivos alineados con las variables</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Formulación de hipótesis</h4>
                    <p className="text-gray-600 text-sm">Facilita la construcción de hipótesis multivariables</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Delimitación del tema</h4>
                    <p className="text-gray-600 text-sm">Ayuda a enfocar el alcance del estudio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📌 Objetivos</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Objetivo General
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Facilitar el diseño sistémico de protocolos de investigación científica mediante el uso de algoritmos
                  conceptuales, promoviendo la formación de nuevos investigadores desde niveles básicos hasta
                  superiores, y fortaleciendo los semilleros de investigación en diversos contextos educativos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Objetivos Específicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">
                      Aplicar el Método MIIC en instituciones educativas para fortalecer los semilleros de
                      investigación.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">
                      Capacitar a docentes y estudiantes en el diseño sistémico de protocolos científicos.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">
                      Promover investigaciones multivariables conceptuales que respondan a problemáticas reales.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">
                      Validar el método en diversos niveles educativos: primaria, premedia, licenciatura, maestría y
                      doctorado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">315+</div>
              <div className="text-red-100">Casos Validados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2015</div>
              <div className="text-red-100">Año de Creación</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-red-100">Niveles Educativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">LATAM</div>
              <div className="text-red-100">Alcance Regional</div>
            </div>
          </div>
        </div>
      </section>


     
    </div>
  )
}
