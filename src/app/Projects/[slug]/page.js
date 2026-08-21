// import App from '@/components/Hero'
// import React from 'react'
// import FadeIn from '@/components/FadeIn';
// import {MinorProjects} from "@/data/minorProject"
// import {MajorProjects} from "@/data/majorprojects"
// import Image from 'next/image'
// import { Button } from '@mui/material'
// import Buttons from '@/components/Buttons'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';



// const  page = async ({params}) => {
//    const { slug } = await params
//   const post = MinorProjects.find((p) => p.slug === slug)
//   // console.log(post);




//   return (
//     <>
//     <div className='p-4 sticky top-0 left-0 right-0 '><Buttons  item={<ArrowBackIcon/>} link={"/Projects"}/></div>
//     <div className='mt-20 flex bg-black/90 justify-center'>
    
      
    
//     <div>
//        <div className='flex items-center  justify-center text-6xl font-extrabold'>{post.title}</div>
//     <div className='w-300 p-5  h-full'>
//       <p className='text-lg '>{post.description}</p>
//       <div className=' flex mt-10 gap-7 flex-wrap'>
//        {post.liveUrl ?  <Buttons item={"Live Demo"} link={post.liveUrl}/> :  <Buttons item={"Not Deployed"} link={`/Projects/${[post.slug]}`}/>}
//        <Buttons item={"GitHub"} link={post.githubUrl}/>
//       </div>
//       <div>
//         <div>
//            <ul className="mt-10 flex justify-center gap-5 font-bold">[{post.tags.map((tag)=>( <li  key={tag}>{tag}</li> ))}] </ul>
//         </div>
        
//       </div>
//      <div className='mt-20'>
//        <h3 className='text-3xl'>CHALLENGES</h3>
//        <ol  className="list-decimal list-inside space-y-2 text-zinc-300 mt-10 flex flex-col justify-center gap-5 font-bold"> {post.challenges.map((tag)=>( <li  key={tag}>{tag}</li> ))} </ol>
//      </div>
     
//      <div className='mt-10 flex flex-col gap-7 '>
//       <h3 className='text-3xl font-extralight'>SUMMARY</h3>
//       <p className='text-xl'>{post.summary}</p>
//      </div>
//     </div>
//     </div>
    
//     </div>
//     <FadeIn> <div data-lenis-prevent="true" className=' [&::-webkit-scrollbar]:h-1.5
//     [&::-webkit-scrollbar-track]:bg-[#0a0a0a]
//     [&::-webkit-scrollbar-thumb]:bg-[#292929]
//     [&::-webkit-scrollbar-thumb]:rounded-full
//     [&::-webkit-scrollbar-thumb:hover]:bg-[#444]  bg-black/90 flex  gap-7 p-8 justify-flex-start h- overflow-x-auto'>
      
//        <Image className='rounded-4xl w-auto h-auto' src={post.imageUrl1} alt='image' width={900} height={500}/>
//        <Image className='rounded-4xl w-auto h-auto' src={post.imageUrl2} alt='image' width={900} height={500}/>
//        <Image className='rounded-4xl w-auto h-auto' src={post.imageUrl3} alt='image' width={900} height={500}/>
//        <Image className='rounded-4xl w-auto h-auto' src={post.imageUrl4} alt='image' width={900} height={500}/>
       
       
//      </div></FadeIn>
    

//     </>
//   )
// }

// export default page

import App from '@/components/Hero'
import React from 'react'
import FadeIn from '@/components/FadeIn';
import { MinorProjects } from "@/data/minorProject"
import { MajorProjects } from "@/data/majorprojects"
import Image from 'next/image'
import { Button } from '@mui/material'
import Buttons from '@/components/Buttons'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const page = async ({ params }) => {
  const { slug } = await params
  const post = MinorProjects.find((p) => p.slug === slug)

  return (
    <>
      <div className='p-4 sticky top-0 left-0 right-0 z-50'>
        <Buttons item={<ArrowBackIcon />} link={"/Projects"} />
      </div>

      <div className='mt-10 md:mt-20 flex bg-black/90 justify-center px-4 md:px-0'>
        <div className='w-full flex flex-col items-center'>
          <div className='flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-extrabold text-center px-2'>
            {post.title}
          </div>

          <div className='w-full max-w-full md:w-300 p-3 sm:p-5 h-full'>
            <p className='text-base sm:text-lg'>{post.description}</p>
            
            <div className='flex mt-6 md:mt-10 gap-4 sm:gap-7 flex-wrap'>
              {post.liveUrl ? (
                <Buttons item={"Live Demo"} link={post.liveUrl} />
              ) : (
                <Buttons item={"Not Deployed"} link={`/Projects/${[post.slug]}`} />
              )}
              <Buttons item={"GitHub"} link={post.githubUrl} />
            </div>

            <div>
              <ul className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 sm:gap-5 font-bold text-sm sm:text-base">
                [{post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}]
              </ul>
            </div>

            <div className='mt-12 md:mt-20'>
              <h3 className='text-2xl sm:text-3xl'>CHALLENGES</h3>
              <ol className="list-decimal list-inside space-y-2 text-zinc-300 mt-6 md:mt-10 flex flex-col justify-center gap-4 sm:gap-5 font-bold text-sm sm:text-base">
                {post.challenges.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ol>
            </div>

            <div className='mt-8 md:mt-10 flex flex-col gap-5 md:gap-7'>
              <h3 className='text-2xl sm:text-3xl font-extralight'>SUMMARY</h3>
              <p className='text-base sm:text-xl'>{post.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <FadeIn>
        <div
          data-lenis-prevent="true"
          className='w-full overflow-x-scroll flex gap-7 p-8 bg-black/90 justify-start [scrollbar-width:auto] [scrollbar-color:#292929_#0a0a0a] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-[#0a0a0a] [&::-webkit-scrollbar-thumb]:bg-[#292929] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#444]'
        >
          <Image className='rounded-2xl md:rounded-4xl shrink-0 w-[75vw] sm:w-[60vw] md:w-[750px] lg:w-[900px] xl:w-[1050px] 2xl:w-[1200px] h-auto object-cover' src={post.imageUrl1} alt='image' width={900} height={500} />
          <Image className='rounded-2xl md:rounded-4xl shrink-0 w-[75vw] sm:w-[60vw] md:w-[750px] lg:w-[900px] xl:w-[1050px] 2xl:w-[1200px] h-auto object-cover' src={post.imageUrl2} alt='image' width={900} height={500} />
          <Image className='rounded-2xl md:rounded-4xl shrink-0 w-[75vw] sm:w-[60vw] md:w-[750px] lg:w-[900px] xl:w-[1050px] 2xl:w-[1200px] h-auto object-cover' src={post.imageUrl3} alt='image' width={900} height={500} />
          <Image className='rounded-2xl md:rounded-4xl shrink-0 w-[75vw] sm:w-[60vw] md:w-[750px] lg:w-[900px] xl:w-[1050px] 2xl:w-[1200px] h-auto object-cover' src={post.imageUrl4} alt='image' width={900} height={500} />
        </div>
      </FadeIn>
    </>
  )
}

export default page