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
        <Link to={`/pokemons/search/${name.toLowerCase()}`}></Link>
    };

    return (
            <div className="searchBar">
                <h3 style={{color: 'rgb(148, 30, 30)', fontWeight: '1000', paddingRight:'20px', margin:'auto', fontSize: '40px'}}>Search</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input className="inputSearchBar"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="   ej Makuhita..."
                        minLength='3'
                        required
                    />
                    <Link to={`/pokemons/search/${name.toLowerCase()}`}>
                        <button className="btnSearchBar" type="submit">
                            🔎
                        </button>
                    </Link>
                </form>
            </div>
    );
}
export default SearchBar;
