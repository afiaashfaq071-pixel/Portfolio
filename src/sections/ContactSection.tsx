import FadeIn from '../components/FadeIn'
import { ArrowUpRight, Mail, Phone, GraduationCap, Github, Linkedin } from 'lucide-react'

// Small "AK" badge so the Name row can use the same icon slot as the others
const Initials = () => <span className="text-sm font-bold">AK</span>

// TODO: replace the placeholders (college name, years, GitHub and LinkedIn usernames)
const details = [
    { icon: Initials, label: 'Name', value: 'Abdul Khaliq' },
    {
        icon: GraduationCap,
        label: 'Education',
        value: 'Intermediate (ICS) — First Year',
        sub: 'Punjab Colledge for boys,Gujranwala · 2026 – Present',
    },
    { icon: Phone, label: 'Phone', value: '+92 341 8469866', href: 'tel:+923418469866' },
    {
        icon: Mail,
        label: 'Email',
        value: 'abdulkhaliqdev9@gmail.com',
        href: 'mailto:abdulkhaliqdev9@gmail.com',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/afiaashfaq071-pixel/',
        href: 'https://github.com/afiaashfaq071-pixel/',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/abdul-khaliq',
        href: 'https://www.linkedin.com/in/abdul-khaliq-undefined-135102449/',
    },
]

const valueClass = 'mt-1 block break-words text-sm font-medium sm:text-base'

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-white px-5 py-20 text-[#0C0C0C] sm:px-8 sm:py-24 md:px-10 md:py-32"
        >
            <div className="mx-auto max-w-[1440px]">
                <FadeIn>
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#B600A8]">
                        Have a project in mind?
                    </p>
                    <h2 className="max-w-5xl text-[clamp(3.5rem,12vw,150px)] font-black uppercase leading-[.85] tracking-tight">
                        Let's Talk<span className="text-[#B600A8]">.</span>
                    </h2>
                </FadeIn>

                <div className="mt-14 grid gap-12 border-t border-black/15 pt-8 md:grid-cols-[1fr_1.2fr] md:gap-20 md:pt-12">
                    <FadeIn y={25}>
                        <p className="max-w-md text-lg leading-relaxed text-black/60">
                            I'm Abdul Khaliq, a frontend developer focused on building modern and responsive
                            web experiences. Feel free to get in touch.
                        </p>
                        <a
                            href="#contact-details"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0C0C0C] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-transform hover:scale-[1.03]"
                        >
                            Contact details <ArrowUpRight size={16} />
                        </a>
                    </FadeIn>

                    <FadeIn delay={0.1} y={25}>
                        <div
                            id="contact-details"
                            role="region"
                            aria-label="Contact details"
                            tabIndex={0}
                            className="max-h-[22rem] overflow-y-auto overscroll-contain rounded-2xl border border-black/15 px-5 sm:px-6 md:max-h-[26rem] [scrollbar-color:rgba(0,0,0,.25)_transparent] [scrollbar-width:thin]"
                        >
                            {details.map(({ icon: Icon, label, value, sub, href }) => {
                                const external = href?.startsWith('http')
                                return (
                                    <div
                                        key={label}
                                        className="flex items-center gap-4 border-b border-black/15 py-5 last:border-b-0"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/5">
                                            <Icon size={19} />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/60">
                                                {label}
                                            </p>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                                                    className={`${valueClass} transition-colors hover:text-[#B600A8]`}
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className={valueClass}>{value}</p>
                                            )}
                                            {sub && <p className="mt-0.5 text-xs text-black/60">{sub}</p>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </FadeIn>
                </div>

                <footer className="mt-16 flex flex-col justify-between gap-3 border-t border-black/15 pt-6 text-[10px] uppercase tracking-[.18em] text-black/60 sm:flex-row">
                    <span>© {new Date().getFullYear()} Abdul Khaliq</span>
                    <a href="#home" className="hover:text-[#B600A8]">
                        Back to top ↑
                    </a>
                </footer>
            </div>
        </section>
    )
}