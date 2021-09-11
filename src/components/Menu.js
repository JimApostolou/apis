import React from 'react';
import { Link } from 'react-router-dom';
import "../Components.css";

const Menu = () => {

    return(
        <nav className="navbar">
            <ul className="menu-ul">
                <li className="menu-li">
                    <Link className="links" to="/">Bored</Link>
                </li>
                <li className="menu-li">
                    <Link className="links" to="/currency">Currency</Link>
                </li>
                <li className="menu-li">
                    <Link className="links" to="/cocktails">Cocktails</Link>
                </li>
                <li className="menu-li">
                    <Link className="links" to="/deck">Deck</Link>
                </li>
            </ul>
        </nav>
    );

}

export default Menu;