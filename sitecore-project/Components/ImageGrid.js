import React from 'react'
import Photo from './Photo';
import styles from '../styles/ImageGrid.module.css'

export default function ImageGrid({photos}) {
    let renderedPhotos = photos.map((item)=>{
        return (
         
          <Photo key={item.id} photo={item} />
        );
    })
  return (
    <div className={styles.gridContainer}>

        {renderedPhotos}
    </div>
  )
}
