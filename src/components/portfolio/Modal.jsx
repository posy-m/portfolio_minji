import React from 'react';
import styles from '../../styles/portfolio/modal.module.css';
import github from '../../images/github2.png'
import notion from '../../images/notion.png'

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{content.title}</h2>
        <div className={styles.contentWrap}>
          <div className={styles.modalLeftBox}>
            <img src={content.src} alt={content.alt} className={styles.modalImage} />
            <p>{content.date}</p>
            <a href={content.linkName} target="_blank" rel="noopener noreferrer">
              <img src={github} alt={content.alt} />
            </a>
            <a href={content.linkNameNotion} target="_blank" rel="noopener noreferrer">
              <img src={notion} alt={content.alt} />
            </a>
          </div>
          <div className={styles.modalRightBox}>
            <p>{content.subTitle}</p>
            <p dangerouslySetInnerHTML={{ __html: content.intro }} />
            <p>{content.stackTitle}</p>
            <p>{content.stackName}</p>
            <p>{content.roleTitle}</p>
            <p>{content.roleName}</p>
            <p>{content.functionTitle}</p>
            <p dangerouslySetInnerHTML={{ __html: content.functionName }} />
            {/* <p>{content.functionName}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
