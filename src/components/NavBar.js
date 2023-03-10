import React from 'react';
// hi

export default function NavBar({ pageChangeHandler }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">Markus Mercado</span>
            <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                <a href="#aboutme" onClick={() => pageChangeHandler('About Me')}>About Me</a>
                </li>

                <li className="nav-item">
                <a href="#projects" onClick={() => pageChangeHandler('Projects')}>Projects</a>
                </li>

                <li className="nav-item">
                <a href="#Resume" onClick={() => pageChangeHandler('Resume')}>Resume</a>
                </li>
                
                <li className="nav-item">
                <a href="#contactme" onClick={() => pageChangeHandler('Contact Me')}>Contact Me</a>
                </li>

            </ul>
        </nav>
    )
}
