import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">Let’s build something delightful</h3>
            <p className="mt-2 max-w-xl text-white/70">Open to collabs, speaking, and creative dev projects. I respond within 48 hours.</p>
          </div>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            href="mailto:hello@creator.dev"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            <Mail size={18} />
            hello@creator.dev
          </motion.a>
        </div>
      </div>
    </section>
  );
}
