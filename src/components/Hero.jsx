import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-gray-950/80 dark:via-gray-950/30 dark:to-gray-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-36 flex flex-col items-start">
        <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
          Web Developer • Frontend • Backend • UI Engineer
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Building delightful, performant web experiences
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300">
          I craft fast, accessible, and maintainable apps with modern stacks. From interactive UIs to robust APIs, let's bring your product to life.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-3 text-sm font-medium shadow-lg shadow-gray-900/10 dark:shadow-white/10 hover:opacity-90 transition"
          >
            See projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-5 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-white/80 dark:hover:bg-gray-900/80 transition"
          >
            Contact me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-white/80 dark:hover:bg-gray-900/80 transition"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-white/80 dark:hover:bg-gray-900/80 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
