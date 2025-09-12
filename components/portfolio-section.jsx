"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation, useStaggerAnimation } from "../hooks/use-scroll-animation"

/**
 * Sección de portafolio con tarjetas 3D interactivas y animaciones de entrada
 * Muestra proyectos destacados con efectos visuales
 */
export function PortfolioSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { containerRef: projectsRef, visibleItems: visibleProjects } = useStaggerAnimation(3, 200)

  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma de comercio electrónico con React y Node.js",
      image: "/modern-ecommerce-interface.png",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control con visualización de datos en tiempo real",
      image: "/analytics-dashboard.png",
      tech: ["React", "D3.js", "API REST"],
      link: "#",
    },
    {
      title: "App Móvil Híbrida",
      description: "Aplicación móvil multiplataforma con React Native",
      image: "/mobile-app-interface.png",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 transition-all duration-1000 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y desafiantes
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-3d border-2 border-border/50 hover:border-primary/50 transition-all duration-700 overflow-hidden group ease-out ${
                visibleProjects.has(index)
                  ? "opacity-100 translate-y-0 rotate-0 scale-100"
                  : "opacity-0 translate-y-20 rotate-1 scale-95"
              }`}
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tecnologías utilizadas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botón de acción */}
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                >
                  Ver Proyecto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
