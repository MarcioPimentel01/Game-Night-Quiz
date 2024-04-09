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
  

if (savedPosts) {
    const posts = JSON.parse(savedPosts);

    // ForEach method used to create the div element throughout createElement
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        // Populate the HTML element with post data
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p><b>By:</b> ${post.username}</p>
            <p>${new Date().toLocaleString()}</p><br><hr>`; // I decided to add time for the post
        // Append the post element to the recent posts container div element
        recentPostsContainer.appendChild(postElement);
    });
}














<<<<<<< HEAD









        
//class1 progressBar
//Class2 question - get from API https://opentdb.com/
//Class3 MultipleChoices
//Class4 Score
=======
>>>>>>> 66d0bb5f60e27931086f87828aa0dafbdc0190dc

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