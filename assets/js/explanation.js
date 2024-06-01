// Define a function to decode HTML entities
function HTMLDecode(textString) {
    // Create a new DOMParser object and parse the textString as HTML
    let doc = new DOMParser().parseFromString(textString, "text/html");
    // Return the text content of the parsed document's root element, effectively decoding HTML entities
    return doc.documentElement.textContent;
}

// Define variables to store references to DOM elements
const classApiQuestion = document.querySelector('.api-question'); // Reference to the question container
const classApiAnswer = document.querySelector('.api-answer'); // Reference to the answer container
const classApiScore = document.querySelector('.score-count'); // Reference to the score display
const classApiTotalOfQuestions = document.querySelector('.total-questions'); // Reference to the total number of questions display
const checkAnswerSpan = document.getElementById('check-answer'); // Reference to the answer feedback display
const result = document.getElementById('result'); // Reference to the result display

// Define variables for the quiz state
let correctAnswer = '', quizScore = counting = 0, totalQuestions = 10;
let questionsTv = []; // Array to store questions - Efficient Storage: - Offline Availability - Reduced Server Load - Flexibility and Control

// When the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the score and total number of questions displayed on the UI
    classApiScore.textContent = quizScore;
    classApiTotalOfQuestions.textContent = totalQuestions;
    // Load questions when the game starts
    loadQuestionsTv();
});

// Function to fetch questions from an API
async function loadQuestionsTv() {
    // Construct the API URL to fetch questions related to television
    const APIUrl = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;
    // Fetch data from the API
    const APIObjectTv = await fetch(APIUrl);
    // Parse the JSON response
    const questionsData = await APIObjectTv.json();
    // Store all questions in the global variable
    questionsTv = questionsData.results;
    // Display the first question
    displayQuestion();
}

// Function to display a question and its options
function displayQuestion() {
    // Get the current question from the questionsTv array
    const question = questionsTv[counting];
    correctAnswer = question.correct_answer;
    let incorrectAnswers = question.incorrect_answers;
    let optionsList = [...incorrectAnswers];
    // Insert the correct answer at a random position in the options list
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, correctAnswer);
    
    // Clear previous question and options
    classApiQuestion.innerHTML = ''; 
    // Create a new question container
    const questionDiv = document.createElement('div'); 
    questionDiv.classList.add('api-question');
    // Create and append question header
    const questionHeader = document.createElement('h2'); 
    questionHeader.textContent = `Question ${counting + 1}: ${HTMLDecode(question.question)}`; 
    questionDiv.appendChild(questionHeader);                                                   
    classApiAnswer.innerHTML = ''; 

    // Loop through options and create buttons for each
    optionsList.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('answer-option');
        answerButton.textContent = `${answerIndex + 1}. ${HTMLDecode(answer)}`; // Decode HTML entities in answer text

        // Add event listener to check answer when an option is selected
        answerButton.addEventListener('click', () => { 
            checkAnswer(answer);
        });

        // Append answer button to answer container
        classApiAnswer.appendChild(answerButton);
    });

    // Append question container to question element
    classApiQuestion.appendChild(questionDiv); 
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    // Clear previous result
    checkAnswerSpan.innerHTML = ''; 
    // Check if selected answer is correct
    if (selectedAnswer === correctAnswer) {
        // Increment score if answer is correct
        quizScore++;
        // Update score displayed on UI
        classApiScore.textContent = quizScore;
        // Display "Correct Answer!" message
        checkAnswerSpan.innerHTML = `<p><i class="right-answer"></i> Correct Answer!</p><br>`;
    } else {
        // Display "Incorrect Answer!" message along with the correct answer
        checkAnswerSpan.innerHTML = `<p><i class="wrong-anser"></i> Incorrect Answer! <small><b>Correct Answer: </b>${HTMLDecode(correctAnswer)}</small></p>`;
    } 
    // Check count to determine if all questions have been answered
    checkCount();
}

// Function to check the count of questions answered
function checkCount() {
    // Increment question count
    counting++;
    // Update count on UI
    setCount();
    // If all questions have been answered
    if (counting === totalQuestions) {
        // Delay for 5 seconds
        setTimeout(function() {
            // Log an empty string to the console
            console.log("");
        }, 5000);
        // Display final score
        result.innerHTML += `<p>Your score is ${quizScore}.</p>`;
        // Redirect to end page
        goToEndPage();
        // Hide answer check span
        checkAnswerSpan.style.display = "none";
    } else {
        // If there are remaining questions, display the next question after a delay
        setTimeout(displayQuestion, 300);
    }
}

// Function to update count on UI
function setCount() {
    classApiTotalOfQuestions.textContent = totalQuestions;
    classApiScore.textContent = quizScore;
}

// Function to redirect to end page
function goToEndPage() {
    window.location.href = `end-page.html`;
}
