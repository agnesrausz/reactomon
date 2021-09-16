import React, {useState, useEffect} from 'react';

import axios from "axios";


//components
import PokemonCard from "./PokemonCard";

function PokemonList() {

    const [pokemons, setPokemons] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetchPokemons();

    }, [])

    const fetchPokemons = async () => {
        const pokes = await axios.get("https://pokeapi.co/api/v2/pokemon")
        let pokeList = pokes.data.results;

        setPokemons(pokeList);

        for (let i = 0; i < pokeList.length; i++) {
            await fetchPokemon(pokeList[i].url);
        }
    }


    const fetchPokemon = async (url) => {
        const poke = await axios.get(url);
        console.log(url)
        let image = poke.data.sprites.other["official-artwork"].front_default;
        let type = poke.data.types[0].type.name;

        setPictures(state => [...state, image])
        setTypes(state => [...state, type])

    }


    return (
        <ul className='pokemon-list'>
            {pokemons.map((pokemon, index) => (
                <PokemonCard
                    index={index}
                    pictures={pictures}
                    pokemon={pokemon}
                    types={types}
                />
            ))}
        </ul>
    );
}

export default PokemonList;