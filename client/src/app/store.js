import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducers from '../features/homePokemonsSlice/pokemonsSlice'
import onePokemonReducers from '../features/onePokemon/onePokemonSlice'

//de esta manera estoy importando solo los reducers y no todo el estado en sí

export const store = configureStore({
    reducer: {
        allPokemons: pokemonsReducers,
        onePokemon: onePokemonReducers
    }
})