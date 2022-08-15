import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import { getNamePokemon } from "../../features/onePokemon/onePokemonSlice";

function SearchBar() {
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
            <div className="searchBar">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h3>Search</h3>
                    <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="ej Makuhita..."
                    />
                    <Link to={`/pokemons/search/${name.toLowerCase()}`}>
                        <button type="submit">
                            🔎
                        </button>
                    </Link>
                </form>
            </div>
    );
}

export default SearchBar;
