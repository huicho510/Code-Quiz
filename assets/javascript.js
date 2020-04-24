// timer variables

var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
// let secondsDisplay = document.getElementById("#seconds");
let interval;
var totalSeconds = 0;
var secondsElapsed = 0;




//quiz variables
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
let randomQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerBtnElement = document.getElementById("answer-buttons");
const questions = [
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful selection storage", correct: false },
    ],
  },
  {
    question: "What is an Array?",
    answers: [
      { text: "a collection of variables of the same type.", correct: true },
      {
        text:
          "sequence of instruction s that is continually repeated until a certain condition is reached",
        correct: false,
      },
    ],
  },
  {
    question: "What does a Boolean represent?",
    answers: [
      {
        text: "A variable inside of a variable inside of a function",
        correct: false,
      },
      { text: "Your favorite color", correct: false },
      { text: "Represents one of two values: true or false", correct: true },
      { text: "A way to make your code look awesome!", correct: false },
    ],
  },
];

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(randomQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerBtnElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerBtnElement.firstChild) {
    answerBtnElement.removeChild(answerBtnElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtnElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
  nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else  {
    counter -=1;
    element.classList.add("wrong");
  }

}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//timer functions

var counter = 60;
setInterval(function(){
    counter--;
    if(counter>= 0){
        id=document.getElementById("minutes");
        id.innerHTML = counter;
    }
    if(counter==0){
      alert('You Failed');
    }
    
},1000);

  