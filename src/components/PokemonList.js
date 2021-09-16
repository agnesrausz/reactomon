import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function PokemonList() {
    const pokeStyle = {
        color: "black",
        textDecoration: "none",
    };

    const [pokemons, setPokemons] = useState([]);
    const [pictures, setPictures] = useState([]);

    useEffect( () => {
        fetchPokemons()
    }, [])

    const fetchPokemons = async () => {
        const pokes = await axios.get("https://pokeapi.co/api/v2/pokemon")

        console.log(pokes.data.results);
        setPokemons(pokes.data.results);
    }


    const fetchPokemon = async (id) => {
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

            console.log(poke.data.sprites.other["official-artwork"].front_default)
    }

    return (
        <ul className='pokemon-list'>
            {pokemons.map((pokemon, index) => (
                <li className='pokemon' key={index + 1}>
                    {/*<img src={pictures.index} alt={pokemon.name}/>*/}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt={pokemon.name}/>
                    <Link style={pokeStyle} to={`/pokemon/${index + 1}`}>
                        {pokemon.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PokemonList;