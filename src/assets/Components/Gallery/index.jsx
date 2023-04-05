import React from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import styles from "./Gallery.module.scss"
import photos from "./photos.json"
import { useState } from "react";


const Gallery = () => {
    const [items, setItems] = useState(photos);
    const tags = [...new Set(photos.map((valor) => valor.tag))];
    
    const PhotosFilter = (tag) => {
        const newPhotos = photos.filter ((photo) => {
            return photo.tag === tag;
        });

        setItems (newPhotos);
    }
    return ( 
        <section className={styles.gallery}>
        <h2>Browse the gallery</h2>
        <Tags tags={tags} PhotosFilter={PhotosFilter} setItems={setItems}/>
        <Cards items={items} styles={styles} />
        </section>
     );
}
 
export default Gallery;