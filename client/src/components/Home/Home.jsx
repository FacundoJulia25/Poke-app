import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux"; // funciones para ejecucion de funcion en el estado
import { useSelector } from "react-redux"; //Acceso al estado traer/seleccionar
import { useEffect } from "react";
import { getAllPokemons } from "../../features/homePokemonsSlice/pokemonsSlice";

export default async function Home() {
  let pokemons = useSelector(state=>state.allPokemons)
  const dispatch = useDispatch();
  useEffect(() => {
    let pokemons = axios.get("http://localhost:3001/pokemons")
    .then((data) => {
      data.data.map((pokemon) => {
        dispatch(getAllPokemons(pokemon))
      });
    });
  }, []);
  console.log(pokemons)
  return <div>
    <h1>ekisde</h1>
  </div>;
}
