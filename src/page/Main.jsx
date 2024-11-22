import React from 'react'
import styles from '../styles/Main.module.css'
import LengthProfile from '../components/LengthProfile'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'
import Stack from '../components/Stack'
import PortfolioFrist from '../components/portfolio/PortfolioFrist'
import Portfolio from '../components/portfolio/Portfolio'
import Education from '../components/\bEducation'
import End from '../components/End'


const Main = () => {

  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.profileBox}> */}
        <LengthProfile />
        {/* </div> */}
        <div className={styles.rightBox}>
          <About />
          <Stack />
          <Portfolio />
          <Education />
          <End />
          {/* <PortfolioFrist /> */}
        </div>
      </div>
    </>
  )
}

export default Main
