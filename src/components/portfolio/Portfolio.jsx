import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll';
import styles from '../../styles/portfolio/portfolio.module.css'
import Square from './Square';
import mountin from '../../images/mountin.png'
import whisky from '../../images/whisky.png'
import donut from '../../images/donut.png'
import Modal from './Modal';
import unmountin from '../../images/unmountin.gif'
import insideoutGif from '../../images/insideout.gif'
import donutGif from '../../images/donut.gif'


function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onpenModal = (content) => {
    console.log(content, "왜이럴까");
    console.log(content.type, "ㅇㄹㄴㄹㄴㅇㄹ");

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
            // title="24.09.24-24.10.24(30일)"
            content={"산을 오르며 고도에 따라 포인트를 적립하고, 적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플"}
            src={mountin}
            alt={"이미지"}
            type={"phone"}
            onClick={() => onpenModal({
              title: "등산 앱테크",
              src: unmountin,
              dateTitle: "날짜",
              date: "2024.09.24-2024.10.24(30일)",
              // personnel: "5명 (Frotend :3명, Backend:2명)",
              linkName: "https://github.com/posy-m/UPHiLLProjectFront",
              linkNameNotion: "https://lavish-spike-71b.notion.site/UPHiLL-10bf53737a1380aa8acff5244d02823b",
              linkNameHomepage: "https://uphillmountain.store",
              subTitle: "소개",
              intro: "산을 오르며 고도에 따라 포인트를 적립하고,<br /> 적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플입니다.",
              stackTitle: "기술스택",
              stackName: "Nextjs, TypeScript, Tailwind CSS,React-Query, Firebase, Docker, AWS, Jotai",
              roleTitle: "인원 및 분담",
              roleName: "5명 (Frotend :3명, Backend:2명)",
              functionTitle: "맡은기능",
              functionName: [
                "사용자가 입력하는 데이터를 유효성 검사를 거쳐 회원가입 기능 구현",
                "Jotai를 활용해 회원 정보를 전역 상태에서 불러와 검증한 후, API 요청을 통해 로그인 기능 구현",
                "Firebase에서 제공하는 Firebase Authentication 서비스를 사용하여 휴대폰 번호로 비밀번호 찾기 / 아이디 찾기 구현",
                "포인트로 구매한 상품을 ‘사용 중’과 ‘사용 완료’ 상태로 분류하여 보관할 수 있는 기능을 구현",
                "React-Query에서 제공하는 useInfiniteQuery 훅을 사용하여 무한스크롤 구현",
              ],
            })} />
          <Square
            date="주류 커뮤니티 및 추천 사이트"
            // title="24.07.18-24.08.15(18일)"
            content={"주류를 좋아하는 고객이 게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트"}
            src={whisky}
            alt={"이미지"}
            type={"web"}
            onClick={() => onpenModal({
              title: "주류 커뮤니티 및 추천사이트",
              srcWeb: insideoutGif,
              dateTitle: "날짜",
              date: "2024.09.24-2024.10.24(30일)",
              // personnel: "5명 (Frotend :3명, Backend:2명)",
              linkName: "https://github.com/posy-m/InsideOut",
              linkNameNotion: "https://lavish-spike-71b.notion.site/InsideOut-52b02e18ce2c4ec0ae5ba5a5848185ad",
              subTitle: "소개",
              intro: "주류를 좋아하는 고객이 게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트 입니다.",
              stackTitle: "기술스택",
              stackName: "HTML5, CSS3, JavaScript, TypeScript, Nestjs, mysql, ,Sequelize",
              roleTitle: "인원 및 분담",
              roleName: "4명 (Frontend, Backend)",
              functionTitle: "맡은기능",
              functionName: [
                " 로그인한 회원이 제목과 내용 작성과 Multer를 이용해 이미지를 업로드 할 수 있는 게시글 작성 기능을 구현",
                "게시글의 고유한 ID값을 요청 받아 데이터베이스에서 해당 데이터를 조회하고 Sequelize를 사용하여 서버에서 수정 및 삭제 기능을 구현",
                " 한 게시글에 대한 댓글과 대댓글을 작성할 수 있도록 게시글과 댓글간에 1:N관계를 설정하여 댓글과 대댓글은 회원 테이블의 고유 ID와 외래키를 작성자와 닉네임을 매칭하며, 각 댓글과 대댓글은 게시글에 속할 수 있도록 글과 대댓글간에 관계를 설정하여 기능 구현",
                "사용자가 입력한 제목과 게시글 내용 검색어를 서버로 쿼리 스트링을 전송하여 검색 기능 구현 ",
                "현재 페이지의 URL경로를 확인하여 쿼리 문자열을 제외한 경로만 추출하여 경로에 따라 다른 카테고리 값을 할당하여 특정 카테고리 번호를 결정하는 로직을 구현",
                "한 페이지에 표시할 데이터 수와 현재 페이지 값을 쿼리스트링으로 서버에 전달받아 데이터를 데이터베이스에서 조회하여 반환하여 페이지네이션 기능 구현",
              ],
            })} />
          <Square
            date="도넛 커뮤니티 사이트"
            // title="24.05.14-24.05.28(14일)"
            content={"홈페이지에 유입된 고객이 게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트"}
            src={donut}
            alt={"이미지"}
            type={"web"}
            onClick={() => onpenModal({
              title: "도넛 커뮤니티 사이트",
              srcWeb: donutGif,
              dateTitle: "날짜",
              date: "2024.05.14-2024.05.28 (14일)",
              // personnel: "5명 (Frotend :3명, Backend:2명)",
              linkName: "https://github.com/posy-m/songpa",
              linkNameNotion: "https://mirror-check-8ea.notion.site/TEAM-a58a93c037034dc9b6d6bbf11cdbc063",
              subTitle: "소개",
              intro: "데이터베이스 없이 데이터 저장소 기능 대신 사용할 수있는 로컬 스토리지와 타입스크립트를 사용하여 홈페이지에 유입된 고객이 게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트 입니다.",
              stackTitle: "기술스택",
              stackName: "HTML5, CSS3, JavaScript, TypeScript",
              roleTitle: "인원 및 분담",
              roleName: "4명 (Frontend)",
              functionTitle: "맡은기능",
              functionName: [
                "TypeScript의 정적 타입검사를 활용하여 게시판 데이터 구조를 미리 정의하여 타입 오류를 방지하고 JavaScript로 빌드하여 실제 웹 환경에서 동작하도록 구현",
                "로컬스토리지에 저장된 게시판 데이터를 정의한 타입에 맞게 값을 받아와 나누어 보여주기 위해 페이지 네이션 로직 구현",
                "사용자가 입력한 검색어를 쿼리 파라미터로 전달하여 해당 검색어가 포함된 제목을 필터링을 할때 타입스크립트의 타입검사를 활용 하여 검색 기능 구현"],
            })} />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      </div>
    </Element>
  )
}

export default Portfolio


