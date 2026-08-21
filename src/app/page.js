// 'use client';

// import GitHubIcon from '@mui/icons-material/GitHub';
// import App from "@/components/Hero";
// import Image from "next/image";
// import Button from "@/components/Buttons";
// import TypeWritter from "@/components/TypeWritter";
// import GitHubProfile from "../components/GitHub";
// import FadeIn from '@/components/FadeIn';
// import Project from "./Projects/page";
// import Experience from '@/components/Experience';
// import { Experiences } from '@/data/experiences'
// import Skills from './Skills/page';
// import EducationPage from './education/page';
// import Contact from './Contact/page';

// export default function Home() {
//   return (<div id='top'>
//     <div className="p-10 w-full min-h-screen px-4  sm:px-8 py-10 items-center text-white text-sm md:text-xl lg:text-8xl flex flex-col lg:flex-row justify-between gap-10">
//       <FadeIn>
//         <div>
//         <h1 className="text-sm md:text-xl lg:text-6xl">HELLO!</h1>
//       <h1>I'M AYUSH <br/> PATEL</h1>
//       <TypeWritter/>
//       {/* <p className="text-sm md:text-xl lg:text-3xl mt-5">Full Stack Developer</p> */}
//       <div className="flex gap-4 items-center mt-10 ">
//          <Button item={"Contact me"} link={"/Contact"}></Button>
//          <Button item={"Projects"} link={"/Projects"}></Button>
//          <Button item={"Resume"} link={"https://drive.google.com/file/d/1Abh6l-emGAzQ8oPe_eVUlvROxIsfOKgR/view?usp=sharing"}></Button>
//       </div>
//       </div>
//       </FadeIn>
//       <FadeIn>
//         <div className=" w-140 h-100 text-sm md:text-xl lg:text-3xl text-black flex flex-col gap-4 justify-center ">
//         <span id="stack" className="text-zinc-600  mb-1 font-extrabold">// CORE STACK</span>
//   <p className="text-zinc-300">Next.js • React • Node.js</p>
//   <p className="text-zinc-300">JavaScript • Java • Tailwind • CSS</p>
//   <p className="text-zinc-300">MongoDB • MySQL • REST APIs</p>
  
//            <div className="flex justify-end "> <Button item={"More"} link={"/Skills"}></Button></div>
//     </div>
//       </FadeIn>
//     </div>
//    <FadeIn> <h1 className="text-center text-5xl mb-10 font-bold">MY GITHUB   <GitHubIcon fontSize='inheritance'/> </h1></FadeIn>
//     <div className="flex flex-col gap-0 p-0 m-0">
//       <FadeIn><GitHubProfile/></FadeIn>
    
//       <div className="bg-black/80 mt-[-80]"><Project/></div>
    
//     </div>
//     <div className='mt-[-120]'>
//       <Experience experiences={Experiences}/>
//     </div>
//     <div>
//      <FadeIn> <Skills/></FadeIn>
//     </div>
//     <div>
//      <FadeIn> <EducationPage/></FadeIn>
//     </div>
//     <div>
//      <FadeIn> <Contact/></FadeIn>
//     </div>
    
//     {/* <App/> */}
//   </div>
//   );
// }
'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import App from "@/components/Hero";
import Image from "next/image";
import Button from "@/components/Buttons";
import TypeWritter from "@/components/TypeWritter";
import GitHubProfile from "../components/GitHub";
import FadeIn from '@/components/FadeIn';
import Project from "./Projects/page";
import Experience from '@/components/Experience';
import { Experiences } from '@/data/experiences'
import Skills from './Skills/page';
import EducationPage from './education/page';
import Contact from './Contact/page';

export default function Home() {
  return (
    <div id='top' >
      <div className="p-4 sm:p-8 lg:p-10 w-full min-h-screen items-center text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl flex flex-col lg:flex-row justify-between gap-10">
        <FadeIn>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">HELLO!</h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              I'M AYUSH <br /> PATEL
            </h1>
            <TypeWritter />
            {/* <p className="text-sm md:text-xl lg:text-3xl mt-5">Full Stack Developer</p> */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center mt-8 lg:mt-10">
              <Button item={"Contact me"} link={"/Contact"} />
              <Button item={"Projects"} link={"/Projects"} />
              <Button item={"Resume"} link={"https://drive.google.com/file/d/1Abh6l-emGAzQ8oPe_eVUlvROxIsfOKgR/view?usp=sharing"} />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-full lg:w-140 h-auto lg:h-100 text-lg sm:text-xl lg:text-3xl text-black flex flex-col gap-3 sm:gap-4 justify-center mt-6 lg:mt-0">
            <span id="stack" className="text-zinc-600 mb-1 font-extrabold text-sm sm:text-base lg:text-xl">// CORE STACK</span>
            <p className="text-zinc-300">Next.js • React • Node.js</p>
            <p className="text-zinc-300">JavaScript • Java • Tailwind • CSS</p>
            <p className="text-zinc-300">MongoDB • MySQL • REST APIs</p>

            <div className="flex justify-end mt-2">
              <Button item={"More"} link={"/Skills"} />
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-10 font-bold flex items-center justify-center gap-2">
          MY GITHUB <GitHubIcon fontSize='inherit' />
        </h1>
      </FadeIn>

      <div className="flex flex-col gap-0 p-0 m-0">
        <FadeIn><GitHubProfile /></FadeIn>
        <div className="bg-black/80 mt-0 lg:mt-[-80px]"><Project /></div>
      </div>

      <div className='mt-0 lg:mt-[-120px]'>
        <Experience experiences={Experiences} />
      </div>

      <div>
        <FadeIn><Skills /></FadeIn>
      </div>

      <div>
        <FadeIn><EducationPage /></FadeIn>
      </div>

      <div>
        <FadeIn><Contact /></FadeIn>
      </div>

      {/* <App/> */}
    </div>
  );
}