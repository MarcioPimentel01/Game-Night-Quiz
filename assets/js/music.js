// document.addEventListener('DOMContentLoaded', () => {

//     const classApiQuestion = document.querySelector('.api-question');
//     const classApiAnswer = document.querySelector('.api-answer');

//     classApiAnswer.addEventListener('click', (event) => { //looks for answer clicked - (classApiAnswer=api-answer)
//         if (event.target.classList.contains('answer-option')) { //Looks for the class answer-option
//             const selectedAnswer = event.target.textContent.split('. ')[1]; // Extracts the selected answer from the clicked button's text content. It splits the text content by the period and space ('. ') and selects the second part (index 1), which is assumed to be the answer text after the index
//             goToNextQuestion(selectedAnswer); //calls function goToNextQuestion passing the argument selectedAnswer, that is the splited array
//         }
//     });

//     let ArrayGames = []; //recives objects retrieved from a JSON

//     //To be implemented
//     let currentQuestionIndex = 0; // Keep track of the index of the current question in the quiz.

//     function displayQuestion(question) { // Function to display the question that was shuffled.
//         classApiQuestion.innerHTML = ''; // Set as a empty element - clears the content inside the HTML element selected by the variable classApiQuestion
//         classApiAnswer.innerHTML = ''; // Set as a empty element just like the one above

//         const questionDiv = document.createElement('div'); // that one just creates the element Div targeting the api-questions just like the blog-form challenge
//         questionDiv.classList.add('api-question');

//         const questionHeader = document.createElement('h2'); // creates h2 element
//         questionHeader.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`; //This line sets the textContent property of the questionHeader element. 
//         questionDiv.appendChild(questionHeader);                                                   //It creates a string that represents the question, including its index 
//         //(based on currentQuestionIndex) and the actual question text retrieved 
//         const answers = [...question.incorrect_answers, question.correct_answer];                  //from the question object.
//         //const answer returns an array with the correct answer together with the incorrect ones

//         answers.forEach((answer, index) => {
//             const answerButton = document.createElement('button');
//             answerButton.classList.add('answer-option'); // Add a class for styling
//             answerButton.textContent = `${index + 1}. ${answer}`;
//             classApiAnswer.appendChild(answerButton);
//         });

//         classApiQuestion.appendChild(questionDiv); //Appends the question container (questionDiv) to the classApiQuestion element
//     }

//     // Fisher-Yates algorithm, I changed the const "j" by "randomNumber" to better understand the algorithm
//     function shuffleArray(answers) {
//         for (let i = answers.length - 1; i > 0; i--) {
//             const randomNumber = Math.floor(Math.random() * (i + 1));
//             [answers[i], answers[randomNumber]] = [answers[randomNumber], answers[i]];
//         }
//     }

//     async function loadQuestionGames() { // Test to change the loadQuestionGames using the try and catch block
//         try {
//             const APIUrlGames = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
//             const resultGames = await fetch(APIUrlGames); // This const uses the fetch function to make a GET request to the API endpoint.
//             const dataGames = await resultGames.json(); // The variable dataGames extracts the JSON from resultGames
//             // Spread the elements of dataGames.results into ArrayGames
//             ArrayGames.push(...dataGames.results); // Juan pushed only the results into the array 

//             if (dataGames.results && dataGames.results.length > 0) { // If dataGames results and its length is greater than 0 starts a for of
//                 for (const question of dataGames.results) { // For of creates an array to add correct answer with the wrong answer (array name = AllAnswers)

//                     question.question = fixHtmlChar(question.question);
//                     question.correct_answer = fixHtmlChar(question.correct_answer);
//                     question.incorrect_answers = question.incorrect_answers.map(answer => fixHtmlChar(answer));
//                     const allAnswers = [...question.incorrect_answers, question.correct_answer]; // Just in case `, question.correct_answer`
//                     shuffleArray(allAnswers); // Using the first code created, the Fisher-Yates algorithm on the allAnswers array
//                     const rightAnswer = allAnswers.findIndex(answer => answer === question.correct_answer)
//                     question.correct_answer = allAnswers[rightAnswer];
//                     allAnswers.splice(rightAnswer, 1);
//                     question.incorrect_answers = allAnswers;

//                     // const isLargeNumber = (element) => element > 13;
//                     // const array1 = [5, 12, 8, 130, 44];
//                     // console.log(array1.findIndex(isLargeNumber));
//                     // // Expected output: 3

//                     // const allAnsewrsPlusCorrect = [...allAnswers, question.correct_answer];

//                 }
//             }

//             // Display the first question after loading
//             displayQuestion(ArrayGames[currentQuestionIndex]);

//         } catch (error) { // Displays a message saying that couldn't fetch the question from the API Serve
//             console.error("Error fetching games questions:", error);

