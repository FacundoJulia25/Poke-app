import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import './Pagination.css'
const Pagination = (props) => {
    const pokemones = props.pokemones.map(pokemon => {
        return <Pokemon img={pokemon.img} name={pokemon.name.toUpperCase()} types={pokemon.types} />
    })
    if (props.currentPage === 1) {
        return (
            <div key={'Pagination'} >
                <h1 className='h1Pokemons' style={{color:"white"}}>-  HOME  -</h1>
                <div className="paginationPokemons">{pokemones}</div>
                <div className='pages'>
                    <h3 className='prev'>     </h3>
                    <h2>Pag: {props.currentPage} de: {Math.ceil(props.totalPokemons / 12)}</h2>
                    <h3 className='next' onClick={props.nextHandler} > Next </h3>
                </div>
            </div>
        )
    } else {
        return (
            <div key={'Pagination'} >
                <h1 className='h1Pokemons' style={{color:"white"}}>-  HOME  -</h1>
                <div className="paginationPokemons">{pokemones}</div>
                <div className='pages'>
                    <h3 className='prev' onClick={props.prevHandler}> Prev </h3>
                    <h2>Pag: {props.currentPage} de: {Math.ceil(props.totalPokemons / 12)}</h2>
                    <h3 className='next' onClick={props.nextHandler} > Next </h3>
                </div>
            </div>
        )
    }
}
//needs:
// Filtered pokemons
// Nav
// 
export default Pagination