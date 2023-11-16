import React, { useState } from 'react';

// For options, possibly make an array of objects that has key of answer number (like answer1) and then the value will have the answer (like Light)
// The question can possibly be the first thing in the prop as the id (like id="What generally is your favorite coffee roast?")
// [{questionNum=1, id="What generally is your favorite coffee roast?", ...}]
// Reference senators.json and dogs.json in problem 7 for ideas

// const questionsAndAnswers = [
//     {question: "a question", 
//     answers: [
//         "answer1", 
//         "answer2",
//         "answer3"]
//     },
//     {question: "another question",
//     answers: [
//         "answer1",
//         "answer2",
//         "answer3"
//     ]
//     }
// ];

// const answers = [{one: "Light", two: "Medium", three: "Medium-dark", four: "Dark", five: "No preference"}];
// const pAnswerArray = answers.map((answer) => {
//     const transformed = <p key={answer}>{answer}</p>;
//     return transformed;
// });

// const qAndA = [{question: "What generally is your favorite coffee roast", answers: {answers}}];

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
        "Regular (Whole, skim, 2%, etc.",
        "Soy",
        "Oat",
        
    ]}
];

const [questionNum, setQuestionNum] = useState(1);

const handleClick = (event) => {
    setQuestionNum(questionNum + 1);
}

function QuizQuestion(props) {
    const question = props.question;
    // const pQuestionElement = question.map(() => {
    //     const transformed = <p></p>;
    //     return transformed;
    // });
    return (
        <section className="question">
            {/* <p>Question #/##</p> */}
            {/* <p>What generally is your favorite coffee roast?</p> */}
            <p>Question {questionNum}/##</p>
            <p>{question}</p>
        </section>
    );
}

function QuizOption(props) {

    return (
        <section className="options">
            <div>
                {pAnswerArray};
            </div>
        </section>
    );
}

function QuizButton(props) {
    return (
        <section className="buttons">
            <div className="primary-button">Previous</div>
            <div className="primary-button" onClick={handleClick}>Next</div>
        </section>
    );
}

// maybe make its own component? Footers can all be the same generally except for quiz (due to color)
function QuizFooter(props) {
    return (
        <footer className="dark-footer">
            <p>&copy; Hannah Yi, Grace Suyama, Kayla Doan, Athena Le & INFO 340</p>
        </footer>
    );
}