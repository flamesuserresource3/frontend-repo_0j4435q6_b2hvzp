import { motion } from 'framer-motion';
import { Play, Code, Video, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dev Course',
    tag: 'Education',
    icon: BookOpen,
    desc: 'A hands-on course combining narrative and coding challenges to teach full-stack concepts.',
  },
  {
    title: 'Story-driven App Demo',
    tag: 'Showcase',
    icon: Play,
    desc: 'An interactive demo that explains complex architecture through playful storytelling.',
  },
  {
    title: 'Open Source Toolkit',
    tag: 'Code',
    icon: Code,
    desc: 'A collection of utilities for creators to build animated, accessible learning sites.',
  },
  {
    title: 'YouTube Series',
    tag: 'Video',
    icon: Video,
    desc: 'Weekly episodes exploring modern web tools, design systems, and developer experience.',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured work</h2>
            <p className="mt-2 text-white/70">Selected projects across education, storytelling, and open-source.</p>
          </div>
          <a href="#contact" className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block">
            Get in touch
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 backdrop-blur-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/50">{p.tag}</span>
                  <span className="rounded-lg bg-white/10 p-2 text-white/80">
                    <Icon size={18} />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <button className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 opacity-0 transition group-hover:opacity-100">
                  Learn more
                  <span aria-hidden>→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
