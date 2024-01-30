import React, {useState} from "react";
import "./Project.css";



const Project = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./assets/screenshots/Work-Day-Scheduler.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Work-Day-Scheduler</h5>
              <p className="card-text">We were instructed to create a simple calendar application that allows a user to save events for each hour of the day.</p>
              <a href="https://2akia.github.io/Work-Day-Scheduler/" className="btn btn-secondary">Go to Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./assets/screenshots/Projects 3 screenshot.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Bootstrap-Portfolio</h5>
              <p className="card-text">We were instructed to create a website and this will be a portfolio website using Bootstrap.</p>
              <a href="https://2akia.github.io/Bootstrap-Portfolio/" className="btn btn-secondary">Go to Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./assets/screenshots/Password-Generator.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Password-Generator</h5>
              <p className="card-text">This challenge required us to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code.</p>
              <a href="https://2akia.github.io/Password-Generator/" className="btn btn-secondary">Go to Project</a>
            </div>
          </div>
        </div>

       
        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./assets/screenshots/Team profile generator oop.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Team-Profile-Generator-OOP</h5>
              <p className="card-text">The application is a node.js command-line which is intended to gather information about members of a software engineering team through user input and that would generate an HTML webpage that presents summaries for each team member.</p>
              <a href="https://github.com/2akia/Team-Profile-Generator-OOP" className="btn btn-secondary">Go to Project</a>
            </div>
          </div>
        </div>

       

        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./assets/screenshots/Capital-City-Quiz.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Capital-City-Quiz</h5>
              <p className="card-text">We were tasked with creating a timed quiz on JavaScript fundamentals that stores high scores.</p>
              <a href="https://2akia.github.io/Capital-City-Quiz-/" className="btn btn-secondary">Go to Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./assets/screenshots/project 4 Screenshot.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Console-Finances</h5>
              <p className="card-text">This project is about when we were tasked with creating code for analyzing the financial records of a company.</p>
              <a href="https://2akia.github.io/Console-Finances/" className="btn btn-secondary">Go to Project</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;

