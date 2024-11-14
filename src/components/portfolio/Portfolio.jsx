import React from 'react'
import { Element } from 'react-scroll';
import styles from '../../styles/portfolio/portfolio.module.css'
import Square from './Square';
import mountin from '../../images/mountin.png'
import whisky from '../../images/whisky.png'

function Portfolio() {
  return (
    <Element name="portfolio">
      <div className={styles.PortfolioBox}>
        <div>PORTFOLIO</div>
        <div className={styles.squareWrap}>
          <Square
            date="30일"
            title="등산 앱테크"
            content={"산을 오르며 고도에 따라 포인트를 적립하고, 적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플"}
            src={mountin}
            alt={"이미지"}
            type={"phone"} />
          <Square
            date="30일"
            title="등산 앱테크"
            content={"산을 오르며 고도에 따라 포인트를 적립하고, 적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플"}
            src={whisky}
            alt={"이미지"}
            type={"web"} />
          <Square />
        </div>
      </div>
    </Element>
  )
}

export default Portfolio
