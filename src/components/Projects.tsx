
const projects = [
  {
    name: "DevTrack",
    category: "Full Stack Development",
    status: "En desarrollo",
    description:
      "Plataforma de gestión de proyectos, tareas e incidencias diseñada para equipos de desarrollo.",
    technologies: ["Python", "FastAPI", "MySQL", "React", "TypeScript"],
    visual: "dashboard",
    link: "https://github.com/Cesar-coder04/DevTrack",
  },
  {
    name: "Traductor de lengua de signos",
    category: "Artificial Intelligence",
    status: "Primer premio · CIBERGU 2024",
    description:
      "Sistema de reconocimiento del alfabeto de lengua de signos mediante visión artificial y conversión de gestos a texto.",
    technologies: ["Python", "MediaPipe", "OpenCV", "PySide6"],
    visual: "vision",
    link: "https://github.com/Cesar-coder04/Proyecto-Hackathon",
  },
  {
    name: "Task Manager",
    category: "Full Stack Development",
    status: "Proyecto personal",
    description:
      "Aplicación de gestión de tareas con autenticación, roles, prioridades y estadísticas de productividad.",
    technologies: ["Python", "React", "JavaScript", "PostgreSQL", "MongoDB"],
    visual: "tasks",
    link: "",
  },
]

function Projects() {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-24">

      {/* Encabezado */}
      <div className="mb-14">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
          Mi trabajo
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Proyectos<span className="text-blue-500">.</span>
        </h2>

        <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
          Algunos de los proyectos en los que he trabajado,
          combinando desarrollo de software, resolución de problemas
          e inteligencia artificial.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-2xl border border-white/10 bg-[#0d1423] overflow-hidden hover:border-blue-500/40 transition-all duration-300"
          >

            {/* Zona visual */}
            <div className="h-56 bg-gradient-to-br from-blue-950 via-[#101d35] to-[#080d18] flex items-center justify-center relative overflow-hidden">

              <div className="absolute w-64 h-64 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all" />

              <div className="relative border border-white/10 bg-[#0d1423]/90 rounded-xl p-5 w-[80%] shadow-2xl">
                <div className="flex gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>

                {project.visual === "dashboard" && (
                  <div className="space-y-3">
                    <div className="h-3 w-1/3 bg-blue-400/60 rounded" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 rounded bg-blue-500/20 border border-blue-400/20" />
                      <div className="h-12 rounded bg-white/5" />
                      <div className="h-12 rounded bg-white/5" />
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded" />
                    <div className="h-3 w-3/4 bg-white/10 rounded" />
                  </div>
                )}

                {project.visual === "vision" && (
                  <div className="flex items-center justify-center gap-5 py-3">
                    <div className="text-5xl">✋</div>
                    <div className="text-blue-400 text-3xl">→</div>
                    <div className="text-4xl font-bold text-blue-300">A</div>
                  </div>
                )}

                {project.visual === "tasks" && (
                  <div className="space-y-3">
                    <div className="h-3 w-1/2 bg-blue-400/60 rounded" />
                    {["Diseñar interfaz", "Crear API", "Gestionar usuarios"].map(
                      (task) => (
                        <div key={task} className="flex items-center gap-3">
                          <div className="w-3 h-3 border border-blue-400 rounded-sm" />
                          <div className="text-xs text-slate-400">{task}</div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Información */}
            <div className="p-7">
              <p className="text-blue-400 text-xs uppercase tracking-wider mb-3">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold mb-3">
                {project.name}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed min-h-16">
                {project.description}
              </p>

              <p className="text-xs text-slate-500 mt-5 mb-3">
                {project.status}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs px-3 py-1.5 rounded-md bg-white/5 text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver repositorio →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
