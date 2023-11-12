import React from 'react';

// For options, possibly make an array of objects that has key of answer number (like answer1) and then the value will have the answer (like Light)
// The question can possibly be the first thing in the prop as the id (like id="What generally is your favorite coffee roast?")
// [{questionNum=1, id="What generally is your favorite coffee roast?", ...}]
// Reference senators.json and dogs.json in problem 7 for ideas

function QuizQuestion(props) {
    const questionNum = props.questionNum;
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
                <p>Light</p>
                <p>Medium</p>
                <p>Medium-dark</p>
                <p>Dark</p>
                <p>No preference</p>
            </div>
        </section>
    );
}

function QuizButton(props) {
    return (
        <section className="buttons">
            <div className="primary-button">Previous</div>
            <div className="primary-button">Next</div>
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