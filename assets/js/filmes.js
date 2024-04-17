const questionwindow = document.getElementById('question')
const answerwindow = document.getElementById('answers')

function fixHtmlChar(text) {
    var doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent;
}

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



async function addQuestion () {
    await orgQuestions()
    for (let i=0;i<questions.length; i++) {
   const questiontxt = document.createElement('h2')
   questiontxt.innerText = fixHtmlChar(`${questions[i].ask}`)
   document.getElementById('question').appendChild(questiontxt)
    answerpool[i].forEach(element => {
        const answerbtn = document.createElement('button')
        answerbtn.innerText = fixHtmlChar(`${element}`)
        document.getElementById('question').appendChild(answerbtn);
    })
    }
}

answerwindow.addEventListener('click', (event) => {
    check()
})

async function submitbtn() {
    await addQuestion()
    const submit = document.createElement('button')
    submit.innerText = 'Submit'
    document.getElementById('answers').appendChild(submit)
}

submitbtn()

function check () {
    for (i=0;i<selected.length;i++)
    if (selected.length = 10) {
        if (selected[i]==rightanswer[i]) {
            console.count('right_answers')
            console.log('right')
            alert(`question ${i+1}: ${fixHtmlChar(questions[i].ask)}...
            you picked the right answer!! ${fixHtmlChar(rightanswer[i])},
             good job`)
    
        } else {
            console.count('wrong_answers')
            console.log('wrong')
            alert(`question ${i+1}: ${fixHtmlChar(questions[i].ask)}...
             you picked incorrectly!!! ${selected[i]}
              the correct answer is ${fixHtmlChar(rightanswer[i])}!!`)
        }
    }
   else {
    alert('finish')
   }
}

questionwindow.addEventListener('click',(event)=> {
   let input = event.target.innerText
   selected.push(input)
   console.log(input)
})




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



// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// for