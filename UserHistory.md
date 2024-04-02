
# User Story: Play and Learn with a Quiz App (Enhanced with Login and Personal Scores)

As a registered user who enjoys learning  
I want to play a fun and engaging quiz with different themes and difficulty levels, track my progress, and compete with others  
So that I can test my knowledge, learn new things in a specific area, and see my improvement over time.

## Acceptance Criteria:

- The app has an index page with:
  - A logo representing the quiz app.
  - Two sections:
    - Login: Allows existing users to enter their credentials (username and password) and log in.
    - Register: Allows new users to create an account by providing a username and password.
  - A button: "Play New Quiz" (This button is disabled until the user logs in).
- Upon successful login, the user sees the "Play New Quiz" button enabled.
- Clicking "Play New Quiz" takes the user to a theme selection page displaying:
  - Three different theme options (e.g., JavaScript, HTML, CSS).
  - Each theme option should have at least three difficulty levels: Easy, Medium, Hard.
- Upon selecting a theme and difficulty level, the user is taken to a quiz page displaying:
  - A series of 10 questions related to the chosen theme and difficulty.
  - A progress bar that visually indicates the user's progress through the quiz (e.g., 1 out of 10 questions completed).
- When the user selects an answer:
  - If the answer is correct:
    - The chosen option highlights in green.
    - The user receives a positive feedback message (optional).
  - If the answer is incorrect:
    - The chosen option highlights in red.
    - The correct answer is highlighted in green.
    - A brief explanation for the right answer is displayed (optional).
- Once all questions are answered:
  - A "Congratulations" message is displayed, summarizing the user's score (number of correct answers).
  - All questions reappear with the correct answer highlighted in green.
  - Incorrect answers are highlighted in red with a brief explanation for the right answer.
- The user is then directed to a results page with options to:
  - "Play Again": Starts a new quiz with a new theme and difficulty level selection.
  - "Main Menu": Takes the user back to the index page.
  - "See High Scores" (Optional): Displays the top scores stored in local storage (including the user's latest score if applicable).
  - "See Personal Scores" (New): Shows the user's personal high scores for each theme and difficulty level.
- User scores and login information are stored securely using techniques like secure hashing for passwords.
