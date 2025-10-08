"use client"

import { useScrollAnimation, useStaggerAnimation } from "../hooks/use-scroll-animation"

/**
 * Sección de habilidades con barras de progreso animadas y efectos de entrada
 * Muestra las tecnologías y nivel de experiencia
 */
const SkillsSection = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { containerRef: skillsRef, visibleItems: visibleSkills } = useStaggerAnimation(8, 150)
  const { containerRef: certsRef, visibleItems: visibleCerts } = useStaggerAnimation(4, 100)

  const skills = [
    { name: "HTML", level: 96, color: "bg-red-500" },
    { name: "CSS/Tailwind", level: 88, color: "bg-purple-500" },
    { name: "JavaScript", level: 94, color: "bg-yellow-500" },
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Next JS", level: 88, color: "bg-green-500" },
    { name: "MariaDB", level: 80, color: "bg-green-600" },
    { name: "Git", level: 92, color: "bg-orange-500" },
    { name: "Inteligencia Arficial", level: 70, color: "bg-lime-500" },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-slate-900 dark:text-gray-300">Habilidades </span>
            <span className="text-primary">Técnicas</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
          <p className="text-xl text-muted-foreground mt-4">Tecnologías que utilizo en mis proyectos</p>
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
      </div>
    </section>
  )
}
export default SkillsSection;