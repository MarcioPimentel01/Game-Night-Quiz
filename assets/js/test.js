let ArrayFilms = []
let ArrayMusic =[]
let ArrayTv =[]
let ArrayGk = []
let ArrayGames = []
async function loadQuestionFilms() {
    const APIUrlFilms = 'https://opentdb.com/api.php?amount=11';
    const resultFilms = await fetch(`${APIUrlFilms}`);
    const dataFilms = await resultFilms.json();
    ArrayFilms.push(dataFilms.results);
    return dataFilms;
}
console.log(dataFilms);
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
    ArrayTV.push(dataTv);
    console.log(dataTv)
}
async function loadQuestionGk() {
    const APIUrlGk = 'https://opentdb.com/api.php?amount=10&category=9';
    const resultGk = await fetch(`${APIUrlGk}`);
    const dataGk = await resultGk.json();
    ArrayGK.push(dataGk);
    console.log(dataGk);
}
async function loadQuestionGames () {
    const APIUrlGames = 'https://opentdb.com/api.php?amount=15';
    const resultGames = await fetch(`${APIUrlGames}`);
    const dataGames = json.parse(resultGames);
    ArrayGames.push(dataGames);
    console.log(dataGames);
}
function shuffleArray(incorrectArray, correct) {
    for (let i = incorrectArray.length - 1; i > 0; i--) { // for loop where integer is minor than the array size minus 1, the loop continues as long integer is greater than zero, and decrement by 1
    const randomNumber = Math.floor(Math.random() * (i + 1)); // Generates a random number, uses Math.floor to not float the math.random, then the the random number generated,
    [(incorrectArray[i], correct), (incorrectArray[randomNumber], correct)] = [(incorrectArray[randomNumber], correct), (incorrectArray[i], correct)];
}
}

<<<<<<< HEAD
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
=======
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
}
>>>>>>> c59c42b927ab779bd3865506794c76ab5b132434
