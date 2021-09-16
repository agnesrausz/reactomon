import "./App.css";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import Home from "./components/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path="/pokemons" exact component={PokemonList}/>
                    <Route path="/types" component={TypeList}/>
                    <Route path="/pokemon/:id" component={PokemonDetail}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
