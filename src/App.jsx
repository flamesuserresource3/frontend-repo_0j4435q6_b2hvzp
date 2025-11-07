import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-cyan-400 selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(34,211,238,0.12),transparent),radial-gradient(1000px_500px_at_80%_10%,rgba(139,92,246,0.12),transparent)]" />
      <Navbar />
      <Hero />
      <WorkGrid />
      <About />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Creator.Dev — Crafted with code & stories.</footer>
    </div>
  );
}

export default App;
