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
    {question: "What type of coffee do you generally drink?",
    answers: [
        "Espresso",
        "Macchiato",
        "Cappucino",
        "Mocha",
        "Flat White",
        "Americano",
        "Latte",
        "I make custom drinks"
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
    ]},
    {question: "How much foam do you add to your drink?",
    answers: [
        "Small amount",
        "Medium amount",
        "Large amount",
        "I don't like foam"
    ]}
];

export function Quiz(props) {

    const [questionNum, setQuestionNum] = useState(1);
    const [questionDisplayed, setQuestionDisplayed] = useState(questionsAndAnswers[1].question);
    const [answersDisplayed, setAnswersDisplayed] = useState(questionsAndAnswers[1].answers);

    const handleClickNext = (event) => {
        setQuestionDisplayed(questionsAndAnswers[questionNum].question);
        setAnswersDisplayed(questionsAndAnswers[questionNum].answers);
        setQuestionNum(questionNum + 1);
    }

    const handleClickPrev = (event) => {
        setQuestionDisplayed(questionsAndAnswers[questionNum].question);
        setAnswersDisplayed(questionsAndAnswers[questionNum].answers);
        setQuestionNum(questionNum - 1);
    }

    return (
        <div>
            {/* <QuizQuestion questions={questionsAndAnswers.question} questionNum={questionNum} />
            <QuizAnswers answers={questionsAndAnswers.answers} /> */}
            <section className="buttons">
                <div className="primary-button" onClick={handleClickPrev}>Previous</div>
                <div className="primary-button" onClick={handleClickNext}>Next</div>
            </section>
            {/* <Footer className="dark-footer" /> */}
            {/* <QuizFooter/> */}
        </div>
    );
}

// function QuizQuestion(props) {
//     const pQuestionsArray = props.questions.map((questionString) => {
//         const transformed = <p key={questionString}>{questionString}</p>;
//         return transformed;
//     });

//     return (
//         <section className="question">
//             <p>Question {props.questionNum}/##</p>
//             {pQuestionsArray}
//         </section>
//     );
// }

// function QuizAnswers(props) {
//     // props.answers.map = looping through the whole questionsAndAnswers looking for the answers prop (which will return [ [answers: "..., ..., ..."], [answers: "..., ..."] ] or an array of arrays)
//     // answerArray.map = looping through the given array determined above and going through each individual array to find the strings, which will return ["...", "...", "..."] or an array of strings
//     const pAnswersArray = props.answers.map((answerArray) => {
//         const arrayAnswerStrings = answerArray.map((answerString) => {
//             const transformed = <p>{answerString}</p>;
//             return transformed;
//         });
//         return arrayAnswerStrings;
//     });
    
//     return (
//         <section className="options">
//             <div>
//                 {pAnswersArray};
//             </div>
//         </section>
//     );
// }

// function QuizButton(props) {
//     // need state and the event handlers in here as well? or pass it on thru the props arg?
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