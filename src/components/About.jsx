import React from 'react'
import styles from '../styles/about.module.css'
import AspirationBox from './AspirationBox'

const About = () => {
  return (<>
    <div className={styles.aboutBox}>
      문제 해결과 가치 있는 서비스 개발을 통해 <br />
      사용자에게 의미있는 경험을 전달하는<br />
      개발자가 되고자 합니다.
    </div>
    <AspirationBox />
  </>
  )
}

export default About
