import * as React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animationKey, setAnimationKey] = React.useState(0)

  const slides = [
    {
      image: '/slide1.webp',
      title: 'Desarrollador Frontend',
      subtitle: 'Especializado en React, JavaScript y tecnologías modernas. Transformo ideas en aplicaciones web innovadoras y funcionales que impulsan el éxito de tu negocio.',
      cta: 'Ver Proyectos',
      ctaLink: '#proyectos',
    },
    {
      image: '/slide2.webp',
      title: 'Desarrollo Web de Alto Impacto',
      subtitle: 'Creo experiencias digitales excepcionales que impulsan tu negocio. Especializado en desarrollo full-stack con tecnologías modernas y diseño centrado en el usuario.',
      cta: 'Contactar',
      ctaLink: '#contacto',
    },
    {
      image: '/hero-bg.jpg',
      title: 'Agencia de desarrollo Web',
      subtitle: 'Creando experiencias digitales extraordinarias con código limpio, diseño elegante y tecnologías de vanguardia.',
      cta: 'Saber Más',
      ctaLink: '#sobre-mi',
    },
  ]

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
          <p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-subtle-slide-in-up"
            style={{ animationDelay: '1s' }}
          >
            {slides[activeIndex].subtitle}
          </p>
          <Button 
            onClick={() => scrollToSection(slides[activeIndex].ctaLink)}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 animate-subtle-slide-in-up"
            style={{ animationDelay: '1.5s' }}
          >
            {slides[activeIndex].cta}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full z-20 bg-white/10 text-white hover:bg-white/20 border-none"
        onClick={prevSlide}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full z-20 bg-white/10 text-white hover:bg-white/20 border-none"
        onClick={nextSlide}
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
    </section>
  )
}

export default HeroSection