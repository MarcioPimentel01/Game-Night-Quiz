

document.addEventListener('DOMContentLoaded', () => {

async function loadQuestionFilms() {
    const APIUrlFilms = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
    const resultFilms = await fetch(APIUrlFilms);
    const dataFilms = await resultFilms.json();
    // console.log(dataFilms.resultFilms)
    return dataFilms
    }

    function retrivequiz(dataFilms) {
        let correctAnswer = dataFilms.correct_answer;
        let incorrectAnswer = 
    }

loadQuestionFilms() // I need to do something with the results, otherwiese the function will be calling non-stop















// //same steps than play-game.js, now I'll try to retive the information using Object.keys() and Array.prototype.sort() algorithms
// function retrivequiz(responseObject) {
//     const obj = {difficulty: ``, category: ``, question: '', correct_answer: ``, incorrect_answers: ``};
//     const keys = Object.keys(obj);

//     const retrievedData = keys.reduce((data, key) => {
//         data[key] = responseObject[key];
//         return data;
//     }, {});
//     console.log(retrievedData)
    
//     const responseObject = {
//         type: "",
//         difficulty: "",
//         category: "",
//         question: "",
//         correct_answer: "",
//         incorrect_answers: [
//             "",
//             "",
//             ""
//         ]
//     };
    
//     // Call the function with the example object
//     retrivequiz(responseObject);
// }


})