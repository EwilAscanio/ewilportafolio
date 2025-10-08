"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

/**
 * Sección de Videos y Transmisiones en Vivo
 * Muestra contenido de video educativo y streams
 */
const VideosLiveSection = () => {
  const [activeTab, setActiveTab] = useState("videos")
  const { elementRef, isVisible } = useScrollAnimation()

  // Videos educativos
  const videos = [
    {
      id: 1,
      title: "Curso Completo de React 2024",
      description: "Aprende React desde cero hasta nivel avanzado con proyectos reales",
      duration: "4:32:15",
      views: "45.2K",
      thumbnail: "/react-course-video-thumbnail.jpg",
      category: "Curso",
      level: "Principiante a Avanzado",
    },
    {
      id: 2,
      title: "Masterclass: Next.js 14 App Router",
      description: "Domina las nuevas características de Next.js 14 y el App Router",
      duration: "2:18:45",
      views: "28.7K",
      thumbnail: "/nextjs-masterclass-video-thumbnail.jpg",
      category: "Masterclass",
      level: "Intermedio",
    },
    {
      id: 3,
      title: "Tailwind CSS: De Básico a Experto",
      description: "Crea diseños increíbles con Tailwind CSS y mejores prácticas",
      duration: "3:15:30",
      views: "32.1K",
      thumbnail: "/tailwind-css-course-video-thumbnail.jpg",
      category: "Tutorial",
      level: "Todos los niveles",
    },
    {
      id: 4,
      title: "JavaScript Moderno: ES2024",
      description: "Las últimas características de JavaScript que debes conocer",
      duration: "1:45:20",
      views: "19.8K",
      thumbnail: "/javascript-es2024-video-thumbnail.jpg",
      category: "Actualización",
      level: "Intermedio",
    },
  ]

  // Próximos streams en vivo
  const upcomingStreams = [
    {
      id: 1,
      title: "Construyendo una App Full-Stack en Vivo",
      description: "Desarrollo completo de una aplicación con React, Node.js y MongoDB",
      date: "2024-01-15",
      time: "20:00",
      duration: "3 horas",
      platform: "YouTube",
      thumbnail: "/fullstack-app-live-stream-thumbnail.jpg",
    },
    {
      id: 2,
      title: "Q&A: Resolviendo Dudas de Desarrollo",
      description: "Sesión interactiva para resolver tus preguntas sobre programación",
      date: "2024-01-18",
      time: "19:00",
      duration: "2 horas",
      platform: "Twitch",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "Code Review: Proyectos de la Comunidad",
      description: "Revisamos y mejoramos proyectos enviados por la comunidad",
      date: "2024-01-22",
      time: "21:00",
      duration: "2.5 horas",
      platform: "YouTube",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-card to-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header de la sección */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-slate-900 dark:text-gray-300">Videos & </span>
            <span className="text-primary">Live Streams</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Contenido educativo de alta calidad y transmisiones en vivo donde programamos juntos, resolvemos dudas y
            exploramos las últimas tecnologías.
          </p>
        </div>

        {/* Tabs de navegación */}
        <div
          className={`flex justify-center mb-12 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="bg-muted p-1 rounded-full">
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📹 Videos Educativos
            </button>
            <button
              onClick={() => setActiveTab("live")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "live"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🔴 Próximos Lives
            </button>
          </div>
        </div>

        {/* Contenido de Videos */}
        {activeTab === "videos" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
                    transitionDuration: "800ms",
                  }}
                >
                  {/* Thumbnail del video */}
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay con play button */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duración */}
                    <div
                      className="absolute bottom-4 right-4 bg-black text-white px-3 py-2 rounded-md text-sm font-bold shadow-lg border border-gray-800"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {video.duration}
                    </div>
                    {/* Categoría */}
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {video.category}
                    </div>
                  </div>

                  {/* Información del video */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{video.description}</p>

                    {/* Metadatos */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                        <span>{video.views} visualizaciones</span>
                      </div>
                      <span className="bg-muted px-2 py-1 rounded text-xs">{video.level}</span>
                    </div>

                    {/* Botón de ver */}
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                      Ver Video
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action para YouTube */}
            <div
              className={`text-center mt-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-gray-300 [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]">
                  📺 Suscríbete a mi canal
                </h3>
                <p className="text-muted-foreground mb-6">
                  Más de 100 videos gratuitos sobre desarrollo web. Nuevo contenido cada semana.
                </p>
                <a
                  href="https://youtube.com/tu_canal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Suscribirse Gratis
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de Live Streams */}
        {activeTab === "live" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingStreams.map((stream, index) => (
                <div
                  key={stream.id}
                  className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
                    transitionDuration: "800ms",
                  }}
                >
                  {/* Thumbnail del stream */}
                  <div className="relative overflow-hidden">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge de LIVE */}
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      PRÓXIMO LIVE
                    </div>
                    {/* Plataforma */}
                    <div
                      className="absolute top-4 right-4 bg-black text-white px-3 py-2 rounded-md text-sm font-bold shadow-lg border border-gray-800"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {stream.platform}
                    </div>
                  </div>

                  {/* Información del stream */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {stream.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{stream.description}</p>

                    {/* Fecha y hora */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                        </svg>
                        <span>
                          {new Date(stream.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 11.99 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>
                          {stream.time} • {stream.duration}
                        </span>
                      </div>
                    </div>

                    {/* Botón de recordatorio */}
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 11.99 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Recordarme
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Información adicional sobre los streams */}
            <div
              className={`bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-2xl p-8 text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-gray-300 [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]">
                🔔 No te pierdas ningún stream
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Activa las notificaciones en YouTube y Twitch para recibir alertas cuando empiecen las transmisiones en
                vivo. ¡Programamos juntos y resolvemos dudas en tiempo real!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://youtube.com/tu_canal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
                <a
                  href="https://twitch.tv/tu_usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                  </svg>
                  Twitch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default VideosLiveSection;