import React from 'react';

export function NavigationBar(props) {

    const navBarLinks = [{link: '../../project-draft/index.html', linkName: "Home"}, {link: '../../project-draft/explore.html', linkName: "Explore"}, {link: '../../project-draft/tracker.html', linkName: "Tracker"}, {link: '../../project-draft/quiz.html', linkName: "Quiz"}];

    const aLinkArray = navBarLinks.map((navLink) => {
        const transformed = <a key={navLink.linkName} href={navLink.link} className='nav__link'>{navLink.linkName}</a>;
        return transformed;
    });

    const liArray = <li className='nav__item'>{aLinkArray}</li>;

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    <i className="ri-cup-line"></i> BrewLab
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {liArray}
                    </ul>

                    <a href="account.html" className="nav__button">Login</a>

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