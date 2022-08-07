import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducers from '../features/homePokemonsSlice/pokemonsSlice'

//de esta manera estoy importando solo los reducers y no todo el estado en sí

export const store = configureStore({
    reducer: {
        allPokemons: pokemonsReducers 
    }
})