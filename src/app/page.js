"use client";

import Image from "next/image";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#20251f]">
      <header className="sticky top-0 z-10 border-b border-[#20251f]/10 bg-[#f7f7f2]/90 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        >
          <a
            href="#home"
            className="text-sm font-bold tracking-wide transition-colors hover:text-[#54734e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#54734e]"
          >
            SS<span className="text-[#54734e]">.</span>
          </a>
          <div className="flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#555c52] transition-colors hover:text-[#54734e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#54734e]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.4fr_0.6fr] md:py-28"
      >
        <div>
          <p className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#54734e]">
            <span aria-hidden="true" className="h-px w-8 bg-[#54734e]" />
            Computer Science Engineering Student
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Hello, I&apos;m
            <br />
            <span className="font-serif italic text-[#54734e]">Snehil Sunil.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#62685e]">
            A CSE student at Sahyadri College of Engineering and Management,
            curious about technology and always ready to learn.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#54734e] px-6 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#405a3b] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#54734e]"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-full bg-[#e5e8dd]">
          <div className="absolute inset-4 rounded-full border border-[#54734e]/25" />
          <div className="absolute inset-8 overflow-hidden rounded-full bg-[#e5e8dd]">
            <Image
              src="/snehil.jpg"
              alt="Portrait of Snehil Sunil"
              fill
              sizes="(max-width: 768px) 70vw, 256px"
              className="object-cover"
              priority
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute right-4 top-12 h-3 w-3 rounded-full bg-[#d89a5b]"
          />
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#54734e]">
              A little about me
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Building my next chapter.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#62685e]">
            I&apos;m Snehil, a computer science engineering student who enjoys
            exploring how technology can turn ideas into useful experiences.
            I&apos;m developing my skills through my studies and looking forward
            to opportunities to learn, collaborate, and grow.
          </p>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#54734e]">
          Education
        </p>
        <div className="mt-6 flex flex-col justify-between gap-3 border-l-2 border-[#54734e] pl-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Computer Science and Engineering
            </h2>
            <p className="mt-1 text-[#62685e]">
              Sahyadri College of Engineering and Management
            </p>
          </div>
          <span className="w-fit rounded-full bg-[#e5e8dd] px-4 py-2 text-sm text-[#405a3b]">
            Student
          </span>
        </div>
      </section>

      <footer id="contact" className="bg-[#20251f] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#b9c8ad]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Let&apos;s connect.</h2>
            <p className="mt-2 text-[#d0d3cc]">
              I&apos;d be happy to hear from you.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <a
              href="mailto:snehilsunil@gmail.com"
              className="block transition-colors hover:text-[#b9c8ad] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9c8ad]"
            >
              snehilsunil@gmail.com
            </a>
            <a
              href="tel:+918590390221"
              className="block transition-colors hover:text-[#b9c8ad] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9c8ad]"
            >
              +91 85903 90221
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/15 pt-5 text-xs text-[#b7bcb3]">
          © {new Date().getFullYear()} Snehil Sunil
        </div>
      </footer>
    </main>
  );
}