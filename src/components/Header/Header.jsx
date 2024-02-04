import React, { useState } from "react";
import styles from "./Header.module.css";
// import { getImageUrl } from "../../utils";
import { Link } from 'react-router-dom';
import burgerBtn from "../../assets/screenshots/icons8-menu-50.png";

export const Navbar = () => {
  return (
    <nav className={styles.navbar} >
      <Link to="/React-Portfolio-CV/" className={styles.title}>Jakia Sultana</Link>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={burgerBtn} alt="menu-button" />
        <ul className={styles.menuItems}>
          <li>
            <Link to="/React-Portfolio-CV/">About</Link>
          </li>
          <li>
            <Link to="/React-Portfolio-CV/experience">Experience</Link>
          </li>
          <li>
            <Link to="/React-Portfolio-CV/projects">Projects</Link>
          </li>
          <li>
            <Link to="/React-Portfolio-CV/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
