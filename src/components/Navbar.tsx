
function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          cesar<span className="text-blue-500">.</span>
        </a>

        {/* Navegación */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </a>

          <a href="#proyectos" className="hover:text-white transition-colors">
            Proyectos
          </a>

          <a href="#sobre-mi" className="hover:text-white transition-colors">
            Sobre mí
          </a>

          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>

        {/* Botón de contacto */}
        <a
          href="#contacto"
          className="hidden sm:inline-flex px-5 py-2 rounded-lg border border-blue-500/50 text-blue-400 text-sm hover:bg-blue-500 hover:text-white transition-all"
        >
          Hablemos
        </a>

      </nav>
    </header>
  )
}

export default Navbar
