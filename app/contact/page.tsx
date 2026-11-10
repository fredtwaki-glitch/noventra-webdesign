"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { site, packages } from "@/lib/site";
function ContactForm(){
 const params=useSearchParams();
 const [status,setStatus]=useState("");
 const [busy,setBusy]=useState(false);
 const [form,setForm]=useState({name:"",business:"",email:"",phone:"",type:params.get("type")||"",package:params.get("package")||"",budget:"",timeline:"",description:""});
 const update=(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>setForm({...form,[e.target.name]:e.target.value});
 async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setStatus("");
  const endpoint=process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
  if(!endpoint){setStatus("The enquiry form is not connected yet. Please use the email or WhatsApp contact details while the form endpoint is configured.");setBusy(false);return;}
  try{const res=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});if(!res.ok)throw new Error("Request failed");setStatus("Your enquiry has been submitted. We'll be in touch.");setForm({name:"",business:"",email:"",phone:"",type:"",package:"",budget:"",timeline:"",description:""});}
  catch{setStatus("We couldn't submit your enquiry. Please try again or contact us directly by email or WhatsApp.");}
  finally{setBusy(false);}
 }
 const wa=`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Noventra, I'd like to request a quote. My name is "+form.name+". "+form.description)}`;
 return <section className="section"><div className="container contact-grid"><aside className="contact-box"><span className="eyebrow">CONTACT NOVENTRA</span><h2 style={{color:"white"}}>Let's build your dream website.</h2><p>Tell us a little about your project. We'll get back to you to discuss the right approach.</p><a href={`mailto:${site.email}`}><Mail size={18}/>{site.email}</a><a href={`tel:${site.phone.replaceAll(" ","")}`}><Phone size={18}/>{site.phone}</a><a href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/>Chat on WhatsApp</a><p style={{fontSize:11}}>Serving clients in Kenya and beyond. Call or WhatsApp us using the number above.</p></aside>
 <form className="form-card" onSubmit={submit}><h3 style={{marginTop:0}}>Project enquiry</h3>
 <div className="website-benefit-note">
   <strong>Website design package benefit</strong>
   <p>Basic, Standard and Advanced website design packages include free domain registration and web hosting for the first 12 months. Renewal charges apply after the first year and will be communicated before renewal.</p>
 </div>
 <p style={{fontSize:13}}>Fields marked * are required.</p><div className="form-grid">
 {[[ "name","Full name *","text","Your name"],["business","Business / organisation","text","Organisation name"],["email","Email address *","email","you@example.com"],["phone","Phone number *","tel","+254..."]].map(([name,label,type,placeholder])=><div className="field" key={name}><label htmlFor={name}>{label}</label><input id={name} name={name} type={type} placeholder={placeholder} required={label.includes("*")} value={(form as any)[name]} onChange={update}/></div>)}
 <div className="field"><label htmlFor="type">Website type</label><select id="type" name="type" value={form.type} onChange={update}><option value="">Select website type</option>{["Website design","Social media marketing","Business website","Portfolio","E-commerce","News / magazine","School website","SACCO / organisation","Landing page","Custom website"].map(x=><option key={x}>{x}</option>)}</select></div>
 <div className="field"><label htmlFor="package">Preferred package</label><select id="package" name="package" value={form.package} onChange={update}><option value="">Not sure yet</option>{packages.map(x=><option key={x.name}>{x.name}</option>)}</select></div>
 <div className="field"><label htmlFor="budget">Estimated budget</label><select id="budget" name="budget" value={form.budget} onChange={update}><option value="">Select budget</option>{["KSh 15,000–30,000","KSh 30,000–60,000","KSh 60,000–100,000","KSh 100,000+","Not sure"].map(x=><option key={x}>{x}</option>)}</select></div>
 <div className="field"><label htmlFor="timeline">Preferred timeline</label><select id="timeline" name="timeline" value={form.timeline} onChange={update}><option value="">Select timeline</option>{["As soon as possible","Within 2 weeks","Within 1 month","Flexible"].map(x=><option key={x}>{x}</option>)}</select></div>
 <div className="field full-field"><label htmlFor="description">Tell us about your project *</label><textarea id="description" name="description" required value={form.description} onChange={update} placeholder="What should your website help you achieve? Include any features you have in mind."/></div>
 <div className="field full-field"><button className="button button-primary" disabled={busy} type="submit">{busy?"Submitting...":"Submit enquiry"} <Send size={16}/></button><span className="form-help">Your information is used to respond to this enquiry. Form delivery requires a configured endpoint.</span>{status&&<p role="status" style={{fontSize:12}}>{status}</p>}</div>
 </div></form></div></section>;
}
export default function Contact(){return <><section className="page-hero"><div className="container"><span className="crumb">CONTACT & GET A QUOTE</span><h1>Let's build your dream website.</h1><p>Share your idea, your goals and what you need your website to do. We'll help you map out the next step.</p></div></section><Suspense fallback={<section className="section"><div className="container">Loading enquiry form…</div></section>}><ContactForm/></Suspense></>}
