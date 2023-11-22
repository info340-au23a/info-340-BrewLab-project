import React from 'react';

import { NavigationBar } from './Navigation.js';
import { Home } from './Home.js';
import { Explore } from './Explore.js';
// import { Tracker } from './Tracker.js';
import { Quiz } from './Quiz.js';
import { Account } from './Account.js';
import { Footer, DarkFooter } from './Footer.js';

export default function App(props) {
    return (
        <div>
            <NavigationBar />
            {/* <Home /> */}
            <Explore />
            {/* <Tracker /> */}
            {/* <Quiz /> */}
            {/* <DarkFooter /> */}
            {/* <Account /> */}
            <Footer />
        </div>
    );
}