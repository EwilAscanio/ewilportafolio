"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Logo from "../public/logo.jpg"


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

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
          <img src="../public/logo2.png" alt="" className=" h-14 w-auto object-cover drop-shadow-gray-600 drop-shadow-sm" />
          
        </div>

        {/* Menú de navegación */}
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

        {/* Toggle de tema */}
        <div className={`transition-all duration-300 ${isScrolled ? "scale-95" : "scale-100"}`}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
