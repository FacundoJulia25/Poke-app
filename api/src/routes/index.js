const bodyParser = require('body-parser');
const { Router } = require('express');
const { getApi, getDb, getOnePokemon, getPokemonByName, getTypes, postPokemon } = require('../controllers/getPokemons.js')
const { axios } = require('axios').default
const { Pokemon, Types } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemons', async (req, res) => {
    try {
        const { name } = req.query
        if (name) {
            let pokemon = await getPokemonByName(name)
            pokemon
                ? res.status(201).json(pokemon)
                : res.status(404).send(`No se encontró al pokemon ${name}`)
        } else {
            let pokemons = await getApi()
                if (pokemons) {
                res.status(201).json(pokemons)
            }else {
                res.status(404).send('Error: No se pudieron cargar los pokemones')
            }
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/pokemons/:id', async (req, res) => {
    const { id } = req.params
    try {
        let pokemon = await getOnePokemon(id)
        if (pokemon) res.status(200).json(pokemon[0])
        else res.status(404).send('mmm nada che')
    } catch (error) {
        console.log(error)
    }
})

router.get('/types', async (req, res) => {
    try {
        let types = await getTypes()
        if (types.length) {
            res.status(200).json(types)
        } else {
            res.status(404).send('No se pudieron cargar los tipos')
        }
    } catch (error) {
        console.log(error)
    }
})

router.post('/pokemons', async (req, res) => {
    try {
        const { name, life_points, attack, defense, speed, height, weight, img, types } = req.body

        console.log(name, life_points, attack, defense, speed, height, weight, types)

        await postPokemon(name, life_points, attack, defense, speed, height, weight, img, types)
        res.status(200).send('Pokemon creado con éxito')
    } catch (error) {
        console.log(error)
        res.status(404).send('Hubo algun error en la creación del pokemon')
    }
})


module.exports = router;

