import HeroSection from './sections/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return <main className="min-h-screen overflow-x-clip bg-[#0C0C0C]">
    <HeroSection /><MarqueeSection /><AboutSection /><SkillsSection /><ProjectsSection /><ContactSection />
  </main>
}
