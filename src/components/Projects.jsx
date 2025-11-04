import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration App',
    description:
      'Collaborative editor with live cursors, presence, and offline sync built with React, CRDTs, and WebSockets.',
    tags: ['React', 'Tailwind', 'WebSockets'],
    link: '#',
  },
  {
    title: 'E-commerce Dashboard',
    description:
      'Analytics-first admin dashboard with charts, role-based access, and blazing fast data tables.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description:
      'Interactive 3D product viewer integrated with Spline and performant scene controls.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Selected Projects</h2>
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
              A few highlights that showcase my approach to clean code, thoughtful UX, and performance.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-white/80 dark:hover:bg-gray-900/80 transition"
          >
            <Code2 size={16} /> Start a project
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-b from-white to-white/80 dark:from-gray-900 dark:to-gray-900/60 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-36 rounded-xl bg-gradient-to-tr from-indigo-500/20 via-cyan-500/20 to-emerald-500/20 dark:from-indigo-400/15 dark:via-cyan-400/15 dark:to-emerald-400/15 border border-black/5 dark:border-white/5" />

              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-2.5 py-1 text-xs text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View case study <ExternalLink size={14} />
              </a>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
