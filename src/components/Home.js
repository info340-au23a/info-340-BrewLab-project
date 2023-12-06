import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <main className="main">
            {/* Section 1: Home */}
            <div className="section1">
                <section className="home">
                    <div className="home-text">
                    <p>EXPLORE THE WORLD OF COFFEE</p>
                        <h1>Start Exploring <div>Personalized Coffee</div></h1>
                        <p>Connect with other coffee enthusiasts, discover customized coffee beyond the common menu.</p>
                        <Link to="/explore" className="home-btn">Get Started</Link>  
                    </div>
                </section>
            </div>

            {/* Section 2: Custom Orders */}
            <div className="section2">
                <section className="orders">
                    <div className="heading">
                        <h1>Share Custom Orders</h1>
                    </div>
                </section>
            </div>

            {/* Section 3: Tracker */}
            <div className="section3">
                <section className="tracker">
                    <div className="heading">
                        <h1>Track Your Drinks</h1>
                    </div>
                </section>
            </div>

            {/* Section 4: Quiz */}
            <div className="section4">
                <section className="quiz">
                    <div className="quiz-text">
                        <h1>Want to try something new?<div>Take our Coffee Quiz!</div></h1>
                        <Link to="/quiz" className="quiz-btn">Take Quiz</Link>
                    </div>
                    <div className="home-img">
                        <img src="../img/yellowcup.png" alt="a yellow cup with coffee" /> 
                    </div>
                </section>
            </div>
        </main>
    );
}
