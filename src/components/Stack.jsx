import React from 'react'
import styles from '../styles/stack.module.css'
import { Element } from 'react-scroll';
import StackShape from './StackShape';
import html from '../images/html.png'


const Stack = () => {

  const StackWrap = () => {
    return (
      <div className={styles.stackContent}>
        <div className={styles.stackItem}>
          <span>Frontend</span>
          <div className={styles.stackNo}>
            <img src={html} alt="" />
            <ul>
              <li>웹 표준을 준수하며 브라우저에서 웹콘텐츠를 표현할 수 있습니다.</li>
            </ul>
          </div>
          <div className={styles.stackNo}>
            <img src={html} alt="" />
            <ul>
              <li>웹 표준을 준수하며 브라우저에서 웹콘텐츠를 표현할 수 있습니다.</li>
            </ul>
          </div>
          {/* <span className={styles.line}></span> */}
        </div>
        <div className={styles.stackItem}>
          <span>Backend</span>
          {/* <span className={styles.line}></span> */}
        </div>
      </div>
    );
  };

  return (
    <Element name='stack'>
      <div className={styles.stackBox}>
        <div>STACK</div>
        <div className={styles.stackLayout}>
          <StackWrap />
        </div>
        {/* <div className={styles.stackLayout}> */}
        {/* <StackShape /> */}
        {/* </div> */}

      </div >
    </Element>
  )
}

export default Stack
