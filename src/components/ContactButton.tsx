import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
export default function ContactButton() {
 return <motion.a href="#contact" whileHover={{scale:1.04}} whileTap={{scale:.97}} className="outline-offset inline-flex items-center gap-2 rounded-full bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] px-8 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white shadow-[0_4px_4px_rgba(181,1,167,.25),4px_4px_12px_#7721B1_inset] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base">Contact Me <ArrowUpRight size={17}/></motion.a>
}
