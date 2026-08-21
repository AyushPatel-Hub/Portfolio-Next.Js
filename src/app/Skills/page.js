// import Image from "next/image"
// import ComputerIcon from '@mui/icons-material/Computer';
// import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import FadeIn from "@/components/FadeIn";

// const Skills = () => {
//   return (
//     <div className="bg-black/80 overflow-hidden">
//         <FadeIn><div className="flex flex-col items-center mt-30 text-4xl">
//             <h1 className="font-bold">TECH STACK & TOOLS</h1>
//             <br/>
//             <h1 className="text-3xl">Technologies I use to build AI-driven full-stack applications</h1>
//         </div>
//         </FadeIn>
//        <FadeIn>
//          <div className="p-20 flex flex-wrap gap-20 justify-center">
//             <Image alt="css3" width={80} height={100} src={"/icons8-css3-100.png"}/>
//             <Image alt="css3" width={80} height={100} src={"/icons8-github-100.png"}/>
//             <Image alt="css3" width={80} height={100} src={"/icons8-html-5-100.png"}/>
//             <Image alt="css3" width={80} height={100} src={"/icons8-react-100.png"}/>
//             <Image alt="css3"  width={80} height={100} src={"/icons8-java-100.png"}/>
//             <Image alt="css3" width={80} height={100} src={"/icons8-npm-96.png"}/>
//             <Image alt="css3" width={80} height={100} src={"/icons8-javascript-logo-100.png"}/>
//             <Image alt="css3" width={80} height={100} src={"/icons8-tailwind-css-100.png"}/>
//             <Image alt="css3" width={80} height={100} src={"/icons8-node-js-96.png"}/>
//         </div>
//        </FadeIn>
//         <div className="flex flex- justify-center ">
//            <div className="flex flex-col items-center p-10 gap-10 w-200">
//             <FadeIn>
//                  <div className="border p-10 w-150 rounded-4xl">
//                 <h1 className="text-3xl font-extrabold mb-4"><ComputerIcon/> LANGUAGES</h1>
//                <div className=" flex flex-col gap-4 font-bold  text-xl"> <p>[Java] [JavaScript] [Python]</p>
//                 <p>[C++] [SQL] [HTML5] [CSS3]</p></div>
//             </div>
//             </FadeIn>
//             <FadeIn>
//                  <div className="border p-10  w-150 rounded-4xl">
//                 <h1 className="text-3xl font-extrabold mb-4"><ElectricBoltIcon/> Frameworks & Libraries</h1>
//                <div className=" flex flex-col gap-4 font-bold  text-xl">
//                  <p>[React] [Node.js] [Express]</p>
//                 <p>[Bootstrap 5] [Passport.js]</p>
//                </div>
//             </div>
//             </FadeIn>
//            </div>
//              <div className="flex flex-col items-center p-10 gap-10 w-200">
//                <FadeIn>
//                  <div className="border p-10  w-150 rounded-4xl">
//                 <h1 className="text-3xl font-extrabold mb-4"><ElectricBoltIcon/> Frameworks & Libraries</h1>
//                <div className=" flex flex-col gap-4 font-bold  text-xl">
//                  <p>[React] [Node.js] [Express]</p>
//                 <p>[Bootstrap 5] [Passport.js]</p>
//                </div>
//             </div>
//                </FadeIn>
//              <FadeIn>
//                 <div  className="border p-10  w-150 rounded-4xl">
//                 <h1 className="text-3xl font-extrabold mb-4 "><ComputerIcon/> Databases & Cloud</h1>
//                <div className=" flex flex-col gap-4 font-bold  text-xl">
//                  <p>[MongoDB] [MySQL]</p>
//                 <p>[Cloudinary] [Render]</p>
//                </div>
//             </div>
//              </FadeIn>
//              </div>
//         </div>
//     </div>
//   )
// }

// export default Skills


import Image from "next/image"
import ComputerIcon from '@mui/icons-material/Computer';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FadeIn from "@/components/FadeIn";

