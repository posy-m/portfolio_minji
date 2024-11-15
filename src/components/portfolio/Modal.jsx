import React from 'react';
import styles from '../../styles/portfolio/modal.module.css';
import github from '../../images/github2.png'
import notion from '../../images/notion.png'
import message from '../../images/message.png'

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalBox}>
          <h2>{content.title}</h2>
          <div className={styles.modalIcon}>
            <a href={content.linkName} target="_blank" rel="noopener noreferrer">
              <img src={github} alt={content.alt} />
            </a>
            <a href={content.linkNameNotion} target="_blank" rel="noopener noreferrer">
              <img src={notion} alt={content.alt} />
            </a>
            {content.linkNameHomepage && (
              <a href={content.linkNameHomepage} target="_blank" rel="noopener noreferrer">
                <img src={message} alt={content.alt} />
              </a>
            )}
          </div>

        </div>
        <p className={styles.modalLine}></p>
        <div className={styles.contentWrap}>
          <div className={styles.modalLeftBox}>
            {content.type === "web" || content.srcWeb ? (
              <img src={content.srcWeb} alt={content.altWeb} className={styles.WebImage} />
            ) : (
              <img src={content.src} alt={content.alt} className={styles.modalImage} />
            )}
          </div>
          <div className={styles.modalRightBox}>
            <div className={styles.introWrap}>
              <p>{content.dateTitle}</p>
              <p>{content.date}</p>
            </div>
            <div className={styles.introWrap}>
              <p>{content.subTitle}</p>
              <p dangerouslySetInnerHTML={{ __html: content.intro }} />
            </div>
            <div className={styles.introWrap}>
              <p>{content.stackTitle}</p>
              <p>{content.stackName}</p>
            </div>
            <div className={styles.introWrap}>
              <p>{content.roleTitle}</p>
              <p>{content.roleName}</p>
            </div>
            <div className={styles.introWrap}>
              <p>{content.functionTitle}</p>
              <p dangerouslySetInnerHTML={{ __html: content.functionName }} />
            </div>
            <div className={styles.introWrap}>
              <p>{content.siteTitle}</p>
              <a href={content.stieName}>{content.stieName}</a>
            </div>
            {/* <p>{content.functionName}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
