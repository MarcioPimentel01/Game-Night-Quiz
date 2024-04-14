const question = document.getElementById("api-question");
const choices = Array.from(document.getElementsByClassName("api-answer"));

let currentQuestion = {};
 let acceptingAnswers = false; //makes user waitin until everything on page load
 let questionCounter = 0;
 let availableQuestions = []

let questions = [];

fetch("https://opentdb.com/api.php?amount=10&category=12")
.then(res => {
    return res.json();
})
.then(loadQuestionMusic => {
    console.log(loadQuestionMusic.results);
    loadQuestionMusic.results.map( loadQuestionMusic => {
        const formattedQuestion = {
            question : loadQuestionMusic.question
        };        
    })

})
.catch(err => {
    console.error(err);
});









//under getnewquestion 
// return window.location.assign("/end-page.html")






// //Waiting for DOM content to load 
// document.addEventListener('DOMContentLoaded', () => {
//     //Selecting elements by class name
//     const [classApiQuestion, classApiAnswer] = document.querySelectorAll('.api-question, .api-answer');

//Addindg event listener to selected answer
classApiAnswer.addEventListener('click', (event) => {
    //Check if element clickded is an answert option
    
})

})
































// async function loadQuestionFilms() {
//     const APIUrlFilms = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
//     const resultFilms = await fetch(APIUrlFilms);
//     const dataFilms = await resultFilms.json();
//     // console.log(dataFilms.resultFilms)
//     return dataFilms.results
//     }

//     function retrievequiz(dataFilms){ 
//         let correctAnswer = dataFilms.correct_answer;
//         let incorrectAnswer = dataFilms.incorrect_answer;
//         let optionsList = [...incorrectAnswer];
//         optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
//         console.log(optionsList);
//         console.log(correctAnswer);
//     }


// loadQuestionFilms() // I need to do something with the results, otherwiese the function will be calling non-stop
// retrievequiz(dataFilms)
