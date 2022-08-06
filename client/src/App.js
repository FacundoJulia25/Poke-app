import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Land/Landing';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={()=> <Landing />} />
      <Route exact path='/home' render={()=> <Home img='https://i.pinimg.com/564x/7d/f7/ed/7df7ed4b39b4b2819870a61b451aaa56.jpg' />} />
    </div>
  );
}

export default App;
