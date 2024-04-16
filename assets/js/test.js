document.addEventListener('DOMContentLoaded', () => {
    const classApiQuestion = document.querySelector('.api-question');
    const classApiAnswer = document.querySelector('.api-answer');
    let currentQuestionIndex = 0;
    let data = {};

    async function loadQuestions() {
        try {
            const categories = [
                { name: 'films', url: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple' },
                { name: 'tv', url: 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple' },
                { name: 'music', url: 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple' },
                { name: 'games', url: 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple' }
                { name: 'general knowledge', url: 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple' }

                // Add more categories here if needed
            ];

            // Load questions from each category
            for (const category of categories) {
                const result = await fetch(category.url);
                data[category.name] = await result.json();
            }

            // Display the first question after loading
            displayQuestion(categories[0].name, data[categories[0].name].results[currentQuestionIndex]);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    }

    classApiAnswer.addEventListener('click', (event) => {
        if (event.target.classList.contains('answer-option')) {
            const selectedAnswer = event.target.textContent.split('. ')[1];
            goToNextQuestion(selectedAnswer);
        }
    });

    function displayQuestion(categoryName, question) {
        classApiQuestion.innerHTML = '';
        classApiAnswer.innerHTML = '';

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('api-question');

        const questionHeader = document.createElement('h2');
        questionHeader.textContent = `${categoryName} - Question ${currentQuestionIndex + 1}: ${question.question}`;
        questionDiv.appendChild(questionHeader);

        const answers = [...question.incorrect_answers, question.correct_answer];

        answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('answer-option');
            answerButton.textContent = `${index + 1}. ${answer}`;
            classApiAnswer.appendChild(answerButton);
        });

        classApiQuestion.appendChild(questionDiv);
    }

    function goToNextQuestion(selectedAnswer) {
        currentQuestionIndex++;
        const categories = Object.keys(data);
        if (currentQuestionIndex < data[categories[0]].results.length) {
            displayQuestion(categories[0], data[categories[0]].results[currentQuestionIndex]);
        } else {
            alert('No more questions available.');
        }

        if (selectedAnswer === data[categories[0]].results[currentQuestionIndex - 1].correct_answer) {
            alert('Correct!');
        } else {
            alert(`Incorrect. The correct answer is: ${data[categories[0]].results[currentQuestionIndex - 1].correct_answer}`);
        }
    }

    loadQuestions();

});


// document.addEventListener('DOMContentLoaded', () => {
//     const classApiQuestion = document.querySelector('.api-question');
//     const classApiAnswer = document.querySelector('.api-answer');

//     async function loadQuestionTv() {
//         try {
//             const APIUrlTv = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
//             const resultTv = await fetch(APIUrlTv);
//             const dataTv = await resultTv.json();
//             retrieveQuiz(dataTv.results[0]); // Call retrieveQuiz after fetching data
//         } catch (error) {
//             console.error("Error fetching games questions:", error);
//         }
//     }

//     classApiAnswer.addEventListener('click', (event) => {
//         if (event.target.classList.contains('answer-option')) {
//             const selectedAnswer = event.target.textContent.split('. ')[1];
//             goToNextQuestion(selectedAnswer);
//         }
//     });

//     function retrieveQuiz(dataTv) {
//         let correctAnswer = dataTv.correct_answer;
//         let incorrectAnswer = dataTv.incorrect_answers;
//         let optionsList = [...incorrectAnswer];
//         optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); // Fisher-Yates algorithm
//         console.log(optionsList); // Displays shuffled answers, including the right one
//         console.log(correctAnswer); // Display the right one.
//         loadQuestionTv();
//     }

//     function displayQuestion(question) {
//         classApiQuestion.innerHTML = '';
//         classApiAnswer.innerHTML = '';

//         const questionDiv = document.createElement('div');
//         questionDiv.classList.add('api-question');

//         const questionHeader = document.createElement('h2');
//         questionHeader.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
//         questionDiv.appendChild(questionHeader);

//         const answers = [...question.incorrect_answers, question.correct_answer];

//         answers.forEach((answer, index) => {
//             const answerButton = document.createElement('button');
//             answerButton.classList.add('answer-option');
//             answerButton.textContent = `${index + 1}. ${answer}`;
//             classApiAnswer.appendChild(answerButton);
//         });

//         classApiQuestion.appendChild(questionDiv);
//     }

//     function goToNextQuestion(selectedAnswer) {
//         currentQuestionIndex++;
//         if (currentQuestionIndex < dataTv.length) {
//             displayQuestion(dataTv[currentQuestionIndex]);
//         } else {
//             alert('No more questions available.');
//         }

//         if (selectedAnswer === dataTv[currentQuestionIndex - 1].correct_answer) {
//             alert('Correct!');
//         } else {
//             alert(`Incorrect. The correct answer is: ${dataTv[currentQuestionIndex - 1].correct_answer}`);
//         }
//     }

//     loadQuestionTv();

// });
