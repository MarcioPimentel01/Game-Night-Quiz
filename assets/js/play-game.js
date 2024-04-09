const classProgressBar = document.querySelector(`progress-bar`)
const classScoreCount = document.querySelector(`score-count`)
const classApiQuestion = document.querySelector(`api-question`)
const classApiAnswer = document.querySelector(`api-answer`)


const questiontest = []

const newObject = {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question: "Which movie sequel had improved box office results compared to its original film?",
    correct_answer: "Toy Story 2",
    incorrect_answers: [
    "Sin City: A Dame to Kill For",
    "Speed 2: Cruise Control",
    "Son of the Mask"
    ]
  };
  
questiontest.push(newObject);
  

















//02 Make a function that will retrive information from the API server
    //add eventListner  on DOMcontentLoad - to html load first

//03 make a function that will parse the API information and display as a question
    //add eventListner on click to identify the answer

//04 function to select the answer

//05 input the results into a array and stringfy into localstorage.

//06 function to count the score

//07 rediract to score/end page.w

// Just for our reference, follows the 5 categories API links

// Film category.
// 01 https://opentdb.com/api.php?amount=10&category=11
// TV and Entertainment
// 02 https://opentdb.com/api.php?amount=10&category=14
// Music
// 03 https://opentdb.com/api.php?amount=10&category=12
// Video Games
// 04 https://opentdb.com/api.php?amount=10&category=15
// General knowledge
// 05 https://opentdb.com/api.php?amount=10&category=9'