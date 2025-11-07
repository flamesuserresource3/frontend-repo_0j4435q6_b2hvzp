import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Camera } from 'lucide-react';

export default function About() {
  const items = [
    { icon: GraduationCap, title: 'Educator', text: 'Teaching modern web development with clarity and empathy.' },
    { icon: Cpu, title: 'Engineer', text: 'Designing scalable systems with a love for DX and performance.' },
    { icon: Camera, title: 'Creator', text: 'Telling stories that make complex ideas feel simple and fun.' },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About</h2>
        <p className="mt-3 max-w-2xl text-white/70">I blend education, engineering, and storytelling to craft experiences that help people learn, build, and ship.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <it.icon size={20} />
            </div>
            <div className="text-white">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
