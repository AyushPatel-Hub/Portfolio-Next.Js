
// import { Card } from "@/components/Card"
// import Card2 from "@/components/Card2"
// import App from "@/components/Hero"
// import {MajorProjects} from "@/data/majorprojects"
// import {MinorProjects} from "@/data/minorProject"
// import FadeIn from '@/components/FadeIn';

// const Project = () => {

//   return (
//    <FadeIn>
//     <div className="flex justify-center items-center w-screen h-[50%] flex-col mt-20 ">
//       <div><h2 className="text-4xl font-extralight">MAJOR PROJECTS</h2></div>
//       <div className="flex justify-between w-screen p-20">
//         {
//           MajorProjects.map((data)=>(
//            <div><Card title={data.title} description={data.description} tags={data.tags} photourl={data.imageUrl} link={`/Projects/${[data.slug]}`}/></div>
//           ))
//         }
      
//       </div>
//        <div><h2 className="text-4xl font-extralight mt-10">MINOR PROJECTS</h2></div>
//        <div className="mt-10 flex flex-wrap gap-10 justify-center bg-black/80">

//           {MinorProjects.slice(2).map((data)=>(
//              <FadeIn> <Card2 title={data.title} description={data.description} tags={data.tags} photourl={data.imageUrl} link={`/Projects/${[data.slug]}`}/></FadeIn>
//           ))}


       
      
        
//        </div>
//     </div>
//    </FadeIn>
//   )
// }

// export default Project

import { Card } from "@/components/Card"
import Card2 from "@/components/Card2"
import App from "@/components/Hero"
import { MajorProjects } from "@/data/majorprojects"
import { MinorProjects } from "@/data/minorProject"
import FadeIn from '@/components/FadeIn';

const Project = () => {
  return (
    <FadeIn>
      <div className="flex justify-center items-center w-full max-w-full min-h-[50%] flex-col mt-10 md:mt-20">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-center px-4">
            MAJOR PROJECTS
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full max-w-7xl p-4 sm:p-8 lg:p-20 gap-8 lg:gap-6">
          {MajorProjects.map((data) => (
            <div key={data.slug} className="w-full flex justify-center">
              <Card
                title={data.title}
                description={data.description}
                tags={data.tags}
                photourl={data.imageUrl}
                link={`/Projects/${[data.slug]}`}
              />
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight mt-8 lg:mt-10 text-center px-4">
            MINOR PROJECTS
          </h2>
        </div>

        <div className="mt-6 lg:mt-10 flex flex-wrap gap-6 sm:gap-8 lg:gap-10 justify-center bg-black/80 w-full px-4 sm:px-6 lg:px-12 py-6">
          {MinorProjects.slice(2).map((data) => (
            <FadeIn key={data.slug} className="w-full sm:w-auto flex justify-center">
              <Card2
                title={data.title}
                description={data.description}
                tags={data.tags}
                photourl={data.imageUrl}
                link={`/Projects/${[data.slug]}`}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Project;