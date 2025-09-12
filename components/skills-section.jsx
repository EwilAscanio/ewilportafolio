"use client"

import { useScrollAnimation, useStaggerAnimation } from "../hooks/use-scroll-animation"

/**
 * Sección de habilidades con barras de progreso animadas y efectos de entrada
 * Muestra las tecnologías y nivel de experiencia
 */
export function SkillsSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { containerRef: skillsRef, visibleItems: visibleSkills } = useStaggerAnimation(6, 150)
  const { containerRef: certsRef, visibleItems: visibleCerts } = useStaggerAnimation(4, 100)

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-yellow-500" },
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "CSS/Tailwind", level: 88, color: "bg-purple-500" },
    { name: "MongoDB", level: 80, color: "bg-green-600" },
    { name: "Git", level: 92, color: "bg-orange-500" },
  ]

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 bg-muted/30 transition-all duration-1000 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-muted-foreground">Tecnologías que domino y utilizo en mis proyectos</p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`space-y-3 transition-all duration-700 ease-out ${
                visibleSkills.has(index) ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-10 scale-95"
              }`}
            >
              {/* Nombre y porcentaje */}
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>

              <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full transition-all duration-1500 ease-out ${
                    visibleSkills.has(index) ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: visibleSkills.has(index) ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 200 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-800 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent">
            Certificaciones
          </h3>
          <div ref={certsRef} className="flex flex-wrap justify-center gap-4">
            {["React Developer", "JavaScript Expert", "Node.js Certified", "AWS Cloud"].map((cert, index) => (
              <div
                key={index}
                className={`px-6 py-3 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ease-out ${
                  visibleCerts.has(index) ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-1"
                }`}
              >
                <span className="font-medium text-card-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
