import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    const navStyle = {
        color: "white",
        textDecoration: "none"
    };

    return (
        <div className="nav-pokeball">
            <nav>
                <ul className="nav-links">
                    <li><Link style={navStyle} to="/pokemons">Pokemons</Link></li>
                    <li><Link style={navStyle} to="/types">Poketypes</Link></li>
                </ul>
            </nav>
            <div className='nav-bottom'/>
            <Link className='circle' style={navStyle} to="/">
            </Link>
        </div>

    );
}

export default Navbar;