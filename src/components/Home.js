import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <main className="main">
            {/* Section 1: Home */}
            <div className="home-section">
                <section className="home">
                    <div className="home-text">
                    <p>EXPLORE THE WORLD OF COFFEE</p>
                        <h1>Start Exploring</h1>
                        <h1>Personalized Coffee</h1>
                        <p>Connect with other coffee enthusiasts, discover</p>
                        <p>customized coffee beyond the common menu.</p>
                        <Link to="/explore" className="home-btn">Get Started</Link>  
                    </div>
                </section>
            </div>

            {/* Section 2: Custom Coffee Orders */}
            <div className="orders-section">
                <section className="orders">
                    <div className="heading">
                        <h1>Share Custom Orders</h1>
                    </div>
                    <div className="home-order-img">
                        <img src={process.env.PUBLIC_URL + '/img/explorepagepreview.png'} alt="preview of custom coffee explore page" />
                    </div>
                    <Link to="/explore" className="order-btn">Explore More</Link>
                </section>
            </div>

            {/* Section 3: Tracker */}
            <div className="tracker-section">
                <section className="tracker">
                    <div className="heading">
                        <h1>Track Your Drinks</h1>
                    </div>
                    <div className="home-tracker-img">
                        <img src={process.env.PUBLIC_URL + '/img/trackerpreview.png'} alt="preview of the tracker page" />
                    </div>
                    <Link to="/tracker" className="order-btn">Log drink</Link>
                </section>
            </div>

            {/* Section 4: Quiz */}
            <div className="quiz-section">
                <section className="quiz">
                    <div className="quiz-text">
                        <h1>Want to try something new?</h1>
                        <h1>Take our Coffee Quiz!</h1>
                        <Link to="/quiz" className="quiz-btn">Take Quiz</Link>
                    </div>
                    <div className="home-quiz-img">
                        <img src="../img/yellowcup.png" alt="a yellow cup with coffee" /> 
                    </div>
                </section>
            </div>
        </main>
    );
}

