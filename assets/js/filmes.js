const questionwindow = document.getElementById('question')
const answerwindow = document.getElementById('answers')

const Filmdata = [];
let questions = [];
let answerpool = [];
let rightanswer = [];
let selected = [];

async function loadQuestionFilms() {
    const APIUrlFilms = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
    const resultFilms = await fetch(APIUrlFilms);
    const dataFilms = await resultFilms.json();
    const questions = dataFilms.results;
    Filmdata.push(...questions);
}


async function orgQuestions () {
    await loadQuestionFilms()
for (let i=0;i<Filmdata.length;i++) {
    let question = {
        ask: Filmdata[i].question
    };
    questions.push(question)

    let pool = [...Filmdata[i].incorrect_answers]
    pool.push(Filmdata[i].correct_answer);
    answerpool.push(pool);

    let answer = Filmdata[i].correct_answer;
    rightanswer.push(answer)
} 
}

orgQuestions()


function addQuestion () {
   const questiontxt = document.createElement('h2')
   questiontxt.innerText = `${questions[0].ask}`
   document.getElementById('question').appendChild(questiontxt)
}

function addBtn () {  
    for (let i=0;i<1; i++) {
        let currentQuestion = answerpool[i]
        currentQuestion.forEach(element => {
        const answerbtn = document.createElement('button')
        answerbtn.innerText = `${element}`
        document.getElementById('answers').appendChild(answerbtn);
        })

}}


answerwindow.addEventListener('click',(event)=> {
   let input = event.target.innerText
   console.log(input)
   selected.push(input)
})

function check () {
    for (i=0;i<selected.length;i++)
    if (selected[i]==rightanswer[i]) {
        console.log('right')

    } else {
        console.log('wrong')
    }
}
// async function loadQuestionFilms() {
//     const APIUrlFilms = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
//     const resultFilms = await fetch(APIUrlFilms);
//     const dataFilms = await resultFilms.json();
//     const question = {
//         type: dataFilms.results[0].type,
//         question: dataFilms.results[0].question,
//         difficulty: dataFilms.results[0].difficulty,
//         category: dataFilms.results[0].category,
//         correct: dataFilms.results[0].correct_answer,
//         incorrect: [dataFilms.results[0].incorrect_answers],
//     }
//     Filmdata.push(question)
//     let questionpool = [...question.incorrect[0],question.correct];
//     pool.push(questionpool);
//     return question;
// }

// function shuffleArray(pool) {
//     for (let i = pool.length - 1; i > 0; i--){
//         const randomNumber = Math.floor(Math.random() * (i + 1));
//        [pool[i], pool[randomNumber]] = [pool[randomNumber], pool[i]];
//        console.log(pool[i]);
//     }
// }

// function display(question) {

// }



for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
for