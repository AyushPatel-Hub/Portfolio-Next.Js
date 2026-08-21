// import FadeIn from "@/components/FadeIn";
// import Image from "next/image";

// const EducationPage = () => {
//   const educationData = [
//   {
//     degree: 'B.Tech in Computer Science',
//     institution: 'University of Lucknow',
//     period: '2024 — 2028',
//     description:
//       'Focusing on Core AI Systems, Data Structures, Algorithms, and Software Engineering principles.',
//     status: 'In Progress',
//   },
//   {
//     degree: 'Senior Secondary & High School (Class X & XII)',
//     institution: 'Sunbeam School Suncity',
//     period: 'Completed',
//     description:
//       'Completed secondary education with a strong foundation in Physics, Chemistry, and Mathematics (PCM).',
//     status: 'Completed',
//   },
// ];
//   return (<>
//   <FadeIn><div>
//     <h1 className="text-center text-5xl font-extrabold mt-10">EDUCATION DETAILS</h1>
//   </div>
//   </FadeIn>
//   <div className="flex p-5 items-center flex-wrap justify-between h-screen mr-10 ml-10">
    
//     <FadeIn><div>{educationData.map((data)=>(
//       <div className="flex flex-col gap-10 border mb-10 w-150 h-72">
//         <div key={data.degree} className="items-center p-8 flex flex-col gap-2 text-center" >
//           <h1 className="text-3xl font-extrabold">{data.degree}</h1>
//         <p className="text-lg font-bold">{data.institution}</p>
//         <p>{data.period}</p>
//         <p>{data.description}</p>
//         </div>
//       </div>
//     ))}</div>
//     </FadeIn>




//     <div className="flex flex-col items-center justify-center font-mono text-white p-6 selection:bg-purple-500 selection:text-white">
      
//       <FadeIn><div className="border border-white/80 px-8 py-3 text-center mb-0 w-full max-w-xl bg-transparent">
//         <h2 className="text-base md:text-lg tracking-widest font-normal uppercase">
//           ACADEMIC JOURNEY
//         </h2>
//         <p className="text-xs text-zinc-300 tracking-wider mt-1">
//           My educational background and academic milestones
//         </p>
//       </div>
//       </FadeIn>

     
//       <div className="relative w-full max-w-xl">
       
//         <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-white/80" />

        
//         <div className="space-y-10 pt-10 pb-4">
        
//           <FadeIn>
//             <div className="relative flex items-start pl-6 md:pl-8 group">
//             <div className="absolute left-6 md:left-8 top-2.5 flex items-center -translate-x-1/2">
//               <div className="w-3.5 h-3.5 rounded-full bg-white border border-black shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
//               <div className="w-6 h-[1px] bg-white/80" />
//             </div>

          
          
//               <div className="ml-8 space-y-1">
//               <div className="text-sm tracking-widest text-zinc-300 font-semibold">
//                 2024 - 2028
//               </div>
//               <div className="text-base font-medium tracking-wide text-white">
//                 University Of Lucknow
//               </div>
//               <div className="text-sm text-zinc-300 tracking-wide">
//                 B.Tech in Computer Science (Artificial Intelligence)
//               </div>
//               <div className="text-xs text-white font-light tracking-wider pt-0.5">
//                 SGPA: 8.8 | Lucknow, India
//               </div>
             
//             </div>

          
//           </div>
//           </FadeIn>

        
//          <FadeIn>
//            <div className="relative flex items-start pl-6 md:pl-8 group">
         
//             <div className="absolute left-6 md:left-8 top-2.5 flex items-center -translate-x-1/2">
//               <div className="w-3.5 h-3.5 rounded-full bg-white border border-black shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
//               <div className="w-6 h-[1px] bg-white/80" />
//             </div>

            
//             <div className="ml-8 space-y-1">
//               <div className="text-sm tracking-widest text-zinc-300 font-semibold">
//                 2022
//               </div>
//               <div className="text-base font-medium tracking-wide text-white">
//                 Sunbeam School Suncity
//               </div>
//               <div className="text-sm text-zinc-300 tracking-wide">
//                 Class 12th (Senior Secondary)
//               </div>
//               <div className="text-xs text-white font-light tracking-wider pt-0.5">
//                 Percentage: 89% | Varanasi, India
//               </div>
              
//             </div>
            
//           </div>

//          </FadeIn>

          
//           <FadeIn>
//             <div className="relative flex items-start pl-6 md:pl-8 group">
            
//             <div className="absolute left-6 md:left-8 top-2.5 flex items-center -translate-x-1/2">
//               <div className="w-3.5 h-3.5 rounded-full bg-white border border-black shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
//               <div className="w-6 h-[1px] bg-white/80" />
//             </div>

           
//             <div className="ml-8 space-y-1">
//               <div className="text-sm tracking-widest text-zinc-300 font-semibold">
//                 2020
//               </div>
//               <div className="text-base font-medium tracking-wide text-white">
//                 Sunbeam School Suncity
//               </div>
//               <div className="text-sm text-zinc-300 tracking-wide">
//                 Class 10th (Secondary)
//               </div>
//               <div className="text-xs text-white font-light tracking-wider pt-0.5">
//                 Percentage: 89% | Varanasi, India
//               </div>
              
