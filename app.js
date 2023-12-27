const readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
const gkQuiz = require("./database");

let score = 0;
let userName;
let options = ["a", "b", "c", "d"]; 

function greetings() {
  log(chalk.white.bold("--------------------🌸🌸🌸--------------------"));
  log(chalk.white.bold("Welcome to the quiz, Let's play!!"));
  log(chalk.white.bold("--------------------🌸🌸🌸--------------------"));
  startQuiz();
};
greetings();

function startQuiz() {
  userName = readlineSync.question(chalk.white.underline.bold("Please enter your name") + ":" + " ");
  if(!userName || !isNaN(userName)) {
    log(chalk.bgRed.bold("Invalid entry, Please enter your name"));
    startQuiz();
  } else {
    log(chalk.white.bold("--------------------💮💮💮--------------------"));
    log(chalk.bgWhite.bold(`Let's play the quiz ${userName}`));
    log(chalk.white.bold("--------------------💮💮💮--------------------"));
    exitFunc();
  }
};

function exitFunc() {
  const continueOrExit = readlineSync.question(chalk.white.underline.bold("Do you want to continue [y/n]") + ":" + " ");
  if(continueOrExit === "n") {
    log(chalk.white.bold("--------------------💔💔💔--------------------"));
    log(chalk.bgWhite.bold(`Noooo it's too soon ${userName}, Comeback any time.`));
    log(chalk.white.bold("--------------------💔💔💔--------------------"));
  } else if(continueOrExit === "y") {
    quiz();
  } else {
    log(chalk.bgRed.bold("Invalid entry, Please enter [y/n] to continue"));
    exitFunc();
  }
}

function quiz() {
  for(let i = 0; i < gkQuiz.length; i++) {
    const currentQuestion = gkQuiz[i].question;
    const currentCorrectAnswer = gkQuiz[i].correctAnswer;
    const userInput = readlineSync.question(chalk.white.bold(currentQuestion) + chalk.white.bold.underline("\nAnswer") + ":" + " ");
    if (options.includes(userInput)) {
      if (userInput === currentCorrectAnswer) {
        log(chalk.bgGreen.bold("Right Answer"));
        score += 2;
      } else {
        log(chalk.bgRed.bold("Wrong Answer"));
        const showRightAnswer = `${chalk.white.bold.underline("Correct answer")}: ${chalk.bgGreen.bold(currentCorrectAnswer)}`;
        log(showRightAnswer);
        score -= 1;
      };
    } else {
      log(chalk.bgRed.bold("Invalid entry, Please enter valid option"));
      i--;
    };
  }
  endQuiz();
};

function endQuiz() {
  log(chalk.white.bold("--------------------✨✨✨--------------------"));
  log(chalk.bgYellow.bold("Score:", score));
  log(chalk.bgWhite.bold(`Thanks ${userName} for playing quiz.`));
  log(chalk.white.bold("--------------------✨✨✨--------------------"));
};