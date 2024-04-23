scorecard = document.getElementById('score')

points = localStorage.getItem('score')


function displayscore() {
    scorecard.innerText = `Your score is ${points} points`
}
