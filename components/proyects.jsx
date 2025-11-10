"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation, useStaggerAnimation } from "../hooks/use-scroll-animation"
import { Eye, Code } from "lucide-react"

/**
 * Sección de portafolio con tarjetas 3D interactivas y animaciones de entrada
 * Muestra proyectos destacados con efectos visuales
 */
const Proyects = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { containerRef: projectsRef, visibleItems: visibleProjects } = useStaggerAnimation(4, 200)

  const projects = [
    {
      title: "Sistema de Gestión de Ganado",
      description: "Aplicación web para seguimiento y administración de ganado",
      image: "/mobile-app-interface.png",
      tech: ["Next JS", "Tailwind CSS", "MariaDB", ],
      link: "#",
    },
    {
      title: "Pagina Web Personal",
      description: "Escaparate digital para destacar tu marca y servicios.",
      image: "/pagesoymaho.webp",
      tech: ["React", "Tailwind CSS", "Javascript",],
      linkCode: "https://github.com/EwilAscanio/soymahorodriguez",
      linkProject: "https://www.soymahorodriguez.com/",
    },
    
    {
      title: "Sistema de Asistencia",
      description: "Panel de control con visualización de datos en tiempo real",
      image: "/dashboarasistencia.webp",
      tech: ["Next JS", "Tailwind CSS", "PostgresSQL",],
      linkCode: "https://github.com/EwilAscanio/AppIelfa",
      linkProject: "https://app-ielfa.vercel.app/",
    },
    {
      title: "E-commerce Moderno",
      description: "Plataforma de comercio electrónico con Next.js y PostgreSQL Conectado a tu sistema de inventario",
      image: "/ecommerce.webp",
      tech: ["Next JS", "Tailwind CSS", "PostgresSQL",],
      linkCode: "https://github.com/EwilAscanio/TiendaKass",
      linkProject: "https://tienda-kass.vercel.app/",
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

                {/* Botones de acción */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    asChild
                    className="flex-1 text-primary hover:bg-primary hover:text-foreground transition-colors duration-300 bg-transparent"
                  >
                    <a href={project.linkProject} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="flex-1 text-primary hover:bg-primary hover:text-foreground transition-colors duration-300 bg-transparent"
                  >
                    <a href={project.linkCode} target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Proyects;
