import { motion } from 'framer-motion';
import { PlayCircle, Code2, MonitorSmartphone } from 'lucide-react';

const projects = [
  {
    title: 'Narrative Coding Series',
    tag: 'YouTube • Education',
    icon: PlayCircle,
    gradient: 'from-rose-400 to-amber-300',
    desc: 'Short-form lessons that turn complex topics into memorable mini stories.'
  },
  {
    title: 'Full‑Stack Blueprint',
    tag: 'Course • Web Dev',
    icon: Code2,
    gradient: 'from-cyan-400 to-violet-500',
    desc: 'A hands-on roadmap to building modern products with clear mental models.'
  },
  {
    title: 'Interactive Portfolio',
    tag: 'Website • 3D',
    icon: MonitorSmartphone,
    gradient: 'from-emerald-400 to-teal-300',
    desc: 'Playful web experiences blending storytelling, motion, and 3D graphics.'
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Featured Work</h2>
        <a href="#" className="text-sm font-medium text-cyan-300 hover:text-cyan-200">View all</a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur hover:border-white/20"
          >
            <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-black shadow-lg shadow-black/30`}>
              <p.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-white/50">{p.tag}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{p.desc}</p>
            <div className="mt-5 inline-flex items-center text-sm font-medium text-cyan-300 group-hover:text-cyan-200">
              Explore
              <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
