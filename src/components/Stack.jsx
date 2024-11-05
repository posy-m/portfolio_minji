import React from 'react'
import styles from '../styles/stack.module.css'

const Stack = () => {


  return (
    <div className={styles.stackBox}>
      <div>STACK</div>
      <div className={styles.stackWrap}>
        <div className={styles.stackStlye}>
          <span style={{ backgroundColor: 'rgb(192, 51, 29)' }}>HTML5</span>
          <span style={{ backgroundColor: 'rgb(45, 140, 202)' }}>CSS3</span>
          <span style={{ backgroundColor: 'rgb(241, 188, 23)' }}>Javascript</span>
          <span style={{ backgroundColor: 'rgb(44, 102, 187)' }}>Typescript</span>
          <span style={{ backgroundColor: 'rgb(20, 102, 128)' }}>MYSQL</span>
        </div>
        <div className={styles.stackStlye}>
          <span style={{ backgroundColor: 'rgb(55,122, 53)' }}>Node.js</span>
          <span style={{ backgroundColor: 'rgb(217, 17, 67)' }}>Nest.js</span>
          <span style={{ backgroundColor: 'rgb(114, 217, 255)' }}>React</span>
          <span style={{ backgroundColor: 'rgb(9, 9, 9)' }}>Next.js</span>
        </div>
      </div>
    </div >
  )
}

export default Stack
