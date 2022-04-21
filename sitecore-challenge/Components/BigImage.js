import React, { useState, useEffect } from 'react';
import styles from '../styles/BigImage.module.css';
export default function BigImage({ image, setBigImage }) {
        console.log(image, 'inside big image');

        // when you want to close the pop up you need to set big image to null

        // 1 add onClick event to the X icon

        return (
                <div className={styles.overlay}>
                        <div className={styles.popup}>
                                <img
                                        src={image.urls.regular}
                                        className={styles.img}
                                ></img>
                        </div>
                </div>
        );
}
