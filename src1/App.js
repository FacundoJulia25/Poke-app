import { Route } from "react-router-dom";
import HouseDetail from "./components/HouseDetail/HouseDetail.jsx";
import Houses from "./components/Houses/Houses.jsx";
import Nav from "./components/Nav/Nav.jsx"
import CreateHouse from "./components/CreateHouse/CreateHouse.jsx";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route path="/houses/:houseId" exact component={HouseDetail}/>
      <Route path="/"exact component={Houses}/>
      <Route path="/house/create" component={CreateHouse}/>
      HENRY GOT
    </div>
  );
}

export default App;
