import  WhatsAppButton  from "@/components/whatsapp-button"
import  Header3D  from "@/components/header-3d"
import  AboutSection  from "@/components/about-section"
import  PortfolioSection  from "@/components/portfolio-section"
import  ContactSection  from "@/components/contact-section"
import  InstagramReelsSection  from "@/components/instagram-reels-section"
import  FreeDownloadsSection  from "@/components/free-downloads-section"
import  VideosLiveSection  from "@/components/videos-live-section"
import  Navbar  from "@/components/navbar"
import  Footer from "@/components/footer"
import  Toaster  from "@/components/ui/toaster"
import HeroSection from "../components/HeroSection"
import MyServices from "../components/MyServices"
import Skill from "../components/Skill"


export default function App() {
  return (

    <div className="font-sans antialiased min-h-screen bg-background">
      <Navbar />

      {/* Contenido principal */}
      <main>
        
        {/* Sección Hero con header 3D */}
        <section id="inicio">
        <HeroSection />
        </section>

        

        {/* Sección sobre mí */}
        <section id="sobre-mí">
          <AboutSection />
        </section>
        
        {/* Sección de habilidades */}
        <section id="skill">
          <Skill />
        </section>

        {/* Sección de proyectos */}
        <section id="proyectos">
          <PortfolioSection />
        </section>


        <section id="my-services">
          <MyServices />
        </section>

        {/* Sección de proceso */}
        

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

      {/* Toaster para notificaciones */}
      <Toaster />
    </div>
  )
}
