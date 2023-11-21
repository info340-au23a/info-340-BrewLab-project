import React from 'react';

import { NavigationBar } from './Navigation.js';
import { Home } from './Home.js';
import { Footer } from './Footer.js';

export default function App(props) {
    return (
        <div>
            <NavigationBar />
            <Home />
            <Footer />
        </div>
    );
}