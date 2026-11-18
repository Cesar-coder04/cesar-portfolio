
function Contact() {
  return (
    <section
      id="contacto"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#101d35] to-[#0d1423] p-8 md:p-14 text-center">

        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-5">
          Contacto
        </p>

        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
          ¿Tienes un proyecto en mente?
          <span className="text-blue-500"> Hablemos.</span>
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mt-6 leading-relaxed">
          Estoy abierto a nuevas oportunidades profesionales,
          colaboraciones y proyectos relacionados con el desarrollo
          de software y la tecnología.
        </p>

        {/* Correo */}
        <a
          href="mailto:cesarnicolascarrascosa@gmail.com"
          className="inline-block mt-9 px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          Enviar un correo →
        </a>

        {/* Redes */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href="https://github.com/Cesar-coder04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/c%C3%A9sar-nicol%C3%A1s-39a183342/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
