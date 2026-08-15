import Link from "next/link"


const Card2 = ({title,description,tags,photourl,link}) => {
  return (
    <div className="hover:border rounded-3xl w-150 h-100 mx-auto">
      <Link href={link}><div className="flex flex-col items-center">
       <img className="w-100 h-60" src={photourl}></img>
      <div>
        <ul className="flex gap-5 font-bold"> {tags.map((tag)=>( <li  key={tag}>{tag}</li> ))} </ul>
      </div>
      
      </div></Link>
    </div>
  )
}

export default Card2