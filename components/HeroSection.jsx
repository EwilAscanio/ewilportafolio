import * as React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Github, Linkedin } from "lucide-react";
import { useRevealAnimation } from "../hooks/useRevealAnimation"
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animationKey, setAnimationKey] = React.useState(0)

  const socialRef = useRevealAnimation();
  const [buttonsVisible, setButtonsVisible] = React.useState(false);

  const slides = [
    {
      image: '/slide1.webp',
      title: 'Innovación Visual al Servicio de tu Marca',
      subtitle: 'Estrategias creativas y ejecución impecable para posicionar tu negocio en la era digital. Porque lo visual no es decoración, es comunicación.',
    },
    {
      image: '/slide2.webp',
      title: 'Diseño con Propósito, Resultados con Impacto',
      subtitle: 'Transformo ideas en experiencias digitales que conectan, convierten y perduran. Cada proyecto es una oportunidad para superar expectativas.',
    },
    {
      image: '/hero-bg.jpg',
      title: 'Tu Visión, Mi Compromiso Profesional',
      subtitle: 'Colaboro contigo para construir soluciones a medida: diseño, desarrollo y estrategia unidos en un solo objetivo — tu éxito',
    },
  ]

  const subtitleWords = slides[activeIndex].subtitle.split(' ');
  const subtitleAnimationDuration = (subtitleWords.length * 0.08 + 0.5) * 1000; // in ms

  React.useEffect(() => {
    setButtonsVisible(false);
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, subtitleAnimationDuration);

    return () => clearTimeout(timer);
  }, [animationKey, subtitleAnimationDuration]);

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
  }, [slides.length])

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setActiveIndex(index);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  React.useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [activeIndex]);


  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const titleChars = slides[activeIndex].title.split('');

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className="absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: activeIndex === index ? 1 : 0 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <div key={animationKey} className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {titleChars.map((char, index) => (
              <span
                key={index}
                className="animate-fade-in-char"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitleWords.map((word, index) => (
              <span
                key={index}
                className="animate-fade-in-word"
                style={{ animationDelay: `${index * 0.08 + 0.5}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </p>
         <br></br>
         <br></br>
         
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 reveal-bounce ${buttonsVisible ? 'visible' : ''}`}>
            <button
                  onClick={() => scrollToSection('#proyectos')}
                  className="px-8 py-4 bg-primary text-white font-semibold 
                           hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 
                           shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Ver Mis Proyectos
                </button>
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="px-8 py-4 border-2 border-white/20 text-white backdrop-blur-sm font-semibold 
                           hover:bg-primary hover:text-primary-foreground transform hover:scale-105 
                           transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Contactar Ahora
                </button>
          </div> 
        </div>
      </div>

      

      {/* Navigation Arrows */}
      
      {/* <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <Button onClick={prevSlide} variant="" size="icon" className="rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div> */}

      {/* <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <Button onClick={nextSlide} variant="outline" size="icon" className="rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div> */}

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
      <a onClick={prevSlide} className="text-gray-600 bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
        <ArrowLeft className="h-6 w-6" />
      </a>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
      <a onClick={prevSlide} className="text-gray-600 bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
        <ArrowRight className="h-6 w-6" />
      </a>
      </div>
      
      

      {/* Social Links */}
      <div className="absolute bottom-8 left-8 z-20">
        <div ref={socialRef} className="flex flex-col space-y-4 reveal-scale delay-500">
              <a 
                href="https://github.com/EwilAscanio" /* TODO: Add your GitHub profile URL */
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/" /* TODO: Add your LinkedIn profile URL */
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-primary hover:scale-110 transition-all duration-300 "
              >
                <Linkedin className="w-5 h-5" />
              </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection