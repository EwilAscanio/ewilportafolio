import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header3D } from "@/components/header-3d"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { InstagramReelsSection } from "@/components/instagram-reels-section"
import { FreeDownloadsSection } from "@/components/free-downloads-section"
import { VideosLiveSection } from "@/components/videos-live-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Hero from "../components/Hero"
import HeroSection from "../components/HeroSection"
import MarqueeTechnologies from "../components/MarqueeTechnologies"
import MyServices from "../components/MyServices"


export default function App() {
  return (
    // The html and body tags are handled by index.html
    // Applying font classes directly to the root div or via global CSS
    <div className="font-sans antialiased min-h-screen bg-background">
      <Navbar />

      {/* Contenido principal */}
      <main>
        
        {/* Sección Hero con header 3D */}
        <section id="inicio">
        <HeroSection />
        </section>

        {/* Sección de Tecnologías (Marquesina) 
        <section>
          <MarqueeTechnologies />
        </section>
        */}

        {/* Sección sobre mí */}
        <section id="sobre-mí">
          <AboutSection />
        </section>

        {/* Sección de proyectos */}
        <section id="proyectos">
          <PortfolioSection />
        </section>

        {/* Sección de habilidades */}
        <section id="habilidades">
          <SkillsSection />
        </section>

        <section id="my-services">
          <MyServices />
        </section>

        {/* Sección de Instagram Reels 
        <section id="reels">
          <InstagramReelsSection />
        </section>
          */}

        {/* Sección de descargas gratuitas 
        <section id="descargas">
          <FreeDownloadsSection />
        </section>
        */}

        {/* Sección de videos y live streams 
        <section id="videos">
          <VideosLiveSection />
        </section>
        */}

        {/* Sección de contacto */}
        <section id="contacto">
          <ContactSection />
        </section>
      </main>

      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}
