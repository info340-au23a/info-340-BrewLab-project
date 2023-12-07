import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Card } from './Explore.js';

export function QuizResults(props) {
    const quizParams = useParams();
    const results = quizParams.results;
    console.log(results);
    return (
        <main className="quiz-page main-quiz-padding" >
            <h1 className="quiz-header">Quiz Results</h1>
            <div className="allCards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    );
}