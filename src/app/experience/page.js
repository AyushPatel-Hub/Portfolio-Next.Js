import Experience from '@/components/Experience'
import { Experiences } from '@/data/experiences'
import FadeIn from '@/components/FadeIn';

const page = () => {
  
  return (
   <FadeIn>
     <Experience experiences={Experiences}/>
   </FadeIn>
  )
}

export default page