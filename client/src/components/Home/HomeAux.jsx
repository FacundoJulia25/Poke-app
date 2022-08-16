import React from 'react'
import NavBar from '../NavBar/NavBar'
import Pokemon from '../Pokemon/Pokemon'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'
function HomeAux() {
    return (
        <div className='home-container'>
            <NavBar/>
            <div className="paginationPokemons">
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 1'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 2'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 3'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 4'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 1'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 2'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 3'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 1'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 2'} types={'tipo tipo'}/>
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 3'} types={'tipo tipo'}/>
            </div>

        </div>
    )
}

export default HomeAux