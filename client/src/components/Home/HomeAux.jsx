import React from 'react'
import NavBar from '../NavBar/NavBar'
import Pagination from '../Pagination/Pagination'
import Pokemon from '../Pokemon/Pokemon'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'

function HomeAux() {
    return (
        <div className='home-container' >
            < NavBar />
            <div class="form-floating">
                <label htmlFor="sort-select">Sort By:</label>
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option value={'descendente'}>▽ - Descendent</option>)
                    <option value='ascendente'>△ - Ascendent</option>
                    <option value={''}>Todos</option>
                </select>
                    <i></i>
                
                <label htmlFor="origin-select">Choose an option:</label>
                <select >
                    <option value={'dB'}>Created</option>)
                    <option value='api'>Api Pokemons</option>
                    <option value={''}>All</option>
                </select>
            </div>
            <div className="paginationPokemons">
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 1'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 2'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 3'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 4'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 1'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 2'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 3'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 1'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 2'} types={'tipo tipo'} />
                <Pokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png'} name={'pokemon 3'} types={'tipo tipo'} />
            </div>

        </div>
    )
}

export default HomeAux