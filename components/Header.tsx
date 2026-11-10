"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Pricing", "/pricing"], ["Portfolio", "/portfolio"],
  ["Industries", "/industries"], ["Contact", "/contact"]
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap container">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">N</span><span>NOVENTRA<small>TECHNOLOGIES</small></span></Link>
    <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav-links open" : "nav-links"}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Get a Quote <ArrowUpRight size={16}/></Link></nav>
  </div></header>;
}
