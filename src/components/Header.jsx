import React from 'react';
import styles from '../styles/header.module.css';
// import { Link } from 'react-router-dom';
import { Link, Element } from 'react-scroll';



const Header = () => {
  return (
    <div className={styles.headerBox}>
      <div>김민지의 포트폴리오</div>
      <div className={styles.indexBox}>
        <Link to='about' smooth={true} duration={500}>About</Link>
        <Link to='stack' smooth={true} duration={500}>Stack</Link>
        <Link to='portfolio' smooth={true} duration={500}>Portfolio</Link>
        <Link to='education' smooth={true} duration={500}>Education</Link>
      </div>
    </div>
  );
};

export default Header;
