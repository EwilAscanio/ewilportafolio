import { useScrollAnimation } from "../hooks/use-scroll-animation"

/**
 * Componente Footer mejorado con animaciones de entrada
 * Contiene información personal, enlaces rápidos, recursos y call to action
 */
const Footer = () => {
  const { elementRef: footerRef, isVisible: footerVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer
      ref={footerRef}
      className={`border-t border-border transition-all duration-1000 ease-out ${
        footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: 'url(/images/footer.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Información personal */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Desarrollador Full Stack</h3>
            <p className="text-white mb-6 leading-relaxed">
              Especializado en crear experiencias web extraordinarias con las últimas tecnologías. Cada línea de
              código es una oportunidad para innovar y superar expectativas.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: "GitHub",
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                },
                {
                  name: "LinkedIn",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  name: "Twitter",
                  icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          

          {/* Recursos */}
          {/* <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2">
              {["Descargas Gratuitas", "Videos Tutoriales", "Blog", "Newsletter"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Enlaces rápidos */}
          <div className="lg:col-start-4">
            <h4 className="text-lg font-semibold text-primary mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Sobre Mí", "Proyectos", "Habilidades", "Contacto"].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to action */}
        {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4">¿Listo para crear algo increíble?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Cada proyecto es una oportunidad para innovar y superar expectativas. Trabajemos juntos para hacer
            realidad tu visión digital.
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Empezar Proyecto
          </button>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 Desarrollador Web. Todos los derechos reservados.</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">Hecho con ❤️ usando React y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
