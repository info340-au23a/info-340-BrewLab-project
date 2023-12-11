import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AllCards } from './Cards.js';

export function Quiz(props) {
    // what the user selects for each question gets save into this object (key is the question thing, value is their answer)
    const [userAnswers, setUserAnswers] = useState({});

    // content to be shown whether it's the questions or the recommended drink results for the user
    return (
        <div>
            <PageContent
                // json file that was imported and passed in from App.js, has each question along with their answers for quiz
                questionsAndAnswers={props.questionsAndAnswers}

                // the state and set state for results
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}

                // json file that was imported and passed in from App.js, has each drink along with their ingredients for results 
                drinks={props.drinks}
            />
        </div>
    );
}

// 
function PageContent(props) {
    // checks for parameters in the /quiz path
    const quizParams = useParams();
    const currentPage = quizParams.results;

    // if the params has /results at the end, it returns the results page, otherwise the quiz page is shown
    if (currentPage === "results") {
        return (
            <ResultsPage
                // passes user answers and drinks to show out of the users' answers what drinks to show
                userAnswers={props.userAnswers}
                drinks={props.drinks}
            />
        )
    } else {
        return (
            <QuizPage
                // passes user answers, setting the users answers, and the questions and answers to keep track of what options are selected and saved
                userAnswers={props.userAnswers}
                setUserAnswers={props.setUserAnswers}
                questionsAndAnswers={props.questionsAndAnswers}
            />
        )
    }
}

function QuizPage(props) {
    // starts the question number at 1 but can go back and forth between 1 and 5, only needed for the quiz portion of content
    const [questionNum, setQuestionNum] = useState(1);

    // all of the props passed as a constant variable
    const questionsAndAnswers = props.questionsAndAnswers;
    const userAnswers = props.userAnswers;
    const setUserAnswers = props.setUserAnswers;

    // handle click event for the user's answers, saves what they select into state in the exported function
    const handleClickAnswer = (event, answerString) => {
        if (questionNum === 1) {
            setUserAnswers({ ...userAnswers, coffeeType: answerString });
        } else if (questionNum === 2) {
            setUserAnswers({ ...userAnswers, milkType: answerString });
        } else if (questionNum === 3) {
            setUserAnswers({ ...userAnswers, temperature: answerString });
        } else if (questionNum === 4) {
            setUserAnswers({ ...userAnswers, sweetness: answerString });
        } else {
            setUserAnswers({ ...userAnswers, foam: answerString });
        }
    }

    // questionsAndAnswers will begin at 0 for the index of the array, all of the answers of one question
    const buttonAnswersArray = questionsAndAnswers[questionNum - 1].answers.map((answerString) => {
        const transformed = <button key={answerString} onClick={(event) => handleClickAnswer(event, answerString)}>{answerString}</button>;
        return transformed;
    })

    // handle click event for the next button (only next, not submit)
    const handleClickNext = (event) => {
        if (questionNum >= 1 && questionNum < questionsAndAnswers.length) {
            setQuestionNum(questionNum + 1);
        }
    }

    // handle click event for the previous button (does not show up on question 1)
    const handleClickPrev = (event) => {
        if (questionNum <= questionsAndAnswers.length && questionNum > 1) {
            setQuestionNum(questionNum - 1);
        }
    }

    // returns different screens based on which question it is on (mainly just affects the buttons)
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
                            {buttonAnswersArray}
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
                        {buttonAnswersArray}
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
                        {buttonAnswersArray}
                    </div>
                </section>

                <section className="buttons">
                    <div className="primary-button" onClick={handleClickPrev}>Previous</div>
                    {/* Links to the results params page */}
                    <Link to="/quiz/results" className="primary-button">Submit</Link>
                </section>
            </main>
        );
    }
}

function ResultsPage(props) {
    return (
        <div>
            <main className="quiz-page main-quiz-padding" >
                <h1 className="quiz-header">Quiz Results</h1>
                <div className="allCards">
                    <AllCards drinks={props.drinks} quizAnswers={props.userAnswers} pageResult="quiz" />
                </div>
            </main>
        </div>
    )
}
