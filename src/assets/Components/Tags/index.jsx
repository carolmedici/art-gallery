import React from "react";
import styles from "./Tags.module.scss"
import photos from "../Gallery/photos.json"

const Tags = ({tags, PhotosFilter, setItems}) => {
    return ( 
        <div className={styles.tags}>
            <p>Filter by galleries:</p>
            <ul className={styles.tags__list}>
                {tags.map((tag) => {
                    return (
                        <li key={tag} onClick = {() => PhotosFilter(tag)}>
                        {tag}
                        </li>
                    );
                })}
                <li onClick={() => setItems(photos)}> All</li>
            </ul>
        </div>
     );
}
 
export default Tags;