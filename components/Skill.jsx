

import { useScrollAnimation, useStaggerAnimation } from "../hooks/use-scroll-animation"


const Skill = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { containerRef: skillsRef, visibleItems: visibleSkills } = useStaggerAnimation(9, 150)

  const skills = [
    "HTML", "Tailwind CSS", "Javascript", "React", "Next.js", "Maria DB", "PostgreSQL", "GitHub", "Inteligencia Artificial"
  ];

  return (
<section
  ref={sectionRef}
  className={`relative font-sans overflow-hidden py-20 px-4 transition-all duration-1000 ease-out ${
    sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/slide2.webp')] bg-cover bg-center brightness-75">
      <div className="bg-white/40 absolute inset-0"></div>
        
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
            true ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-slate-900 dark:text-gray-300">Habilidades </span>
            <span className="text-primary">Tecnicas</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
          <p className="text-xl text-slate-900 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Herramientas y tecnologías que utilizo para crear soluciones innovadoras
          </p>
        </div>

        {/* Content Section */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-20 mt-40 transition-all duration-1000 delay-400 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div
            className={`w-full lg:w-1/2 xl:w-2/5 transition-all duration-1000 delay-600 ease-out ${
              sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img
                src="/images/slide-in2.webp"
                alt="Man working on a computer"
                className="relative rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-gray-400/10"
              />
            </div>
          </div>

          {/* Skills Hexagons */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-800 ease-out ${
              sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div ref={skillsRef} className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className={`relative w-32 h-36 group transition-all duration-700 ease-out ${
                    visibleSkills.has(index)
                      ? "opacity-100 translate-y-0 rotate-0 scale-100"
                      : "opacity-0 translate-y-20 rotate-3 scale-95"
                  }`}
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                  }}
                >
                  {/* Outer glow effect */}
                  <div className="absolute -inset-1 bg-gradient-primary blur-md opacity-40 group-hover:opacity-70 transition-all duration-300" />
                  
                  {/* Main hexagon border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-glow opacity-95 group-hover:opacity-100 transition-all duration-300 shadow-elegant" />

                  {/* Inner content */}
                  <div 
                    className="absolute inset-[3px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center transition-all duration-300 group-hover:from-primary-glow group-hover:to-primary"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    <span className="text-sm font-bold text-primary-foreground text-center px-3 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                      {skill}
                    </span>
                  </div>

                  {/* Hover shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Skill;
