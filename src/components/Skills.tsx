
const skillGroups = [
  {
    title: "Backend y programación",
    description: "Lógica de negocio y desarrollo de aplicaciones",
    technologies: ["Python", "Java", "C#", "FastAPI", "JavaScript"],
  },
  {
    title: "Frontend",
    description: "Desarrollo de interfaces web",
    technologies: ["React", "TypeScript", "Angular", "HTML", "CSS"],
  },
  {
    title: "Bases de datos",
    description: "Almacenamiento y gestión de información",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
  },
  {
    title: "Herramientas e IA",
    description: "Entorno de desarrollo y tecnologías inteligentes",
    technologies: ["Git", "GitHub", "Docker", "MLflow", "OpenCV", "MediaPipe"],
  },
]

function Skills() {
  return (
    <section
      id="tecnologias"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Encabezado */}
      <div className="mb-14">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
          Mi stack tecnológico
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Tecnologías<span className="text-blue-500">.</span>
        </h2>

        <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
          Tecnologías y herramientas con las que he trabajado
          durante mi formación y el desarrollo de proyectos.
        </p>
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="p-7 rounded-2xl border border-white/10 bg-[#0d1423] hover:border-blue-500/30 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">
              {group.title}
            </h3>

            <p className="text-slate-500 text-sm mb-6">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {group.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-sm hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-300 transition-all"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
