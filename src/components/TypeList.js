import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function TypeList() {

    const [pokeTypes, setPokeTypes] = useState([]);

    useEffect(() => {
        fetchPokeTypes();
    }, [])

    const fetchPokeTypes = async () => {
        const types = await axios.get("https://pokeapi.co/api/v2/type")

        console.log(types.data.results);
        setPokeTypes(types.data.results);
    }

    return (
            <ul className='type-list'>
                {pokeTypes.map((type, index) => (
                    <li className={type.name + ' card-types type '} key={index + 1}>
                        <h2>
                            {type.name}
                        </h2>
                    </li>
                ))}
            </ul>
    );
}

export default TypeList;