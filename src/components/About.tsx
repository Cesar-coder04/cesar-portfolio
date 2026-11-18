
function About() {
  return (
    <section
      id="sobre-mi"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Encabezado */}
      <div className="mb-14">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
          Conóceme
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Sobre mí<span className="text-blue-500">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Presentación */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Tecnología, aprendizaje y desarrollo.
          </h3>

          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Soy desarrollador de software con formación en
              Desarrollo de Aplicaciones Multiplataforma y
              especialización en Inteligencia Artificial y Big Data.
            </p>

            <p>
              Me interesa especialmente el desarrollo backend,
              la creación de aplicaciones y la resolución de
              problemas mediante soluciones tecnológicas.
            </p>

            <p>
              Disfruto aprendiendo nuevas tecnologías, trabajando
              en proyectos propios y convirtiendo ideas en
              aplicaciones funcionales.
            </p>
          </div>

          <div className="mt-9 p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
            <p className="text-blue-400 font-medium mb-2">
              Mi objetivo
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Seguir creciendo como desarrollador y participar
              en proyectos donde pueda aportar soluciones,
              aprender y asumir nuevos retos técnicos.
            </p>
          </div>
        </div>

        {/* Formación y experiencia */}
        
<div>
  <h3 className="text-xl font-semibold mb-5">
    Experiencia y proyectos
  </h3>

  <div className="border-l-2 border-blue-500/40 pl-6 space-y-7">

    {/* Inetum */}
    <div className="relative">
      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-blue-500" />

      <p className="text-blue-400 text-sm mb-1">
        Actualidad
      </p>

      <h4 className="text-white font-medium">
        Técnico de soporte informático
      </h4>

      <p className="text-slate-500 text-sm">
        Inetum
      </p>

      <p className="text-slate-400 text-sm mt-2 leading-relaxed">
        Soporte técnico a usuarios en entorno corporativo,
        resolución de incidencias, configuración de equipos,
        gestión de periféricos y asistencia con aplicaciones
        empresariales.
      </p>
    </div>

    {/* Grupo Aptavi */}
    <div className="relative">
      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-blue-500" />

      <p className="text-blue-400 text-sm mb-1">
        Desarrollo de software
      </p>

      <h4 className="text-white font-medium">
        Grupo Aptavi
      </h4>

      <p className="text-slate-400 text-sm mt-2 leading-relaxed">
        Desarrollo de aplicaciones, integración con bases
        de datos y lógica de negocio utilizando diferentes
        tecnologías de desarrollo.
      </p>
    </div>

    {/* Hackathon */}
    <div className="relative">
      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-blue-500" />

      <p className="text-blue-400 text-sm mb-1">
        CIBERGU 2024
      </p>

      <h4 className="text-white font-medium">
        Primer premio · Hackathon
      </h4>

      <p className="text-slate-400 text-sm mt-2 leading-relaxed">
        Desarrollo de un sistema de reconocimiento del
        alfabeto de lengua de signos mediante visión artificial.
      </p>
    </div>

  </div>
</div>

      </div>
    </section>
  )
}

export default About
