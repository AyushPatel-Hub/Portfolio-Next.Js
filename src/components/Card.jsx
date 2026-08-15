import { Button } from "@mui/material"
import Image from "next/image"
import './Card.css'
import Link from "next/link"
import Buttons from "./Buttons"


export const Card = ({title,description,tags,photourl,link}) => {
  return (
    <div className=" h-130 w-180 hover:border p-6 flex flex-col items-center gap-4 justify-center hover:bg-white/10 rounded-3xl">
        <div className="flex flex-col items-center p-4 gap-5">
        
          <Image src={photourl} height={200} width={400} alt="images" className="w-auto h-auto"/>
          

        <h1 className="text-3xl">{title}</h1>
        <p>{description}</p>
       <Buttons item={"Explore Project →"} link={link}/>
        </div>
    </div>
  )
}
