
import Link from "next/link";
import Image from "next/image";
import './NavBar.css'

const NavBar = () => {
  
  return (
    <header className="font-bold fixed top-3 left-1/2 -translate-x-1/2 min-h-12 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-4xl z-[999] flex items-center justify-center rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/15 ring-1 ring-white/10 shadow-lg text-white px-2 py-2">
      <ul className="flex items-center justify-between sm:justify-evenly w-full gap-1 sm:gap-4 md:gap-6 text-[11px] sm:text-sm md:text-base font-semibold tracking-wider overflow-x-auto no-scrollbar whitespace-nowrap px-1">
        <li className="neon-card shrink-0 px-1.5 py-1">
          <Link href={'/'} replace scroll={true}>HOME</Link>
        </li>
        <li className="neon-card shrink-0 px-1.5 py-1">
          <Link href={"/education"}>EDUCATION</Link>
        </li>
        <li className="neon-card shrink-0 px-1.5 py-1">
          <Link href={"/Projects"}>PROJECTS</Link>
        </li>
        <li className="neon-card shrink-0 px-1.5 py-1">
          <Link href={"/experience"}>EXPERIENCE</Link>
        </li>
        <li className="neon-card shrink-0 px-1.5 py-1">
          <Link href={"/Contact"}>CONTACT ME</Link>
        </li>
      </ul>
    </header>  
  );
};

export default NavBar