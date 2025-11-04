import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />

      <main>
        <Hero />

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
          <Projects />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
          <Contact />
        </div>
      </main>

      <footer className="border-t border-black/5 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} dev.folio — All rights reserved.</p>
          <a
            href="#home"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
