import { createSlice } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Al exportar de forma individual para acceder al 
//slice en si tendremos que importar destructurando


//PASO 1 : Crear un async thunk que va a ser nuestra función para
//realizar el llamado a la api.


const getPokemons = createAsyncThunk('pokemons/getPokemons',()=>{
    return axios.get('http://localhost:3001/pokemons')
        .then(response=>response.data.map(pokemon=>pokemon))
})


//PASO 2: Definimos el initial state con un loading,
//un array con el state y un handleError.


const initialState = {
    loading:false,
    pokemons:[],
    error:'',
}

//Paso 3 creamos nuestro slice .


//añadimos el extra reducer
//usando el builder agregaremos casos
//por cada uno de los casos 
//por cada uno de los casos
export const pokemonsSlice = createSlice({
        name:'pokemons',
        initialState,
        extraReducers: builder => {  
            builder.addCase(getPokemons.pending, state =>{
                state.loading = true
            })
            builder.addCase(getPokemons.fulfilled,(state, action)=>{
                state.loading = false
                state.pokemons = action.payload
                state.error = ''
            }) 
            builder.addCase(getPokemons.rejected, (state, action)=>{
                state.pokemons = []
                state.error=action.error.message
            })            
            
        }
        })


export const getAllPokemons = getPokemons
export default pokemonsSlice.reducer // este ".reducer" permite exportar solo los reducers
                                     //al exportar por defecto.
