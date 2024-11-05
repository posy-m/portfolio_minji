import React from 'react'
import mimo1 from '../images/mimo1.png'
import mimo2 from '../images/mimo2.png'
import mimo3 from '../images/mimo3.png'
import styles from '../styles/AspirationBox.module.css'

const AspirationBox = () => {
  const Box = ({ src, alt, keyword, comment }) => {
    return <>
      <div className={styles.roundedBox}>
        <img src={src} alt={alt} />
        <span>{keyword}</span>
        <span>{comment}</span>
      </div>
    </>
  }



  return (
    <div className={styles.aspirationBox}>
      <Box src={mimo1} alt="미모티콘" keyword="강한 집념" comment={"개발자는 문제해결의 연속입니다.\n 어려운 문제를 해결할때 포기하지 않고\n 끈기 있게 나아가겠습니다."} />
      <Box src={mimo3} alt="미모티콘" keyword="도전 정신" comment={"낯선 기술에 대한 두려움 없이\n새로운 영역에 도전하며 역량을 끊임없이 \n성장하는 개발자로 나아가겠습니다."} />
      <Box src={mimo2} alt="미모티콘" keyword={"커뮤니케이션"} comment={"협업에서 중요한 소통을 통해 \n요구사항을 명확히 파악하고 \n프로젝트를 완수해 나아겠습니다. "} />
    </div>
  )
}

export default AspirationBox
