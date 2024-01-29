import React, {useState} from "react";
import Project from "../Project/Project";
import projectData from "./projectData.json";


const Projects = () => {
   (
<div>
    {projectData.slice(0, 6).map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </div>

  )

};

export default Projects;