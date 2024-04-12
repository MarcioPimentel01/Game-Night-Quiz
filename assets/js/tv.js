

// document.addEventListener('DOMContentLoaded'), () => {

async function loadQuestionTv() {
    const APIUrlTv = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
    const resultTv = await fetch(APIUrlTv);
    const dataTv = await resultTv.json();
    // console.log(dataFilms.resultFilms)
    return dataFilms.results
    }

    function retrievequiz(dataTv){ 
        let correctAnswer = dataTv.correct_answer;
        let incorrectAnswer = dataTv.incorrect_answer;
        let optionsList = [...incorrectAnswer];
        optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
        optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, incorrectAnswer);
        console.log(optionsList);
        console.log(correctAnswer);
    }


loadQuestionFilms() // I need to do something with the results, otherwiese the function will be calling non-stop
retrievequiz(dataFilms)

// }
