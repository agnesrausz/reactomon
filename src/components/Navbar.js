import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <div className="nav-pokeball">
            <nav>
                <ul className="nav-links">
                    <li><Link className="nav-style" to="/pokemons">Pokemons</Link></li>
                    <li><Link className="nav-style" to="/types">Poketypes</Link></li>
                </ul>
            </nav>
            <div className='nav-bottom'/>
            <Link className="circle nav-style" to="/">
            </Link>
        </div>

    );
}

export default Navbar;