import picture from '../assets/pic2.0.jpg'
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] h-screen flex-col overflow-hidden bg-[#0C0C0C]"
    >
      {/* Navigation */}
      <FadeIn delay={0} y={-20} className="relative z-20">
        <nav
          className="flex justify-between gap-3 px-5 pt-6 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA] sm:px-8 sm:text-sm md:px-10 md:pt-8 md:text-lg"
          aria-label="Main navigation"
        >
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#skills" className="hover:opacity-70">Skills</a>
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-0 mt-10 overflow-hidden sm:mt-8 md:-mt-3">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center text-[10.5vw] font-black uppercase leading-none tracking-[-.055em] sm:text-[10vw] md:text-[9.2vw]">
            Abdul Khaliq
          </h1>
        </FadeIn>

        <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-[.42em] text-[#B600A8] sm:text-xs md:text-sm">
          Frontend Developer
        </p>
      </div>

      {/* Portfolio Avatar */}
      <div className="pointer-events-none absolute left-1/2 top-[52%] z-10 w-[270px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[350px] sm:translate-y-0 md:w-[420px] lg:w-[490px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet>
            <img
              src={picture}
              alt="Portfolio avatar"
              className="w-full select-none object-contain rounded-full"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Content */}
      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-5 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          delay={0.35}
          y={20}
          className="max-w-[170px] text-[clamp(.7rem,1.3vw,1.2rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[230px] md:max-w-[270px]"
        >
          Building clean, modern, and useful digital experiences for the web.
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div>
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
