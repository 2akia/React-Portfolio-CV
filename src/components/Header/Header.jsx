import React, { useState } from "react";
import styles from "./Header.module.css";
import { getImageUrl } from "../../utils";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className={styles.navbar} >
      <Link to="/" className={styles.title}>Portfolio</Link>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu-button" />
        <ul className={styles.menuItems}>
          <li>
            <Link to="/experience">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;