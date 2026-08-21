// import Buttons from "@/components/Buttons"
// import Link from "next/link";
// import Image from "next/image";
// import FadeIn from "@/components/FadeIn";
// import LocationPinIcon from '@mui/icons-material/LocationPin';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


// const Contact = () => {
//   return (
//    <>
//     <div className="flex justify-between items-center min-h-[calc(100vh-80px)] ">
//       <FadeIn>
//         <div>
//         <div className="text-2xl p-10 flex flex-col gap-7">
//           <h1 className="text-sm md:text-xl lg:text-6xl font-extralight">LET'S CONNECT</h1>
//           <h3 className="text-sm md:text-xl lg:text-3xl font-extralight">HAVE A PROJECT OR OPPORTUNITY?</h3>
//          <div> <Buttons item={"SEND EMAIL"} link={"mailto:ayush292004patel@gmail.com"}/></div>
//           <p className="text-sm md:text-xl lg:text-2xl font-extralight">ayush292004patel@gmail.com</p>
//         </div>
//       </div> 
//       </FadeIn>
//       <div>
//         <FadeIn>
//           <div  className="text-2xl p-10 flex flex-col gap-7 items-start">
//           <h1 className=" flex gap-2 items-center text-4xl"><LocationPinIcon fontSize="inherit"/> LUCKNOW, INDIA</h1>
//           <h3><FiberManualRecordIcon className="text-green-600"/> OPEN TO ROLES</h3>
//          <ul className="list-disc pl-8">
//             <li>FREELANCE</li>
//             <li>INTERNSHIPS</li>
//             <li>OPEN SOURCE PROJECTS</li>
//             </ul>
       
//         </div>
//         </FadeIn>
//       </div>
//     </div>
//     <FadeIn><div className="  flex  mb-10  justify-center gap-10 text-4xl">
//       <Link id="icons" href={"https://x.com/AyushPatl007"}><Image alt="css3" width={50} height={50} src={"/icons8-x-100.png"}/></Link>
//       <Link id="icons" href={"https://www.youtube.com/@Ragethor007"}><Image alt="css3" width={50} height={50} src={"/icons8-youtube-100.png"}/></Link>
//       <Link id="icons" href={"mailto:ayush292004patel@gmail.com"}><Image alt="css3" width={50} height={50} src={"/icons8-email-100.png"}/></Link>
//       <Link id="icons" href={"https://github.com/AyushPatel-Hub"}><Image alt="css3" width={50} height={50} src={"/icons8-github-100.png"}/></Link>
//       <Link id="icons" href={"https://www.instagram.com/ayush.patel200/?hl=en"}><Image alt="css3" width={50} height={50} src={"/icons8-instagram-logo-100.png"}/></Link>
//       <Link id="icons" href={"https://www.linkedin.com/in/ayushpatelcse/"}><Image alt="css3" width={50} height={50} src={"/icons8-linkedin-100.png"}/></Link>
//     </div>
//     </FadeIn>
   
//     </>
//   )
// }

// export default Contact

import Buttons from "@/components/Buttons"
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-0 py-8 lg:py-0 gap-8 lg:gap-0">
        <FadeIn>
          <div>
            <div className="text-xl sm:text-2xl p-4 sm:p-6 lg:p-10 flex flex-col gap-5 sm:gap-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight">LET'S CONNECT</h1>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight">HAVE A PROJECT OR OPPORTUNITY?</h3>
              <div><Buttons item={"SEND EMAIL"} link={"mailto:ayush292004patel@gmail.com"} /></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight break-all sm:break-normal">ayush292004patel@gmail.com</p>
            </div>
          </div>
        </FadeIn>
        <div>
          <FadeIn>
            <div className="text-xl sm:text-2xl p-4 sm:p-6 lg:p-10 flex flex-col gap-5 sm:gap-7 items-start">
              <h1 className="flex gap-2 items-center text-2xl sm:text-3xl lg:text-4xl">
                <LocationPinIcon fontSize="inherit" /> LUCKNOW, INDIA
              </h1>
              <h3 className="text-base sm:text-xl lg:text-2xl flex items-center gap-2">
                <FiberManualRecordIcon className="text-green-600 text-sm" /> OPEN TO ROLES
              </h3>
              <ul className="list-disc pl-6 sm:pl-8 text-sm sm:text-base lg:text-xl space-y-1">
                <li>FREELANCE</li>
                <li>INTERNSHIPS</li>
                <li>OPEN SOURCE PROJECTS</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn>
        <div className="flex flex-wrap mb-10 justify-center gap-4 sm:gap-6 lg:gap-10 text-4xl px-4">
          <Link id="icons" href={"https://x.com/AyushPatl007"}><Image className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]" alt="css3" width={50} height={50} src={"/icons8-x-100.png"} /></Link>
          <Link id="icons" href={"https://www.youtube.com/@Ragethor007"}><Image className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]" alt="css3" width={50} height={50} src={"/icons8-youtube-100.png"} /></Link>
          <Link id="icons" href={"mailto:ayush292004patel@gmail.com"}><Image className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]" alt="css3" width={50} height={50} src={"/icons8-email-100.png"} /></Link>
          <Link id="icons" href={"https://github.com/AyushPatel-Hub"}><Image className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]" alt="css3" width={50} height={50} src={"/icons8-github-100.png"} /></Link>
          <Link id="icons" href={"https://www.instagram.com/ayush.patel200/?hl=en"}><Image className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]" alt="css3" width={50} height={50} src={"/icons8-instagram-logo-100.png"} /></Link>
          <Link id="icons" href={"https://www.linkedin.com/in/ayushpatelcse/"}><Image className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]" alt="css3" width={50} height={50} src={"/icons8-linkedin-100.png"} /></Link>
        </div>
      </FadeIn>
    </>
  )
}

export default Contact