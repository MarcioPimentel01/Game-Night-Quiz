document.addEventListener('DOMContentLoaded', () => {
    const classApiQuestion = document.querySelector('.api-question');
    const classApiAnswer = document.querySelector('.api-answer');
    let currentQuestionIndex = 0;
    let data = {};

    async function loadQuestions() {
        try {
            const categories = [
                { name: 'films', url: 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple' },
                // { name: 'tv', url: 'https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple' },
                // { name: 'music', url: 'https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple' },
                // { name: 'games', url: 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple' },
                // { name: 'general knowledge', url: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple' },
            ];

            // Load questions from each category
            for (const category of categories) {
                if (!localStorage.getItem(category.name)) {
                    const result = await fetch(category.url);
                    const questions = await result.json();
                    localStorage.setItem(category.name, JSON.stringify(questions.results));
                }
                data[category.name] = JSON.parse(localStorage.getItem(category.name));
            }

            // Display the first question after loading from the first category
            displayQuestion(categories[0].name, data[categories[0].name][currentQuestionIndex]);
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

    function retrieveQuiz(categoryName, dataCategory) {
        let correctAnswer = dataCategory.correct_answer;
        let incorrectAnswer = dataCategory.incorrect_answers;
        let optionsList = [...incorrectAnswer];
        optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); // Fisher-Yates algorithm
        console.log(optionsList); // Displays shuffled answers, including the right one
        console.log(correctAnswer); // Display the right one.
    }

    function displayQuestion(categoryName, question) {
        classApiQuestion.innerHTML = '';
        classApiAnswer.innerHTML = '';

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('api-question');

        const questionHeader = document.createElement('h2');
        questionHeader.textContent = `Question ${currentQuestionIndex + 1} (${categoryName}): ${question.question}`;
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
        // Implement logic to handle moving to the next question within the current category
    }

    loadQuestions();
});
