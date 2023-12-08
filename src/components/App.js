import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavigationBar } from './Navigation.js';
import { Home } from './Home.js';
import { Explore } from './Explore.js';
import { Tracker } from './Tracker.js';
import { Tracker2 } from './Tracker2.js';
import { Quiz } from './Quiz.js';
import { QuizResults } from './QuizResults.js';
import { Account } from './Account.js';
import { Footer } from './Footer.js';

import QUIZ_CONTENT from '../data/quiz_content.json';
import COFFEE_TYPES from '../data/explore_coffee.json';
import TEMPERATURE from '../data/explore_temperature.json';
import MILK_TYPES from '../data/explore_milk.json';
import SignInPage from './SignInPage.js';

export default function App(props) {
    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/explore" element={<Explore coffeeTypes={COFFEE_TYPES} temperature={TEMPERATURE} milkTypes={MILK_TYPES} />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/tracker2" element={<Tracker2 />} />   
                <Route path="/quiz" element={<Quiz questionsAndAnswers={QUIZ_CONTENT} />} />
                <Route path="/quiz/results" element={<QuizResults />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </div>
    );
}