"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

/**
 * Sección de contacto con formulario interactivo
 * Incluye información de contacto y redes sociales
 */
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const { elementRef, isVisible } = useScrollAnimation()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado! Te contactaré pronto.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "desarrollador@email.com",
      link: "mailto:desarrollador@email.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Teléfono",
      value: "+1 (234) 567-8900",
      link: "tel:+12345678900",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Ubicación",
      value: "Ciudad, País",
      link: "#",
    },
  ]

  return (
    <section ref={elementRef} className="py-20 px-4 bg-card/30" id="contacto">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent leading-tight">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div
            className={`space-y-8 transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent leading-tight">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors duration-300 group"
                    style={{
                      transitionDelay: `${300 + index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    }}
                  >
                    <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div
              className={`transition-all duration-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent leading-tight">
                Sígueme en
              </h3>
              <div className="flex space-x-4">
                {["GitHub", "LinkedIn", "Twitter"].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                  >
                    {social}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <Card
            className={`border-2 border-border/50 transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envíame un Mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderé lo antes posible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-300"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
