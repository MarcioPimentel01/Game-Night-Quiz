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
});
