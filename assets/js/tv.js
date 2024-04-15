document.addEventListener('DOMContentLoaded', () => {

        const classApiQuestion = document.querySelector('.api-question');
        const classApiAnswer = document.querySelector('.api-answer');

        let currentQuestionIndex = 0

        async function loadQuestionTv() {
            try {
                const APIUrlTv = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
                const resultTv = await fetch(APIUrlTv);
                const dataTv = await resultTv.json();
                retrieveQuiz(dataTv.results[0]); // Call retrieveQuiz after fetching data
            } catch (error) {
                console.error("Error fetching games questions:", error);
            }
        }
        
        function retrieveQuiz(dataTv) {
          
                let correctAnswer = dataTv.correct_answer;
                let incorrectAnswer = dataTv.incorrect_answers;
                let optionsList = [...incorrectAnswer];
                optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); // Fisher-Yates algorithm
        
                console.log(optionsList); // Displays shuffled answers, including the right one
                console.log(correctAnswer); // Display the right one.
        }

        displayQuestion();

        function displayQuestion(question) { // Function to display the question that was shuffled.
            classApiQuestion.innerHTML = ''; 
            classApiAnswer.innerHTML = ''; 

            
            function goToNextQuestion(selectedAnswer) {
                let currentQuestionIndex = currentQuestionIndex + 1;
                if (currentQuestionIndex < dataTv.length) { 
                    displayQuestion(dataTv[currentQuestionIndex])
                } else {
                    alert('No more questions available.');
                }
                
                if (selectedAnswer === dataTv[currentQuestionIndex - 1].correct_answer) {
                    alert('Correct!'); //alert to be changed Please
                } else {
                    alert(`Incorrect. The correct answer is: ${dataTv[currentQuestionIndex - 1].correct_answer}`);
                }
                
            }
            
            goToNextQuestion();

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
        
        loadQuestionTv(); // Call loadQuestionTv to start the process
        
});      
    
    //Function to display question creating element





    //02 loop to invoke loadQuestionTV








