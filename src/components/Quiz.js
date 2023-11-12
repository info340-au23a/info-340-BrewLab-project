import React from 'react';

function QuizQuestion(props) {
    const questionNum = props.questionNum;
    const question = props.question;
    // const pQuestionElement = question.map(() => {
    //     const transformed = <p></p>;
    //     return transformed;
    // });
    return (
        <section class="question">
            {/* <p>Question #/##</p> */}
            {/* <p>What generally is your favorite coffee roast?</p> */}
            <p>Question {questionNum}/##</p>
            <p>{question}</p>
        </section>
    );
}

function QuizOption(props) {

    return (
        <section class="options">
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
        <section class="buttons">
            <div class="primary-button">Previous</div>
            <div class="primary-button">Next</div>
        </section>
    );
}

// maybe make its own component
function QuizFooter(props) {
    return (
        <footer class="dark-footer">
            <p>&copy; Hannah Yi, Grace Suyama, Kayla Doan, Athena Le & INFO 340</p>
        </footer>
    );
}