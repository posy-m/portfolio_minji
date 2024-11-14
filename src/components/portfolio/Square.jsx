import React from 'react'
import styles from '../../styles/portfolio/square.module.css'

function Square({ date, title, content, src, type, alt }) {
  const imgsize = type === 'web' ? styles.webSize : styles.phoneSize;
  return (
    <div className={styles.squareBox}>
      <div className={styles.squareTextBox}>
        <span>{date}</span>
        <span>{title}</span>
        <span>{content}</span>
      </div>
      <img src={src} alt={alt} className={imgsize} />
    </div>

  )
}

export default Square
