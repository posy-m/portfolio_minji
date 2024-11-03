import React from 'react';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className={styles.headerBox}>
      <div>김민지의 포트폴리오</div>
      <div className={styles.indexBox}>
        <Link to='/about'>About</Link>
        <Link to='/stack'>Stack</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/education'>Education</Link>
      </div>
    </div>
  );
};

export default Header;
