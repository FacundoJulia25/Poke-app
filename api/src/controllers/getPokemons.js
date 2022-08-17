
const axios = require('axios').default;
const { Pokemon, Type } = require('../db.js')

// [ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

const getApi = async () => {
    try {
        const apiPokes20 = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const apiPokes40 = await axios.get(apiPokes20.data.next)
        const apiPokes = await apiPokes20.data.results.concat(apiPokes40.data.results)
        const requests = await apiPokes.map(p => axios.get(p.url))// we got all de requests in variable 'requests'

        // console.log(requests)
        const pokemonesDb = await getDb()
        const pokeResponse = await axios.all(requests)
            .then(data => data.map((p) => {
                const pokemon = {
                    id: p.data.id,
                    name: p.data.name,
                    life_points: p.data.stats[0].base_stat,
                    attack: p.data.stats[1].base_stat,
                    defense: p.data.stats[2].base_stat,
                    speed: p.data.stats[5].base_stat,
                    height: p.data.height,
                    weight: p.data.weight,
                    img: p.data.sprites.other.home.front_default,
                    types: p.data.types.map(t => `${t.type.name} `)
                }
                return pokemon
            }))
        let pokemonAll = pokeResponse.concat(pokemonesDb)
        return pokemonAll
    } catch (e) {
        console.log(e)
    }
}
//puedo hacer funciones que traigan cada cosa particular con su respectivo mensaje y dependiendo de lo que me envien por params o querys. todo con la misma function. Tener en cuenta la division de responsabilidades...

const getDb = async (name) => {//create a function that will take us 
    if (name) {               //all the db pokemons.
        const pokemons = await Pokemon.findAll({
            where: { name: name },
            include: { model: Type, as: 'types' }
        });
        if (pokemons.length > 0) {
            return pokemons
        } else {
            throw new Error(`We couldn't find that pokemon :(`)
        }
    } else {
        const pokemons = await Pokemon.findAll({
            include:
            {
                model: Type,
                attributes: ['name']
            }
        })
        let pokemones = await pokemons.map(p => {
            return {
                ...p.dataValues,
                types: p.Types.map(p => { return `${p.name} ` })
            }
        })
        return pokemones
    }
};
// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
const getOnePokemon = async (id) => {
    try {
        let pokemon_40 = await getApi() // traemos los de la api
        let pokemonsDb = await getDb() //traemos los de la db
        let pokemonesDbApi = pokemon_40.concat(pokemonsDb)
        let pokemonBuscado = pokemonesDbApi.filter(p => p.id == id)
        // console.log(pokemonBuscado)
        if (pokemonBuscado) {
            return pokemonBuscado
        }
        else throw new Error('No se encontró pokemones con el id seleccionado')
    } catch (error) {
        console.log(error)
    }
}

// [ ] GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado


const getPokemonByName = async (name) => {
    // console.log(name)
    try {
        let pokemonDb = await Pokemon.findOne({
            where: {
                name: name.toLowerCase()
            }
        })
        //await getDb() //traemos los de la db
        //console.log(pokemonsDb)
        if (pokemonDb) {
            console.log(pokemonDb);
            return pokemonDb
        } else {
            pokemonBuscado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(data => {
                const pokemon = {
                    id: data.data.id,
                    name: data.data.name,
                    life_points: data.data.stats[0].base_stat,
                    attack: data.data.stats[1].base_stat,
                    defense: data.data.stats[2].base_stat,
                    speed: data.data.stats[5].base_stat,
                    height: data.data.height,
                    weight: data.data.weight,
                    img: data.data.sprites.other.home.front_default,
                    types: data.data.types.map(t => `${t.type.name} `)
                }
                return pokemon
            })
            if (pokemonBuscado) return pokemonBuscado
            else {
                throw new Error(`No se encontró pokemones con el nombre ${name}`)
            }
        }
    } catch (error) {
        console.log(error);
    }
}

// [ ] POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos relacionado con sus tipos.
let pkdb = async () => {
    Pokemon.findAll({
        includes: {
            model: Type,
            name: 'fire'
        }
    })
}
const postPokemon = async (name, life_points, attack, defense, speed, height, weight, img, types) => {
    console.log(name, life_points, attack, defense, speed, height, weight, img, types)
    console.log('los types son:', types)
    if (name)
        try {
            let pokemon = await Pokemon.create({
                name,
                life_points,
                attack,
                defense,
                speed,
                height,
                weight,
                img,
            })
            let tipos = await Type.findAll({
                where: {
                    name: types
                }
            })
            console.log("el type es ", tipos)
            console.log("el pokemon es", pokemon)
            await pokemon.addTypes(tipos)

        } catch (e) {
            console.log(e)
        }
    else {
        return console.log('falta algun dato')
    }
}
// [ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí.
const getTypes = async () => {
    let types = await Type.findAll()
    if (!types.length) {
        let request = await axios.get('https://pokeapi.co/api/v2/type')
        // console.log(request)
        let types = await request.data.results.map(t => { return { name: t.name } })
        await Type.bulkCreate(types, {
            returning: true
        })
        let typesCreated = await Type.findAll()
        return typesCreated
    } else {
        return types
    }
}
// getTypes()
// Únicos Endpoints/Flags que pueden utilizar
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type


module.exports = {
    getApi,
    getDb,
    getOnePokemon,
    getPokemonByName,
    postPokemon,
    getTypes,
}