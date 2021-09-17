import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function PokemonDetail({match}) {

    const [pokemon, setPokemon] = useState([]);
    const [picture, setPicture] = useState([]);
    const [type, setType] = useState([]);
    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)

        console.log(poke.data)
        setPokemon(poke.data);
        setPicture(poke.data.sprites.other["official-artwork"].front_default);
        setType(poke.data.types[0].type.name)
        setTypes(poke.data.types)
        setAbilities(poke.data.abilities)

    }

    return (
        <div>
            <div className="pokemon-details">
                <div className={"card-details " + type}>
                    <img className="img-details" src={picture} alt={pokemon.name}/>
                </div>
                <div className="text-details">
                    <h1>{pokemon.name}</h1>
                    <h2 className="details">
                        <ul>
                            <li>Type:
                                <ul>
                                    {types.map((type, index) => (
                                        <li key={index}>
                                            {type.type.name}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>Abilities:
                                <ul>
                                    {abilities.map((ability, index) => (
                                        <li key={index}>
                                            {ability.ability.name}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </h2>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
}

export default PokemonDetail;