import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import './Pagination.css'
const Pagination = (props) => {
    const pokemones = props.pokemones.map(pokemon => {
        return <Pokemon className="paginationPokemons" img={pokemon.img} name={pokemon.name.toUpperCase()} types={pokemon.types} />
    })

    return (
        <div key={'Pagination'} >
            <h2>Pag: {props.currentPage} </h2>

            <button onClick={props.prevHandler}> Prev </button>
            <button onClick={props.nextHandler}> Next </button>

            <h1>Pokemons</h1>
            <div  className="paginationPokemons">{pokemones}</div>
        </div> 
    )
}
//needs:
// Filtered pokemons
// Nav
// 
export default Pagination