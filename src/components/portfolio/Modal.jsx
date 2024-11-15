import React from 'react';
import styles from '../../styles/portfolio/modal.module.css';

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{content.title}</h2>
        <img src={content.src} alt={content.alt} className={styles.modalImage} />
        <p>{content.date}</p>
        <p>{content.person}</p>
        <p>{content.content}</p>
        <p>{content.stack}</p>
        <div>
          <p>{content.linkName}</p>
          <img src={content.link} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
