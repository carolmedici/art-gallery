import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Slide from '../Components/Slide'
import './HomePage.css'


const HomePage = () => {
return(
    <>
        <Header />
        <main>
            <section>
                <Menu />
                <div>
                    <Slide />
                </div>
            </section>
        </main>
    </>
)
}

export default HomePage