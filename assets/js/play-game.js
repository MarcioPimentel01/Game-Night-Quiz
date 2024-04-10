document.addEventListener('DOMContentLoaded', () => {

    const classProgressBar = document.querySelector(`.progress-bar`)
    const classScoreCount = document.querySelector(`.score-count`)
    const classApiQuestion = document.querySelector(`.api-question`)
    const classApiAnswer = document.querySelector(`.api-answer`)

    //add an event Listener on the selected answer (this addEventListner is aiming the option that the user is clicking after seeing the question)
    clickAnswer.addEventListener(`click`, goToNextQuestion)

    let ArrayGames = []
    let currentQuestionIndex = 0 // keep track of the index of the current question in the quiz.

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

    //function to display the question that was shuffled.

    function displayQuestion(question) {
        classApiQuestion.innerHTML = ``;
        classApiAnswer.innerHTML = ``;

        const questionDiv = document.createElement(`div`); // creates the element DIV inside our html
        questionDiv.classList.add(`api-question`); // targeting my html class

        const questionHeader = document.createElement('h2');
        questionHeader.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
        questionDiv.appendChild(questionHeader);

        // Create a paragraph for each answer option
        const answersParagraph = document.createElement('p');
        answersParagraph.textContent = 'Answers:';
        questionDiv.appendChild(answersParagraph);
    
        // Shuffle answers
        const answers = [...question.incorrect_answers, question.correct_answer];
        shuffleArray(answers);
    
        // Display each answer
        answers.forEach((answer, index) => {
            const answerOption = document.createElement('p');
            answerOption.textContent = `${index + 1}. ${answer}`;
            classApiAnswer.appendChild(answerOption);
        });
    
        // Append the question div to the container
        classApiQuestion.appendChild(questionDiv);
    }
    
    function displayNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < ArrayGames.length) {
            displayQuestion(ArrayGames[currentQuestionIndex]);
        } else {
            alert('No more questions available.');
        }
    }

    // Call the function to load games questions
    loadQuestionGames();
});
