document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let dataTv; // Define dataTv outside of any function scope

    loadQuestionTv();
  
    function loadQuestionTv() {
        try {
            const APIUrlTv = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple';
            const resultsfetch(APIUrlTv)
                .then(response => response.json())
                .then(data => {
                    dataTv = data;
                    if (dataTv.results && dataTv.results.length > 0) {
                        retrieveQuiz(dataTv.results[0]);
                    } else {
                        console.error("No questions found in the API response.");
                    }
                })
                .catch(error => {
                    console.error("Error fetching games questions:", error);
                });
        } catch (error) {
            console.error("Error fetching games questions:", error);
        }
    }

    function retrieveQuiz(questionData) {
        let correctAnswer = questionData?.correct_answer;
        let incorrectAnswer = questionData?.incorrect_answers;

        if (correctAnswer && incorrectAnswer) {
            let optionsList = [...incorrectAnswer];
            optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
            console.log(optionsList);
            console.log(correctAnswer);
        } else {
            console.error("Missing data in question object.");
        }
    }

    function displayQuestion(question) {
        const classApiQuestion = document.querySelector('.api-question');
        const classApiAnswer = document.querySelector('.api-answer');
        
        classApiQuestion.innerHTML = '';
        classApiAnswer.innerHTML = '';

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('api-question');
    
        const questionHeader = document.createElement('h2');
        questionHeader.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
        questionDiv.appendChild(questionHeader);
    
        const answers = [...question.incorrect_answers, question.correct_answer];
    
        answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer; // Set button text
            // Add event listener for answerButton click event
            answerButton.addEventListener('click', () => {
                goToNextQuestion(answer);
            });
            classApiAnswer.appendChild(answerButton);
        });      
    }

    function goToNextQuestion(selectedAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < dataTv.results.length) {
            displayQuestion(dataTv.results[currentQuestionIndex]);
        } else {
            alert('No more questions available.');
        }

        if (selectedAnswer === dataTv.results[currentQuestionIndex - 1]?.correct_answer) {
            alert('Correct!');
        } else {
            alert(`Incorrect. The correct answer is: ${dataTv.results[currentQuestionIndex - 1]?.correct_answer}`);
        }
    }
});
