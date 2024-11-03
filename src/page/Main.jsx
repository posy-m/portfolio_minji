import React from 'react'
import styles from '../styles/Main.module.css'
import LengthProfile from '../components/LengthProfile'

const Main = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileBox}>
          <LengthProfile />
        </div>
        <div className={styles.redBox}>
          test
        </div>
      </div>
    </>
  )
}

export default Main
