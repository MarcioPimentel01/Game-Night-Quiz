// document.addEventListener('DOMContentLoaded', () => {
//     const question = document.getElementById('question');
//     const choices = Array.from(document.getElementsByClassName('choice-text'));
//     const progressText = document.getElementById('progressText');
//     const scoreText = document.getElementById('score');
//     const progressBarFull = document.getElementById('progressBarFull');

//     let currentQuestion = {};
//     let acceptingAnswers = false;
//     let score = 0;
//     let questionCounter = 0;
//     let availableQuesions = [];

//     let questions = [];

//     fetch(
//         'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
//     )
//         .then((res) => {
//             return res.json();
//         })
//         .then((loadedQuestions) => {
//             questions = loadedQuestions.results.map((loadedQuestion) => {
//                 const formattedQuestion = {
//                     question: loadedQuestion.question,
//                 };

//                 const answerChoices = [...loadedQuestion.incorrect_answers];
//                 formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
//                 answerChoices.splice(
//                     formattedQuestion.answer - 1,
//                     0,
//                     loadedQuestion.correct_answer
//                 );

//                 answerChoices.forEach((choice, index) => {
//                     formattedQuestion['choice' + (index + 1)] = choice;
//                 });

//                 return formattedQuestion;
//             });
//             startGame();

//     //CONSTANTS
//     const CORRECT_BONUS = 10;
//     const MAX_QUESTIONS = 3;

//     startGame = () => {
//         questionCounter = 0;
//         score = 0;
//         availableQuesions = [...questions];
//         getNewQuestion();
//     };

//     getNewQuestion = () => {
//         if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
//             localStorage.setItem('mostRecentScore', score);
//             //go to the end page
//             return window.location.assign('/end.html');
//         }
//         questionCounter++;
//         progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
//         //Update the progress bar
//         progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

//         const questionIndex = Math.floor(Math.random() * availableQuesions.length);
//         currentQuestion = availableQuesions[questionIndex];
//         question.innerText = currentQuestion.question;

//         choices.forEach((choice) => {
//             const number = choice.dataset['number'];
//             choice.innerText = currentQuestion['choice' + number];
//         });

//         availableQuesions.splice(questionIndex, 1);
//         acceptingAnswers = true;
//     };

//     choices.forEach((choice) => {
//         choice.addEventListener('click', (e) => {
//             if (!acceptingAnswers) return;

//             acceptingAnswers = false;
//             const selectedChoice = e.target;
//             const selectedAnswer = selectedChoice.dataset['number'];

//             const classToApply =
//                 selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

//             if (classToApply === 'correct') {
//                 incrementScore(CORRECT_BONUS);
//             }

//             selectedChoice.parentElement.classList.add(classToApply);

//             setTimeout(() => {
//                 selectedChoice.parentElement.classList.remove(classToApply);
//                 getNewQuestion();
//             }, 1000);
//         });
//     });

//     incrementScore = (num) => {
//         score += num;
//         scoreText.innerText = score;
//     };
// });





































// //Fixing HTML characters
// function fixHtmlChar(text) {
//     var doc = new DOMParser().parseFromString(text, "text/html");
//     return doc.documentElement.textContent;
// }
// // event listeners for DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//     const classApiAnswer = document.querySelector('.api-answer');
//     classApiAnswer.addEventListener('click', handleAnswerClick);
//     let ArrayMusic = [];
//     let currentQuestionIndex = 0;

//     loadQuestionMusic();
// });


// // Function to process and shuffle answers
// function processAnswers(question) {
//     question.question = fixHtmlChar(question.question);
//     question.correct_answer = fixHtmlChar(question.correct_answer);
//     question.incorrect_answers = question.incorrect_answers.map(answer => fixHtmlChar(answer));
//     const allAnswers = [...question.incorrect_answers, question.correct_answer];
//     shuffleArray(allAnswers);

//     const rightAnswerIndex = allAnswers.findIndex(answer => answer === question.correct_answer);
//     question.correct_answer = allAnswers[rightAnswerIndex];
//     allAnswers.splice(rightAnswerIndex, 1);
//     question.incorrect_answers = allAnswers;
// }
// // Fucntion to fecth and load game questions
// async function loadQuestionMusic(ArrayMusic) {
//     try {
//         const APIUrlMusic = 'https://opentdb.com/api.php?amount=10&category=12';
//         const resultMusic = await fetch(APIUrlMusic);
//         const dataMusic = await resultMusic.json();
//         const questions = dataMusic.results;
//         console.log(dataMusic.results[0]);
//         ArrayMusic.push(dataMusic.results);

//         if (!dataMusic.results || dataMusic.results.length === 0) {
//             throw new Error('No questions found in the API response');
//         }
//         ArrayMusic.forEach(processAnswers)

//         displayQuestion(ArrayMusic[currentQuestionIndex]);
//     } catch (error) {
//         console.error("Error fetching games questions;", error);
//     }
// }

// //function to go next question
// function goToNextQuestion(selectedAnswer) {
//     currentQuestionIndex++;

//     if (currentQuestionIndex < ArrayMusic.length) {
//         displayQuestion(ArrayMusic[currentQuestionIndex]);
//     } else {
//         window.location.assign("./end-page.html")
//     }

//     if (selectedAnswer === ArrayMusic[currentQuestionIndex - 1].correct_answer) {
//         alert('Correct!')
//         //Update score logic can be added here 
//     } else {
//         alert(`Incorrect. The correct answers is: ${ArrayMusic[currentQuestionIndex - 1].correct_answer}`);
//     }
// }

// //event listeners for answer click
// function handleAnswerClick(event) {
//     if (event.target.classList.contains('answer-option')) {
//         const selectedAnswer = event.target.textContent.split('. ')[1];
//         goToNextQuestion(selectedAnswer);
//     }  
// }
// // event listeners for DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//     const classApiAnswer = document.querySelector('.api-answer');
//     classApiAnswer.addEventListener('click', handleAnswerClick);
//     let ArrayMusic = [];
//     let currentQuestionIndex = 0;

//     loadQuestionMusic();
// });





















// document.addEventListener('DOMContentLoaded', () => {

//     const classApiQuestion = document.querySelector('.api-question');
//     const classApiAnswer = document.querySelector('.api-answer');


//     let currentQuestionIndex = 0;

// async function loadQuestionMusic() {
//     try {
//         const APIUrlMusic = 'https://opentdb.com/api.php?amount=10&category=12';
//         const resultMusic = await fetch(APIUrlMusic);
//         if (!resultMusic.ok) {
//             throw new Error('Failed to fetch quiz questions');
//         }
//         const dataMusic = await resultMusic.json();
//         if(!dataMusic.results || dataMusic.results.length === 0) {
//             throw new Error('No quiz questions found in the API response');
//         }
//         retrieveQuiz(dataMusic.results[0]);
//     } catch (error) {
//         console.error("Error fetching API questions:", error);
//     }
// }

// function retrieveQuiz(dataMusic) {
//     let correctAnswer = dataMusic.correct_answers;
//     let incorrectAnswer = dataMusic.incorrect_answers;
//     let optionsList = [...incorrectAnswer];
//     optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);

//     console.log(optionsList);
//     console.log(correctAnswer);
// }

//  displayQuestion();
// function displayQuestion(queston) {
//     classApiQuestion.innerHTML = '';
//     classApiAnswer.innerHTML = '';


// }
// });






// async function loadQuestionMusic()

// function displayquestion
//let correctansweer = data.correct answers