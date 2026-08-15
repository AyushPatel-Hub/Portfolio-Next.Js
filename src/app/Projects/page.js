
import { Card } from "@/components/Card"
import Card2 from "@/components/Card2"
import App from "@/components/Hero"
import {MajorProjects} from "@/data/majorprojects"
import {MinorProjects} from "@/data/minorProject"
import FadeIn from '@/components/FadeIn';

const Project = () => {

  return (
   <FadeIn>
    <div className="flex justify-center items-center w-screen h-[50%] flex-col mt-20 ">
      <div><h2 className="text-4xl font-extralight">MAJOR PROJECTS</h2></div>
      <div className="flex justify-between w-screen p-20">
        <div><Card title={MajorProjects[0].title} description={MajorProjects[0].description} tags={MajorProjects[0].tags} photourl={MajorProjects[0].imageUrl} link={`/Projects/${[MajorProjects[0].slug]}`}/></div>
        <div><Card  title={MajorProjects[1].title} description={MajorProjects[1].description} tags={MajorProjects[1].tags} photourl={MajorProjects[1].imageUrl} link={`/Projects/${[MajorProjects[1].slug]}`}/></div>
      </div>
       <div><h2 className="text-4xl font-extralight mt-10">MINOR PROJECTS</h2></div>
       <div className="mt-10 flex flex-wrap gap-10 justify-center bg-black/80">
       <FadeIn> <Card2 title={MinorProjects[0].title} description={MinorProjects[0].description} tags={MinorProjects[0].tags} photourl={MinorProjects[0].imageUrl} link={`/Projects/${[MinorProjects[0].slug]}`}/></FadeIn>
       <FadeIn> <Card2 title={MinorProjects[1].title} description={MinorProjects[1].description} tags={MinorProjects[1].tags} photourl={MinorProjects[1].imageUrl} link={`/Projects/${[MinorProjects[1].slug]}`}/></FadeIn>
       <FadeIn> <Card2 title={MinorProjects[2].title} description={MinorProjects[2].description} tags={MinorProjects[2].tags} photourl={MinorProjects[2].imageUrl} link={`/Projects/${[MinorProjects[2].slug]}`}/></FadeIn>
       <FadeIn> <Card2 title={MinorProjects[3].title} description={MinorProjects[3].description} tags={MinorProjects[3].tags} photourl={MinorProjects[3].imageUrl} link={`/Projects/${[MinorProjects[3].slug]}`}/></FadeIn>
        <FadeIn> <Card2 title={MinorProjects[4].title} description={MinorProjects[4].description} tags={MinorProjects[4].tags} photourl={MinorProjects[4].imageUrl} link={`/Projects/${[MinorProjects[4].slug]}`}/></FadeIn>
         <FadeIn> <Card2 title={MinorProjects[5].title} description={MinorProjects[5].description} tags={MinorProjects[5].tags} photourl={MinorProjects[5].imageUrl} link={`/Projects/${[MinorProjects[5].slug]}`}/></FadeIn>
      
        
       </div>
    </div>
   </FadeIn>
  )
}

export default Project