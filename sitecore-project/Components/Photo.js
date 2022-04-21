import React from 'react'
import styles from '../styles/Photo.module.css'

export default function Photo({photo}) {
  return (
    <div className={styles.imageWrapper}>
        <img className={styles.img} src={photo.urls.regular}></img>

    </div>
  )
}
