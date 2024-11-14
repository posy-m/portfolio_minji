import React from 'react'
import styles from '../styles/Main.module.css'
import LengthProfile from '../components/LengthProfile'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'
import Stack from '../components/Stack'
import Portfolio from '../components/Portfolio'

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
        </div>
      </div>
    </>
  )
}

export default Main
