//Functional copy of tv

// Define HTMLDecode function
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}

//variables
const classApiQuestion = document.querySelector('.api-question');
const classApiAnswer = document.querySelector('.api-answer');
const classApiScore = document.querySelector('.score-count');
const classApiTotalOfQuestions = document.querySelector('.total-questions');
const checkAnswerSpan = document.getElementById('check-answer');
const newGameBtn = document.getElementById('play-again');
const result = document.getElementById('result');

let correctAnswer = '', quizScore = counting = 0, totalQuestions = 10;
// let previousAnswerIndex = - 1;
let questionsTv = [];

document.addEventListener('DOMContentLoaded', () => {
    classApiScore.textContent = quizScore;
    classApiTotalOfQuestions.textContent = totalQuestions;
    loadQuestionsTv(); // Load questions when the game starts
});

async function loadQuestionsTv() {
    const APIUrl = `https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple`;
    const APIObjectTv = await fetch(APIUrl);
    const questionsData = await APIObjectTv.json();
    questionsTv = questionsData.results; // Store all questions in the global variable
    
    displayQuestion(); // Display the first question
}

function displayQuestion() {
    const question = questionsTv[counting];
    correctAnswer = question.correct_answer;
    let incorrectAnswers = question.incorrect_answers;
    let optionsList = [...incorrectAnswers];
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, correctAnswer);

    classApiQuestion.innerHTML = ''; 
    const questionDiv = document.createElement('div'); 
    questionDiv.classList.add('api-question');
    const questionHeader = document.createElement('h2'); 
    questionHeader.textContent = `Question ${counting + 1}: ${HTMLDecode(question.question)}`; 
    questionDiv.appendChild(questionHeader);                                                   
    classApiAnswer.innerHTML = ''; 

    optionsList.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('answer-option');
        answerButton.textContent = `${answerIndex + 1}. ${HTMLDecode(answer)}`; // Apply HTMLDecode to answer text

        answerButton.addEventListener('click', () => { 
            checkAnswer(answer); // Call checkAnswer when an option is selected
        });

        classApiAnswer.appendChild(answerButton);
    });

    classApiQuestion.appendChild(questionDiv); 
}

function checkAnswer(selectedAnswer) {
    checkAnswerSpan.innerHTML = ''; // Clear previous result
    if (selectedAnswer === correctAnswer) {
        quizScore++;
        classApiScore.textContent = quizScore;
        checkAnswerSpan.innerHTML = `<p><i class="right-answer"></i> Correct Answer!</p><br>`;
    } else {
        // quizScore = quizScore;
        checkAnswerSpan.innerHTML = `<p><i class="wrong-anser"></i> Incorrect Answer! <small><b>Correct Answer: </b>${HTMLDecode(correctAnswer)}</small></p>`;
    } 
    checkCount();
}

function checkCount() {
    counting++;
    setCount();
    if (counting === totalQuestions) {
        setTimeout(function() {
            console.log("");
        }, 5000);

        result.innerHTML += `<p>Your score is ${quizScore}.</p>`;
        goToEndPage()
        checkAnswerSpan.style.display = "none";
    } else {
        setTimeout(displayQuestion, 300); // Display the next question after a delay
    }
}

function setCount() {
    classApiTotalOfQuestions.textContent = totalQuestions;
    classApiScore.textContent = quizScore;

}
function goToEndPage (){
    window.location.href = `end-page.html`
}
// function calculateScore(answer, baseValue, bonusMultiplier) {
//     for (let correctAnswer = 0; correctAnswer < array.length; correctAnswer++) {
//         const element = array[correctAnswer];
        
//     }
// }