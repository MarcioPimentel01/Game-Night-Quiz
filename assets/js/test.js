let ArrayFilms = []
let ArrayMusic = []
let ArrayTv = []
let ArrayGk = []
let ArrayGames = []

async function loadQuestionFilms() {
    const APIUrlFilms = 'https://opentdb.com/api.php?amount=11';
    const resultFilms = await fetch(APIUrlFilms);
    const dataFilms = await resultFilms.json();
    ArrayFilms.push(dataFilms.results);
    return dataFilms;
    
}

async function loadQuestionMusic () {
    const APIUrlMusic = 'https://opentdb.com/api.php?amount=12';
    const resultMusic = await fetch(`${APIUrlMusic}`);
    const dataMusic = resultMusic.json();
    ArrayMusic.push(dataMusic);
    console.log(dataMusic)
}
async function loadQuestionTv () {
    const APIUrlTv = 'https://opentdb.com/api.php?amount=14';
    const resultTv = await fetch(`${APIUrlTv}`);
    const dataTv = await resultTv.json();
    ArrayTv.push(dataTv);
    console.log(dataTv)
}
async function loadQuestionGk() {
    const APIUrlGk = 'https://opentdb.com/api.php?amount=10&category=9';
    const resultGk = await fetch(`${APIUrlGk}`);
    const dataGk = await resultGk.json();
    ArrayGk.push(dataGk);
    console.log(dataGk);
}
async function loadQuestionGames() {
    try {
        const APIUrlGames = 'https://opentdb.com/api.php?amount=15';
        const resultGames = await fetch(APIUrlGames);
        const dataGames = await resultGames.json();

        // Push only the results array:
        ArrayGames.push(dataGames.results);

        // Integrate shuffle logic (if desired):
        if (dataGames.results && dataGames.results.length > 0) {
            for (const question of dataGames.results) {
                const allAnswers = [...question.incorrect_answers, question.correct_answer];
                shuffleArray(allAnswers);
                question.incorrect_answers = allAnswers.slice(1);
                question.correct_answer = allAnswers[0];
            }
        }

    } catch (error) {
        console.error("Error fetching games questions:", error);
        // Handle the error gracefully, e.g., display an error message to the user
    }
}

<<<<<<< Updated upstream
function shuffleArray(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[randomNumber]] = [answers[randomNumber], answers[i]];
    }
=======
questions.forEach(question => {
    const postElement = document.createElement('div');
    postElement.classList.add('api-answer');
    // Populate the HTML element with post data
    postElement.innerHTML =

    
    `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p><b>By:</b> ${post.username}</p>
        <p>${new Date().toLocaleString()}</p><br><hr>`; // I decided to add time for the post
    // Append the post element to the recent posts container div element
    recentPostsContainer.appendChild(postElement);
});
// if (incorrectArray.length > 0) {
//     // ForEach method used to create the div element throughout createElement
//     questionTest.forEach(quiz => {
//         const quizEl = document.createElement('div');
//         quizEl.classList.add('api-question');
//         // Populate the HTML element with post data
//         quizEl.innerHTML = `
//             <h2>${quiz.question}</h2>
//             <p>${quiz.correct_answer}</p>
//         `; 
//         // Append the quiz element to the quiz container div element
//         classApiAnswer.appendChild(quizEl);
        
//         // Iterate over incorrect answers and create <p> elements for each one
//         quiz.incorrect_answers.forEach(incorrectAnswer => {
//             const pElement = document.createElement('p');
//             pElement.textContent = incorrectAnswer;
//             classApiAnswer.appendChild(pElement);
//         });
//     });
// }

if (questionTest.length > 0) {
    // ForEach method used to create the div element throughout createElement
    questionTest.forEach(quiz => {
        const quizEl = document.createElement('div');
        quizEl.classList.add('api-question');
        // Populate the HTML element with post data
        quizEl.innerHTML = `
            <h2>${quiz.question}</h2>
            <p>${quiz.correct_answer}</p>
        `; 
        // Append the quiz element to the quiz container div element
        classApiAnswer.appendChild(quizEl);
        
        // Iterate over incorrect answers and create <p> elements for each one
        quiz.incorrect_answers.forEach(incorrectAnswer => {
            const pElement = document.createElement('p');
            pElement.textContent = incorrectAnswer;
            classApiAnswer.appendChild(pElement);
        });
    });
>>>>>>> Stashed changes
}

// Call the function to load games questions
loadQuestionGames();

// document.addEventListener('DOMContentLoaded', () => {

