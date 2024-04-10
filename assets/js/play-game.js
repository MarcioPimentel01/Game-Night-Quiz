document.addEventListener('DOMContentLoaded', () => {

    const classProgressBar = document.querySelector(`.progress-bar`)
    const classScoreCount = document.querySelector(`.score-count`)
    const classApiQuestion = document.querySelector(`.api-question`)
    const classApiAnswer = document.querySelector(`.api-answer`)

























































    // Function to shuffle an array using Fisher-Yates algorithm
    function shuffleArray(incorrectArray, correct) {
        for (let i = incorrectArray.length - 1; i > 0; i--) { // for loop where integer is minor than the array size minus 1, the loop continues as long integer is greater than zero, and decrement by 1
        const randomNumber = Math.floor(Math.random() * (i + 1)); // Generates a random number, uses Math.floor to not float the math.random, then the the random number generated,
        [(incorrectArray[i], correct), (incorrectArray[randomNumber], correct)] = [(incorrectArray[randomNumber], correct), (incorrectArray[i], correct)];
    }
}

// Shuffle the incorrect answers
shuffleArray(newObject.incorrect_answers);

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


    Function to Select answer


    function to check answer as true or false
    

});
