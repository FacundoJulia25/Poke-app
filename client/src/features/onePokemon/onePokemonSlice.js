import { createSlice } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Al exportar de forma individual para acceder al 
//slice en si tendremos que importar destructurando


//PASO 1 : Crear un async thunk que va a ser nuestra función para
//realizar el llamado a la api.
const getOnePokemon = createAsyncThunk('pokemons/getOnePokemon',(name)=>{
    return axios.get(`http://localhost:3001/pokemons?name=${name}`)
        .then(response=>response.data)
        .catch(e=>e.message)
})
//PASO 2: Definimos el initial state con un loading,
//un array con el state y un handleError.
const initialState = {
    loading:false,
    pokemon:{},
    error:'',
}
//Paso 3 creamos nuestro slice 

//añadimos el extra reducer
//usando el builder agregaremos casos
//por cada uno de los casos 
//por cada uno de los casos
export const onePokemonSlice = createSlice({
        name:'onePokemon',
        initialState,
        reducers:{   
            clearSearchedPokemon:(state, action)=>{
                if(state.pokemon!=={})
                state.pokemon={}
            }
        },
        extraReducers: builder  => {  
            builder.addCase(getOnePokemon.pending, state =>{
                state.loading = true
            })
            builder.addCase(getOnePokemon.fulfilled,(state, action)=>{
                state.loading = false
                state.pokemon = action.payload
                state.error = ''
            }) 
            builder.addCase(getOnePokemon.rejected, (state, action)=>{
                state.pokemon = {}
                state.error=action.error.message
            })
        }
        })
export const clearSearchedPokemon = onePokemonSlice.actions.clearSearchedPokemon
export const getNamePokemon = getOnePokemon
export default onePokemonSlice.reducer // este ".reducer" permite exportar solo los reducers
                                     //al exportar por defecto.
