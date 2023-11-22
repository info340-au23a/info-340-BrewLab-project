import React, { useState } from 'react';
// will i need to import navigation bar?

// make into a json later?
const questionsAndAnswers = [
    {
        question: "What type of coffee do you like?",
        answers: [
            "Espresso",
            "Macchiato",
            "Cappucino",
            "Mocha",
            "Flat white",
            "Americano",
            "Latte",
            "I make custom drinks",
            "I don't normally drink coffee"
        ]
    },
    {
        question: "What milk do you use?",
        answers: [
            "Regular (Whole, skim, 2%, etc.)",
            "Soy",
            "Oat",
            "Almond",
            "Coconut",
            "Hazelnut",
            "Goat",
            "I like no milk"
        ]
    },
    {
        question: "Do you like your coffee hot or cold?",
        answers: [
            "Hot",
            "Cold",
            "Doesn't matter to me"
        ]
    },
    {
        question: "Do you like foam?",
        answers: [
            "Yes",
            "No",
            "I don't care",
            "I like flavored foam only"
        ]
    },
    {
        question: "How sweet do you like your coffee?",
        answers: [
            "Super sweet (100% sugar)",
            "Semi-sweet (50% sugar)",
            "Not sweet at all (0% sugar)"
        ]
    }
];

export function Quiz(props) {
    // int
    // init value = 1
    const [questionNum, setQuestionNum] = useState(1);

    // questionsAndAnswers will begin at 0 for the index of the array
    const pAnswersArray = questionsAndAnswers[questionNum - 1].answers.map((answerString) => {
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

    // make each return its own private function to clean up this section?
    if (questionNum == 1) {
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
                            {pAnswersArray}
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
                        {pAnswersArray}
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
                        {pAnswersArray}
                    </div>
                </section>

                <section className="buttons">
                    <div className="primary-button" onClick={handleClickPrev}>Previous</div>
                    <div className="primary-button" onClick={handleClickNext}>Submit</div>
                </section>
            </main>
        );
    }
}