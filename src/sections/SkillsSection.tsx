import FadeIn from '../components/FadeIn'
const groups = [
  { n: '01', title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { n: '02', title: 'Styling & UI', skills: ['Tailwind CSS', 'Responsive Design', 'UI Layouts', 'Animations'] },
  { n: '03', title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Vercel'] },
]
export default function SkillsSection() {
  return <section id="skills" className="relative z-0 rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
    <div className="mx-auto max-w-[1440px]">
      <FadeIn><div className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 md:flex-row md:items-end"><h2 className="text-[clamp(3.5rem,12vw,150px)] font-black uppercase leading-[.85] tracking-tight">My Skills</h2><p className="max-w-xs text-sm uppercase leading-relaxed tracking-wider opacity-55">The technologies and tools I use to bring web ideas to life.</p></div></FadeIn>
      <div className="grid gap-5 md:grid-cols-3">{groups.map((g,i) => <FadeIn key={g.n} delay={i*.1} y={30}><article className="h-full border-t border-black/20 py-6 sm:py-8"><div className="mb-10 flex items-center justify-between"><span className="text-5xl font-black sm:text-6xl">{g.n}</span><span className="text-[10px] uppercase tracking-[.2em] opacity-45">Skill set</span></div><h3 className="mb-5 text-2xl font-semibold uppercase">{g.title}</h3><div className="flex flex-wrap gap-2">{g.skills.map(s => <span key={s} className="rounded-full border border-black/20 px-4 py-2 text-xs font-medium uppercase tracking-wider sm:text-sm">{s}</span>)}</div></article></FadeIn>)}</div>
    </div>
  </section>
}
