import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
export default function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link href="/" className="brand footer-brand"><span className="brand-mark">N</span><span>NOVENTRA<small>TECHNOLOGIES</small></span></Link><p>Thoughtful digital experiences for ambitious businesses, institutions and ideas.</p></div>
    <div><h4>Explore</h4><Link href="/about">About us</Link><Link href="/services">Services</Link><Link href="/pricing">Packages</Link><Link href="/portfolio">Portfolio</Link></div>
    <div><h4>Get in touch</h4><a href={`mailto:${site.email}`}><Mail size={15}/> {site.email}</a><a href={`tel:${site.phone.replaceAll(" ","")}`}><Phone size={15}/> {site.phone}</a><Link href="/contact">Start a project <ArrowUpRight size={15}/></Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Noventra Technologies. All rights reserved.</span><span>Designed with purpose. Built for growth.</span></div></footer>;
}
