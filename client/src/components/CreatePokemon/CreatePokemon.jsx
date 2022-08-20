import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypesP } from "../../features/typesPokemons/typesPokemonsSlice";
import './CreatePokemon.css'
import NavBar from "../NavBar/NavBar";

function CreatePokemon() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypesP())
    }, [])

    const allTypes = useSelector(state => state.types.types)
    const submitParaReset = useRef(null)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const [pokemon, setPokemon] = useState({
        name: '',
        life_points: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
    })

    const handleOnChange = (e) => {
        let name = e.target.name
        setPokemon({
            ...pokemon,
            [name]: e.target.value
        })
    }

    const selectOnChange = (e) => {
        const { name, value } = e.target
        if (name === 'type1') {
            setPokemon({
                ...pokemon,
                types: [value, pokemon.types[1]]
            })
        } else {
            setPokemon({
                ...pokemon,
                types: [pokemon.types[0], value]
            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(validate(pokemon))
        setIsSubmit(true)
    }

    const validate = (values) => {
        const pErrors = {}
        if (values.name === '') {
            pErrors.name = "Name is required"
        } else if (values.name.length < 4) {
            pErrors.name = "Must have at least four characters"
        }
        if (values.life_points === '') {
            pErrors.life_points = "Please set the HP / LP"
        } else if (values.life_points < 1 || values.life_points > 255) {
            pErrors.life_points = "Please set a value between 1 & 255"
        }
        if (values.attack === '') {
            pErrors.attack = "Attack is required"
        } else if (values.life_points < 1 || values.life_points > 255) {
            pErrors.life_points = "Please set a value between 1 & 255"
        }
        if (values.defense === '') {
            pErrors.defense = "Defense is required"
        } else if (values.life_points < 1 || values.life_points > 255) {
            pErrors.life_points = "Please set a value between 1 & 255"
        }
        if (values.speed === '') {
            pErrors.speed = "Speed is required"
        } else if (values.speed < 1 || values.speed > 255) {
            pErrors.speed = "Please set a number value 1 & 255"
        }
        if (values.height === '') {
            pErrors.height = "Height is required"
        } else if (values.height < 1 || values.height > 255) {
            pErrors.life_points = "Please set a value between 1 & 255"
        }
        if (values.weight === '') {
            pErrors.weight = "Weight is required"
        } else if (values.weight < 1 || values.weight > 255) {
            pErrors.weight = "Please set a number value 1 & 255"
        }
        if (values.types.length === 0) {
            pErrors.types = 'Please select at least one type'
        } else if (values.types[0] === values.types[1]) {
            pErrors.types = "You must choose two different types"
        }
        return pErrors;
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            setPokemon(pokemon)
            axios.post('http://localhost:3001/pokemons', pokemon)
                .then(data => {
                    alert('se creó el pokemon', JSON.stringify(data))
                    submitParaReset.current.reset()
                })
                .catch(e => alert('Hubo algún error'))
        }
    }, [errors])

    return (
        <div className='createPokemon'>
            <div className='nav'>
            <NavBar />
            </div>
            <form className='formCreate' action="post" ref={submitParaReset} onSubmit={(e) => handleSubmit(e)}>
                <div className='formDiv'>
                    <p className='required'>{errors.name}</p>
                    <label htmlFor="name" className='formItem'>
                        Name: <input name='name' key={'LabelName'} type="text" maxLength={15} onChange={(e) => { handleOnChange(e) }} />
                    </label>
                    <p className='required'>{errors.life_points}</p>
                    <label htmlFor="lp" className='formItem'>
                        Life Points: <input name='life_points' type='number' max={255} min={1} onChange={(e) => { handleOnChange(e) }} />
                    </label>
                    <p className='required'>{errors.attack}</p>
                    <label htmlFor="attk" className='formItem'>
                        Attack: <input name='attack' type='number' max={255} min={1} onChange={(e) => { handleOnChange(e) }} />
                    </label>
                    <p className='required'>{errors.defense}</p>
                    <label htmlFor="dfns" className='formItem'>
                        Defense: <input name='defense' type='number' max={255} min={1} onChange={(e) => { handleOnChange(e) }} />
                    </label>
                    <p className='required'>{errors.speed}</p>
                    <label htmlFor="speed" className='formItem'>
                        Speed: <input name='speed' type='number' max={255} min={1} onChange={(e) => { handleOnChange(e) }} />
                    </label>
                    <p className='required'>{errors.height}</p>
                    <label htmlFor="hght" className='formItem' >
                        Height (cm):<input name='height' type='number' max={255} min={1} onChange={(e) => { handleOnChange(e) }} />
                    </label>
                    <p className='required'>{errors.weight}</p>
                    <label htmlFor="wght" className='formItem' >
                        Weight (lbs): <input name='weight' type='number' max={255} min={1} onChange={(e) => { handleOnChange(e) }} />
                    </label>
                    <p className='required'>{errors.types}</p>
                    <label htmlFor="types">
                        Elige Tipo 1: <select name="type1" id="type1" value={pokemon.types[0]} onChange={selectOnChange}>
                            <option name='Default' value=''>- select type -</option>
                            {allTypes.map(type => {
                                return (
                                    <option value={type.name}>{type.name.toUpperCase()}</option>
                                )
                            })
                            }
                        </select>
                    </label>
                    <label htmlFor="types2">
                        Elije tipo 2:
                        <select name="type2" id="type2" value={pokemon.types[1]} onChange={selectOnChange}>
                            <option name='Default' value=''>- select type -</option>
                            {
                                allTypes.map(type => {
                                    return (
                                        <option value={type.name}>{type.name.toUpperCase()}</option>
                                    )
                                })
                            }</select>
                    </label>
                    <input className='createPkSubmit' type="submit" value='CREATE' />
                </div>
            </form>
        </div >
    )
}

export default CreatePokemon