import React from "react";
import { Link } from "react-router-dom";


function Pokemon(props) {
    const { img, name, types } = props;
    return (
        <>

            <img className="card" src={img} alt={name} />
            <h1>
                <Link to={`/pokemons/${name}`}>
                    {name}
                </Link>
            </h1>
            <h2>Tipos: {types}</h2>
        </>
    );
}

export default Pokemon;
