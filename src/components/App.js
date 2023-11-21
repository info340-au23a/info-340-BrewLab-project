import React from 'react';

import { NavigationBar } from './Navigation.js';
import { Quiz } from './Quiz.js';
import { Footer } from './Footer.js';

export default function App(props) {
    return (
        <div>
            <NavigationBar />
            {/* <Quiz /> */}
            <Footer />
        </div>
    )
}