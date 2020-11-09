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
          "sequence of instructions that is continually repeated until a certain condition is reached",
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
      { text: "Represents one of two values: true or false", correct: true },
    ],
  },
  {
    question: "Will coding ever get easier?",
    answers: [
      { text: "Probably not", correct: false },
      { text: "Yes practice makes perfect, dont give up!", correct: true },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyperbolic Time Chamber" },
    ],
  },
];

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  count();
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
// buttons change color and secs get + or -
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    counter += 5;
  } else if (element != correct) {
    element.classList.add("wrong");
    counter -= 5;
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//timer functions

let counter = 60;
function count() {
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      id = document.getElementById("minutes");
      id.innerHTML = counter;
    }
    if (counter == 0) {
      alert("You Failed");
    }
  }, 1000);
}

//intials to local storage code
let submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
 let name = document.querySelector("#name").value;

  if (name === "") {
    alert("Error", "name can not be blank");
  } else {
    alert("You Win!");

    localStorage.setItem("name", name);
  }
});


    

