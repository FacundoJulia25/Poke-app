import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import imgHome from '../assets/HomePokemon.png'
function NavBar() {

    return (
        <div className='nav'>
            <img className='imgHome' src={imgHome} alt="imgHomeLogo" />
            <ul>
                <li className="enlaces"><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600'}} to={'/home'}>Home</Link></li>
                <li style={{ color: 'white', fontWeight: '1000'}}>-</li>
                <li className="enlaces"><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600'}} to={'/createPokemon'}>Create Pokémon</Link></li>
                <li style={{ color: 'white', fontWeight: '600'}}>-</li>
                <li className="searchBarNav"><SearchBar /></li>
                <li style={{ color: 'white', fontWeight: '600'}}> </li>
            </ul>
        </div>
    )
}

export default NavBar