import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const words = text.split('')
  return (
    <p ref={ref} className="mx-auto max-w-[560px] text-center text-base font-medium leading-relaxed text-[#D7E2EA] sm:text-lg md:text-[clamp(1rem,2vw,1.35rem)]">
      {words.map((char, index) => <Character key={`${char}-${index}`} char={char} index={index} total={words.length} progress={scrollYProgress} />)}
    </p>
  )
}

function Character({ char, index, total, progress }: { char: string; index: number; total: number; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const start = index / total
  const end = Math.min(start + 0.12, 1)
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return <span className="relative inline-block">
    <span className="invisible">{char === ' ' ? '\u00a0' : char}</span>
    <motion.span aria-hidden="true" style={{ opacity }} className="absolute left-0 top-0">{char === ' ' ? '\u00a0' : char}</motion.span>
  </span>
}
