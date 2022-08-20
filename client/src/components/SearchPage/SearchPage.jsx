import React, { useEffect } from 'react'
import './SearchPage.css'
import { useDispatch, useSelector } from 'react-redux'
import Pokemon from '../Pokemon/Pokemon';
import { useParams } from "react-router-dom";
import { clearSearchedPokemon, getNamePokemon } from '../../features/onePokemon/onePokemonSlice';
import NavBar from '../NavBar/NavBar';

function SearchPage() {
    let pokemon  = useSelector(state => state.onePokemon)
    let dispatch = useDispatch()
    let { name } = useParams()

    useEffect(() => {
        dispatch(getNamePokemon(name))
    }, [])

    useEffect(() => {
        dispatch(clearSearchedPokemon())
        dispatch(getNamePokemon(name))
    }, [name])
    
    if (pokemon.pokemon.name || typeof pokemon.pokemon === 'string') {
        if (typeof pokemon.pokemon === 'string') {
            return (
                <div className='pkNotFound'>
                    <NavBar />
                    <h1>ERROR</h1>
                    <h2>No se encontró el pokemon con el nombre: {name}</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar />
                    <div className='paginationPokemons'>
                        <Pokemon img={pokemon.pokemon.img} name={pokemon.pokemon.name} types={pokemon.pokemon.types} />
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className='searching' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img src="https://wallpaperset.com/w/full/8/2/a/40145.jpg" alt="searching" />
                <h1> </h1>
            </div>
        )
    }
}

export default SearchPage