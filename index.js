// imports 
var readLineSync = require('readline-sync');
var chalk = require('chalk');

// declarations
var score = 0;
var scoreMessage = "Your score is ";

// functions
function askQuestion(question, correctAns) {
  var userAnswer = readLineSync.question(question);

  if (correctAns.toLowerCase() === userAnswer.toLowerCase()) {
    console.log("you are correct");
    score = score + 1;
    console.log(scoreMessage + score);
  } else {
    console.log("sorry! you are wrong. the correct answer is "+correctAns);
  }
}

// array of question objects
var questions = [
  {
    question: "Is my age less than 18? ",
    answer: "no"
  },
  {
    question: "What's my Nickname? ",
    answer: "Bunty"
  },
  {
    question: "Do I live in Goa? ",
    answer: "yes"
  },
  {
    question: "What's my most favorite thing? ",
    answer: "Internet"
  },
  {
    question: "Am I a CS Student? ",
    answer: "yes"
  },
  {
    question: "Do I prefer Beaches or Mountains? ",
    answer: "Beaches"
  }
];


console.log(chalk.bgYellow("Welcome to #doYouKnowChaitanya\n"))
var questionName = "What's your sweet Name? ";
var userName = chalk.green(readLineSync.question(questionName));
var welcomeMessage = "Welcome! " + userName + "\n";
console.log(welcomeMessage);

// question loop
for (var i = 0; i < questions.length; i++) {
  askQuestion(questions[i].question, questions[i].answer);
  console.log("\n");
}

console.log("Your Final Score : " + score);