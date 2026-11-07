import FadeIn from '../components/FadeIn'
import { ArrowUpRight, Mail, Phone, GraduationCap } from 'lucide-react'
const details = [
 { icon: GraduationCap, label:'Education', value:'Intermediate (ICS) — First Year' },
 { icon: Phone, label:'Phone', value:'Add your contact number' },
 { icon: Mail, label:'Email', value:'Add your email address' },
]
export default function ContactSection() {
 return <section id="contact" className="bg-white px-5 py-20 text-[#0C0C0C] sm:px-8 sm:py-24 md:px-10 md:py-32">
  <div className="mx-auto max-w-[1440px]">
   <FadeIn><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#B600A8]">Have a project in mind?</p><h2 className="max-w-5xl text-[clamp(3.5rem,12vw,150px)] font-black uppercase leading-[.85] tracking-tight">Let's Talk<span className="text-[#B600A8]">.</span></h2></FadeIn>
   <div className="mt-14 grid gap-12 border-t border-black/15 pt-8 md:grid-cols-[1fr_1.2fr] md:gap-20 md:pt-12">
    <FadeIn y={25}><p className="max-w-md text-lg leading-relaxed text-black/60">I'm Abdul Khaliq, a frontend developer focused on building modern and responsive web experiences. Feel free to get in touch.</p><a href="#contact-details" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0C0C0C] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-transform hover:scale-[1.03]">Contact details <ArrowUpRight size={16}/></a></FadeIn>
    <FadeIn delay={.1} y={25}><div id="contact-details" className="grid gap-0">{details.map(({icon:Icon,label,value})=><div key={label} className="flex items-center gap-4 border-b border-black/15 py-5 first:border-t"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/5"><Icon size={19}/></span><div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/40">{label}</p><p className="mt-1 text-sm font-medium sm:text-base">{value}</p></div></div>)}<div className="flex items-center gap-4 py-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/5 text-sm font-bold">AK</span><div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/40">Name</p><p className="mt-1 text-sm font-medium sm:text-base">Abdul Khaliq</p></div></div></div></FadeIn>
   </div>
   <footer className="mt-16 flex flex-col justify-between gap-3 border-t border-black/15 pt-6 text-[10px] uppercase tracking-[.18em] text-black/45 sm:flex-row"><span>© {new Date().getFullYear()} Abdul Khaliq</span><a href="#home" className="hover:text-[#B600A8]">Back to top ↑</a></footer>
  </div>
 </section>
}
