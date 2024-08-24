import React from 'react'

const About = () => {
    const imageLink:string = "https://th.bing.com/th/id/OIP.FjnxkrwL0F20vbqs6HpoWgAAAA?rs=1&pid=ImgDetMain"

  return (
    <div id="About" className= " flex flex-col items-center min-h-screen gap-10 mb-9 sm:mt-24 ">
        <p className="px-10 font-bold break-keep text-wrap text-xlg] sm:px-20 sm:text-2xl">
        I am Adeeb Alkahat, a software engineering graduate currently pursuing my master's degree. Passionate about learning new technologies, I specialize in web development and AI. Proficient in React, React Native, and Python, I continuously expand my skill set. With a background in freelance and full-time work, I actively engage in volunteering to assist others in the tech community. leadership and soft skills have been honed through continuous learning and working , I thrive on challenges and strive for continuous growth.
        </p>   
        <img className=" rounded-3xl inline w-3/4 max-h-72 " src={imageLink} alt="my picture" />

    </div>
  )
}

export default About