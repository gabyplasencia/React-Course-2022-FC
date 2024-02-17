import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="logo" src="./react-logo.png" width="40px" />
                <ul className="nav__list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}