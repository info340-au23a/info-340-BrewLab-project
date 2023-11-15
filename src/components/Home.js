import React from 'react';

export function HomePage(props) {

    return (
        <main className="main">
            // Section 1: Home
            <div className="section1">
                <section className="home">
                    <div className="home-text">
                        <p>EXPLORE THE WORLD OF COFFEE</p>
                        <h1>Start Exploring <br> Personalized Coffee</h1>
                        <p>Connect with other coffee enthusiasts, discover customized coffee beyond the common menu.</p>
                        <a href="orders.html" className="home-btn">Get Started</a>
                    </div>
                    <div className="home-img">
                        <img src="img/bgvector.png" alt="">
                    </div>
                </section>
            </div>

            // Section 2:Custom orders
            <div className="section2">
                <section className="orders">
                    <div className="heading">
                        <h1>Share Custom Orders</h1>
                    </div>
                </section>
            </div>

            // Section 3:Tracker
            <div className="section3">
                <section className="tracker">
                    <div className="heading">
                        <h1>Track Your Drinks</h1>
                    </div>
                </section>
            </div>

            // Section 4:Quiz
            <div className="section4">
                <section className="quiz">
                    <div className="quiz-text">
                        <h1>Want to try something new?<br>Take our Coffee Quiz!</h1>
                        <a href="quiz.html" className="quiz-btn">Take Quiz</a>
                    </div>
                    <div className="home-img">
                        <img src="img/yellowcup.png" alt="a yellow cup with coffee">
                    </div>
                </section>
            </div>
        </main>
    );
}