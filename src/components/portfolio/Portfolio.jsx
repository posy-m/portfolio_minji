import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll';
import styles from '../../styles/portfolio/portfolio.module.css'
import Square from './Square';
import mountin from '../../images/mountin.png'
import whisky from '../../images/whisky.png'
import donut from '../../images/donut.png'
import Modal from './Modal';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setModalContent(null)
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <Element name="portfolio">
      <div className={styles.PortfolioBox}>
        <div>PORTFOLIO</div>
        <div className={styles.squareWrap}>
          <Square
            date="등산 앱테크"
            title="24.09.24-24.10.24(30일)"
            content={"산을 오르며 고도에 따라 포인트를 적립하고, 적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플"}
            src={mountin}
            alt={"이미지"}
            type={"phone"}
            onClick={() => onpenModal({

            })} />
          <Square
            date="주류 커뮤니티 및 추천 사이트"
            title="24.07.18-24.08.15(18일)"
            content={"주류를 좋아하는 고객이 게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트"}
            src={whisky}
            alt={"이미지"}
            type={"web"} />
          <Square
            date="도넛 커뮤니티"
            title="24.05.14-24.05.28(14일)"
            content={"홈페이지에 유입된 고객이 게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트"}
            src={donut}
            alt={"이미지"}
            type={"web"} />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      </div>
    </Element>
  )
}

export default Portfolio


