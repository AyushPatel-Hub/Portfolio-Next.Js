import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SmoothScroll from '@/components/SmoothScroll';
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';
import App from '@/components/Hero';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
  variable: '--font-montserrat',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-next-js-gold-ten.vercel.app"),
  title: {
    default: "Ayush Patel | Full Stack & AI Developer",
    template: "%s | Ayush Patel",
  },
  description:
    "Portfolio of Ayush Patel — Full Stack Developer specializing in Next.js, React, Node.js, and AI integration.",
  keywords: [
    "Ayush Patel",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "AI Developer",
    "Lucknow Developer",
  ],
  authors: [{ name: "Ayush Patel", url: "https://portfolio-next-js-gold-ten.vercel.app" }],
  creator: "Ayush Patel",
  openGraph: {
    title: "Ayush Patel | Full Stack & AI Developer",
    description:
      "Explore projects, technical skills, web development experience, and certifications by Ayush Patel.",
    url: "https://portfolio-next-js-gold-ten.vercel.app",
    siteName: "Ayush Patel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Patel - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Patel | Full Stack & AI Developer",
    description:
      "Explore projects, technical skills, web development experience, and certifications by Ayush Patel.",
    creator: "@AyushPatl007",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={` ${montserrat.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
      <body suppressHydrationWarning  className="flex flex-col min-h-screen bg-zinc-950 text-white font-(family-name:--font-montserrat) font-extralight tracking-[0.15em] overflow-x-hidden">
       <NavBar/> 
        <main className="flex-1 flex flex-col">
          <App/>
          <SmoothScroll> {children}</SmoothScroll>
          
        </main>
       
        <Footer/>
        
        </body>
    </html>
  );
}
