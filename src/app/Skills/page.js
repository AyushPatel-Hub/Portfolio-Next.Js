import Image from "next/image"
import ComputerIcon from '@mui/icons-material/Computer';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FadeIn from "@/components/FadeIn";

const Skills = () => {
  return (
    <div className="bg-black/80 overflow-hidden">
        <FadeIn><div className="flex flex-col items-center mt-30 text-4xl">
            <h1 className="font-bold">TECH STACK & TOOLS</h1>
            <br/>
            <h1 className="text-3xl">Technologies I use to build AI-driven full-stack applications</h1>
        </div>
        </FadeIn>
       <FadeIn>
         <div className="p-20 flex flex-wrap gap-20 justify-center">
            <Image alt="css3" width={80} height={100} src={"/icons8-css3-100.png"}/>
            <Image alt="css3" width={80} height={100} src={"/icons8-github-100.png"}/>
            <Image alt="css3" width={80} height={100} src={"/icons8-html-5-100.png"}/>
            <Image alt="css3" width={80} height={100} src={"/icons8-react-100.png"}/>
            <Image alt="css3"  width={80} height={100} src={"/icons8-java-100.png"}/>
            <Image alt="css3" width={80} height={100} src={"/icons8-npm-96.png"}/>
            <Image alt="css3" width={80} height={100} src={"/icons8-javascript-logo-100.png"}/>
            <Image alt="css3" width={80} height={100} src={"/icons8-tailwind-css-100.png"}/>
            <Image alt="css3" width={80} height={100} src={"/icons8-node-js-96.png"}/>
        </div>
       </FadeIn>
        <div className="flex flex- justify-center ">
           <div className="flex flex-col items-center p-10 gap-10 w-200">
            <FadeIn>
                 <div className="border p-10 w-150 rounded-4xl">
                <h1 className="text-3xl font-extrabold mb-4"><ComputerIcon/> LANGUAGES</h1>
               <div className=" flex flex-col gap-4 font-bold  text-xl"> <p>[Java] [JavaScript] [Python]</p>
                <p>[C++] [SQL] [HTML5] [CSS3]</p></div>
            </div>
            </FadeIn>
            <FadeIn>
                 <div className="border p-10  w-150 rounded-4xl">
                <h1 className="text-3xl font-extrabold mb-4"><ElectricBoltIcon/> Frameworks & Libraries</h1>
               <div className=" flex flex-col gap-4 font-bold  text-xl">
                 <p>[React] [Node.js] [Express]</p>
                <p>[Bootstrap 5] [Passport.js]</p>
               </div>
            </div>
            </FadeIn>
           </div>
             <div className="flex flex-col items-center p-10 gap-10 w-200">
               <FadeIn>
                 <div className="border p-10  w-150 rounded-4xl">
                <h1 className="text-3xl font-extrabold mb-4"><ElectricBoltIcon/> Frameworks & Libraries</h1>
               <div className=" flex flex-col gap-4 font-bold  text-xl">
                 <p>[React] [Node.js] [Express]</p>
                <p>[Bootstrap 5] [Passport.js]</p>
               </div>
            </div>
               </FadeIn>
             <FadeIn>
                <div  className="border p-10  w-150 rounded-4xl">
                <h1 className="text-3xl font-extrabold mb-4 "><ComputerIcon/> Databases & Cloud</h1>
               <div className=" flex flex-col gap-4 font-bold  text-xl">
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