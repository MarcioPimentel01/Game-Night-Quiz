const questionwindow = document.getElementById('question')
const answerwindow = document.getElementById('answers')
const reply = document.getElementById('result')
const submit = document.getElementById('submit')
const currentscore = document.getElementById('final-score')

//borrowed function to fix issues with reading quotes

function fixHtmlChar(text) {
    var doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent;
}

// borrowed function to shuffle answer choices
function shuffleArray(answerpool) {
        for (let a = 3; a > 0; a--) {
            const randomNumber = Math.floor(Math.random() * (a + 1));
            [answerpool[a], answerpool[randomNumber]] = [answerpool[randomNumber], answerpool[a]];
        }
}

//defined arrays that will store information pulled from APi
const Filmdata = [];
const questions = [];
let answerpool = [];
let rightanswer = [];
let selected = [];

//set variable to keep score

let amountright = 0
let score = amountright * 100



async function loadQuestionFilms() {
    const APIUrlFilms = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
    const resultFilms = await fetch(APIUrlFilms);
    const dataFilms = await resultFilms.json();
    const questionsset = dataFilms.results;
    Filmdata.push(...questionsset)
    orgQuestions()
}


async function orgQuestions () {
    for (i=0;i<Filmdata.length;i++) {
    let question =
        Filmdata[i].question
    
    questions.push(question)

    let pool = [...(Filmdata[i].incorrect_answers)]
    pool.push(Filmdata[i].correct_answer);

    answerpool.push(pool);
    let answer = Filmdata[i].correct_answer;
    rightanswer.push(answer)
    }
    submit.innerHTML = 'play'
}


let n = 0
function next () {
    n++;
    return n;
}

async function addQuestion () {
    answerwindow.innerHTML = ''
    questionwindow.innerHTML = ''
    reply.innerHTML = ''
   const questiontxt = document.createElement('h2')
   questiontxt.innerText = fixHtmlChar(`${questions[n]}`)
   questionwindow.appendChild(questiontxt)
   shuffleArray(answerpool[n])
    answerpool[n].forEach(element => {
        const answerbtn = document.createElement('button');
        answerbtn.innerText = fixHtmlChar(`${element}`);
        answerwindow.appendChild(answerbtn);
    })
    const scorecnt = document.createElement('h2')
    scorecnt.innerText =  amountright * 100
    reply.appendChild(scorecnt)
    localStorage.setItem('score', amountright)
    }


answerwindow.addEventListener('click',(event)=> {
    event.preventDefault();
    if (n < Filmdata.length) {
    const input = event.target.innerText;
    if (input === fixHtmlChar(rightanswer[n])) {
        answerwindow.innerHTML = ''
        alert('right answer')
        amountright++
        submit.setAttribute('class','right-answer')
    } else {
        answerwindow.innerHTML = ''
        alert('wrong answer')
        console.count('wrong')
        submit.setAttribute('class','wrong-answer')
    }
next()
    return input;
} 
else{
    end()
}
})

submit.addEventListener('click', (event) => {
    if (n<Filmdata.length) {
    submit.setAttribute('class','answer-option')
    addQuestion()
    submit.innerHTML = 'next'
    }
    else {
        end()
    }
})

loadQuestionFilms()

function end () {
    window.location = 'end-page.html'
}