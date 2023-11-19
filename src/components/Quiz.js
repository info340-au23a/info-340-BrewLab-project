import React, { useState } from 'react';
import { Footer } from './Footer.js';

// make into a json later?
const questionsAndAnswers = [
    {question: "What generally is your favorite coffee roast?",
    answers: [
        "Light",
        "Medium",
        "Medium-dark",
        "Dark",
        "No preference"
    ]},
    {question: "What milk do you use?",
    answers: [
        "Regular (Whole, skim, 2%, etc.)",
        "Soy",
        "Oat",
        "Almond",
        "Coconut",
        "Hazelnut",
        "Goat",
        "I like it black"
    ]},
    {question: "Do you like your coffee hot or cold?",
    answers: [
        "Hot",
        "Cold",
        "Doesn't matter to me"
    ]}
];

export function Quiz(props) {

    // const [questionNum, setQuestionNum] = useState(1);

    // const handleClickNext = (event) => {
    //     setQuestionNum(questionNum + 1);
    // }

    // const handleClickPrev = (event) => {
    //     setQuestionNum(questionNum - 1);
    // }

    return (
        <div>
            <QuizQuestion questions={questionsAndAnswers.question} />
            <QuizAnswers answers={questionsAndAnswers.answers} />
            {/* <QuizButton /> */}
            {/* <Footer className="dark-footer" /> */}
            {/* <QuizFooter/> */}
        </div>
    );
}

function QuizQuestion(props) {
    const pQuestionsArray = props.questions.map((questionString) => {
        const transformed = <p key={questionString}>{questionString}</p>;
        return transformed;
    });

    return (
        <section className="question">
            <p>Question #/##</p>
            {/* <p>What generally is your favorite coffee roast?</p> */}
            {/* <p>Question {questionNum}/##</p> */}
            {pQuestionsArray}
        </section>
    );
}

function QuizAnswers(props) {
    // props.answers.map = looping through the whole questionsAndAnswers looking for the answers prop (which will return [ [answers: "..., ..., ..."], [answers: "..., ..."] ] or an array of arrays)
    // answerArray.map = looping through the given array determined above and going through each individual array to find the strings, which will return ["...", "...", "..."] or an array of strings
    const pAnswersArray = props.answers.map((answerArray) => {
        const arrayAnswerStrings = answerArray.map((answerString) => {
            const transformed = <p>{answerString}</p>;
            return transformed;
        });
        return arrayAnswerStrings;
    });
    
    return (
        <section className="options">
            <div>
                {options};
            </div>
        </section>
    );
}

// function QuizButton(props) {
//     return (
//         <section className="buttons">
//             <div className="primary-button" onClick={handleClickPrev}>Previous</div>
//             <div className="primary-button" onClick={handleClickNext}>Next</div>
//         </section>
//     );
// }

// maybe make its own component? Footers can all be the same generally except for quiz (due to color)
// function QuizFooter(props) {
//     return (
//         <footer className="dark-footer">
//             <p>&copy; Hannah Yi, Grace Suyama, Kayla Doan, Athena Le & INFO 340</p>
//         </footer>
//     );
// }