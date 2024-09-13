import React from "react";
import Project from "../Project/Project";
import projectsData from "@/constants/projects";

const Projects = () => {
  return (
    <div className="flex flex-col items-center min-h-screen " id="Projects">
      <h2 className="text-4xl underline mb-5">Projects</h2>

      <ul className="list-none flex flex-col items-center gap-4 lg:flex-row lg:mx-10 lg:mb-2 ">
        {projectsData.map((project) => {
          return (
            <Project
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
              desc={project.desc}
              ghLink={project.ghLink}
              live={project.live}
            ></Project>
          );
        })}
      </ul>
      <a
        href="https://github.com/Mo-Adeeb-Alkahat"
        target="_blank"
        className="bg-red-950  shadow-lg shadow-red-800/50 border-double border-4 border-red-500  w-36 h-20  text-center rounded-md mt-1 mb-8 flex items-center justify-center "
      >
        {" "}
        more projects{" "}
      </a>
    </div>
  );
};

export default Projects;
