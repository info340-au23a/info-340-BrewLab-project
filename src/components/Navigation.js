import React from 'react';
import { Home } from './Home.js';
import { Account } from './Account.js';
import { Explore } from './Explore.js';
import { Tracker } from './Tracker.js';
import { Quiz } from './Quiz.js';

export function NavigationBar(props) {

    const navBarLinks = [
        {link: {Home}, linkName: "Home"}, 
        {link: {Explore}, linkName: "Explore"}, 
        {link: {Tracker}, linkName: "Tracker"}, 
        {link: {Quiz}, linkName: "Quiz"}
    ];
    // const navBarLinks = [{link: {HomePage}, linkName: "Home"}, {link: {Explore}, linkName: "Explore"}, {link: {Tracker}, linkName: "Tracker"}, {link: {Quiz}, linkName: "Quiz"}];

    const aLinkArray = navBarLinks.map((navLink) => {
        const transformed = <a key={navLink.linkName} href={navLink.link} className='nav__link'>{navLink.linkName}</a>;
        return transformed;
    });

    const liArray = <li className='nav__item'>{aLinkArray}</li>;
    // liArray = 
    // <li class="nav__item">
    //     <a href="quiz.html" class="nav__link">Quiz</a> (aLinkArray, each one of these links for each page)
    // </li>

    return (
        <header className="header">
            <nav className="nav container">
                {/* href={Home}? */}
                <a href="index.html" className="nav__logo">
                    <i className="ri-cup-line"></i> BrewLab
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {liArray}
                    </ul>

                    <a href={Account} className="nav__button">Login</a>

                    <div className="nav__close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                <div className="'toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
        </header>
    );
}