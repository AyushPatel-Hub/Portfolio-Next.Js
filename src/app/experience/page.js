// import Experience from '@/components/Experience'
// import { Experiences } from '@/data/experiences'
// import FadeIn from '@/components/FadeIn';

// const page = () => {
  
//   return (
//    <FadeIn>
//      <Experience experiences={Experiences}/>
//    </FadeIn>
//   )
// }

// export default page


import Experience from '@/components/Experience'
import { Experiences } from '@/data/experiences'
import FadeIn from '@/components/FadeIn';

const page = () => {
  return (
    <FadeIn className="w-full max-w-full overflow-x-hidden">
      <main className="w-full min-h-screen">
        <Experience experiences={Experiences} />
      </main>
    </FadeIn>
  )
}

export default page