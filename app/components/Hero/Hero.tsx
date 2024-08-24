 "use client"
import React, { useState } from 'react'
import HeroText from './HeroText'

const imageLink:string = "https://th.bing.com/th/id/OIP.FjnxkrwL0F20vbqs6HpoWgAAAA?rs=1&pid=ImgDetMain"
const Hero :React.FC = () => {
  

  return (
    
    <div className=" flex flex-col items-center gap-10 mt-28 sm:mt-10 text-center sm:flex-row sm:justify-around min-h-screen" id="#Home">
    <HeroText></HeroText>
    <img className="inline " src={imageLink} alt="my picture" width="350px" height="600px" />
    <button className="mt-5 h-10 w-36 rounded-md bg-red-950 bg-contain hover:bg-red-900  animate-bounce "> Download cv</button>
    </div>
        
    
  )
}



export default Hero