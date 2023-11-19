import React from 'react';

import { NavigationBar } from './components/Navigation.js';
import { Footer } from './components/Footer.js';

export default function App(props) {
    return (
        <div>
            <NavigationBar />
            <Footer />
        </div>
    )
}