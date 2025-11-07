import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(139,92,246,0.18),transparent),radial-gradient(1000px_400px_at_20%_-20%,rgba(34,211,238,0.15),transparent)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            Innovative storytelling for the modern web
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-white/70"
          >
            I’m a content creator and tech educator specializing in full‑stack development. I design playful, interactive experiences that teach and inspire.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pointer-events-auto mt-8 flex gap-3"
          >
            <a href="#work" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(139,92,246,0.2)] transition hover:shadow-[0_0_60px_rgba(139,92,246,0.35)]">See my work</a>
            <a href="#contact" className="rounded-xl border border-white/10 bg-black/50 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-black/70">Let’s collaborate</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
