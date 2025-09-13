"use client"

import { useState } from "react"
import { useScrollAnimation, useStaggerAnimation } from "../hooks/use-scroll-animation"

/**
 * Sección de Instagram Reels y Videos con animaciones de entrada
 * Muestra contenido de redes sociales con efectos visuales
 */
export function InstagramReelsSection() {
  const [activeReel, setActiveReel] = useState(0)

  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { containerRef: reelsRef, visibleItems: visibleReels } = useStaggerAnimation(4, 200)

  // Datos de ejemplo para los reels
  const reels = [
    {
      id: 1,
      title: "Tutorial: React Hooks Avanzados",
      description: "Aprende a usar useCallback y useMemo de forma efectiva",
      thumbnail: "/react-hooks-tutorial-video-thumbnail.jpg",
      views: "15.2K",
      likes: "892",
    },
    {
      id: 2,
      title: "CSS Grid en 60 segundos",
      description: "Domina CSS Grid con este tutorial rápido y práctico",
      thumbnail: "/css-grid-tutorial-video-thumbnail.jpg",
      views: "23.1K",
      likes: "1.2K",
    },
    {
      id: 3,
      title: "JavaScript Tips & Tricks",
      description: "Trucos de JavaScript que todo desarrollador debe conocer",
      thumbnail: "/javascript-tips-video-thumbnail.jpg",
      views: "31.5K",
      likes: "2.1K",
    },
    {
      id: 4,
      title: "Responsive Design Secrets",
      description: "Crea diseños que se adapten perfectamente a cualquier dispositivo",
      thumbnail: "/responsive-design-tutorial-video-thumbnail.jpg",
      views: "18.7K",
      likes: "956",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-background to-card transition-all duration-1000 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-slate-900 dark:text-gray-300">Reels & </span>
            <span className="text-primary">Videos</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Sígueme en Instagram para contenido diario sobre desarrollo web, tutoriales rápidos y tips que te ayudarán a
            mejorar tus habilidades de programación.
          </p>
          <div
            className={`mt-8 transition-all duration-1000 delay-400 ease-out ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <a
              href="https://instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Sígueme en Instagram
            </a>
          </div>
        </div>

        <div ref={reelsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className={`group cursor-pointer transition-all duration-700 ease-out ${
                visibleReels.has(index) ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-2"
              }`}
              onClick={() => setActiveReel(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Thumbnail del video con altura fija */}
                <div className="relative aspect-[9/16] overflow-hidden flex-shrink-0">
                  <img
                    src={reel.thumbnail || "/placeholder.svg"}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay con play button */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Badge de Instagram */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Reel
                  </div>
                </div>

                {/* Información del reel con altura flexible */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {reel.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{reel.description}</p>

                  {/* Estadísticas */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                      <span>{reel.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span>{reel.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-gray-300 [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]">
              ¿Te gusta mi contenido?
            </h3>
            <p className="text-muted-foreground mb-6">
              Comparte mis videos y ayúdame a llegar a más desarrolladores que quieren aprender y crecer en el mundo del
              desarrollo web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Compartir contenido
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-full font-semibold hover:bg-card/50 transition-colors">
                Sugerir tema
              </button>
            </div>
          </div>
        </div> */}


      </div>
    </section>
  )
}