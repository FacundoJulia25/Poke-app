import './PokemonDetail.css'
import { useParams } from "react-router-dom";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "../NavBar/NavBar";
import { useEffect } from 'react';

function PokemonDetail() {
    let { name } = useParams()
    let dispatch = useDispatch()

    //ejecutar luego la function de getPokemon by name
    let allPokemons = useSelector(state => state.allPokemons.pokemons)
    let onePokemon = useSelector(state => state.onePokemon)
    let miPoke = allPokemons.find(p => p.name == name)

    if (!miPoke) {
        console.log('este es el clg de afuera ', onePokemon);
        return (
            <>
                <NavBar />
                <div className='detailsPokes'>
                    <img src={onePokemon.pokemon.img} alt={`img ${name}`} />
                    <h1>Name: {onePokemon.pokemon.name}</h1>
                    <h2>Types: {onePokemon.pokemon.types}</h2>
                    <h2>Life points: {onePokemon.pokemon.life_points}</h2>
                    <h2>Attack: {onePokemon.pokemon.attack}</h2>
                    <h2>Defense: {onePokemon.pokemon.defense}</h2>
                    <h2>Speed: {onePokemon.pokemon.speed}</h2>
                    <h2>Height: {onePokemon.pokemon.height}</h2>
                    <h2>Weight: {onePokemon.pokemon.weight}</h2>
                    <h2>Id: {onePokemon.pokemon.id}</h2>
                </div>
            </>
        )
    }
    return (
        <>
            <NavBar />
            <div className='detailsPokes'>
                <img src={miPoke.img} alt={`img ${name}`} />
                <h1>Name: {miPoke.name}</h1>
                <h2>Types: {miPoke.types}</h2>
                <h2>Life points: {miPoke.life_points}</h2>
                <h2>Attack: {miPoke.attack}</h2>
                <h2>Defense: {miPoke.defense}</h2>
                <h2>Speed: {miPoke.speed}</h2>
                <h2>Height: {miPoke.height}</h2>
                <h2>Weight: {miPoke.weight}</h2>
                <h2>Id: {miPoke.id}</h2>
            </div>
        </>
    )
}

export default PokemonDetail