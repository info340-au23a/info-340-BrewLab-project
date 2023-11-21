import React, { useState } from 'react';

// will i need to import navigation bar?
import { Footer } from './Footer.js';

// make into a json later?
const questionsAndAnswers = [
    {question: "What type of coffee do you like?",
    answers: [
        "Espresso",
        "Macchiato",
        "Cappucino",
        "Mocha",
        "Flat White",
        "Americano",
        "Latte",
        "I make custom drinks",
        "I don't normally drink coffee"
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
        "I like no milk"
    ]},
    {question: "Do you like your coffee hot or cold?",
    answers: [
        "Hot",
        "Cold",
        "Doesn't matter to me"
    ]},
    {question: "Do you like foam?",
    answers: [
        "Yes",
        "No",
        "I don't care",
        "I like flavored foam only"
    ]},
    {question: "How sweet do you like your coffee?",
    answers: [
        "Super sweet (100% sugar)",
        "Semi-sweet (50% sugar)",
        "Not sweet at all (0% sugar)"
    ]}
];

export function Quiz(props) {

    // int
    const [questionNum, setQuestionNum] = useState(1);

    // string
    const [questionDisplayed, setQuestionDisplayed] = useState(questionsAndAnswers[0].question);

    // array of strings
    const [answersDisplayed, setAnswersDisplayed] = useState(questionsAndAnswers[0].answers);

    const pAnswersArray = answersDisplayed.map((answerString) => {
        const transformed = <p>{answerString}</p>;
        return transformed;
    })

    // find out how to not go past the questions (over questionsAndAnswers.length)
    // when last question maybe change to submit button instead and then will render a new page with recs
    const handleClickNext = (event) => {
        setQuestionDisplayed(questionsAndAnswers[questionNum].question);
        setAnswersDisplayed(questionsAndAnswers[questionNum].answers);
        setQuestionNum(questionNum + 1);
    }

    // find out how to not go before question 1
    // make the prev button not show up when question 1? 
    const handleClickPrev = (event) => {
        setQuestionDisplayed(questionsAndAnswers[questionNum - 1].question);
        setAnswersDisplayed(questionsAndAnswers[questionNum - 1].answers);
        setQuestionNum(questionNum - 1);
    }

    return (
        <div className="quiz-page">
            <div>
                {/* <QuizQuestion questions={questionsAndAnswers.question} questionNum={questionNum} />
                <QuizAnswers answers={questionsAndAnswers.answers} /> */}
                <h1 className="quiz-header">Coffee Quiz</h1>

                <section className="question">
                    <p>Question {questionNum}/{questionsAndAnswers.length}</p>
                    <p>{questionDisplayed}</p>
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
                {/* <Footer className="dark-footer" /> */}
                {/* <QuizFooter/> */}
            </div>
        </div>
    );
}

/*  


/* <body className="quiz-page">
  

  <main>

  </main>

  <footer className="dark-footer">
    <p>&copy; Hannah Yi, Grace Suyama, Kayla Doan, Athena Le & INFO 340</p>
  </footer>
</body> */

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