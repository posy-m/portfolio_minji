import React from 'react'
import styles from '../styles/LengthProfile.module.css'
import minji from '../images/picture.jpg'
import github from '../images/github.png'
import blog from '../images/blogger.png'



const LengthProfile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileBox}>
        <img src={minji} alt="증명사진" />
        <h3>김민지</h3>

        <div className={styles.infoBox}>
          <div className={styles.info}>
            <span>introduction</span>
            <span>Frontend Developer</span>
          </div>
          {/* <div className={styles.info}>
            <span>phoneNumber</span>
            <span>010.3928.0113</span>
          </div> */}
          <div className={styles.info}>
            <span>Email</span>
            <span>minji.posy@gmail.com</span>
          </div>
          <div className={styles.info}>
            <span>Address</span>
            <div className={styles.imgSize}>
              <a href="https://gangsangdogirl.tistory.com/">
                <img src={blog} alt="블로그 이미지" />
              </a>
              <a href="https://github.com/posy-m">
                <img src={github} alt="깃허브 이미지" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LengthProfile
