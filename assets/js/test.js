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
let previousAnswerIndex = -1;
let questionsTv = [];
let finalScore = [];

document.addEventListener('DOMContentLoaded', () => {
    classApiScore.textContent = quizScore;
    classApiTotalOfQuestions.textContent = totalQuestions;
    loadQuestionsTv(); // Load questions when the game starts
});

async function loadQuestionsTv() {
    const APIUrl = `https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple`;
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
            checkAnswer(answer, answerIndex); // Call checkAnswer when an option is selected
        });

        classApiAnswer.appendChild(answerButton);
    });

    classApiQuestion.appendChild(questionDiv);
}

function checkAnswer(selectedAnswer, answerIndex) {
    const answerContainer = classApiAnswer;
    checkAnswerSpan.innerHTML = ''; // Clear previous result
    if (selectedAnswer === correctAnswer) {
        quizScore += calculateScore(answerIndex); // Apply bonus multiplier if applicable
        classApiScore.textContent = quizScore;
        checkAnswerSpan.innerHTML = `<p><i class="right-answer"></i> Correct Answer!</p><br>`;
    } else {
        // quizScore = quizScore;
        checkAnswerSpan.innerHTML = `<p><i class="wrong-anser"></i> Incorrect Answer! <small><b>Correct Answer: </b>${HTMLDecode(correctAnswer)}</small></p>`;
    }
    previousAnswerIndex = answerIndex;
    checkCount();
}

function checkCount() {
    counting++;
    setCount();
    if (counting === totalQuestions) {
        setTimeout(function () {
            console.log("");
        }, 5000);

        const finalScoreSpan = document.createElement('span');
        finalScoreSpan.classList.add('final-score');
        const finalScoreText = document.createTextNode(`Your final score is ${quizScore}.`);
        finalScoreSpan.appendChild(finalScoreText);
        result.appendChild(finalScoreSpan);

        finalScore.push(quizScore);

        checkAnswerSpan.style.display = "none";
    } else {
        setTimeout(displayQuestion, 300); // Display the next question after a delay
    }
}

function setCount() {
    classApiTotalOfQuestions.textContent = totalQuestions;
    classApiScore.textContent = quizScore;
}

// Function to calculate the score with bonus multiplier
function calculateScore(answerIndex) {
    const baseValue = 100;
    const bonusMultiplier = 1.2;

    // Check if the previous answer was correct and apply the bonus multiplier accordingly
    if (previousAnswerIndex === answerIndex - 1) {
        return baseValue * bonusMultiplier;
    } else {
        return baseValue;
    }
}
