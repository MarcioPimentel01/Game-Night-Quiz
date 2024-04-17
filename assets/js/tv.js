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
let questionsTv = [];

document.addEventListener('DOMContentLoaded', () => {
    classApiScore.textContent = quizScore;
    classApiTotalOfQuestions.textContent = totalQuestions;
})

async function loadQuestionTv() {
    const APIUrl = `https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple`;
    const APIObjectTv = await fetch(APIUrl);
    questionsTv = await APIObjectTv.json();
    
    console.log(questionsTv.results) //shows the array of objects

    displayQuestions();
}

let currentQuestionIndex = 0;

function displayQuestions() {
    const question = questionsTv.results[currentQuestionIndex]; //uses the const 'question' so i can retrive the values correc
    correctAnswer = question.correct_answer;
    let incorrectAnswer = question.incorrect_answers;
    let optionsList = [...incorrectAnswer];
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);

    classApiQuestion.innerHTML = ''; 
    const questionDiv = document.createElement('div'); 
    questionDiv.classList.add('api-question');
    const questionHeader = document.createElement('h2'); 
    questionHeader.textContent = `Question ${HTMLDecode(currentQuestionIndex) + 1}: ${question.question}`; 
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
        checkAnswerSpan.innerHTML = `<p><i class="wrong-anser"></i> Incorrect Answer! <small><b>Correct Answer: </b>${correctAnswer}</small></p>`;
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
        newGameBtn.style.display = "block";
        checkAnswerSpan.style.display = "none";
    } else {
        setTimeout(function() {
            loadQuestionTv();
        }, 300);
    }
}

function setCount() {
    classApiTotalOfQuestions.textContent = totalQuestions;
    classApiScore.textContent = quizScore;
}

loadQuestionTv();
