import { Route } from 'react-router-dom';
import './App.css';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import Error404 from './components/error404/Error404';
import Home from './components/Home/Home';
import HomeAux from './components/Home/HomeAux';
import Landing from './components/Land/Landing';
import NavBar from './components/NavBar/NavBar';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  return (
    <div className="App">
      <Route exact path='/pokemons/:name' render={() => <PokemonDetail />} />
      <Route exact path='/' render={() => <Landing />} />
      <Route exact path='/home' render={() => <Home />} />
      <Route exact path={`/pokemons/search/:name`} render={() => <SearchPage />} />
      <Route exact path='/createPokemon' render={() => <CreatePokemon />} />
      <Route exact path='/homeAux' render={() =>  <HomeAux /> } />
      {/* <Route path='*'  render={()=><Error404/>}/> */}
    </div>
  );
}

export default App;
