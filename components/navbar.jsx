"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detectar sección activa
      const sections = ["inicio", "sobre-mí", "proyectos", "habilidades", "reels", "descargas", "videos", "contacto"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-lg border-b border-white/20 shadow-lg"
          : "bg-black/30 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl font-bold text-white transition-all duration-300 ${
            isScrolled ? "scale-95" : "scale-100"
          }`}
        >
          <img src="/LogoBlank.png" alt="" className=" h-14 w-auto object-cover drop-shadow-blue-600 drop-shadow-lg" />
          
        </div>

        {/* Menú de navegación - Desktop */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Inicio", id: "inicio" },
            { name: "Sobre Mí", id: "sobre-mí" },
            { name: "Proyectos", id: "proyectos" },
            { name: "Habilidades", id: "habilidades" },
            { name: "Reels", id: "reels" },
            { name: "Descargas", id: "descargas" },
            { name: "Videos", id: "videos" },
            { name: "Contacto", id: "contacto" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`group relative font-medium transition-all duration-300 hover:cursor-pointer hover:text-blue-600 ${
                activeSection === item.id ? "text-blue-600" : "text-white/90"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                activeSection === item.id ? "w-full right-0" : "w-0 group-hover:w-full "
              }`} />
            </button>
          ))}
        </div>

        {/* Botones de la derecha - Mobile y Desktop */}
        <div className="flex items-center space-x-4">
          {/* Botón hamburguesa - Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
              isScrolled ? "scale-95" : "scale-100"
            }`}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Toggle de tema */}
          <div className={`transition-all duration-300 ${isScrolled ? "scale-95" : "scale-100"}`}>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/20">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Inicio", id: "inicio" },
                { name: "Sobre Mí", id: "sobre-mí" },
                { name: "Proyectos", id: "proyectos" },
                { name: "Habilidades", id: "habilidades" },
                { name: "Reels", id: "reels" },
                { name: "Descargas", id: "descargas" },
                { name: "Videos", id: "videos" },
                { name: "Contacto", id: "contacto" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMobileMenuOpen(false) // Cerrar menú al hacer clic
                  }}
                  className={`text-left font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600" : "text-white/90"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
