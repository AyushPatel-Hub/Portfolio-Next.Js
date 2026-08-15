
import Link from "next/link";
import Image from "next/image";
import './NavBar.css'

const NavBar = () => {
  
  return (
   <header className=" font-bold sticky top-0 left-0 right-0 mx-auto mt-8 h-15 w-[60%] z-10 flex items-center justify-center rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 ring-1 ring-white/10 shadow-[0_0_25px_-5px_rgba(255,255,255,0.05)] text-white">
          <ul className="flex justify-evenly gap-5 items-center w-full">
            {/* <Image src={"/robot.png"} width={20} height={30} className="h-auto w-auto" alt="robot"/> */}
            <li className="neon-card"><Link  href={'/'} replace scroll={true}>HOME</Link></li>
            <li  className="neon-card"><Link href={"/education"}>EDUCATION</Link></li>
            <li className="neon-card"><Link href={"/Projects"}>PROJECTS</Link></li>
            <li className="neon-card"><Link href={"/experience"}>EXPERIENCE</Link></li>
            <li className="neon-card"><Link href={"/Contact"}>CONATCT ME</Link></li>
          </ul>
        </header>  
  )
}

export default NavBar