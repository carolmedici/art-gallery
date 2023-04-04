import Gallery from '../Components/Gallery'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Slide from '../Components/Slide'
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
                        <Slide />
                    </div>
                </section>
            </main>
            <div>
                <Gallery />
            </div>
        </>
    )
}

export default HomePage
