import React from "react";
import { Link } from "react-router-dom";
import './Pokemon.css'

function Pokemon(props) {
    const { img, name, types } = props;
    let elemento = ''
    // if()


    return (
        <div className="pokemonCard">
            <img className="cardImage" src={img} alt={name} />
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
