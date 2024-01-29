import React, {useState} from "react";
import "./Project.css";



const Project = ({ title, deployLink, repoLink, image }) => (
  <div className="card">
    <img className="card-img-top" src={image} alt={`Screenshot of ${title}`} />
    <div className="card-body">
      <p className="card-text">{title}</p>
      {/* {linkshere} */}
      </div>
  </div>
);


export default Project;

