import React, { useState, useEffect } from "react";
import './Home.css'
import myGif from '../assets/loading.gif'
import { useDispatch, useSelector } from "react-redux"; // funciones para ejecucion de funcion en el estado
import { getAllPokemons, sortAsc, filterBy } from "../../features/homePokemonsSlice/pokemonsSlice";
import { getTypesP } from "../../features/typesPokemons/typesPokemonsSlice";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
export default function Home() {

  let allTypes = useSelector(state => state.types)
  let allPokemons = useSelector(state => state.allPokemons.pokemons)
  let filteredPokemons = useSelector(state => state.allPokemons.filteredPokemons)
  console.log(filteredPokemons)
  const dispatch = useDispatch();
  const pokemonsPerPage = 12

  //Paginado
  const [currentPage, setCurrentPage] = useState(0)
  const [pagePokemons, setPagePokemons] = useState([])

  useEffect(() => {
    setPagePokemons([...filteredPokemons].splice(0, pokemonsPerPage))
    setCurrentPage(0)
  }, [filteredPokemons])

  const nextHandler = () => {

    let totalPokemons = filteredPokemons.length
    let nextPage = currentPage + 1
    let firstIndex = nextPage * pokemonsPerPage
    if (firstIndex >= totalPokemons) return

    setPagePokemons([...filteredPokemons].splice(firstIndex, pokemonsPerPage))
    setCurrentPage(currentPage + 1)
  }

  const prevHandler = () => {
    console.log('prev');

    let miniumPokemons = 0
    let prevPage = currentPage - 1
    let firstIndex = prevPage * pokemonsPerPage
    if (firstIndex < miniumPokemons) return

    setPagePokemons([...filteredPokemons].splice(firstIndex, pokemonsPerPage))
    setCurrentPage(currentPage - 1)
  }

  const [filters, setFilters] = useState(
    {
      type: '',
      created: ''
    }
  )
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getTypesP())
  }, [])

  useEffect(() => {
    dispatch(sortAsc(sortBy))
  }, [sortBy])

  useEffect(() => {
    dispatch(filterBy(filters))
  }, [filters])

  const handleTypeOnChange = (e) => {
    setFilters({
      ...filters,
      type: e.target.value
    })
  }

  const handleSort = (e) => {
    setSortBy(e.target.value)
  }
  const handleOriginOnChange = (e) => {
    setFilters(
      {
        ...filters,
        created: e.target.value
      }
    )
  }
  if (allPokemons.length > 0 && allTypes.types.length > 0) {
    return (
      <div key={'Home'} className="home-container">
        <NavBar />
        <div className="selectores">
          <label htmlFor="sort-select">Sort By:</label>
          <select  class="form-select" value={sortBy} onChange={(e) => handleSort(e)}>
            <option value={'descendente'}>▽ - Descendent</option>
            <option value={'ascendente'}>△ - Ascendent</option>
            <option value={'za'}>Z - A</option>
            <option value={'az'}>A - Z</option>
            <option value={''}>ALL</option>
          </select>
          <label htmlFor="type-select">Choose a Type:</label>
          <select value={filters.type} onChange={(e) => handleTypeOnChange(e)}>
            <option value={''}>ALL</option>
            {allTypes.types.map(t => <option value={t.name}>{t.name.toUpperCase()}</option>)}
          </select>
          <label htmlFor="origin-select">Choose an option:</label>
          <select value={filters.created} onChange={(e) => handleOriginOnChange(e)}>
            <option value={'dB'}>Created</option>)
            <option value='api'>Api Pokemons</option>
            <option value={''}>ALL</option>
          </select>
        </div>
        <div className="home-pokemons">
          <Pagination totalPokemons={filteredPokemons.length} currentPage={currentPage + 1} pokemones={pagePokemons} prevHandler={prevHandler} nextHandler={nextHandler} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="loadingContainer">
        <img className="homeLoading" style={{ width: '70vw' }} src={myGif} alt="loading" />
      </div>
    )
  }
}