//         }
//     }

//     function goToNextQuestion(selectedAnswer) { // Function to move to the next question
//         currentQuestionIndex++; //Increment the index to move to the next question
//         if (currentQuestionIndex < ArrayGames.length) { //Increment the index to move to the next question
//             displayQuestion(ArrayGames[currentQuestionIndex]);
//         } else {
//             alert('No more questions available.');
//         }

//         if (selectedAnswer === ArrayGames[currentQuestionIndex - 1].correct_answer) {
//             alert('Correct!'); //alert to be changed Please
//             // Update score (To be implemented)
//             // score++;
//         } else {
//             alert(`Incorrect. The correct answer is: ${ArrayGames[currentQuestionIndex - 1].correct_answer}`);
//         }
//     }

//     // Call the function to load games questions
//     loadQuestionGames();
// });




















document.addEventListener('DOMContentLoaded', () => {
    const classApiQuestion = document.querySelector(".api-question");
    const classApiAnswer = document.querySelector(".api-answer");
    let ArrayMusic = [];
    let currentQuestionIndex = 0;

    classApiAnswer.addEventListener('click', (event) => { //looks for answer clicked - (classApiAnswer=api-answer)
        if (event.target.classList.contains('answer-option')) { //Looks for the class answer-option
            const selectedAnswer = event.target.textContent.split('. ')[1]; // Extracts the selected answer from the clicked button's text content. It splits the text content by the period and space ('. ') and selects the second part (index 1), which is assumed to be the answer text after the index
            goToNextQuestion(selectedAnswer);
        }
    });

    async function loadQuestionMusic() {
        try {
            const APIUrlMusic = 'https://opentdb.com/api.php?amount=10&category=12';
            const resultMusic = await fetch(`${APIUrlMusic}`);
            const dataMusic = await resultMusic.json();
            ArrayMusic.push(...dataMusic.results);

            if (dataMusic.results && dataMusic.results.length > 0) {
                ArrayMusic = dataMusic.results.map(processQuestionData);
                displayQuestion(ArrayMusic[currentQuestionIndex]);
            } else {
                throw new Error('NO question found in the API response.');
            }
        } catch (error) {
            console.error("error loading api questions", error);
        }
    }

    function handleAnswerSelection(event) {
        if (event.target.classList.contains('answer-option')) {
            const selectedAnswer = event.target.textContent.split('. ')[1];
            goToNextQuestion(selectedAnswer);
        }
    }

    function processQuestionData(question) {
        question.question = fixHtmlChar(question.question);
        question.correct_answer = fixHtmlChar(question.correct_answer);
        question.incorrect_answers = question.incorrect_answers.map(answer => fixHtmlChar(answer));

        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        shuffleArray(allAnswers);

        const rightAnswerIndex = allAnswers.findIndex(answer => answer === question.correct_answer);
        question.correct_answer = allAnswers[rightAnswerIndex];
        allAnswers.splice(rightAnswerIndex, 1);
        question.incorrect_answers = allAnswers;

        return question;

        function displayQuestion(question) {
            clearElements(classApiQuestion);
            clearElements(classApiAnswer);

            const questionDiv = createQuestionElement(question);
            classApiQuestion.appendChild(questionDiv);

            question.incorrect_answers.forEach((answer, index) => {
                const answerButton = createAnswerElement(index, answer);
                classApiAnswer.appendChild(answerButton);
            });

        }
        function clearElements(element) {
            element.innerHTML = '';
        }

        function createQuestionElement(question) {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('api-question');

            const questionHeader = document.createElement('h2');
            questionHeader.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;

            questionDiv.appendChild(questionHeader);
            return questionDiv;
        }

        function createAnswerElement(index, answer) {
            const answerButton = document.createElement('button');
            answerButton.classList.add('answer-option');
            answerButton.textContent = `${index + 1}. ${answer}`;
            return answerButton;
        }
        function goToNextQuestion(selectedAnswer) {
            currentQuestionIndex++;
            if (currentQuestionIndex < ArrayMusic.length) {
                displayQuestion(ArrayMusic[currentQuestionIndex]);
            } else {
                window.location.assign("/end-page.html");
            }

            if (selectedAnswer === ArrayMusic[currentQuestionIndex - 1].correct_answer) {
                alert('Correct!');
            } else {
                alert(`Incorrect. The correct asnwer is: ${ArrayMusic[currentQuestionIndex - 1].correct_answer}`);
            }
        }
        function shuffleArray(answers) {
            for (let i = answers.length - 1; i > 0; i--) {
                const randomNumber = Math.floor(Math.random() * (i + 1));
                [answers[i], answer[randomNumber]] = [answers[randomNumber], answers[i]];
            }
        }
    }
    loadQuestionMusic();
});

