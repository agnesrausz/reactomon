import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function PokemonList() {
    const pokeStyle = {
        color: "black",
        textDecoration: "none",
    };

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, [])

    const fetchPokemons = async () => {
        const pokes = await axios.get("https://pokeapi.co/api/v2/pokemon")

        console.log(pokes.data.results);
        setPokemons(pokes.data.results);
    }

    return (
        <ul className='pokemon-list'>
            {pokemons.map((pokemon, index) => (
                <li className='pokemon' key={index + 1}>
                    <Link style={pokeStyle} to={`/pokemon/${index + 1}`}>
                        {pokemon.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PokemonList;