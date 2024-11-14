import React from 'react'
import styles from '../styles/portfolio.module.css'
import { Button, Element } from 'react-scroll';
import mountin from '../images/app.png'
import donutshop from '../images/donutshop.png'
import wine from '../images/wine.png'

const Portfolio = () => {


  const PortfolioSquareBox = ({ src, alt, type }) => {
    const imageStyle = type === 'web' ? styles.portfolioInWebWrap : styles.portfolioInWrap;
    return (
      // <div className={styles.portfolioInWrap}>
      <img src={src} alt={alt} className={imageStyle} />
      // </div>
    )
  }
  const TextBox = ({ title, content, textOrigin }) => {
    const textStyle = textOrigin === 'left' ? styles.portfolioTextBox : styles.portfolioRightTextBox
    return (
      <div className={`${textStyle} ${styles.TextBoxOrigin}`}>
        <div>{title}</div>
        <div>{content}</div>
        <div className={styles.viewMoreBtn}>
          <Button>View More</Button>
        </div>
      </div>
    )
  }

  return (
    <Element name="portfolio">
      <div className={styles.PortfolioBox}>
        <div>PORTFOLIO</div>
        <div className={`${styles.portfolioBord} ${styles.portfolioBordLeft}`}>
          <PortfolioSquareBox src={mountin} alt="등산어플" type="app" className={styles.firstImage} />
          <TextBox textOrigin='left' title="등산앱테크" content={"산을 오르며 고도에 따라 포인트를 적립하고, \n  적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플 입니다."} className={styles.firstText} />
        </div>
        <div className={`${styles.portfolioBord} ${styles.portfolioBordSecond}`}>
          <TextBox textOrigin='right' title="주류 커뮤니티 및 추천 사이트" content={"주류를 좋아하는 고객이 게시판을 통해 자유롭게 소통할 수 있는 \n 커뮤니케이션 사이트 입니다"} className={styles.donutshopText} />
          <PortfolioSquareBox src={wine} alt="와인홈페이지 사이트" type="web" />
        </div>
        <div className={`${styles.portfolioBord} ${styles.portfolioBordLeft}`}>
          <PortfolioSquareBox src={donutshop} alt="도넛 커뮤니티" type="web" />
          <TextBox textOrigin='left' title="도넛 커뮤니티" content={"데이터베이스 없이 데이터 저장소 기능 대신 사용할 수 있는 \n로컬 스토리지와 타입스크립트를 사용하여 홈페이지에 유입된 고객이 \n게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트"} className={styles.donutshopText} />
        </div>
      </div>
    </Element>
  )
}

export default Portfolio
