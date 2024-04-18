// Define HTMLDecode function
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}

const _question = document.querySelector('.api-question');
const _answer = document.querySelector('.api-answer');
const _correctScore = document.querySelector('.progress-bar .score-count');
const _totalQuestion = document.querySelector('.progress-bar .total-questions');
const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result');

let correctAnswer = '', correctScore = counting = 0, totalQuestion = 10;
let questionsMusic = [];

document.addEventListener('DOMContentLoaded', () => {
    _correctScore.textContent = correctScore;
    _totalQuestion.textContent = totalQuestion;
    loadQuestionMusic(); // Load questions when the game starts
});

async function loadQuestionMusic() {
    const APIUrl = `https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple`;
    const APIObjectTv = await fetch(APIUrl);
    const questionsData = await APIObjectTv.json();
    questionsMusic = questionsData.results; // Store all questions in the global variable
    
    displayQuestion(); // Display the first question
}

function displayQuestion() {
    const question = questionsMusic[counting];
    correctAnswer = question.correct_answer;
    let incorrectAnswers = question.incorrect_answers;
    let optionsList = [...incorrectAnswers];
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, correctAnswer);

    _question.innerHTML = ''; 
    const questionDiv = document.createElement('div'); 
    questionDiv.classList.add('api-question');
    const questionHeader = document.createElement('h2'); 
    questionHeader.textContent = `Question ${counting + 1}: ${HTMLDecode(question.question)}`; 
    questionDiv.appendChild(questionHeader);                                                   
    _answer.innerHTML = ''; 

    optionsList.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('answer-option');
        answerButton.textContent = `${answerIndex + 1}. ${HTMLDecode(answer)}`; // Apply HTMLDecode to answer text

        answerButton.addEventListener('click', () => { 
            checkAnswer(HTMLDecode(answer)); // Call checkAnswer when an option is selected
        });

        _answer.appendChild(answerButton);
    });

    _question.appendChild(questionDiv); 
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        correctScore++;
        _correctScore.textContent = correctScore;
        _result.innerHTML = `<p><i class="right-answer"></i> Correct Answer!</p><br>`;
    } else {
        _result.innerHTML = `<p><i class="wrong-anser"></i> Incorrect Answer! <small><b>Correct Answer: </b>${HTMLDecode(correctAnswer)}</small></p>`;
    } 
    checkCount();
}

function checkCount() {
    counting++;
    setCount();
    if (counting === totalQuestion) {
        setTimeout(function() {
            console.log("");
        }, 5000);

        _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        _playAgainBtn.style.display = "block";
    } else {
        setTimeout(displayQuestion, 300); // Display the next question after a delay
    }
}

function setCount() {
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}
