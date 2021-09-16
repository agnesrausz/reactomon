import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function PokemonDetail({match}) {

    const id3digits = match.params.id.length < 2 ? "00" + match.params.id :
        (match.params.id.length < 3 ? "0" + match.params.id : match.params.id);

    const pictureLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id3digits}.png`;

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetchPokemon();
    }, [])

    const fetchPokemon = async () => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)

        console.log(poke.data.name)
        setPokemon(poke.data);
    }

    return (
        <div>
            <div>
                <img src={pictureLink} alt="pokemon.name"/>
                <p className='pokemon'>{pokemon.name}</p>
            </div>
            <div>

            </div>
        </div>
    );
}

export default PokemonDetail;