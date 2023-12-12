import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIntroduction from './AccountBar';
import MenuBar from './menuBar';
// import { Home } from './Home.js';
// import { Account } from './Account.js';
// import { Explore } from './Explore.js';
// import { Tracker } from './Tracker.js';
// import { Quiz } from './Quiz.js';


// json later?
const navBarLinks = [
    {linkTo: "home", linkName: "Home"}, 
    {linkTo: "explore", linkName: "Explore"}, 
    {linkTo: "tracker", linkName: "Tracker"}, 
    {linkTo: "quiz", linkName: "Quiz"}
];

export function NavigationBar(props) {

    const linkArray = navBarLinks.map((navLink) => {
        const transformed = <Link key={navLink.linkName} to={navLink.linkTo} className='nav__link'>{navLink.linkName}</Link>;
        return transformed;
    });

    const liArray = <li className='nav__item'>{linkArray}</li>;

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="home" className="nav__logo">
                    <i className="ri-cup-line" aria-label="Cup Logo"></i> BrewLab
                </Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {liArray}
                    </ul>

                    <MenuIntroduction {...props}/>

                </div>
                
                <div className='toggle'>
                    <MenuIntroduction {...props}/>
                    <MenuBar navBarLinks={navBarLinks}/>
                </div>
            </nav>
        </header>
    );
}