import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function Quiz(props) {
    // int
    // init value = 1
    const [questionNum, setQuestionNum] = useState(1);
    const [userAnswers, setUserAnswers] = useState({});
    // if user's answer is this, recommend the ones with that on them
    /* if (userCoffeeType === espresso) {
        store in state, send to quiz results, pull cards that have coffeType = state
    }
    */
    const questionsAndAnswers = props.questionsAndAnswers;

    const handleClickAnswer = (event, answerString) => {
        if (questionNum === 1) {
            setUserAnswers({...userAnswers, coffeeType: answerString});
        } else if (questionNum === 2) {
            setUserAnswers({...userAnswers, milkType: answerString});
        } else if (questionNum === 3) {
            setUserAnswers({...userAnswers, temperature: answerString});
        } else if (questionNum === 4) {
            setUserAnswers({...userAnswers, sweetness: answerString});
        } else {
            setUserAnswers({...userAnswers, foam: answerString});
        }
    }

    // questionsAndAnswers will begin at 0 for the index of the array
    const liAnswersArray = questionsAndAnswers[questionNum - 1].answers.map((answerString) => {
        const transformed = <li key={answerString} onClick={(event) => handleClickAnswer(event, answerString)}>{answerString}</li>;
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
                <Link to={resultsPage} />
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
                    {/* <Link to="/quiz/results" className="primary-button">Submit</Link> */}
                </section>
            </main>
        );
    }
}