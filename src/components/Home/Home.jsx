import React, {useState} from "react";
import "./Home.css";


export const Home = () => {
  return (
  <div className="home-section">
    <h1>Welcome to my Portfolio..</h1>
    <img className="avatar" src="./assets/screenshots/avatar.png" alt="avatar" />
    <p className="home-css"> Hi, My Name is Jakia.</p>
    <p className="home-css">I am an enthusiastic front-end web developer with a certificate from the Edx Coding Boot Camp,<br></br> showcasing a dedication to honing coding skills. Although I have yet to secure formal employment,<br></br> my commitment to continuous learning and passion for web development positions me as a motivated and <br></br>proactive individual ready to embark on a professional coding career.</p>
  </div>
  );

};

export default Home;



