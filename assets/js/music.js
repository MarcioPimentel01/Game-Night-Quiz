document.addEventListener('DOMContentLoaded', () => {

    const classApiQuestion = document.querySelector('.api-question');
    const classApiAnswer = document.querySelector('.api-answer');

    let currentQuestionIndex = 0;

async function loadQuestionMusic() {
    try {
        const APIUrlMusic = 'https://opentdb.com/api.php?amount=10&category=12';
        const resultMusic = await fetch(APIUrlMusic);
        const dataMusic = await resultMusic.json();
        retrieveQuiz(dataMusic.results[0]);
    } catch (error) {
        console.error("Error fetching api questions", error);
    }
}

function retrieveQuiz(dataMusic) {
    let correctAnswer = dataMusic.correct_answers;
    let incorrectAnswer = dataMusic.incorrec_answers;
    let optionsList = [...incorrectAnswer];
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.lenght + 1)), 0, correctAnswer);

    console.log(optionsList);
    console.log(correctAnswer);
}
});


//                 setTimeout(() => {
//                     selectedChoice.parentElement.classList.remove(classToApply);
//                     getNewQuestion();
//                 }, 1000);
//             });
//         });
//     };
// });
