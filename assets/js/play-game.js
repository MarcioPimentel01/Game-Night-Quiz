document.addEventListener('DOMContentLoaded', () => {

    const classProgressBar = document.querySelector(`.progress-bar`)
    const classScoreCount = document.querySelector(`.score-count`)
    const classApiQuestion = document.querySelector(`.api-question`)
    const classApiAnswer = document.querySelector(`.api-answer`)

    let ArrayGames = []

    async function loadQuestionGames() { // Test to change the loadQuestionGames using the try and catch block
        try {
            const APIUrlGames = 'https://opentdb.com/api.php?amount=15';
            const resultGames = await fetch(APIUrlGames); // This const uses the fetch function to make a GET request to the API endpoint.
            const dataGames = await resultGames.json();  // the variable dataGames extracts the JSON  from resultGames
            // Push only the results array:
            ArrayGames.push(dataGames.results); //Juan pushed only the results into the array 
    
            // Integrate shuffle logic (if desired):
            if (dataGames.results && dataGames.results.length > 0) { // if dataGames results and its lenght is greater than 0 starts a for of
                for (const question of dataGames.results) {  //For of creates an array to add correct answer with the wrong answer (array name = AllAnswers)
                    const allAnswers = [...question.incorrect_answers, question.correct_answer];
                    shuffleArray(allAnswers); // Using the first code created, the Fisher-Yates algorithm on the allAnswers array
                    question.incorrect_answers = allAnswers.slice(1); // divide the array into strings
                    question.correct_answer = allAnswers[0];
                }
            }
    
        } catch (error) {
            console.error("Error fetching games questions:", error);
            // Displays a message saying that couldn't fetch the question from the API Server
        }
    }
    
    function shuffleArray(answers) { // Fisher-Yates algorithm, I changed the const "j" by "randomNumber" to better understnt the algorithm
        for (let i = answers.length - 1; i > 0; i--) {
            const randomNumber = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[randomNumber]] = [answers[randomNumber], answers[i]];
        }
    }
    
    // Call the function to load games questions
    loadQuestionGames();
})



















































//     // Function to shuffle an array using Fisher-Yates algorithm
//     function shuffleArray(incorrectArray, correct) {
//         for (let i = incorrectArray.length - 1; i > 0; i--) { // for loop where integer is minor than the array size minus 1, the loop continues as long integer is greater than zero, and decrement by 1
//         const randomNumber = Math.floor(Math.random() * (i + 1)); // Generates a random number, uses Math.floor to not float the math.random, then the the random number generated,
//         [(incorrectArray[i], correct), (incorrectArray[randomNumber], correct)] = [(incorrectArray[randomNumber], correct), (incorrectArray[i], correct)];
//     }
// }

// // Shuffle the incorrect answers
// shuffleArray(newObject.incorrect_answers);

//     questionTest.push(newObject);



//     if (questionTest.length > 0) {
//         // ForEach method used to create the div element throughout createElement
//         questionTest.forEach(quiz => {
//             const quizEl = document.createElement('div');
//             quizEl.classList.add('api-question');
//             // Populate the HTML element with post data
//             quizEl.innerHTML = `
//                 <h2>${quiz.question}</h2>
//                 <p>${quiz.correct_answer}</p>
//             `; 
//             // Append the quiz element to the quiz container div element
//             classApiAnswer.appendChild(quizEl);
            
//             // Iterate over incorrect answers and create <p> elements for each one
//             quiz.incorrect_answers.forEach(incorrectAnswer => {
//                 const pElement = document.createElement('p');
//                 pElement.textContent = incorrectAnswer;
//                 classApiAnswer.appendChild(pElement);
//             });
//         });
//     }


//     Function to Select answer


//     function to check answer as true or false
    

// });
