import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>MANGA UY</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/"></Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/shonen">Shonen</Link></li>
                <li><Link className="menu-link" to="/productos/seinen">Seinen</Link></li>
                <li><Link className="menu-link" to="/contacto"></Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar