 "use client"
import React, { useState } from 'react'
import HeroText from './HeroText'
import Image from 'next/image'


const imageLink:string = "https://th.bing.com/th/id/OIP.FjnxkrwL0F20vbqs6HpoWgAAAA?rs=1&pid=ImgDetMain"
const Hero :React.FC = () => {
  

  return (
    
    <div className=" flex flex-col items-center gap-10 mt-28 sm:mt-10 text-center sm:flex-row sm:justify-around min-h-screen" id="#Home">
    <HeroText></HeroText>
    <Image
     className=" inline  "
      src={imageLink}
      alt="my picture"
      width={350}
      height={600}
    />
    
    <div className="">
    <button className=" animate-bounce bg-sky-950  shadow-lg shadow-sky-800/50 border-double border-4 border-sky-500  w-36 h-20  text-center rounded-md mt-1 mb-8 flex items-center justify-center   "> Download cv</button>
    <div className="flex flex-row gap-8">
    <a href="#"><Image className=" animate-pulse translate-y-[1.5px]" alt='github' src="/github.svg" width={45} height={45}></Image></a>
    <a href="#"><Image  className="animate-pulse" alt='LinkedIn'  src="/linkedin.svg" width={50}  height={50}></Image></a>
      </div>
    </div>
    </div>
        
    
  )
}



export default Hero