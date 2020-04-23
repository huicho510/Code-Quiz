// let minutesDisplay = document.querySelector("#minutes");
// let secondsDisplay = document.querySelector("#seconds");



// let totalSeconds = 0;
// let secondsElapsed = 0;
// let status = "Working";
// let interval;

// startQuiz();
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
let randomQuestions, currentQuestionIndex
const questionElement = document.getElementById('question');
const answerBtnElement = document.getElementById('answer-buttons');
const questions = [
    {
        question: 'What does CSS stand for?',
        answers: [
            {text:'Cascading Style Sheets', correct: true},
            {text: 'Colorful selection storage', correct: false}
        ]
    }
]

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    console.log('Started');
    startButton.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
    });
}

function resetState(){
    nextButton.classList.add('hide');
    while(answerBtnElement.firstChild){
        answerBtnElement.removeChild
        (answerBtnElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button =>{
        setStatusClass(button,  button.dataset.correct)
    });
    if (randomQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    nextButton.classList.remove('hide');

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    // if (correct){
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}


 





















// function getFormattedMinutes() {
    
//     let secondsLeft = totalSeconds - secondsElapsed;
  
//     let minutesLeft = Math.floor(secondsLeft / 60);
  
//     let formattedMinutes;
  
//     if (minutesLeft < 10) {
//       formattedMinutes = "0" + minutesLeft;
//     } else {
//       formattedMinutes = minutesLeft;
//     }
  
//     return formattedMinutes;
//   }
  
//   function getFormattedSeconds() {
//     let secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
//     let formattedSeconds;
  
//     if (secondsLeft < 10) {
//       formattedSeconds = "0" + secondsLeft;
//     } else {
//       formattedSeconds = secondsLeft;
//     }
  
//     return formattedSeconds;
//   }
//   function setTime() {
//     let minutes;
//     clearInterval(interval);
//     totalSeconds = minutes * 60;
//   }

//   function renderTime() {
//     minutesDisplay.textContent = getFormattedMinutes();
//     secondsDisplay.textContent = getFormattedSeconds();

//     if (secondsElapsed >= totalSeconds) {
//       if (status === "Working") {
//         alert("You ran outta time!");
//       }
//     }
//   }

//   function startTimer() {
//     if (totalSeconds > 0) {    
//       /* the "interval" variable here using "setInterval()" begins the recurring increment of the 
//          secondsElapsed variable which is used to check if the time is up */
//         interval = setInterval(function() {
//           secondsElapsed++;
//           //So renderTime() is called here once every second.
//           renderTime();
//         }, 1000);
//     } 
//   }

//   function startQuiz() {
//     renderTime();
//     startTimer();
    
//   }

  