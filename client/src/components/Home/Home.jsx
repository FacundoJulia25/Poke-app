import React from "react";
import { useDispatch } from "react-redux"; // funciones para ejecucion de funcion en el estado
import { useSelector } from "react-redux"; //Acceso al estado traer/seleccionar
import { useEffect } from "react";
import { getAllPokemons } from "../../features/homePokemonsSlice/pokemonsSlice";
import Pokemon from "../Pokemon/Pokemon";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  let allPokemons = useSelector(state => state.allPokemons)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [])
  if (allPokemons.pokemons.length > 0) {
    return (
      <div>
        <SearchBar />
        {allPokemons.pokemons.map(pokemon => {
          return <Pokemon img={pokemon.img} name={pokemon.name} types={pokemon.types} />
        })}
      </div>
    )
  } else {
    return (
      <h1>Se están cargando</h1>
    )
  }
}
