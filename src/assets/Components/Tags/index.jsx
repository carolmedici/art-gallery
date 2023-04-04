import React from "react";
import styles from "./Tags.module.scss"

const Tags = () => {
    return ( 
        <div className={styles.tags}>
            <p>Filter by galleries:</p>
            <ul className={styles.tags__list}>
                <li >Anita Malfatti</li>
                <li >Frida Kahlo</li>
                <li >Johannes Vermeer</li>
                <li >Tarsila do Amaral</li>
                <li >Vincent van Gogh</li>
            </ul>
        </div>
     );
}
 
export default Tags;