//     const classProgressBar = document.querySelector(`.progress-bar`); // Selects the progress bar element
//     const classScoreCount = document.querySelector(`.score-count`); // Selects the score count element
//     const classApiQuestion = document.querySelector(`.api-question`); // Selects the API question element
//     const classApiAnswer = document.querySelector(`.api-answer`); // Selects all API answer elements


//     // Add an event Listener on the selected answer (this addEventListener is aiming the option that the user is clicking after seeing the question)
//     clickAnswer.addEventListener(`click`, goToNextQuestion)

//     let ArrayGames = [];
//     let currentQuestionIndex = 0; // Keep track of the index of the current question in the quiz.

//     async function loadQuestionGames() { // Test to change the loadQuestionGames using the try and catch block
//         try {
//             const APIUrlGames = 'https://opentdb.com/api.php?amount=15';
//             const resultGames = await fetch(APIUrlGames); // This const uses the fetch function to make a GET request to the API endpoint.
//             const dataGames = await resultGames.json();  // The variable dataGames extracts the JSON from resultGames
//             // Push only the results array:
//             ArrayGames.push(...dataGames.results); // Juan pushed only the results into the array 

//             // Integrate shuffle logic (if desired):
//             if (dataGames.results && dataGames.results.length > 0) { // If dataGames results and its length is greater than 0 starts a for of
//                 for (const question of dataGames.results) {  // For of creates an array to add correct answer with the wrong answer (array name = AllAnswers)
//                     const allAnswers = [...question.incorrect_answers, question.correct_answer];
//                     shuffleArray(allAnswers); // Using the first code created, the Fisher-Yates algorithm on the allAnswers array
//                     question.incorrect_answers = allAnswers.slice(1); // Divide the array into strings
//                     question.correct_answer = allAnswers[0];
//                 }
//             }
    
//         } catch (error) {
//             console.error("Error fetching games questions:", error);
//             // Displays a message saying that couldn't fetch the question from the API Server
//         }
//     }

//     function shuffleArray(answers) { // Fisher-Yates algorithm, I changed the const "j" by "randomNumber" to better understand the algorithm
//         for (let i = answers.length - 1; i > 0; i--) {
//             const randomNumber = Math.floor(Math.random() * (i + 1));
//             [answers[i], answers[randomNumber]] = [answers[randomNumber], answers[i]];
//         }
//     }

//     // Function to display the question that was shuffled.
//     function displayQuestion(question) {
//         classApiQuestion.innerHTML = ``;
//         classApiAnswer.innerHTML = ``;
      
//         const questionDiv = document.createElement(`div`);
//         questionDiv.classList.add(`api-question`);
      
//         const questionHeader = document.createElement('h2');
//         questionHeader.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
//         questionDiv.appendChild(questionHeader);
        
        


    
//         // Shuffle answers
//         const answers = [...question.incorrect_answers, question.correct_answer];
//         shuffleArray(answers);
      
//         answers.forEach((answer, index) => {
//             const answerButton = document.createElement('button');
//             answerButton.classList.add('answer-option'); // Add a class for styling
//             answerButton.textContent = `${index + 1}. ${answer}`;
        
//             // Add event listener to each button (explained later)
//             answerButton.addEventListener('click', () => {
//               goToNextQuestion(answer); // Pass the answer to the function
//             });
        
//             classApiAnswer.appendChild(answerButton);
//           });
        
//           classApiQuestion.appendChild(questionDiv);
//         }
    
//     function goToNextQuestion() {
//         currentQuestionIndex++;
      
//         // Check if there are more questions
//         if (currentQuestionIndex < ArrayGames.length) {
//           displayQuestion(ArrayGames[currentQuestionIndex]);
//         } else {
//           alert('No more questions available.');
//           // Add logic to display final score or results here (optional)
//         }
      

      
//         // Check if the selected answer is correct
//         if (selectedAnswer === ArrayGames[currentQuestionIndex - 1].correct_answer) {
//           // Update score (assuming you have a score variable)
//           score++;
//           // Provide feedback to the user (e.g., display a "Correct!" message)
//           alert('Correct!');
//         } else {
//           // Provide feedback to the user (e.g., display the correct answer and an "Incorrect" message)
//           alert(`Incorrect. The correct answer is: ${ArrayGames[currentQuestionIndex - 1].correct_answer}`);
//         }
//       }
      

//     // Call the function to load games questions
//     loadQuestionGames();
// });
<<<<<<< Updated upstream
=======




//testing code line for github desktop
>>>>>>> Stashed changes
