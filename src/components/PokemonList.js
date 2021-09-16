import React, {useState, useEffect} from 'react';

import axios from "axios";


//components
import PokemonCard from "./PokemonCard";

function PokemonList() {

    const [pokemons, setPokemons] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [types, setTypes] = useState([]);
    const [load, setLoad] = useState(0);
    const [autoLoad, setAutoLoad] = useState(0);
    const [loadMode, setLoadMode] = useState(load);

    const [next, setNext] = useState("https://pokeapi.co/api/v2/pokemon");


    useEffect(() => {
        fetchPokemons();
    }, [load])


    const fetchPokemons = async () => {
        if (next) {
            const pokes = await axios.get(next)
            let pokeList = pokes.data.results;

            console.log(pokes)
            setNext(pokes.data.next)
            if (pokemons.length === 0) {
                setPokemons(pokeList);
            }

            for (let i = 0; i < pokeList.length; i++) {
                await fetchPokemon(pokeList[i].url);
                if (pokemons.length !== 0) {
                    setPokemons(state => [...state, pokeList[i]])
                }
            }
            setAutoLoad(autoLoad + 1)
        }
    }


    const fetchPokemon = async (url) => {
        const poke = await axios.get(url);

        let image = poke.data.sprites.other["official-artwork"].front_default;
        let type = poke.data.types[0].type.name;

        setPictures(state => [...state, image])
        setTypes(state => [...state, type])

    }


    return (
        <div>
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
            <div className='button-load' onClick={() => setLoad(load +1)}>Load more</div>
            {/*<button onClick={() => setLoadMode(autoLoad)}>Load all</button>*/}
        </div>
    );
}

export default PokemonList;