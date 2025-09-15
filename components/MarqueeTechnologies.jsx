import React from 'react';

const technologies = [
  "React", "JavaScript", "TypeScript", "Node.js", "Express.js",
  "Python", "Django", "FastAPI", "Tailwind CSS", "Bootstrap",
  "SQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "Docker",
  "AWS", "Azure", "Google Cloud", "CI/CD", "Agile", "Scrum"
];

const techImages = {
  "React": "/React.svg",
  "JavaScript": "/JavaScript.svg",
  "TypeScript": "/TypeScript.svg",
  "Node.js": "/Node.js.svg",
  "Express.js": "/Express.js.svg",
  "Python": "/Python.svg",
  "Django": "/Django.svg",
  "FastAPI": "/FastAPI.svg",
  "Tailwind CSS": "/Tailwind%20CSS.svg",
  "Bootstrap": "/Bootstrap.svg",
  "SQL": "/SQL.svg",
  "PostgreSQL": "/PostgreSQL.svg",
  "MongoDB": "/MongoDB.svg",
  "Git": "/Git.svg",
  "GitHub": "/GitHub.svg",
  "Docker": "/Docker.svg",
  "AWS": "/AWS.svg",
  "Azure": "/Azure.svg",
  "Google Cloud": "/Google%20Cloud.svg",
  "CI/CD": "/CI-CD.svg",
  "Agile": "/Agile.svg",
  "Scrum": "/Scrum.svg"
};

const MarqueeTechnologies = () => {
  return (
    <section className="py-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Tecnologías que Domino</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {technologies.map((tech, index) => (
            <img key={index} src={techImages[tech]} alt={tech} className="h-16 w-16 mx-8" />
          ))}
          {/* Duplicate content to ensure seamless looping */}
          {technologies.map((tech, index) => (
            <img key={`duplicate-${index}`} src={techImages[tech]} alt={tech} className="h-16 w-16 mx-8" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeTechnologies;
