import { createSlice } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Al exportar de forma individual para acceder al 
//slice en si tendremos que importar destructurando


//PASO 1 : Crear un async thunk que va a ser nuestra función para
//realizar el llamado a la api.


const getPokemons = createAsyncThunk('pokemons/getPokemons', () => {
    return axios.get('http://localhost:3001/pokemons')
        .then(response => response.data.map(pokemon => pokemon))
})



//PASO 2: Definimos el initial state con un loading,
//un array con el state y un handleError.


const initialState = {
    loading: false,
    pokemons: [],
    filteredPokemons: [],
    error: '',
}

//Paso 3 creamos nuestro slice.


//añadimos el extra reducer
//usando el builder agregaremos casos
//por cada uno de los casos 
//por cada uno de los casos
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        sortAsc: (state, action) => {
            if (action.payload === 'ascendente') {
                state.filteredPokemons.sort((a, b) => a.attack - b.attack)
                console.log(state.pokemons, action.payload);
            } else if (action.payload == 'descendente') {
                state.filteredPokemons.sort((a, b) => b.attack - a.attack)
                console.log(state.pokemons);
            } else if (action.payload === 'az') {
                state.filteredPokemons.sort((a, b) => {
                    if (b.name > a.name) {
                        return -1;
                    }
                    if (b.name < a.name) {
                        return 1;
                    }
                })
            } else if (action.payload === 'za') {
                state.filteredPokemons.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                })
            }
        },
        filterBy: (state, action) => {
            state.filteredPokemons = state.pokemons //aqui reseteamos
            if (action.payload.type !== '') {
                if(action.payload === 'fire'){
                    let filteredPokemons1 = state.pokemons
                    let filteredPokemons2 = filteredPokemons1.filter(p=>p.types.toString().toLowerCase().includes('flying'))
                    let filteredPokemons3 = state.pokemons.filter(p=>p.types.toString().toLowerCase().includes('fire'))
                    state.filteredPokemons = filteredPokemons2.concat(filteredPokemons3)

                    // .concat(filteredPokemons2.filter(p=>p.types.toString().toLowerCase().includes('flying')))
                }else{
                    state.filteredPokemons = state.pokemons.filter(p => p.types.toString().toLowerCase().includes(action.payload.type.toLowerCase()))
                }
            }
            if (action.payload.created !== '') {
                if (action.payload.created === 'dB') {
                    state.filteredPokemons = state.filteredPokemons.filter(p => p.created)
                } else {
                    state.filteredPokemons = state.filteredPokemons.filter(p => !p.created)
                }
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(getPokemons.pending, state => {
            state.loading = true
        })
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            state.loading = false
            state.pokemons = action.payload
            state.filteredPokemons = action.payload
            state.error = ''
        })
        builder.addCase(getPokemons.rejected, (state, action) => {
            state.pokemons = []
            state.error = action.error.message
        })

    }
})

export const filterByOrigin = pokemonsSlice.actions.filterByOrigin
export const filterBy = pokemonsSlice.actions.filterBy
export const sortAsc = pokemonsSlice.actions.sortAsc
export const getAllPokemons = getPokemons

export default pokemonsSlice.reducer // este ".reducer" permite exportar solo los reducers
                                     //al exportar por defecto.
