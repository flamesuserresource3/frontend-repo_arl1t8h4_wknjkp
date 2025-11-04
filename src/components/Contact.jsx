import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
          <Mail size={14} /> Get in touch
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Have an idea? Let's build it together.
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          I'm available for freelance work, long-term contracts, and interesting collaborations.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const subject = encodeURIComponent(String(data.get('subject') || 'Project Inquiry'));
            const body = encodeURIComponent(
              `Name: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}\n\nMessage:\n${data.get('message') || ''}`
            );
            window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
          }}
          className="mt-10 grid grid-cols-1 gap-4 text-left"
        >
          <input
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            required
          />
          <input
            name="subject"
            placeholder="Subject"
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <textarea
            name="message"
            placeholder="Tell me a bit about your project..."
            rows={6}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-indigo-500 transition"
          >
            Send message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
