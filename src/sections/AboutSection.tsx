import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import AnimatedText from '../components/AnimatedText'

const decorations = [
  { src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png', alt: 'Moon 3D icon', className: 'left-[1%] top-[4%] w-[100px] sm:left-[2%] sm:w-[140px] md:left-[4%] md:w-[180px]', delay: .1, x: -80 },
  { src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png', alt: 'Abstract 3D object', className: 'bottom-[8%] left-[3%] w-[90px] sm:left-[6%] sm:w-[120px] md:left-[10%] md:w-[150px]', delay: .25, x: -80 },
  { src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png', alt: 'Lego 3D icon', className: 'right-[1%] top-[4%] w-[100px] sm:right-[2%] sm:w-[140px] md:right-[4%] md:w-[180px]', delay: .15, x: 80 },
  { src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png', alt: '3D abstract group', className: 'bottom-[8%] right-[3%] w-[110px] sm:right-[6%] sm:w-[140px] md:right-[10%] md:w-[180px]', delay: .3, x: 80 },
]
const about = "I'm Abdul Khaliq, a frontend developer who enjoys turning ideas into responsive, interactive websites. I focus on clean layouts, smooth user experiences, and practical projects that solve everyday problems. I'm continuously learning and improving my skills by building real-world web applications."

export default function AboutSection() {
  return <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
    {decorations.map(item => <FadeIn key={item.alt} delay={item.delay} x={item.x} y={0} duration={.9} className={`pointer-events-none absolute ${item.className}`}><img src={item.src} alt={item.alt} loading="lazy" className="h-auto w-full object-contain" /></FadeIn>)}
    <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
      <FadeIn y={40}><h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">About me</h2></FadeIn>
      <AnimatedText text={about} /><FadeIn delay={.15} y={20}><ContactButton /></FadeIn>
    </div>
  </section>
}
