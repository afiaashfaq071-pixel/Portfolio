import { useRef, useState } from 'react'
import type { ReactNode, MouseEvent } from 'react'

export default function Magnet({ children, padding = 150, strength = 3 }: { children: ReactNode; padding?: number; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0,0,0)')
  const [active, setActive] = useState(false)

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = event.clientX - (rect.left + rect.width / 2)
    const dy = event.clientY - (rect.top + rect.height / 2)
    const near = Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding
    setActive(near)
    setTransform(near ? `translate3d(${dx / strength}px, ${dy / strength}px, 0)` : 'translate3d(0,0,0)')
  }

  return <div className="relative" onMouseMove={move} onMouseLeave={() => { setActive(false); setTransform('translate3d(0,0,0)') }}>
    <div ref={ref} style={{ transform, transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out', willChange: 'transform' }}>{children}</div>
  </div>
}
