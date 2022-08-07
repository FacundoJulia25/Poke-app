import { createSlice } from "@reduxjs/toolkit";


//Al exportar de forma individual para acceder al 
//slice en si tendremos que importar destructurando

export const pokemonsSlice = createSlice({
        name:'pokemons',
        initialState: [],
        reducers: {
            getAllPokemons:(state, action)=>{
                let {payload}=action
                console.log(payload)
                state.push(payload)
            }
        }
    }
)
export const { getAllPokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer // este ".reducer" permite exportar solo los reducers
                                     //al exportar por defecto.
