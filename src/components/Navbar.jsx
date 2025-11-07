import { motion } from 'framer-motion';
import { Rocket, Github, Twitter, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_60px_rgba(56,189,248,0.15)]">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group flex items-center gap-2">
              <motion.span
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-black shadow-lg shadow-cyan-500/20"
              >
                <Rocket size={18} />
              </motion.span>
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-white/90">Creator.Dev</span>
            </a>

            <div className="hidden gap-8 md:flex">
              <a href="#work" className="text-sm text-white/70 hover:text-white">Work</a>
              <a href="#about" className="text-sm text-white/70 hover:text-white">About</a>
              <a href="#contact" className="text-sm text-white/70 hover:text-white">Contact</a>
            </div>

            <div className="flex items-center gap-1">
              <a aria-label="Twitter" href="#" className="rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white">
                <Twitter size={18} />
              </a>
              <a aria-label="GitHub" href="#" className="rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white">
                <Github size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
