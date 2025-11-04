import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        <Navbar />

        <main>
          <Hero />

          {/* Ambient neon gradient behind sections that doesn't block interaction */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_30%_at_60%_0%,rgba(79,70,229,0.18),transparent)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35%_20%_at_20%_10%,rgba(16,185,129,0.1),transparent)]" />
            <Projects />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_25%_at_70%_0%,rgba(99,102,241,0.14),transparent)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_20%_at_10%_10%,rgba(14,165,233,0.1),transparent)]" />
            <Contact />
          </div>
        </main>

        <footer className="border-t border-white/10 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} dev.folio — All rights reserved.</p>
            <a
              href="#home"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
            >
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
