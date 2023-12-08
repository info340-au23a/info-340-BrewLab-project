import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import { Footer } from './Footer.js';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 

const firebaseUIConfig = {
    signInOptions: [ 
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
}

export default function SignInPage(props) {

    const {currentUser, changeUserFunction} = props;

    return (
        <main className='main-signIn'>
            <div className='sign-in'>
                <div className="card bg-light">
                    <div className="block-container">
                        <h1>Sign-in:</h1>
                        <StyledFirebaseAuth firebaseAuth={getAuth()} 
                        uiConfig={firebaseUIConfig} />
                    </div>
                </div>
            </div>
        </main>
    );
}