import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pokemon from '../Pokemon/Pokemon';
import {  useParams } from "react-router-dom";
import { getNamePokemon } from '../../features/onePokemon/onePokemonSlice';

function SearchPage() {
    const pokemon = useSelector(state => state.onePokemon)
    let dispatch = useDispatch()
    let { name } = useParams()
    console.log(pokemon)
    useEffect(() => {
        dispatch(getNamePokemon(name))
    }, [])
    console.log(pokemon);
    if (pokemon.pokemon.name){
        return (
            <div>
                <Pokemon img={pokemon.pokemon.img} name={pokemon.pokemon.name} types={pokemon.pokemon.types} />
            </div>
        )
    } else {
        return (
            <h1>estas en la search page hno</h1>
        )
    }
}

export default SearchPage