
import search from './search.png'
import styles from './Header.module.scss'

const Header = () => {
    return(
        <header className={styles.header}>
            <h1>Art Gallery</h1>
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="Search"/>
                <img src={search} alt="Magnifying glass icon" className={styles.header.magnifying_glass}/>
            </div>
        </header>
    )
}

export default Header