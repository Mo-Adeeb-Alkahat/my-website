"use client"

import React from 'react'
import { Icon } from "latest-react-3d-icons";
import { react, python,postgresql ,git,tensorflow,nextdotjs,typescript,mongodb,tailwindcss,sass,vite,nodedotjs , flask } from "latest-react-3d-icons";

const svgscale :number = 8;
const Technologies = () => {
  return (
    <div className="flex flex-col items-center min-h-screen" id="Technologies">
      
         <h2 className="text-4xl underline mb-5">Technologies</h2>
      <div role="container" className="flex flex-col items-center "></div>

      <div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 ">
         <Icon spin={true} file={typescript} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} className="fill-red-400"/>
         <Icon spin={true} file={react} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={nextdotjs} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={nodedotjs} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={tailwindcss} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={sass} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={python} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={flask} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={tensorflow} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={mongodb} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={postgresql} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={git} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
         <Icon spin={true} file={vite} color={"#ffffff"} scale={svgscale} style={{ height: "100px", width: "100px" }} />
                 
        </div>
      </div>
    </div>
  )
}

export default Technologies