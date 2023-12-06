import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavigationBar } from './Navigation.js';
import { Home } from './Home.js';
import { Explore } from './Explore.js';
import { Tracker } from './Tracker.js';
import { Tracker2 } from './Tracker2.js';
import { Quiz } from './Quiz.js';
import { Account } from './Account.js';
import { Footer } from './Footer.js';

export default function App(props) {
    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/tracker2" element={<Tracker2 />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </div>
    );
}