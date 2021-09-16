import React from 'react';
import {Link} from "react-router-dom";


function PokemonCard({index,pictures,pokemon,types}) {
    return (
        <li className={types[index] + ' card pokemon '} key={index + 1}>
            <Link className="poke-link-style" to={`/pokemon/${index + 1}`}>
                <img className={`img-list ${types[index]}`} src={pictures[index]} alt={pokemon.name}/>
                <h3 >{pokemon.name}</h3>
            </Link>
        </li>

    );
}

export default PokemonCard;