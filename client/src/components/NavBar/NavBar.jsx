import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'
function NavBar() {
    return (
        <div className='nav'>
            <Link to={'/home'}> <button>Home</button> </Link>
            <Link to={'/createPokemon'}>Create your Pokemon</Link>
            <SearchBar/>
        </div>
        )
}

export default NavBar