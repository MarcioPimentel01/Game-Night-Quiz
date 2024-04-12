document.addEventListener('DOMContentLoaded', () => {

    const classApiQuestion = document.querySelector('.api-question');
    const classApiAnswer = document.querySelector('.api-answer');

    async function loadQuestionTv() {
        const APIUrlTv = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
        const resultTv = await fetch(`${APIUrlTv}`);
        const dataTv = await resultTv.json();
        retrieveQuiz(dataTv.results[0]); // Call retrieveQuiz after fetching data
    }

    function retrieveQuiz(dataTv){ 
        let correctAnswer = dataTv.correct_answer;
        let incorrectAnswer = dataTv.incorrect_answers;
        let optionsList = [...incorrectAnswer];
        optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); //Fisher_yates algorithm

        console.log(optionsList); // Displays shuffled answers, including the right one
        console.log(correctAnswer); // Display the right one.
    }

    loadQuestionTv(); // Call loadQuestionTv to start the process
});
