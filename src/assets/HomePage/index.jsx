import Gallery from '../Components/Gallery'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import banner from "./tarsila-banner.png"
import styles from './HomePage.module.scss'

const HomePage = () => {
    return(
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <div className={styles.principal__menu}>
                        <Menu />
                    </div>
                    <div className={styles.principal__image}>
                    <img src={banner} alt="Tarsila " />
                    </div>
                </section>
            </main>
            <div className={styles.gallery}>
                <Gallery />
            </div>
        </>
    )
}

export default HomePage
