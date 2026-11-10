import Link from "next/link";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { websitePackages, socialPackages } from "@/lib/site";

type Package = (typeof websitePackages)[number] & { image: string; imageAlt: string };
function Cards({ items, serviceType }: { items: Package[]; serviceType: string }) {
  return <div className="pricing-grid">{items.map((item) => <article key={item.name} className={`price-card ${item.highlight ? "featured" : ""}`}>
    <div className="price-image-wrap">
      <img className={`price-image price-image-${item.name.toLowerCase()}`} src={item.image} alt={item.imageAlt} loading="lazy" />
      <span className="image-kicker">{serviceType === "Website design" ? "WEB DESIGN" : "SOCIAL MEDIA"}</span>
    </div>
    {item.highlight && <div className="popular"><Sparkles size={14}/> {item.label.toUpperCase()}</div>}
    <div className="price-top"><span className="plan-name">{item.name}</span><span className="price-suffix">{item.suffix}</span><div className="price">{item.price === "Request a quote" ? item.price : <>KSh {item.price}</>}</div><p>{item.description}</p></div>
    <div className="pages-pill">{item.pages}</div><ul>{item.features.map(feature => <li key={feature}><Check size={16}/>{feature}</li>)}</ul>
    {!item.highlight && <p className="package-note">{item.label}</p>}
    <Link className={item.highlight ? "button button-primary full" : "button button-outline full"} href={`/contact?type=${encodeURIComponent(serviceType)}&package=${encodeURIComponent(item.name)}`}>{item.cta}<ArrowUpRight size={16}/></Link>
  </article>)}</div>;
}
export function WebsitePackageCards() { return <Cards items={websitePackages as Package[]} serviceType="Website design"/>; }
export function SocialPackageCards() { return <Cards items={socialPackages as Package[]} serviceType="Social media marketing"/>; }
export default function PackageCards() { return <WebsitePackageCards/>; }
