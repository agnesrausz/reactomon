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

    useEffect(() => {
        fetchPokemons();

    }, [])

    const fetchPokemons = async () => {
        const pokes = await axios.get("https://pokeapi.co/api/v2/pokemon")
        let pokeList = pokes.data.results;

        setPokemons(pokeList);

        for (let i = 0; i < pokeList.length; i++) {
            fetchPokemon(pokeList[i].url);
        }
    }


    const fetchPokemon = async (url) => {
        const poke = await axios.get(url);
        let image = poke.data.sprites.other["official-artwork"].front_default;

        setPictures(state => [...state, image])

    }


    return (
        <ul className='pokemon-list'>
            {pokemons.map((pokemon, index) => (
                <li className='pokemon' key={index + 1}>

                    <Link style={pokeStyle} to={`/pokemon/${index + 1}`}>
                        <img className='img-list' src={pictures[index]} alt={pokemon.name}/>
                        <h3>{pokemon.name}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PokemonList;