"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

/**
 * Sección de Descargas Gratuitas
 * Ofrece recursos y materiales gratuitos para desarrolladores
 */
export function FreeDownloadsSection() {
  const [downloadCounts, setDownloadCounts] = useState({})
  const { elementRef, isVisible } = useScrollAnimation()

  // Recursos gratuitos disponibles
  const freeResources = [
    {
      id: 1,
      title: "Kit de Componentes React",
      description: "Colección de 50+ componentes React reutilizables con Tailwind CSS",
      type: "Código",
      format: "ZIP",
      size: "2.3 MB",
      downloads: 1247,
      image: "/react-components-kit-preview.jpg",
      tags: ["React", "Tailwind", "Components"],
    },
    {
      id: 2,
      title: "Guía Completa de CSS Grid",
      description: "PDF interactivo con ejemplos prácticos y ejercicios de CSS Grid",
      type: "Guía",
      format: "PDF",
      size: "5.1 MB",
      downloads: 892,
      image: "/css-grid-guide-preview.jpg",
      tags: ["CSS", "Grid", "Layout"],
    },
    {
      id: 3,
      title: "Templates de Landing Pages",
      description: "5 templates modernos y responsivos listos para usar",
      type: "Templates",
      format: "ZIP",
      size: "8.7 MB",
      downloads: 2156,
      image: "/landing-page-templates-preview.jpg",
      tags: ["HTML", "CSS", "Templates"],
    },
    {
      id: 4,
      title: "Cheat Sheet JavaScript ES6+",
      description: "Referencia rápida de todas las características modernas de JavaScript",
      type: "Referencia",
      format: "PDF",
      size: "1.8 MB",
      downloads: 3421,
      image: "/javascript-cheat-sheet-preview.jpg",
      tags: ["JavaScript", "ES6", "Reference"],
    },
    {
      id: 5,
      title: "Iconos SVG para Desarrolladores",
      description: "Pack de 200+ iconos SVG optimizados para proyectos web",
      type: "Recursos",
      format: "ZIP",
      size: "3.2 MB",
      downloads: 1678,
      image: "/svg-icons-pack-preview.jpg",
      tags: ["SVG", "Icons", "Design"],
    },
    {
      id: 6,
      title: "Configuración VS Code Completa",
      description: "Mi configuración personal de VS Code con extensiones y snippets",
      type: "Configuración",
      format: "JSON",
      size: "0.5 MB",
      downloads: 987,
      image: "/vscode-configuration-preview.jpg",
      tags: ["VS Code", "Config", "Productivity"],
    },
  ]

  const handleDownload = (resourceId) => {
    // Simular descarga y actualizar contador
    setDownloadCounts((prev) => ({
      ...prev,
      [resourceId]: (prev[resourceId] || 0) + 1,
    }))

    // Aquí iría la lógica real de descarga
    console.log(`Descargando recurso ${resourceId}`)
  }

  return (
    <section ref={elementRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header de la sección */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent leading-tight">
            Descargas Gratuitas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recursos gratuitos de alta calidad para acelerar tu desarrollo. Componentes, guías, templates y herramientas
            que uso en mis proyectos diarios.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              ✅ 100% Gratuito
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Listo para usar
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              📱 Responsive
            </div>
          </div>
        </div>

        {/* Grid de recursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freeResources.map((resource, index) => (
            <div
              key={resource.id}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                transitionDuration: "800ms",
              }}
            >
              {/* Imagen del recurso */}
              <div className="relative overflow-hidden">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge del tipo */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {resource.type}
                </div>
                {/* Información del archivo */}
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                  {resource.format} • {resource.size}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{resource.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Estadísticas y botón de descarga */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>{resource.downloads + (downloadCounts[resource.id] || 0)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(resource.id)}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                    </svg>
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div
          className={`mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent leading-tight">
            ¿Quieres más recursos gratuitos?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Suscríbete a mi newsletter y recibe recursos exclusivos, tutoriales avanzados y las últimas tendencias en
            desarrollo web directamente en tu inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
              Suscribirme
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Sin spam. Cancela cuando quieras. 📧</p>
        </div>
      </div>
    </section>
  )
}
