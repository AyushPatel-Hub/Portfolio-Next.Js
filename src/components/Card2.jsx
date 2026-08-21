import Image from "next/image"
import Link from "next/link"


const Card2 = ({title,description,tags,photourl,link}) => {
  return (
    <div className="hover:border rounded-3xl w-150 h-100 mx-auto">
      <Link href={link}><div className="flex flex-col items-center">
       <Image className="w-auto h-auto" width={400} height={10} alt="logos " src={photourl}/>
      <div>
        <ul className="flex gap-5 font-bold"> {tags.map((tag)=>( <li  key={tag}>{tag}</li> ))} </ul>
      </div>
      
      </div></Link>
    </div>
  )
}

export default Card2