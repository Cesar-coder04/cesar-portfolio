
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d18]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Logo */}
          <a
            href="#inicio"
            className="text-xl font-bold tracking-tight text-white"
          >
            cesar<span className="text-blue-500">.</span>
          </a>

          {/* Copyright */}
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} César Nicolás. Todos los derechos
            reservados.
          </p>

          {/* Redes */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Cesar-coder04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/c%C3%A9sar-nicol%C3%A1s-39a183342/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#inicio"
            className="text-xs text-slate-600 transition-colors hover:text-blue-400"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
