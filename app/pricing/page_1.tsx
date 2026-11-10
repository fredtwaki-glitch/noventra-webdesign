import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { WebsitePackageCards, SocialPackageCards } from "@/components/PackageCards";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { websitePackages, socialPackages } from "@/lib/site";
export const metadata={title:"Pricing & Packages"};
export default function Pricing(){return <>
<section className="page-hero"><div className="container"><span className="crumb">PRICING & PACKAGES</span><h1>Practical digital solutions with clear package pricing.</h1><p>Choose a website or social media marketing package. Select Buy This to send us a quote request for your preferred package.</p></div></section>
<section className="section"><div className="container"><SectionTitle center eyebrow="WEBSITE DESIGN PACKAGES" title="Build your business online." text="Dynamic websites designed to present your business, reach customers and support online sales."/><WebsitePackageCards/></div></section>
<section className="section pale"><div className="container"><SectionTitle center eyebrow="SOCIAL MEDIA MARKETING PACKAGES" title="Grow your audience and stay visible." text="Choose the level of social media management that matches your marketing goals."/><SocialPackageCards/></div></section>
<section className="section"><div className="container"><SectionTitle eyebrow="PACKAGE NOTES" title="A clear process from enquiry to delivery."/><div className="feature-list">{["Click Buy This on a package to open the request quote form with your selection pre-filled.","The quote form lets you share your goals, contact details and any additional requirements.","For social media packages, the stated post limits are monthly. Boosting allocations are displayed as provided in each package.","Any additional services or requirements outside the listed package will be discussed and quoted separately."].map(x=><li key={x}><CheckCircle2 size={17}/>{x}</li>)}</div><div className="cta-band"><div><span className="eyebrow">NEED HELP CHOOSING?</span><h2>Tell us what you want to achieve.</h2><p>We can help you identify a suitable package or discuss a tailored solution.</p></div><Link className="button button-primary" href="/contact">Request a quote <ArrowUpRight size={16}/></Link></div></div></section>
</>}
