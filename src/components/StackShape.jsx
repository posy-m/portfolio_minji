import React from 'react'
import styles from '../styles/stackShape.module.css'

const StackShape = () => {
  return (<div className={styles.stackWrap}>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(192, 51, 29)' }}>HTML5</span>
      <span>웹 표준을 준수하며 브라우저에서 웹콘텐츠를 표현할 수 있습니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(45, 140, 202)' }}>CSS3</span>
      <span>웹페이지의 디자인과 레이아웃을 통해 웹페이지의 시각적 표현을 할 수 있습니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(241, 188, 23)' }}>Javascript</span>
      <span>ES6 문법을 사용합니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(44, 102, 187)' }}>Typescript</span>
      <span>타입 검사를 통해 오류를 줄여 코드의 가독성을 높일 수 있습니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(20, 102, 128)' }}>MYSQL</span>
      <span>데이터를 효율적으로 저장하고 관리할 수 있습니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(55,122, 53)' }}>Node.js</span>
      <span>의존성 주입 기능을 활용해 객체간의 의존 관계를 이해하며 사용할 수 있습니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(217, 17, 67)' }}>Nest.js</span>
      <span>의존성 주입 기능을 활용해 객체간의 의존 관계를 이해하며 사용할 수 있습니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(114, 217, 255)' }}>React</span>
      <span>함수형 컴포넌트에서 상태관리와 생명주기 메서드를 사용할 수 있습니다.</span>
    </div>
    <div className={styles.stackBox}>
      <span style={{ backgroundColor: 'rgb(9, 9, 9)' }}>Next.js</span>
      <span>파일 기반 라우팅을 통해 페이지를 관리할 수 있습니다.</span>
    </div>
  </div>
  )
}

export default StackShape
