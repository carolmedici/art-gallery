import React from "react";
import Tags from "../Tags";
import styles from "./Gallery.module.scss"
import photos from "./photos.json"

const Gallery = () => {
    return ( 
        <section className={styles.gallery}>
        <h2>Browse the gallery</h2>
        <Tags />
        <ul className={styles.gallery__cards}>
            {photos.map((photo)=>{
                return(
                    <li key={photo.id} className={styles.gallery__card}>
                        <img
                        className={styles.gallery__image}
                        src={photo.image}
                        alt={photo.titule}
                        />
                        <p className={styles.gallery__description}>{photo.titule}</p>
                        <div>
                            <p>{photo.author}</p>
                            <span>
                                
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
        </section>
     );
}
 
export default Gallery;