import React, { useState } from 'react';
import { AllCards } from './Explore.js';
import { Card } from './Card.js';

export function QuizResults(props) {

    // if (coffeeType === userCoffeeType) {
    //     <Card coffeeType={userCoffeeType} />
    // }
    /* if coffee type/milk type/temperature/sweetness on the card = the user answer (transferred by state), display the card*/

    // const displayedCards = ;

    return (
        <div>
            <main className="quiz-page main-quiz-padding" >
                <h1 className="quiz-header">Quiz Results</h1>
                <div className="allCards">
                    {/* <AllCards drinks={props.drinks} /> */}
                    <Card />
                </div>
            </main>
        </div>
    );
}