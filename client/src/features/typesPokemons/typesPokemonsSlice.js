import { createSlice } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Al exportar de forma individual para acceder al 
//slice en si tendremos que importar destructurando


//PASO 1 : Crear un async thunk que va a ser nuestra función para
//realizar el llamado a la api.

const getTypes = createAsyncThunk('pokemons/getTypes',()=>{
    return axios.get(`http://localhost:3001/types`)
        .then(response=>response.data.map(type=>type))//lo que retorna es el payload que se
                                                            //sumará al state
})

//PASO 2: Definimos el initial state con un loading,
//un array con el state y un handleError.


const initialState = {
    loading:false,
    types:[],
    error:'',
}

//Paso 3 creamos nuestro slice .


//añadimos el extra reducer
//usando el builder agregaremos casos
//por cada uno de los casos 
//por cada uno de los casos
export const typesPokemonsSlice = createSlice({
        name:'types',
        initialState,
        extraReducers: builder  => {  
            builder.addCase(getTypes.pending, state =>{
                state.loading = true
            })
            builder.addCase(getTypes.fulfilled,(state, action)=>{
                state.loading = false
                state.types = action.payload
                state.error = ''
            }) 
            builder.addCase(getTypes.rejected, (state, action)=>{
                state.types = []
                state.error=action.error.message
            })            
            
        }
        })


export const getTypesP = getTypes
export default typesPokemonsSlice.reducer // este ".reducer" permite exportar solo los reducers
                                     //al exportar por defecto.
