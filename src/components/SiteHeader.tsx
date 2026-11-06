 "use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Bookmark, Menu, X, ChevronDown } from "lucide-react";
import { domains } from "@/data/content";
export default function SiteHeader(){
 const [open,setOpen]=useState(false),[mobile,setMobile]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-[#D9D1C3] bg-[#F5F1E8]/95 backdrop-blur">
  <div className="container flex h-[76px] items-center justify-between gap-6">
   <Link href="/" className="serif text-[31px] font-bold tracking-[-.06em]">ARCHIVE<span className="text-[#9D302B]">.</span></Link>
   <nav className="hidden items-center gap-7 text-[11px] font-bold tracking-[.12em] md:flex">
    <Link href="/" className="hover:text-[#9D302B]">HOME</Link>
    <Link href="/explore" className="hover:text-[#9D302B]">EXPLORE</Link>
    <div className="relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
     <button onClick={()=>setOpen(!open)} className="flex items-center gap-1 hover:text-[#9D302B]">DOMAINS <ChevronDown size={13}/></button>
     {open&&<div className="absolute left-1/2 top-full z-50 grid w-[620px] -translate-x-1/2 grid-cols-3 gap-x-6 gap-y-3 border border-[#D9D1C3] bg-[#FFFEFA] p-6 shadow-xl">
      {domains.map(d=><Link key={d.slug} href={`/domains/${d.slug}`} onClick={()=>setOpen(false)} className="text-sm hover:text-[#9D302B]"><span className="mr-2 text-[10px] text-[#9D302B]">{d.number}</span>{d.name}</Link>)}
     </div>}
    </div>
    <Link href="/timelines" className="hover:text-[#9D302B]">TIMELINES</Link>
    <Link href="/collections" className="hover:text-[#9D302B]">COLLECTIONS</Link>
    <Link href="/about" className="hover:text-[#9D302B]">ABOUT</Link>
   </nav>
   <div className="flex items-center gap-4">
    <Link aria-label="Search" href="/search" className="hover:text-[#9D302B]"><Search size={19}/></Link>
    <Link aria-label="Saved articles" href="/account/saved" className="hidden hover:text-[#9D302B] sm:block"><Bookmark size={18}/></Link>
    <button aria-label="Open menu" className="md:hidden" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button>
   </div>
  </div>
  {mobile&&<div className="border-t border-[#D9D1C3] bg-[#F5F1E8] px-5 py-5 md:hidden"><div className="grid gap-4 text-sm font-semibold">{[["Home","/"],["Explore","/explore"],["All domains","/domains"],["Timelines","/timelines"],["Collections","/collections"],["Search","/search"],["About","/about"]].map(([n,h])=><Link key={h} href={h} onClick={()=>setMobile(false)}>{n}</Link>)}</div></div>}
 </header>
}
