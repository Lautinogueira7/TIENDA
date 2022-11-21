import CartWidget from "../Navbar/CartWidget"
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className='barra'>
            <Link to="/">
                <ul>Inicio</ul>
            </Link>
            <Link to="/categoria/Proteina">
                <ul> Proteína</ul>
            </Link>
            <Link to="categoria/Creatina">
                <ul>Creatina</ul>
            </Link>
            <Link to="categoria/Pre-entreno">
                <ul>Pre entreno</ul>
            </Link>
            <Link to="/cart">
                <CartWidget />
            </Link>
            
        </nav>
    )
}

export default Menu