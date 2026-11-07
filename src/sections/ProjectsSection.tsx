import FadeIn from '../components/FadeIn';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        n: '01',
        category: 'E-commerce Website',
        name: 'Ali Hassan Supermart',
        desc: 'A modern online grocery store with product categories, shopping cart functionality, and a clean shopping experience.',
        stack: ['React', 'Tailwind CSS'],
        href: 'https://alihassansuperstore.vercel.app/',
        visual: 'from-emerald-400/25 via-lime-300/10 to-transparent',
        mark: 'AH',
        github: 'https://github.com/afiaashfaq071-pixel/store',
    },
    {
        n: '02',
        category: 'Music Web App',
        name: 'Music Hub',
        desc: 'A dark music platform featuring artists, albums, trending tracks, playlists, and interactive audio controls.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        href: 'https://music-hub-omega-livid.vercel.app/',
        visual: 'from-fuchsia-500/30 via-violet-500/15 to-transparent',
        mark: 'MH',
        github: 'https://github.com/afiaashfaq071-pixel/Music-Hub',
    },
    {
        n: '03',
        category: 'Productivity App',
        name: 'Todoly',
        desc: 'A task management app to organize to-dos, edit tasks, and keep everyday work in one place.',
        stack: ['React', 'Tailwind CSS'],
        href: 'https://project-todoly.vercel.app/',
        visual: 'from-violet-400/30 via-indigo-500/15 to-transparent',
        mark: 'TD',
        github: 'https://github.com/afiaashfaq071-pixel/Project-Todoly',
    },
    {
        n: '04',
        category: 'Interactive Learning Website',
        name: '48 Laws of Power',
        desc: 'A book-inspired learning experience with searchable laws, detailed explanations, and reading progress tracking.',
        stack: ['React', 'CSS'],
        href: 'https://laws-ashen.vercel.app/',
        visual: 'from-amber-400/25 via-orange-500/10 to-transparent',
        mark: '48',
        github: 'https://github.com/afiaashfaq071-pixel/laws',
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative z-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:rounded-t-[50px] sm:px-8 md:rounded-t-[60px] md:px-10 md:pt-28"
        >
            <div className="mx-auto max-w-[1440px]">

                {/* Section Heading */}
                <FadeIn>
                    <div className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 md:flex-row md:items-end">
                        <h2 className="hero-heading text-[clamp(3.5rem,12vw,150px)] font-black uppercase leading-[.85] tracking-tight">
                            Selected
                            <br className="hidden md:block" />
                            Work
                        </h2>

                        <p className="max-w-xs text-sm uppercase leading-relaxed tracking-wider text-[#D7E2EA]/50">
                            A selection of projects I've designed and developed.
                        </p>
                    </div>
                </FadeIn>

                {/* Projects Grid */}
                <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <FadeIn key={p.n} delay={i * 0.08} y={35}>
                            <article className="group flex h-full min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-white/15 bg-[#141414] transition-colors duration-300 hover:border-[#B600A8]/70 sm:rounded-[36px]">

                                {/* Project Visual */}
                                <div
                                    className={`relative flex min-h-[210px] flex-1 items-center justify-center overflow-hidden bg-gradient-to-br ${p.visual}`}
                                >
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage:
                                                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                                            backgroundSize: '22px 22px',
                                        }}
                                    />

                                    <span className="hero-heading relative text-[clamp(6rem,14vw,11rem)] font-black leading-none tracking-tighter transition-transform duration-500 group-hover:scale-110">
                                        {p.mark}
                                    </span>

                                    <span className="absolute left-6 top-6 text-xs font-medium uppercase tracking-[.2em] text-white/55">
                                        {p.n} / 04
                                    </span>

                                    <span className="absolute bottom-5 right-6 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">
                                        {p.category}
                                    </span>
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-col gap-4 p-6 sm:p-8">
                                    <div>
                                        <h3 className="text-2xl font-semibold uppercase tracking-tight text-[#D7E2EA] sm:text-3xl">
                                            {p.name}
                                        </h3>

                                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#D7E2EA]/60">
                                            {p.desc}
                                        </p>
                                    </div>

                                    {/* Technology Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {p.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-wider text-[#D7E2EA]/65"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">

                                        <a
                                            href={p.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
                                        >
                                            Live Website
                                            <ArrowUpRight size={15} />
                                        </a>

                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium uppercase tracking-wider text-white/70 transition-colors hover:border-white hover:text-white"
                                        >
                                            <Github size={15} />
                                            GitHub Repository
                                            <ArrowUpRight size={14} />
                                        </a>

                                    </div>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}