const Skills = () => {
  return (
    <div className="bg-black/80 overflow-hidden w-full max-w-full">
      <FadeIn>
        <div className="flex flex-col items-center mt-12 md:mt-30 text-center px-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">TECH STACK & TOOLS</h1>
          <br />
          <h2 className="text-base sm:text-xl md:text-3xl font-light text-zinc-300 max-w-3xl">
            Technologies I use to build AI-driven full-stack applications
          </h2>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="p-6 sm:p-10 md:p-20 flex flex-wrap gap-6 sm:gap-10 md:gap-20 justify-center items-center">
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="css3" width={80} height={100} src={"/icons8-css3-100.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="github" width={80} height={100} src={"/icons8-github-100.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="html5" width={80} height={100} src={"/icons8-html-5-100.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="react" width={80} height={100} src={"/icons8-react-100.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="java" width={80} height={100} src={"/icons8-java-100.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="npm" width={80} height={100} src={"/icons8-npm-96.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="javascript" width={80} height={100} src={"/icons8-javascript-logo-100.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="tailwind" width={80} height={100} src={"/icons8-tailwind-css-100.png"} />
          <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-24 object-contain" alt="nodejs" width={80} height={100} src={"/icons8-node-js-96.png"} />
        </div>
      </FadeIn>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full px-4 sm:px-8 py-6">
        <div className="flex flex-col items-center p-2 sm:p-6 lg:p-10 gap-6 lg:gap-10 w-full max-w-full lg:w-200">
          <FadeIn className="w-full flex justify-center">
            <div className="border p-6 sm:p-8 lg:p-10 w-full max-w-[550px] lg:w-150 rounded-2xl md:rounded-4xl">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 flex items-center gap-2">
                <ComputerIcon fontSize="inherit" /> LANGUAGES
              </h1>
              <div className="flex flex-col gap-2 sm:gap-4 font-bold text-sm sm:text-base lg:text-xl text-zinc-300">
                <p>[Java] [JavaScript] [Python]</p>
                <p>[C++] [SQL] [HTML5] [CSS3]</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="w-full flex justify-center">
            <div className="border p-6 sm:p-8 lg:p-10 w-full max-w-[550px] lg:w-150 rounded-2xl md:rounded-4xl">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 flex items-center gap-2">
                <ElectricBoltIcon fontSize="inherit" /> Frameworks & Libraries
              </h1>
              <div className="flex flex-col gap-2 sm:gap-4 font-bold text-sm sm:text-base lg:text-xl text-zinc-300">
                <p>[React] [Node.js] [Express]</p>
                <p>[Bootstrap 5] [Passport.js]</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col items-center p-2 sm:p-6 lg:p-10 gap-6 lg:gap-10 w-full max-w-full lg:w-200">
          <FadeIn className="w-full flex justify-center">
            <div className="border p-6 sm:p-8 lg:p-10 w-full max-w-[550px] lg:w-150 rounded-2xl md:rounded-4xl">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 flex items-center gap-2">
                <SmartToyIcon fontSize="inherit" /> AI & Machine Learning
              </h1>
              <div className="flex flex-col gap-2 sm:gap-4 font-bold text-sm sm:text-base lg:text-xl text-zinc-300">
                <p>[TensorFlow] [PyTorch] [OpenCV]</p>
                <p>[Scikit-Learn] [Pandas] [NumPy]</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="w-full flex justify-center">
            <div className="border p-6 sm:p-8 lg:p-10 w-full max-w-[550px] lg:w-150 rounded-2xl md:rounded-4xl">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 flex items-center gap-2">
                <ComputerIcon fontSize="inherit" /> Databases & Cloud
              </h1>
              <div className="flex flex-col gap-2 sm:gap-4 font-bold text-sm sm:text-base lg:text-xl text-zinc-300">
                <p>[MongoDB] [MySQL]</p>
                <p>[Cloudinary] [Render]</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

export default Skills