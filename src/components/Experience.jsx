// "use client";
// import { Experiences } from "@/data/experiences";
// import { useState } from "react";
// import CertificateModal from "./CertificateModal";
// import FadeIn from '@/components/FadeIn';
// export default function Experience({ experiences }) {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   return (
//     <>
//    <div className="bg-black/90">
//      <h1 className="text-center text-5xl mt-30  h-30">EXPERIENCE & CERTIFICATES</h1>
//     <p className="p-8 text-xl text-center font-light ">My journey in technology has been shaped by hands-on development, internships, job simulations, and continuous learning. I have gained practical experience in web and frontend development through internships at InAmigos Foundation and CodeAlpha, while also exploring industry-oriented problem solving through the Deloitte Technology Job Simulation. Alongside practical experience, I have expanded my knowledge through certifications and courses covering AI, Cyber Security, AI Agents, and modern coding practices from platforms such as Udemy and Kaggle. These experiences have helped me strengthen my technical skills, understand real-world development workflows, and continuously grow as a developer.</p>
//     <div>
//       <div className="mt-20 flex justify-center gap-40">
//         <div>
//           <h2 className="text-2xl mb-10 font-extrabold">Experience / Certificate</h2>
//           <ul className="flex flex-col gap-15 text-xl font-bold">
//             <li>InAmigos Foundation – Web Development Internship</li>
//             <li>CodeAlpha – Frontend Development Internship</li>
//             <li>Deloitte – Technology Job Simulation</li>
//             <li>Udemy – AI & Cyber Security Mastery 2026</li>
//             <li>Kaggle – 5-Day AI Agents: Intensive Vibe Coding Course</li>
            
//           </ul>
//         </div>
//       <div>
//         <h2 className="text-2xl mb-10 font-extrabold">Technologies / Skills</h2>
//         <ul className="flex flex-col gap-15 text-xl font-bold">
//           <li>HTML, CSS, JavaScript, Web Development, Frontend Development</li>
//           <li>HTML, CSS, JavaScript, Frontend Development, Responsive Design</li>
//           <li>Coding, Technology, Problem Solving, Development</li>
//           <li>Artificial Intelligence, Cyber Security, AI Concepts</li>
//           <li>AI Agents, Artificial Intelligence, Vibe Coding, Programming</li>
//         </ul>
//       </div>
//       </div>
//     </div>
//       <div className=" mt-20  p-10  flex flex-wrap gap-10">
//         {experiences.map((experience) => (
//           <FadeIn>
//             <div
//             key={experience.id}
//             className="rounded-xl border p-6 w-[900px]"
//           >
//             <span className="text-lg text-white">
//               {experience.type}
//             </span>

//             <h2 className="mt-2 text-2xl font-bold">
//               {experience.title}
//             </h2>

//             <h3 className="mt-1">
//               {experience.organization}
//             </h3>

//             <p className="mt-2 text-sm text-white">
//               {experience.date}
//             </p>

//             <p className="mt-4 text-white">
//               {experience.description}
//             </p>

//             <button 
//               onClick={() => setSelectedCertificate(experience)}
//               className="border hover:bg-white hover:text-black hover:font-extrabold mt-5 rounded-4xl bg-black px-5 py-2 text-white"
//             >
//               View Certificate
//             </button>
//           </div>

//           </FadeIn>
//         ))}
//       </div>

//       {/* Modal */}
//       <CertificateModal
//         certificate={selectedCertificate}
//         onClose={() => setSelectedCertificate(null)}
//       />
//    </div>
//     </>
//   );
// }

"use client";
import { Experiences } from "@/data/experiences";
import { useState } from "react";
import CertificateModal from "./CertificateModal";
import FadeIn from '@/components/FadeIn';

export default function Experience({ experiences }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <div className="bg-black/90 w-full max-w-full overflow-hidden">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl mt-12 md:mt-30 px-4 font-bold md:font-normal">
          EXPERIENCE & CERTIFICATES
        </h1>
        
        <p className="p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-xl text-center font-light max-w-5xl mx-auto text-zinc-300">
          My journey in technology has been shaped by hands-on development, internships, job simulations, and continuous learning. I have gained practical experience in web and frontend development through internships at InAmigos Foundation and CodeAlpha, while also exploring industry-oriented problem solving through the Deloitte Technology Job Simulation. Alongside practical experience, I have expanded my knowledge through certifications and courses covering AI, Cyber Security, AI Agents, and modern coding practices from platforms such as Udemy and Kaggle. These experiences have helped me strengthen my technical skills, understand real-world development workflows, and continuously grow as a developer.
        </p>

        <div className="mt-10 md:mt-20 px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-40 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl sm:text-2xl mb-4 md:mb-10 font-extrabold text-white">
                Experience / Certificate
              </h2>
              <ul className="flex flex-col gap-6 md:gap-15 text-sm sm:text-base md:text-xl font-bold text-zinc-300">
                <li>InAmigos Foundation – Web Development Internship</li>
                <li>CodeAlpha – Frontend Development Internship</li>
                <li>Deloitte – Technology Job Simulation</li>
                <li>Udemy – AI & Cyber Security Mastery 2026</li>
                <li>Kaggle – 5-Day AI Agents: Intensive Vibe Coding Course</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-xl sm:text-2xl mb-4 md:mb-10 font-extrabold text-white">
                Technologies / Skills
              </h2>
              <ul className="flex flex-col gap-6 md:gap-15 text-sm sm:text-base md:text-xl font-bold text-zinc-300">
                <li>HTML, CSS, JavaScript, Web Development, Frontend Development</li>
                <li>HTML, CSS, JavaScript, Frontend Development, Responsive Design</li>
                <li>Coding, Technology, Problem Solving, Development</li>
                <li>Artificial Intelligence, Cyber Security, AI Concepts</li>
                <li>AI Agents, Artificial Intelligence, Vibe Coding, Programming</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 p-4 sm:p-6 md:p-10 flex flex-wrap gap-6 md:gap-10 justify-center">
          {experiences.map((experience) => (
            <FadeIn key={experience.id} className="w-full flex justify-center">
              <div className="rounded-xl border p-4 sm:p-6 w-full max-w-full lg:w-[900px]">
                <span className="text-sm sm:text-base md:text-lg text-zinc-400">
                  {experience.type}
                </span>

                <h2 className="mt-2 text-xl sm:text-2xl font-bold">
                  {experience.title}
                </h2>

                <h3 className="mt-1 text-sm sm:text-base text-zinc-300">
                  {experience.organization}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                  {experience.date}
                </p>

                <p className="mt-4 text-sm sm:text-base text-white">
                  {experience.description}
                </p>

                <button 
                  onClick={() => setSelectedCertificate(experience)}
                  className="border hover:bg-white hover:text-black hover:font-extrabold mt-5 rounded-4xl bg-black px-4 sm:px-5 py-2 text-xs sm:text-sm md:text-base text-white transition-colors"
                >
                  View Certificate
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      </div>
    </>
  );
}