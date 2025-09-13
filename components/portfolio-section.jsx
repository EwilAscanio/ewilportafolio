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
      title: "Sistema de Gestión de Ganado",
      description: "Aplicación web para seguimiento y administración de ganado",
      image: "/mobile-app-interface.png",
      tech: ["Next JS", "Tailwind CSS", "MariaDB", ],
      link: "#",
    },
    {
      title: "E-commerce Moderno",
      description: "Plataforma de comercio electrónico con React y Node.js",
      image: "/modern-ecommerce-interface.png",
      tech: ["React", "MariaDB", "Javascript"],
      link: "#",
    },
    {
      title: "Sistema de Asistencia",
      description: "Panel de control con visualización de datos en tiempo real",
      image: "/analytics-dashboard.png",
      tech: ["Next JS", "Tailwind CSS", "MariaDB"],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-slate-900 dark:text-gray-300">Proyectos </span>
            <span className="text-blue-600">Destacados</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
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

                <Button
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                >
                  Codigo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
