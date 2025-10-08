"use client"

import { useState } from "react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

/**
 * Componente de encabezado con efecto 3D y animaciones de entrada
 * Incluye animaciones interactivas, foto personal y llamada a la acción
 */
const Header3D = () => {
  const [isHovered, setIsHovered] = useState(false)

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true,
  })
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      ref={headerRef}
      className={`relative overflow-hidden min-h-screen flex items-center transition-all duration-1000 ease-out ${
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-pulse" />

      <div
        className={`absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float transition-all duration-1000 delay-300 ${
          headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <div
        className={`absolute top-32 right-16 w-16 h-16 bg-secondary/20 rounded-full blur-lg float transition-all duration-1000 delay-500 ${
          headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={`absolute bottom-20 left-1/4 w-12 h-12 bg-accent/20 rounded-full blur-md float transition-all duration-1000 delay-700 ${
          headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 py-20 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido textual */}
            <div className="text-center md:text-left">
              <h1
                ref={titleRef}
                className={`text-5xl md:text-7xl font-bold mb-6 text-3d transition-all duration-1000 ease-out ${
                  isHovered ? "scale-105" : "scale-100"
                } ${titleVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 -rotate-12"}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Desarrollador
                </span>
              </h1>

              <h2
                className={`text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground transition-all duration-1000 delay-200 ease-out ${
                  titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                Creando experiencias web <span className="text-primary font-bold">extraordinarias</span>
              </h2>

              <p
                className={`text-lg md:text-xl max-w-xl text-muted-foreground leading-relaxed mb-8 transition-all duration-1000 delay-400 ease-out ${
                  titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Especializado en React, JavaScript y tecnologías modernas. Transformo ideas en aplicaciones web
                innovadoras y funcionales que impulsan el éxito de tu negocio.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1000 delay-600 ease-out ${
                  titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <button
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold 
                           hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 
                           shadow-lg hover:shadow-xl"
                >
                  Ver Mis Proyectos
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold 
                           hover:bg-primary hover:text-primary-foreground transform hover:scale-105 
                           transition-all duration-300"
                >
                  Contactar Ahora
                </button>
              </div>
            </div>

            <div
              ref={imageRef}
              className={`relative flex justify-center md:justify-end transition-all duration-1200 delay-300 ease-out ${
                imageVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-20 rotate-6"
              }`}
            >
              <div className="relative">
                {/* Imagen principal */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/professional-developer-portrait-coding-workspace-m.jpg"
                    alt="Desarrollador web profesional"
                    className="w-[350px] h-[400px] object-cover"
                  />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                <div
                  className={`absolute -top-6 -right-6 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-pulse transition-all duration-1000 delay-800 ${
                    imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
                <div
                  className={`absolute -bottom-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse transition-all duration-1000 delay-1000 ${
                    imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ animationDelay: "1s" }}
                />

                <div
                  className={`absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 
                               border border-border shadow-lg transition-all duration-1000 delay-600 ${
                                 imageVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                               }`}
                >
                  <span className="text-sm font-semibold text-primary">Disponible para proyectos</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-16 flex justify-center transition-all duration-1000 delay-1200 ease-out ${
              headerVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header3D;
