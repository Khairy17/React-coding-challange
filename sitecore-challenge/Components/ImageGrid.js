import React, { useState } from 'react';
import Photo from './Photo';
import styles from '../styles/ImageGrid.module.css';
import BigImage from './BigImage';

export default function ImageGrid({ photos }) {
        const [bigImage, setBigImage] = useState(null);
        let renderedPhotos = photos.map((p) => {
                return p.map((photo) => {
                        return (
                                <Photo
                                        key={photo.id}
                                        photo={photo}
                                        setBigImage={setBigImage}
                                />
                        );
                });
        });

        return (
                <>
                        <div className={styles.gridContainer}>
                                {renderedPhotos}
                        </div>
                        {bigImage && <BigImage image={bigImage} />}
                </>
        );
}
