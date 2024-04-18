document.addEventListener('DOMContentLoaded', function () {
    const smallImages = document.querySelectorAll('.smallImages .item');

    // Add click event listener to each small image
    smallImages.forEach(function (item) {
        item.addEventListener('click', function () {
            // Get the data-category attribute of the clicked item
            const category = item.getAttribute('data-category');

            // Now you have the selected category, you can perform actions based on it
            switch (category) {
                case 'Films':
                    // Perform actions for the Films category
                    // For example, you might want to start the quiz with Film questions
                    totalQuestions = 10; // Set total questions for the quiz
                    loadQuestionsTv(); // Load questions for the selected category
                    break;
                case 'TV & Show':
                    // Perform actions for the TV & Show category
                    // For example, you might want to start the quiz with TV Show questions
                    totalQuestions = 10; // Set total questions for the quiz
                    loadQuestionsTv(); // Load questions for the selected category
                    break;
                case 'Video Games':
                    // Perform actions for the Video Games category
                    // For example, you might want to start the quiz with Video Games questions
                    totalQuestions = 10; // Set total questions for the quiz
                    loadQuestionsTv(); // Load questions for the selected category
                    break;
                case 'Trivia':
                    // Perform actions for the Trivia category
                    // For example, you might want to start the quiz with Trivia questions
                    totalQuestions = 10; // Set total questions for the quiz
                    loadQuestionsTv(); // Load questions for the selected category
                    break;
                case 'Music':
                    // Perform actions for the Music category
                    // For example, you might want to start the quiz with Music questions
                    totalQuestions = 10; // Set total questions for the quiz
                    loadQuestionsTv(); // Load questions for the selected category
                    break;
                default:
                    // Handle unexpected category
                    console.log('Unexpected category');
                    break;
            }
        });
    });
});
