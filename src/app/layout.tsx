import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export const metadata:Metadata={title:{default:"ARCHIVE. — The Encyclopedia of Everything",template:"%s | ARCHIVE."},description:"A structured record of human knowledge, ideas, discoveries and imagination.",metadataBase:new URL("https://example.com")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
