# Quiz Application

Welcome to the Quiz Application, a fun and interactive CLI program that tests your general knowledge with multiple-choice questions.

## Features

- Greeting: A friendly welcome message when the program starts.

- User Input: Prompts the user to enter their name and validates the input.

- Quiz Questions: Presents a series of multiple-choice questions to the user.

- Score Tracking: Keeps track of the user's score based on their answers.

- Interactive Navigation: Users can choose to start the quiz or exit at any time.

- Result Display: Displays the final score at the end of the quiz.

## Requirements

- Node.js (v12.0.0 or later)

  [Install Node.js](https://nodejs.org/en/download/package-manager)

- readline-sync package

- chalk package

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/KatanaSword/quiz.git
   cd quiz
   ```

2. **Install the dependencies:**

   ```
   npm install readline-sync chalk
   ```

## Usage

1. **Run the program using Node.js:**

   ```
   node app.js
   ```

## Program Flow

1. **Greeting:**

- Displays a welcome message.

- Prompts the user to enter their name.

2. **User Name Input:**

- If the entered name is invalid (empty or not a string), prompts the user to enter again.

- Greets the user by name and moves to the continue prompt.

3. **Continue Prompt:**

- Asks the user if they want to continue to the quiz or exit.

- If the user chooses to exit, displays a goodbye message.

- If the user chooses to continue, starts the quiz.

4. **Quiz:**

- Displays each question and prompts the user to enter their answer.

- Validates the user's answer and updates the score accordingly.

- If the answer is correct, increments the score by 2.

- If the answer is incorrect, decrements the score by 1 and displays the correct answer.

- If the user enters an invalid option, prompts again for the same question.

5. **End Quiz:**

- Displays the user's final score.

- Thanks the user for playing the quiz.

## Example

```
--------------------🌸🌸🌸--------------------
Welcome to the quiz, Let's play!!
--------------------🌸🌸🌸--------------------
Please enter your name: John
--------------------💮💮💮--------------------
Let's play the quiz John
--------------------💮💮💮--------------------
Do you want to continue [y/n]: y
What is the capital of France?
a) Berlin
b) Madrid
c) Paris
d) Rome
Answer: c
Right Answer
What is the largest planet in our solar system?
a) Earth
b) Mars
c) Jupiter
d) Saturn
Answer: b
Wrong Answer
Correct answer: c
--------------------✨✨✨--------------------
Score: 1
Thanks John for playing quiz.
--------------------✨✨✨--------------------
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
