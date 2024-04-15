function fixHtmlChar(text) {
    var doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent;
}

//preventes the javascript code to run before html finishes to load
document.addEventListener('DOMContentLoaded', () => {

    const classProgressBar = document.querySelector('.progress-bar');
    const classScoreCount = document.querySelector('.score-count');
    const classApiQuestion = document.querySelector('.api-question');
    const classApiAnswer = document.querySelector('.api-answer');

    // Add an event Listener on the selected answer (this addEventListener is aiming the option that the user is clicking after seeing the question)
    // Replace `clickAnswer` with the appropriate selector for your answer buttons
    // For example, if your answer buttons have a class of `answer-option`, use `.answer-option`
    classApiAnswer.addEventListener('click', (event) => { //looks for answer clicked - (classApiAnswer=api-answer)
        if (event.target.classList.contains('answer-option')) { //Looks for the class answer-option
            const selectedAnswer = event.target.textContent.split('. ')[1]; // Extracts the selected answer from the clicked button's text content. It splits the text content by the period and space ('. ') and selects the second part (index 1), which is assumed to be the answer text after the index
            goToNextQuestion(selectedAnswer); //calls function goToNextQuestion passing the argument selectedAnswer, that is the splited array
        }
    });

    let ArrayGames = []; //recives objects retrieved from a JSON

    // function removeQuotes () {

    // }

    //To be implemented
    let currentQuestionIndex = 0; // Keep track of the index of the current question in the quiz.

    function displayQuestion(question) { // Function to display the question that was shuffled.
        classApiQuestion.innerHTML = ''; // Set as a empty element - clears the content inside the HTML element selected by the variable classApiQuestion
        classApiAnswer.innerHTML = ''; // Set as a empty element just like the one above

        const questionDiv = document.createElement('div'); // that one just creates the element Div targeting the api-questions just like the blog-form challenge
        questionDiv.classList.add('api-question');

        const questionHeader = document.createElement('h2'); // creates h2 element
        questionHeader.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`; //This line sets the textContent property of the questionHeader element. 
        questionDiv.appendChild(questionHeader);                                                   //It creates a string that represents the question, including its index 
        //(based on currentQuestionIndex) and the actual question text retrieved 
        const answers = [...question.incorrect_answers, question.correct_answer];                  //from the question object.
        //const answer returns an array with the correct answer together with the incorrect ones

        answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('answer-option'); // Add a class for styling
            answerButton.textContent = `${index + 1}. ${answer}`;
            classApiAnswer.appendChild(answerButton);
        });

        classApiQuestion.appendChild(questionDiv); //Appends the question container (questionDiv) to the classApiQuestion element
    }

    // Fisher-Yates algorithm, I changed the const "j" by "randomNumber" to better understand the algorithm
    function shuffleArray(answers) {
        for (let i = answers.length - 1; i > 0; i--) {
            const randomNumber = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[randomNumber]] = [answers[randomNumber], answers[i]];
        }
    }

    async function loadQuestionGames() { // Test to change the loadQuestionGames using the try and catch block
        try {
            const APIUrlGames = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
            const resultGames = await fetch(APIUrlGames); // This const uses the fetch function to make a GET request to the API endpoint.
            const dataGames = await resultGames.json(); // The variable dataGames extracts the JSON from resultGames
            // Spread the elements of dataGames.results into ArrayGames
            ArrayGames.push(...dataGames.results); // Juan pushed only the results into the array 

            if (dataGames.results && dataGames.results.length > 0) { // If dataGames results and its length is greater than 0 starts a for of
                for (const question of dataGames.results) { // For of creates an array to add correct answer with the wrong answer (array name = AllAnswers)

                    question.question = fixHtmlChar(question.question);
                    question.correct_answer = fixHtmlChar(question.correct_answer);
                    question.incorrect_answers = question.incorrect_answers.map(answer => fixHtmlChar(answer));
                    const allAnswers = [...question.incorrect_answers, question.correct_answer]; // Just in case `, question.correct_answer`
                    shuffleArray(allAnswers); // Using the first code created, the Fisher-Yates algorithm on the allAnswers array
                    const rightAnswer = allAnswers.findIndex(answer => answer === question.correct_answer)
                    question.correct_answer = allAnswers[rightAnswer];
                    allAnswers.splice(rightAnswer, 1);
                    question.incorrect_answers = allAnswers;

                    // const isLargeNumber = (element) => element > 13;
                    // const array1 = [5, 12, 8, 130, 44];
                    // console.log(array1.findIndex(isLargeNumber));
                    // // Expected output: 3

                    // const allAnsewrsPlusCorrect = [...allAnswers, question.correct_answer];

                }
            }

            // Display the first question after loading
            displayQuestion(ArrayGames[currentQuestionIndex]);

        } catch (error) { // Displays a message saying that couldn't fetch the question from the API Serve
            console.error("Error fetching games questions:", error);

        }
    }

    function goToNextQuestion(selectedAnswer) { // Function to move to the next question
        currentQuestionIndex++; //Increment the index to move to the next question
        if (currentQuestionIndex < ArrayGames.length) { //Increment the index to move to the next question
            displayQuestion(ArrayGames[currentQuestionIndex]);
        } else {
            alert('No more questions available.');
        }

        if (selectedAnswer === ArrayGames[currentQuestionIndex - 1].correct_answer) {
            alert('Correct!'); //alert to be changed Please
            // Update score (To be implemented)
            // score++;
        } else {
            alert(`Incorrect. The correct answer is: ${ArrayGames[currentQuestionIndex - 1].correct_answer}`);
        }
    }

    // Call the function to load games questions
    loadQuestionGames();
});