//             </div>
//           </div>
//           </FadeIn>
//         </div>
//       </div>
//     </div>
//   </div>
    
//     </>
//   )
// }

// export default EducationPage

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const EducationPage = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'University of Lucknow',
      period: '2024 — 2028',
      description:
        'Focusing on Core AI Systems, Data Structures, Algorithms, and Software Engineering principles.',
      status: 'In Progress',
    },
    {
      degree: 'Senior Secondary & High School (Class X & XII)',
      institution: 'Sunbeam School Suncity',
      period: 'Completed',
      description:
        'Completed secondary education with a strong foundation in Physics, Chemistry, and Mathematics (PCM).',
      status: 'Completed',
    },
  ];

  return (
    <>
      <FadeIn>
        <div>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 md:mt-10 px-4">
            EDUCATION DETAILS
          </h1>
        </div>
      </FadeIn>

      <div className="flex flex-col lg:flex-row p-4 sm:p-5 items-center justify-between min-h-screen mx-4 sm:mx-6 md:mx-10 gap-10 lg:gap-8">
        <FadeIn className="w-full lg:w-auto">
          <div className="w-full flex flex-col items-center">
            {educationData.map((data) => (
              <div
                key={data.degree}
                className="flex flex-col justify-center border mb-6 lg:mb-10 w-full max-w-[600px] lg:w-150 min-h-[18rem] h-auto p-4 sm:p-6 md:p-8"
              >
                <div className="items-center flex flex-col gap-2 text-center">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold">{data.degree}</h1>
                  <p className="text-base sm:text-lg font-bold">{data.institution}</p>
                  <p className="text-sm sm:text-base text-zinc-400">{data.period}</p>
                  <p className="text-sm sm:text-base">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="flex flex-col items-center justify-center font-mono text-white p-2 sm:p-4 md:p-6 selection:bg-purple-500 selection:text-white w-full max-w-xl">
          <FadeIn>
            <div className="border border-white/80 px-4 sm:px-8 py-3 text-center mb-0 w-full max-w-xl bg-transparent">
              <h2 className="text-sm sm:text-base md:text-lg tracking-widest font-normal uppercase">
                ACADEMIC JOURNEY
              </h2>
              <p className="text-[11px] sm:text-xs text-zinc-300 tracking-wider mt-1">
                My educational background and academic milestones
              </p>
            </div>
          </FadeIn>

          <div className="relative w-full max-w-xl">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-white/80" />

            <div className="space-y-8 sm:space-y-10 pt-8 sm:pt-10 pb-4">
              <FadeIn>
                <div className="relative flex items-start pl-6 md:pl-8 group">
                  <div className="absolute left-6 md:left-8 top-2.5 flex items-center -translate-x-1/2">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border border-black shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <div className="w-4 sm:w-6 h-[1px] bg-white/80" />
                  </div>

                  <div className="ml-6 sm:ml-8 space-y-1">
                    <div className="text-xs sm:text-sm tracking-widest text-zinc-300 font-semibold">
                      2024 - 2028
                    </div>
                    <div className="text-sm sm:text-base font-medium tracking-wide text-white">
                      University Of Lucknow
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 tracking-wide">
                      B.Tech in Computer Science (Artificial Intelligence)
                    </div>
                    <div className="text-[11px] sm:text-xs text-white font-light tracking-wider pt-0.5">
                      SGPA: 8.8 | Lucknow, India
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="relative flex items-start pl-6 md:pl-8 group">
                  <div className="absolute left-6 md:left-8 top-2.5 flex items-center -translate-x-1/2">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border border-black shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <div className="w-4 sm:w-6 h-[1px] bg-white/80" />
                  </div>

                  <div className="ml-6 sm:ml-8 space-y-1">
                    <div className="text-xs sm:text-sm tracking-widest text-zinc-300 font-semibold">
                      2022
                    </div>
                    <div className="text-sm sm:text-base font-medium tracking-wide text-white">
                      Sunbeam School Suncity
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 tracking-wide">
                      Class 12th (Senior Secondary)
                    </div>
                    <div className="text-[11px] sm:text-xs text-white font-light tracking-wider pt-0.5">
                      Percentage: 89% | Varanasi, India
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="relative flex items-start pl-6 md:pl-8 group">
                  <div className="absolute left-6 md:left-8 top-2.5 flex items-center -translate-x-1/2">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border border-black shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <div className="w-4 sm:w-6 h-[1px] bg-white/80" />
                  </div>

                  <div className="ml-6 sm:ml-8 space-y-1">
                    <div className="text-xs sm:text-sm tracking-widest text-zinc-300 font-semibold">
                      2020
                    </div>
                    <div className="text-sm sm:text-base font-medium tracking-wide text-white">
                      Sunbeam School Suncity
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 tracking-wide">
                      Class 10th (Secondary)
                    </div>
                    <div className="text-[11px] sm:text-xs text-white font-light tracking-wider pt-0.5">
                      Percentage: 89% | Varanasi, India
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationPage;