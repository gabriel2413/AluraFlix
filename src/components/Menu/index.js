import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from "../Button";
import './Menu.css';

export default function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraflixLogo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}