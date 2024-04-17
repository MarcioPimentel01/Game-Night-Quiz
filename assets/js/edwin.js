//https://opentdb.com/api.php?amount=10&category=12


const _question = document.getElementById('question');
const _answer = document.querySelector('.api-answer')
const _correctScore = document.getElementById('correct-score')
const _totalQuestion = document.getElementById('total-question');
const _checkBtn = document.getElementById('check-answer');
//const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result');




let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;


function eventlisteners() {
    _checkBtn.addEventListener('click', checkAnswer);
    //_playAgainBtn.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestionMusic();
    eventlisteners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

async function loadQuestionMusic() {
    const APIUrlMusic = 'https://opentdb.com/api.php?amount=10&category=12';
    const result = await fetch(`${APIUrlMusic}`);
    const data = await result.json();
    //console.log(data.results[0]);
    _result.innerHTML = "";
    displayQuestion(data.results[0]);
}

function displayQuestion(data) {
    _checkBtn.disabled = false;
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    console.log(optionsList);
    console.log(correctAnswer);

    _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    _answer.innerHTML = `${optionsList.map((answer, index) => `
<li> ${index + 1}. <span> ${answer} </span> </li>`).join('')}`;
}
//slected answer
function selectedAnswer() {
    _answer.querySelectorAll('li').forEach((answer) => {
        answer.addEventListener('click', () => {
            console.log('Answer clicked:', answer.textContent);
            if(_answer.querySelector('.selected')) {
                const activeAnswer = _.answer.querySelector('.selected');
                activeAnswer.classList.remove('selected');
            }
            answer.classList.add('selected');
        });
    });
    console.log(correctAnswer);
}

//checking for answer
function checkAnswer() {
    _checkBtn.disabled = true;
    if (_answer.querySelector('.selected')) {
        let selectedAnswer = _answer.querySelector('.selected span').textContent;
        //console.log(selectedAnswer)
        if (selectedAnswer.trim() == HTMLDecode(correctAnswer)) {
            correctScore++;
            _result.innerHTML = `<p> <i class = "fa-sharp fa-regular fa-circle-check"></i>Correct Answer!! </p>`;
        } else {
            _result.innerHTML = `<p> <i class="fas fa-times"></i>Incorrect Answer!! </p> <p><small><b>Correct Answer: </b> ${correctAnswer}</small></p>`;
        }
        checkCount();
    } else {
        _result.innerHTML = `<p><i class = "fas fa-question"></i>PLease select an option! </p>`;
        _checkBtn.disabled = false;
    }
}

// convert HTML into normal text of correct answers
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}

function checkCount() {
    askedCount++;
    setCount();
    if(askedCount == totalQuestion) {
        window.location.href = 'end-page.html';
        // _result.innerHTML = `<p> Your score is: ${correctScore}. </p>`;
        // _playAgainBtn.style.display = "none"
    } else {
        setTimeout(()=> {
            loadQuestionMusic();

        }, 300);
    }
}

function setCount() {
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}

function restartQuiz() {
    correctScore = askedCount = 0;
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block";
    _checkBtn.disabled = false;
    setCount();
    loadQuestionMusic();
}