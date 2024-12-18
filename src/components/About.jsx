import React, { useState } from 'react'
import styles from '../styles/about.module.css'
import AspirationBox from './AspirationBox'
import { Element } from 'react-scroll';
import { ReactTyped } from 'react-typed';

const About = () => {


  return (
    <Element name='about'>
      <div className={styles.aboutWrap}>
        <div className={styles.aboutBox}>
          <div>ABOUT ME</div>
          <div>
            문제 해결과 가치 있는 서비스 개발을 통해 <br />
            사용자에게 의미있는 경험을 전달하는<br />
            개발자가 되고자 합니다.
          </div>
          {/* <ReactTyped strings={["안녕하세요", "최선을 다할게요"]}
            typeSpeed={50}
            backSpeed={25}
            loop={true} /> */}
        </div>
        <AspirationBox />
      </div>
    </Element>
  )
}

export default About
