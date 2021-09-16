import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function PokemonDetail({match}) {

    const [pokemon, setPokemon] = useState([]);
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)

        console.log(poke.data)
        setPokemon(poke.data);
        setPicture(poke.data.sprites.other["official-artwork"].front_default);
    }

    return (
        <div>
            <div className="pokemon-details">
                <img className="img-details" src={picture} alt={pokemon.name}/>
                <div className="text-details">
                    <h2>{pokemon.name}</h2>
                    <div className="details"> </div>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
}

export default PokemonDetail;