import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet} from 'react-router-dom';
import { NavigationBar } from './Navigation.js';
import { Home } from './Home.js';
import { Explore } from './Explore.js';
import { Tracker } from './Tracker.js';
import { Quiz } from './Quiz.js';
import { Account } from './Account.js';
import { Footer } from './Footer.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import QUIZ_CONTENT from '../data/quiz_content.json';
import COFFEE_TYPES from '../data/explore_coffee.json';
import TEMPERATURE from '../data/explore_temperature.json';
import MILK_TYPES from '../data/explore_milk.json';
import DRINKS from '../data/drink_cards.json';
import SignInPage from './SignInPage.js';
import DEFAULT_USERS from '../data/users.json';

export default function App(props) {

    const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]);

    useEffect(() => {
        const auth = getAuth();

        const unregisterFunction = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) { //firebaseUser defined: is logged in
                console.log('logged in', firebaseUser);
                firebaseUser.userId = firebaseUser.uid;
                firebaseUser.userName = firebaseUser.displayName;
                firebaseUser.userImg = firebaseUser.photoURL || "/img/profile-picture.jpg";
                firebaseUser.joinedDate = firebaseUser.metadata.creationTime;

                setCurrentUser(firebaseUser);
            }
            else { //firebaseUser is undefined: is not logged in
                console.log('logged out');
                setCurrentUser(DEFAULT_USERS[0]);
            }
        });

        function cleanup() {
            console.log('Cleanup is being called...');
            unregisterFunction(); //call the unregister function
        }

        return cleanup; //effect hook callback returns the cleanup function
    })


    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/explore"
                    element={<Explore
                        coffeeTypes={COFFEE_TYPES}
                        temperature={TEMPERATURE}
                        milkTypes={MILK_TYPES}
                        drinks={DRINKS} />}
                />
                <Route path="/tracker" 
                    element={ <Tracker currentUser={currentUser}/> }
                />

                <Route path="/quiz/:results?" element={<Quiz questionsAndAnswers={QUIZ_CONTENT} drinks={DRINKS} />} />
                {/* <Route element={<RequireAuth />}> */}
                    <Route path="/signin" element={<SignInPage currentUser={currentUser} />} />
                    <Route path="/account" element={<Account currentUser={currentUser} drinks={DRINKS} /> } />
                {/* </Route> */}
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </div>
    );
}


// function RequireAuth(currentUser !== null) {
//     let userIsLoggedIn = true;
//     if (!userIsLoggedIn) {
//         return <p> Please Sign in </p>
//     } else {
//         return <Outlet />
//     }
// }