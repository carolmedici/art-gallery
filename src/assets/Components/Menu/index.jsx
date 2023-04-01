import React from "react"
import styles from './Menu.module.scss'

const Menu = () =>{
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li  className={styles.menu__item}><a href="#">Begin</a></li>
                <li className={styles.menu__item}><a href="#">Most liked images</a></li>
                <li className={styles.menu__item}><a href="#">Most viewed images</a></li>
                <li className={styles.menu__item}><a href="#">News</a></li>
                <li className={styles.menu__item}><a href="#">Surprise me</a></li>

            </ul>
        </nav>
    )
}

export default Menu