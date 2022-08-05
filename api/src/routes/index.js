const { Router } = require('express');
const { getApi, getDb, getOnePokemon, getPokemonByName, getTypes } = require('../controllers/getPokemons.js')
const { axios } = require('axios').default
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemons', async (req, res) => {
    const { name } = req.query
    if (name) {
        try {
            let pokemon = await getPokemonByName(name)
            pokemon 
            ? res.json(pokemon)
            : res.status(404).send(`No se encontró al pokemon ${name}`)
        } catch (error) {
            console.log(error)
        }
    }
    try {
        let pokemons = await getApi()
        if (pokemons) res.status(200).send(pokemons)
        else res.status(404).send('Error: No se pudieron cargar los pokemones')
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

router.get('/types', async (req, res)=>{
    try {
        let types = await getTypes()
        if(types.length){
            res.status(200).json(types)
        }else{
            res.status(404).send('No se pudieron cargar los tipos')
        }
    } catch (error) {
        console.log(error)
    }
})



// router.get('/pokemons', async (req, res)=>{  
//     await axios.get("https://pokeapi.co/api/v2/pokemon")
//     .then(info=>res.json(info.data.results))
//     .catch(e=>console.log(e))
// })
// router.get('/pokemons/:idPokemon',async (req, res)=>{
//     const id = req.params.idPokemon

// })
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;


// Requerimientos mínimos
// A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.
