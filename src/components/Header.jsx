import React from 'react';
import styles from '../styles/header.module.css';
// import { Link } from 'react-router-dom';
import { Link, Element } from 'react-scroll';



const Header = () => {
  return (
    <div className={styles.headerBox}>
      <div></div>
      <div className={styles.indexBox}>
        <Link to='about' smooth={true} duration={500} containerId='rightBox'>About</Link>
        <Link to='stack' smooth={true} duration={500} containerId='rightBox'>Stack</Link>
        <Link to='portfolio' smooth={true} duration={500} containerId='rightBox'>Portfolio</Link>
        <Link to='education' smooth={true} duration={500} containerId='rightBox'>Education</Link>
      </div>
    </div>
  );
};

export default Header;
