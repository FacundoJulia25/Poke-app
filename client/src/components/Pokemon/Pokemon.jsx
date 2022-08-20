import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './Pokemon.css'

function Pokemon(props) {
    const { img, name, types } = props;
    console.log(types)
    let elemento;
    if (types[0] === 'normal ' && types[1]) {
        elemento = types[1]
    } else {
        elemento = types[0]
    }

    console.log(elemento);
    return (
        <div className="pokemonCard">
            <img className={`cardImage ${elemento}`} src={img} alt={name} />
            <h1 className="nameCardPokemon">
                <Link className="linksPokemons" to={`/pokemons/${name.toLowerCase()}`}>
                    {name.toUpperCase()}
                </Link>
            </h1>
            <h2 className="typesPokemons">Tipos: {types}</h2>
        </div>
    );
}

export default Pokemon;
