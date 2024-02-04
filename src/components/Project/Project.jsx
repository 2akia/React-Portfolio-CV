import React, {useState} from "react";
import "./Project.css";

import workDayImage from "../../assets/screenshots/Work-Day-Scheduler.png";
import bootstrapPortfolio from "../../assets/screenshots/Projects 3 screenshot.png";
import passwordGenerator from "../../assets/screenshots/Password-Generator.png";
import teamProfileGeneratorOOP from "../../assets/screenshots/Team profile generator oop.png";
import capitalCityQuiz from "../../assets/screenshots/Capital-City-Quiz.png";
import consoleFinances from "../../assets/screenshots/project 4 Screenshot.png";

const img_arr = [
  workDayImage,
  bootstrapPortfolio,
  passwordGenerator,
]

const Project = ({project}) => {
  return (
    <>
    <div className="col-md-6">
        <div className="card">
          <img className="card-img-top" src={img_arr[project.img_index]} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">We were instructed to create a simple calendar application that allows a user to save events for each hour of the day.</p>
            <a href={project.deployed} className="btn btn-secondary">Go to Project</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

