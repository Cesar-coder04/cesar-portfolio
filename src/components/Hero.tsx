
function Hero() {
  return (
    <section
      id="inicio"
      className="max-w-6xl mx-auto px-6 py-24 min-h-[650px] flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* Presentación */}
        <div>
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-5">
            Desarrollador de software
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Hola, soy César.
            <span className="block text-blue-500 mt-2">
              Creo soluciones digitales.
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mt-7 max-w-xl">
            Desarrollador con formación en desarrollo de aplicaciones
            e inteligencia artificial. Me apasiona construir aplicaciones,
            resolver problemas y transformar ideas en soluciones tecnológicas.
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Python", "React", "TypeScript", "SQL", "IA & Big Data"].map(
              (technology) => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-slate-300 text-sm bg-white/[0.03]"
                >
                  {technology}
                </span>
              )
            )}
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#proyectos"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Ver proyectos →
            </a>

            <a
              href="#contacto"
              className="px-6 py-3 rounded-lg border border-white/15 hover:bg-white/5 text-white font-medium transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Ventana de código */}
        <div className="relative">
          <div className="absolute -inset-6 bg-blue-600/10 blur-3xl rounded-full" />

          <div className="relative rounded-2xl border border-white/10 bg-[#0d1423] shadow-2xl overflow-hidden">

            {/* Cabecera de la ventana */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-slate-500 font-mono">
                cesar.py
              </span>

              <span className="text-xs text-slate-600">
                Python
              </span>
            </div>

            {/* Código */}
            <div className="p-6 md:p-8 font-mono text-sm leading-8 overflow-x-auto">
              <p className="text-slate-500">
                # Un poco sobre mí
              </p>

              <p>
                <span className="text-purple-400">class </span>
                <span className="text-yellow-300">Developer</span>
                <span className="text-white">:</span>
              </p>

              <p className="pl-6">
                <span className="text-purple-400">def </span>
                <span className="text-blue-300">__init__</span>
                <span className="text-white">(self):</span>
              </p>

              <p className="pl-12">
                <span className="text-white">self.name = </span>
                <span className="text-green-400">"César"</span>
              </p>

              <p className="pl-12">
                <span className="text-white">self.role = </span>
                <span className="text-green-400">"Software Developer"</span>
              </p>

              <p className="pl-12">
                <span className="text-white">self.languages = [</span>
              </p>

              <p className="pl-16 text-green-400">
                "Python", "JavaScript", "C#"
              </p>

              <p className="pl-12 text-white">]</p>

              <p className="pl-12 mt-2">
                <span className="text-white">self.focus = </span>
                <span className="text-green-400">"Building solutions"</span>
              </p>

              <p className="mt-5">
                <span className="text-purple-400">def </span>
                <span className="text-blue-300">create</span>
                <span className="text-white">(self):</span>
              </p>

              <p className="pl-12 text-purple-300">
                return <span className="text-green-400">"Something great."</span>
              </p>

              <p className="mt-5 text-slate-500">
                # Always learning, always building.
              </p>
            </div>

            {/* Pie de ventana */}
            <div className="px-5 py-3 border-t border-white/10 flex justify-between text-xs text-slate-500">
              <span>UTF-8</span>
              <span>Python 3.x</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
