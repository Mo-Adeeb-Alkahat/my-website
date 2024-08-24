import React from 'react'
import Project from '../Project/Project';



const imageLink:string = "https://th.bing.com/th/id/OIP.FjnxkrwL0F20vbqs6HpoWgAAAA?rs=1&pid=ImgDetMain"
const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, expedita odio quos vero beatae itaque labore maiores atque, minus, deserunt aspernatur ullam aliquam. Quaerat optio consectetur officiis, minus sint maiores!"
const projectsData: {id:number,name:string,image:string,desc:string,ghLink:string,live:string}[] = [{id:1,name:'wasef',image:imageLink,desc:lorem,ghLink:'sad',live:'sdsd' },{id:2,name:'wasef2',image:imageLink,desc:lorem,ghLink:'sad',live:'sdsd' },{id:3,name:'wasef3',image:imageLink,desc:lorem,ghLink:'sad',live:'sdsd' }]; 
const Projects = () => {
  return (
    <div className="flex flex-col items-center min-h-screen " id="Projects">
    <ul className="list-none flex flex-col items-center gap-4 lg:flex-row lg:mx-10 lg:mb-14 " >{projectsData.map((project) => {
              return (
                <Project key={project.id} id= {project.id} name= {project.name} image= {project.image} desc= {project.desc} ghLink= {project.ghLink} live = {project.live} ></Project>
              )
    })}</ul>
    <a href="#" className="bg-red-950  shadow-lg shadow-red-800/50 border-double border-4 border-red-500  w-36 h-20  text-center rounded-md mt-2 mb-5 flex items-center justify-center " > more projects </a>
    </div>
  )
}


export default Projects