import React from 'react'
import Image from 'next/image'

const Project : React.FC<{id:number,name:string,image:string,desc:string,ghLink:string,live:string}> = (props) => {
   const {id,name,image,desc,ghLink,live} = props
  return (
    <li className=" flex flex-col items-center  gap-4  bg-slate-800 rounded-md w-3/4 min-h-96  pt-4   transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 ">
        <h3 className="text-3xl">{name}</h3>
        
<Image
     className=" w-full h-32  "
      src={image}
      alt="Picture of the author"
      width={200}
      height={50}
    />
    <p className="my-4 p-3 text-center text-lg">{desc}</p>
    <div className="flex justify-center gap-8 mb-3">
        <a className="bg-black w-24 text-center rounded-md" href={ghLink}> Github </a>
        <a className="bg-red-950 w-24 text-center rounded-md" href={live}> live </a>
    </div>
    </li>
  )
}


export default Project