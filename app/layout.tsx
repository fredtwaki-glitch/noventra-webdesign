import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
 title: { default: "Noventra Technologies | Web Design & Digital Experiences", template: "%s | Noventra Technologies" },
 description: "Professional, affordable website design for businesses, institutions and entrepreneurs. Your dream website starts from KSh 15,000.",
 metadataBase: new URL("https://www.example.com"),
 openGraph: { title: "Noventra Technologies", description: "Your Vision. Our Design. Your Digital Success.", type: "website" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
