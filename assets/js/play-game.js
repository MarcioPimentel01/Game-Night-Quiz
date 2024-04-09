document.addEventListener('DOMContentLoaded', () => {

    const classProgressBar = document.querySelector(`.progress-bar`)
    const classScoreCount = document.querySelector(`.score-count`)
    const classApiQuestion = document.querySelector(`.api-question`)
    const classApiAnswer = document.querySelector(`.api-answer`)

    const questionTest = [];

    const newObject = {
        type: "multiple",
        difficulty: "medium",
        category: "Entertainment: Film",
        question: "Which movie sequel had improved box office results compared to its original film?",
        correct_answer: "Toy Story 2",
        incorrect_answers: [
            "Sin City: A Dame to Kill For",
            "Speed 2: Cruise Control",
            "Son of the Mask"
            ]
        };

    questionTest.push(newObject);



    if (questionTest.length > 0) {
        // ForEach method used to create the div element throughout createElement
        questionTest.forEach(quiz => {
            const quizEl = document.createElement('div');
            quizEl.classList.add('api-question');
        // Populate the HTML element with post data
            quizEl.innerHTML = `
                <h2>${quiz.question}</h2>
                <p>${quiz.correct_answer}</p>`; 
        // Append the quiz element to the quiz container div element
            classApiAnswer.appendChild(quizEl);
            quiz.incorrect_answers.forEach(incorrectAnswer => {
                const pElement = document.createElement('p');
                pElement.textContent = incorrectAnswer;
                classApiAnswer.appendChild(pElement);
            })
    });
    }
});











        
//class1 progressBar
//Class2 question - get from API https://opentdb.com/
//Class3 MultipleChoices
//Class4 Score


//02 Make a function that will retrive information from the API server
    //add eventListner  on DOMcontentLoad - to html load first

//03 make a function that will parse the API information and display as a question
    //add eventListner on click to identify the answer

//04 function to select the answer

//05 input the results into a array and stringfy into localstorage.

//06 function to count the score

//07 rediract to score/end page.w

// Just for our reference, follows the 5 categories API links

// Film category.
// 01 https://opentdb.com/api.php?amount=10&category=11
// TV and Entertainment
// 02 https://opentdb.com/api.php?amount=10&category=14
// Music
// 03 https://opentdb.com/api.php?amount=10&category=12
// Video Games
// 04 https://opentdb.com/api.php?amount=10&category=15
// General knowledge
// 05 https://opentdb.com/api.php?amount=10&category=9'