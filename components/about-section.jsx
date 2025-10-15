"use client"
import { useScrollAnimation, useStaggerAnimation } from "../hooks/use-scroll-animation"

/**
 * Sección Sobre Mí con animaciones de entrada
 * Información personal y profesional del desarrollador
 */
const AboutSection = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })
  const { containerRef: statsRef, visibleItems: visibleStats } = useStaggerAnimation(3, 150)

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 bg-card/50 transition-all duration-1000 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-slate-900 dark:text-gray-300">Sobre </span>
            <span className="text-primary">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className={`relative transition-all duration-1200 delay-300 ease-out ${
              imageVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 -translate-x-20 -rotate-3"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                //src="/professional-developer-portrait-in-modern-office.jpg"
                src="/sobremi.webp"
                alt="Foto profesional del desarrollador"
                className="w-full h-full object-cover"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div
              className={`absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl transition-all duration-1000 delay-800 ${
                imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />
            <div
              className={`absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl transition-all duration-1000 delay-1000 ${
                imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ease-out ${
              sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-gray-300 leading-tight [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]">
                ¡Hola! Soy un desarrollador web apasionado
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg text-justify">
                Con más de 3 años de experiencia en el desarrollo web, me especializo en crear aplicaciones modernas y
                funcionales utilizando las últimas tecnologías. Mi pasión por el código limpio y las mejores prácticas
                me impulsa a entregar soluciones de alta calidad.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-3 [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]">Mi Enfoque</h4>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Creo en la importancia de entender las necesidades del cliente para crear soluciones que no solo
                funcionen perfectamente, sino que también ofrezcan una experiencia de usuario excepcional. Cada proyecto
                es una oportunidad para innovar y superar expectativas.
              </p>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "50+", label: "Tazas de Café", color: "text-primary" },
                { value: "3+", label: "Años Exp.", color: "text-primary" },
                { value: "99%", label: "Satisfacción", color: "text-primary" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 bg-background rounded-lg border border-border transition-all duration-700 ease-out ${
                    visibleStats.has(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Valores */}
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-3 leading-tight [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]">Mis Valores</h4>
              <div className="space-y-2">
                {[
                  "💡 Innovación constante y aprendizaje continuo",
                  "🎯 Atención al detalle y perfección en cada línea de código",
                  "🤝 Comunicación clara y colaboración efectiva",
                  "⚡ Entrega rápida sin comprometer la calidad",
                ].map((value, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-500 ease-out ${
                      sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection;

