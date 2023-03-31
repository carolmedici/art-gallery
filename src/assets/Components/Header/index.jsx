import icon from './icon.png'
import search from './search.png'
import styles from './Header.module.scss'

const Header = () => {
    return(
        <header className='styles_header'>
            <img src={icon} alt="Logo" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="What do you search?"/>
                <img src={search} alt="Magnifying glass icon" />
            </div>
        </header>
    )
}

export default Header