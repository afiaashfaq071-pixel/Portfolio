import { useEffect, useRef, useState } from 'react'
const tech = ['REACT.JS','JAVASCRIPT','TAILWIND CSS','HTML5','CSS3','RESPONSIVE DESIGN','GIT & GITHUB','FRONTEND DEVELOPMENT']
export default function MarqueeSection() {
 const ref=useRef<HTMLElement>(null); const [offset,setOffset]=useState(0)
 useEffect(()=>{let ticking=false;const update=()=>{if(!ticking){window.requestAnimationFrame(()=>{const top=ref.current?.getBoundingClientRect().top??0;setOffset((window.innerHeight-top)*.12);ticking=false});ticking=true}};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update)},[])
 return <section ref={ref} className="overflow-hidden bg-[#0C0C0C] pb-16 pt-16 sm:pt-20"><div className="marquee-track items-center" style={{transform:`translateX(${offset-100}px)`}}>{[...tech,...tech,...tech].map((item,i)=><span key={`${item}-${i}`} className="whitespace-nowrap text-3xl font-black uppercase tracking-tight text-[#D7E2EA]/15 sm:text-5xl md:text-7xl">{item}<span className="px-5 text-[#B600A8]">✳</span></span>)}</div></section>
}
