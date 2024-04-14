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

// //Addindg event listener to selected answer
// classApiAnswer.addEventListener('click', (event) => {
//     //Check if element clickded is an answert option
    
// })

// })
//Addindg event listener to selected answer
classApiAnswer.addEventListener('click', (event) => {
    //Check if element clickded is an answert option  
})
})

let currentQuestion = {};
 let acceptingAnswers = false; //makes user waitin until everything on page load
 let questionCounter = 0;
 let availableQuestions = []

let questions = [];

fetch("https:opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
.then(res => {
    return res.json();
})
.then(loadedQuestion => {
    console.log(loadedQuestion.results);
    loadedQuestion.results.map(loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.questions
        };
        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        answerChoices.splice(formattedQuestion.answer -1, 0, loadedQuestion.correct_answer);

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index+1)] = choice;
        })
        return formattedQuestion;
    });
})
.catch(err => {
    console.error(err);
});


async function loadQuestionMusic () {
    const APIUrlMusic = 'https://opentdb.com/api.php?amount=12';
    const resultMusic = await fetch(`${APIUrlMusic}`);
    const dataMusic = resultMusic.json();
    ArrayMusic.push(dataMusic);
    console.log(dataMusic)
}

// function retrievequiz(dataMusic){ 

//     let correctAnswer = dataMusic.correct_answer;
//     let incorrectAnswer = dataMusic.incorrect_answer;
//     let optionsList = [...incorrectAnswer];
//     optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    
//     console.log(optionsList);
//     console.log(correctAnswer);
// }
    

// .catch(err => {
//     console.error(err);
// });









//under getnewquestion 
// return window.location.assign("/end-page.html")





































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
