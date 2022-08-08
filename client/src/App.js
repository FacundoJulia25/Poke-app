import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Land/Landing';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import SearchPage from './components/SearchPage/SearchPage';

function App() {



  return (
    <div className="App">
      <Route exact path='/pokemons/:name' render={() => <PokemonDetail />} />
      <Route exact path='/' render={() => <Landing />} />
      <Route exact path='/home' render={() => <Home img='https://i.pinimg.com/564x/7d/f7/ed/7df7ed4b39b4b2819870a61b451aaa56.jpg' />} />
      <Route exact path={`/pokemons/search/:name`} render={() => <SearchPage />} />
    </div>
  );
}

export default App;
