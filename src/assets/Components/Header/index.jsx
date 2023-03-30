import icon from './icon.png'
import search from './search.png'

const Header = () => {
    return(
        <header>
            <img src={icon} alt="Logo" />
            <div>
                <input type="text" placeholder="What do you search?"/>
                <img src={search} alt="Magnifying glass icon" />
            </div>
        </header>
    )
}

export default Header