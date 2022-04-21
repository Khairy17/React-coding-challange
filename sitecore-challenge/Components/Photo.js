import React, { useState } from 'react';
import styles from '../styles/Photo.module.css';
import BigImage from './BigImage';

// import Image from 'next/image'

export default function Photo({ photo, setBigImage }) {
        function handleClick(img) {
                setBigImage(img);
        }
        return (
                <div className={styles.galleryContainer}>
                        <div className={styles.galleryItem}>
                                <div className={styles.galleryImage}>
                                        <img
                                                className={styles.img}
                                                src={photo.urls.regular}
                                                onClick={() =>
                                                        handleClick(photo)
                                                }
                                        ></img>
                                </div>
                        </div>
                </div>
        );
}
