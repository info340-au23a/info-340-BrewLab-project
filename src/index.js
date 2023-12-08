import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';

import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI_r2YFvhuA6kytbqHEK3JjppZgFNYEK0",
  authDomain: "info340-au23-brewlab.firebaseapp.com",
  projectId: "info340-au23-brewlab",
  storageBucket: "info340-au23-brewlab.appspot.com",
  messagingSenderId: "344838453993",
  appId: "1:344838453993:web:0266e91e1d10433d968e78"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();