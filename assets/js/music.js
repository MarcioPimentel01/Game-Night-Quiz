async function loadQuestionFilms() {
    const APIUrlFilms = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
    const resultFilms = await fetch(APIUrlFilms);
    const dataFilms = await resultFilms.json();
    // console.log(dataFilms.resultFilms)
    return dataFilms.results
    }

    function retrievequiz(dataFilms){ 
        let correctAnswer = dataFilms.correct_answer;
        let incorrectAnswer = dataFilms.incorrect_answer;
        let optionsList = [...incorrectAnswer];
        optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
        console.log(optionsList);
        console.log(correctAnswer);
    }


loadQuestionFilms() // I need to do something with the results, otherwiese the function will be calling non-stop
retrievequiz(dataFilms)
