import React from 'react';
import { Link } from 'react-router-dom';
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

                    {props ? (
                        <Link to="/account" className="nav__button">Account</Link>
                        ) : (
                        <Link to="signin" className="nav__button">Login</Link>
                    )}
                    
                </div>

                <div className="'toggle">
                    <i className="ri-menu-line" aria-label="Menu Icon"></i>
                </div>
            </nav>
        </header>
    );
}