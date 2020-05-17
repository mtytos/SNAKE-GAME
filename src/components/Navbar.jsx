import React from "react";

const Navbar = () => {
    return (
        <nav className="nav-wraper deep-purple lighten-2">
            <div className="container">
                <a href="#!" className="brand-logo">Snake Game</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/mtytos/SNAKE-GAME">Source code</a></li>
                    <li><a href="https://github.com/mtytos">About author</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;