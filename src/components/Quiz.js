import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Card } from './Explore.js';

export function Quiz(props) {
    // int
    // init value = 1
    const [questionNum, setQuestionNum] = useState(1);
    const questionsAndAnswers = props.questionsAndAnswers;

    // questionsAndAnswers will begin at 0 for the index of the array
    const liAnswersArray = questionsAndAnswers[questionNum - 1].answers.map((answerString) => {
        const transformed = <li key={answerString}>{answerString}</li>;
        return transformed;
    })

    // when last question maybe change to submit button instead and then will render a new page with recs
    const handleClickNext = (event) => {
        // if question num is 1 or greater and is less than 5 (don't want to be able to click next on question 5, will change to a submit button later)
        if (questionNum >= 1 && questionNum < questionsAndAnswers.length) {
            setQuestionNum(questionNum + 1);
        }
    }

    const handleClickPrev = (event) => {
        // if question num is 5 or less and is greater than 1 (don't want to be able to click prev on question 1, will possibly make it not visible later)
        if (questionNum <= questionsAndAnswers.length && questionNum > 1) {
            setQuestionNum(questionNum - 1);
        }
    }

    const quizParams = useParams();
    const resultsPage = quizParams.results;
    
    const handleClickSubmit = (event) => {
        return (
            <div>
                <Link to={"/quiz/results"}>Submit</Link>
                <QuizResults results={resultsPage} />
            </div>
        );
    }

    // make each return its own private function to clean up this section?
    if (questionNum === 1) {
        return (
            <main className="quiz-page main-quiz-padding">
                <h1 className="quiz-header">Coffee Quiz</h1>

                <section className="question">
                    <p>Question {questionNum}/{questionsAndAnswers.length}</p>
                    <p>{questionsAndAnswers[questionNum - 1].question}</p>
                </section>

                <section className="options">
                    <div>
                        <ul>
                            {liAnswersArray}
                        </ul>
                    </div>
                </section>

                <section className="buttons">
                    <div className="primary-button" onClick={handleClickNext}>Next</div>
                </section>
            </main>
        );
    } else if (questionNum > 1 && questionNum < 5) {
        return (
            <main className="quiz-page main-quiz-padding">
                <h1 className="quiz-header">Coffee Quiz</h1>

                <section className="question">
                    <p>Question {questionNum}/{questionsAndAnswers.length}</p>
                    <p>{questionsAndAnswers[questionNum - 1].question}</p>
                </section>

                <section className="options">
                    <div>
                        {liAnswersArray}
                    </div>
                </section>

                <section className="buttons">
                    <div className="primary-button" onClick={handleClickPrev}>Previous</div>
                    <div className="primary-button" onClick={handleClickNext}>Next</div>
                </section>
            </main>
        );
    } else {
        return (
            <main className="quiz-page main-quiz-padding">
                <h1 className="quiz-header">Coffee Quiz</h1>

                <section className="question">
                    <p>Question {questionNum}/{questionsAndAnswers.length}</p>
                    <p>{questionsAndAnswers[questionNum - 1].question}</p>
                </section>

                <section className="options">
                    <div>
                        {liAnswersArray}
                    </div>
                </section>

                <section className="buttons">
                    <div className="primary-button" onClick={handleClickPrev}>Previous</div>
                    <div className="primary-button" onClick={handleClickSubmit}>Submit</div>
                </section>
            </main>
        );
    }
}

function QuizResults(props) {
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

// function QuizResults(props) {
//     return (
//         <main className="quiz-page main-quiz-padding" >
//             <h1 className="quiz-header">Quiz Results</h1>
//             <div className="allCards">
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//         </main>
//     );
// }