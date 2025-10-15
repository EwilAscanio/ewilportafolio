"use client"

import {
  Server,
  Code,
  ShoppingCart,
  Monitor,
  LineChart,
  Settings,
  Smartphone
} from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/use-scroll-animation';

const MyServices = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { containerRef: servicesRef, visibleItems: visibleServices } = useStaggerAnimation(6, 150);

  // Definición de los servicios (sin cambios)
  const services = [
    {
      icon: <Server className="text-4xl" />, 
      title: "Administración de Servidores con Windows Server",
      description: "Garantizo la estabilidad, seguridad y rendimiento de tu infraestructura de TI. Me encargo de la gestión integral de tus servidores para que puedas centrarte en tu negocio.",
      features: [
        "Seguridad Reforzada", 
        "Optimización y Rendimiento", 
        "Gestión Centralizada", 
        "Soporte Proactivo"
      ]
    },
    {
      icon: <Code className="text-4xl" />,
      title: "Desarrollo de Páginas Web y Aplicaciones",
      description: "Creo soluciones digitales únicas y a la medida que impulsan tu marca y mejoran la interacción con tus clientes. Tu visión, convertida en una plataforma funcional y atractiva.",
      features: [
        "Diseño Centrado en el Usuario", 
        "Funcionalidades a la Medida", 
        "Adaptable a Todos los Dispositivos", 
        "Tecnología Moderna y Escalable"
      ]
    },
    {
      icon: <ShoppingCart className="text-4xl" />,
      title: "Desarrollo de Tiendas E-Commerce",
      description: "Impulso tus ventas en línea con tiendas virtuales atractivas, seguras y fáciles de administrar para ofrecer una experiencia de compra excepcional.",
      features: [
        "Experiencia de Compra Intuitiva", 
        "Seguridad en las Transacciones", 
        "Optimización para Motores de Búsqueda (SEO)", 
        "Fácil Gestión de Productos"
      ]
    },
    {
      icon: <Monitor className="text-4xl" />,
      title: "Mantenimiento de PC",
      description: "Mantengo tus equipos informáticos en óptimas condiciones para asegurar su rendimiento y prolongar su vida útil. Un servicio preventivo y correctivo que te ahorra problemas.",
      features: [
        "Prevención de Fallas Críticas", 
        "Optimización del Rendimiento", 
        "Seguridad Garantizada", 
        "Reducción de Costos a Largo Plazo"
      ]
    },
    {
      icon: <LineChart className="text-4xl" />,
      title: "Asesorías de Sistema Administrativo Xenx ERP",
      description: "Te guío en la implementación y optimización del sistema Xenx ERP para que aproveches al máximo su potencial y mejores la eficiencia y la toma de decisiones.",
      features: [
        "Optimización de Flujos de Trabajo", 
        "Toma de Decisiones Informada", 
        "Capacitación y Soporte", 
        "Máximo Retorno de Inversión"
      ]
    },
    {
      icon: <Settings className="text-4xl" />,
      title: "Desarrollo de Automatizaciones para Empresas",
      description: "Transformo tus procesos manuales y repetitivos en flujos de trabajo automatizados, liberando a tu equipo para tareas de mayor valor estratégico. ",
      features: [
        "Incremento de la Productividad", 
        "Reducción de Errores Humanos", 
        "Ahorro de Tiempo y Costos", 
        "Enfoque en la Estrategia"
      ]
    }
  ];

  // El Modelo 2 de servicios
  return (
    <section
      ref={sectionRef}
      className={`bg-blue-900 py-20 px-4 transition-all duration-1000 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Encabezado de la Sección */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">Mis </span>
            <span className="text-primary">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mt-4">
          Transformo tus desafíos tecnológicos en soluciones eficientes y a la medida.
          </p>
        </div>

        {/* Contenedores de Servicios */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-800 to-blue-700 rounded-2xl p-10 shadow-2xl hover:shadow-blue-500/50 transition-all duration-700 ease-out border border-blue-600 ${
                visibleServices.has(index) ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-2"
              }`}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 p-4 rounded-xl text-white flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-blue-200 mb-6">{service.description}</p>
                  
                  {/* Lista de Features */}
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-blue-100">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* --- Botón de Llamada a la Acción General --- */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
  <a
    href="#contacto" // Puedes cambiar esto al ID de tu formulario de contacto
    className="inline-flex items-center bg-primary text-white text-xl font-bold py-4 px-12 rounded-full
               hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/50
               transform hover:scale-105"
  >
    <Smartphone className="inline-block mr-3 w-6 h-6" />

    Contáctame
  </a>
</div>
        
      </div>
    </section>
  );
}

export default MyServices;
