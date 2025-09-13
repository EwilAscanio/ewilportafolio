import { Button } from "./ui/button"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { useRevealAnimation } from "../hooks/useRevealAnimation"
import heroBg from "../public/hero-bg.jpg"

const Hero = () => {

  const contentRef = useRevealAnimation();
  const buttonsRef = useRevealAnimation();
  const socialRef = useRevealAnimation();

  // const scrollToSection = (href) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={contentRef} className="slide-in-up reveal-up">
          
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8 glow-primary">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-white">Disponible para proyectos</span>
          </div> */}

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Desarrollamos,
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Innovamos,
            </span>
            <br />
            Tú Triunfas
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Soy un desarrollador web especializado en crear soluciones digitales 
            que impulsan el crecimiento de tu negocio con tecnologías modernas.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 reveal-bounce delay-300">
            

            <button
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold 
                           hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 
                           shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Ver Mis Proyectos
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-white/20 text-white backdrop-blur-sm rounded-lg font-semibold 
                           hover:bg-primary hover:text-primary-foreground transform hover:scale-105 
                           transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Contactar Ahora
                </button>

          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex justify-center space-x-6 reveal-scale delay-500">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-primary hover:scale-110 transition-all duration-300 "
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
