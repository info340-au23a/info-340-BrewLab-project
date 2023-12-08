import React, { useState } from 'react';
import { Card } from './Explore.js';

export function QuizResults(props) {
    return (
        <div>
            <main className="quiz-page main-quiz-padding" >
                <h1 className="quiz-header">Quiz Results</h1>
                <div className="allCards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
    );
}