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

function shuffleArray(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[randomNumber]] = [answers[randomNumber], answers[i]];
    }
}

// Call the function to load games questions
loadQuestionGames();

    // if (allAnswers.length > 0) {
    //     ArrayFilms.forEach(quiz => (

    //     ))
    // }

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

// if (questionTest.length > 0) {
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
