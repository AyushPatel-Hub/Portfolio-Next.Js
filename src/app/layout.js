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
  title: "Ayush Patel",
  description: "Full Stack Developer",
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