// //Waiting for DOM content to load
// document.addEventListener('DOMContentLoaded', () => {
//     //Selecting elements by class name
//     const [classApiQuestion, classApiAnswer] = document.querySelectorAll('.api-question, .api-answer');

//     //Addindg event listener to selected answer
//     classApiAnswer.addEventListener('click', (event) => {
//         //Check if element clickded is an answert option
//     });

//     let currentQuestion = {};
//     let acceptingAnswers = false; //makes user waitin until everything on page load
//     let questionCounter = 0;
//     let availableQuestions = []
//     let questions = [];
//     const MAX_QUESTIONS = 10;

//     fetch("https:opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
//         .then(res => {
//             return res.json();
//         })
//         .then(loadedQuestion => {
//             questions = loadedQuestion.results.map(loadedQuestion => {
//                 const formattedQuestion = {
//                     question: loadedQuestion.questions
//                 };
//                 const answerChoices = [...loadedQuestion.incorrect_answers];
//                 formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
//                 answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

//                 answerChoices.forEach((choice, index) => {
//                     formattedQuestion["choice" + (index + 1)] = choice;
//                 })
//                 return formattedQuestion;
//             });
//             availableQuestions = [...questions];
//             getNewQuestion();
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     const getNewQuestion = () => {
//         if (availableQuestions.lenght === 0 || questionCounter >= MAX_QUESTIONS) {
//             return window.location.assign("/end-page.html");
//         }
//         questionCounter++;
//         const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//         currentQuestion = availableQuestions[questionIndex];
//         classApiQuestion.innerText = currentQuestion.question;

//         classApiQuestion.forEach(choice => {
//             const number = choice.dataset['number'];
//             choice.innerText = currentQuestion['choice' + number];
//         });
//         availableQuestions.splice(questionIndex, 1);
//         acceptingAnswers = true;
//     };

//     if (Array.isArray(classApiQuestion)) {
//         classApiQuestion.forEach(choice => {
//             choice.addEventListener("click", e => {
//                 if (!acceptingAnswers) return;
//                 acceptingAnswers = false;
//                 const selectedChoice = e.target;
//                 const selectedAnswer = selectedChoice.dataset["number"];
//                 const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
//                 selectedChoice.parentElement.classList.add(classToApply);

//                 setTimeout(() => {
//                     selectedChoice.parentElement.classList.remove(classToApply);
//                     getNewQuestion();
//                 }, 1000);
//             });
//         });
//     } else {
//         console.error("classApiQuestion is not an array");
//     }
// });











// document.addEventListener('DOMContentLoaded', () => {
//     const classApiQuestion = document.querySelector(".api-question");
//     const classApiAnswer = document.querySelector(".api-answer");

//     let currentQuestion = {};
//     let acceptingAnswers = false; //makes user waitin until everything on page load
//     let questionCounter = 0;
//     let availableQuestions = [];
//     let questions = [];

//     fetch("https://opentdb.com/api.php?amount=10&category=12")
//         .then(res => {
//             return res.json()
//         })
//         .then(loadQuestionMusic => {
//             questions = loadQuestionMusic.results.map(loadQuestionMusic => {
//                 const formattedQuestion = {
//                     question: loadQuestionMusic.question
//                 };
//                 const answerChoices = [...loadQuestionMusic.incorrect_answers];
//                 return formattedQuestion;
//             });

//             availableQuestions = [...questions]
//             startGame();
//         })
//         .catch(err => {
//             console.error(err);
//         });

//     const MAX_QUESTIONS = 10;

//     startGame = () => {
//         questionCounter = 0;
//         availableQuestions = [...questions]
//         console.log(availableQuestions);
//         getNewQuestion();
//     };

//     getNewQuestion = () => {
//         if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
//             return window.location.assign("/end-page.html");
//         }
//         questionCounter++;
//         const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//         currentQuestion = availableQuestions[questionIndex];
//         question.innerText = currentQuestion.questions;

//         choices.forEach(choice => {
//             const number = choice.dataset['number'];
//             choice.innerText = currentQuestion['choice' + number];
//         });

//         availableQuestions.splice(questionIndex, 1);
//         acceptingAnswers = true;

//         choices.forEach(choice => {
//             choice.addEventListener("click", e => {
//                 if (!acceptingAnswers) return;

//                 acceptingAnswers = false;
//                 const selectedChoice = e.target;
//                 const selectedAnswer = selectedChoice.dataset["number"];

//                 const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

//                 selectedChoice.parentElement.classList.add(classToApply);

//                 setTimeout(() => {
//                     selectedChoice.parentElement.classList.remove(classToApply);
//                     getNewQuestion();
//                 }, 1000);
//             });
//         });
//     };
// });
