var startScreen = document.getElementById("start-screen");
//Variables to target start button and create timer
var startButton = document.getElementById("start-button");
var timer;
var time = 60;
var timerEl = document.getElementById("#minutes");
//Variables for question 1 to display it and respond to buttons
var question1 = document.getElementById("question1");
var rightAnswer01 = document.getElementById("q1answer3");
var wrongAnswer01 = document.getElementById("q1answer1");
var wrongAnswer02 = document.getElementById("q1answer2");
var wrongAnswer03 = document.getElementById("q1answer4");
​
​
//FUNCTIONS
//START TIMER
function countDown(){
    time--;
    timerEl.textContent = time;
}
//START QUIZ
function startQuiz() {
    // start the timer
    timer = setInterval(countDown, 1000)
    // Hide the start screen
    startScreen.classList.add("hide");
    //display the first question
    question1.classList.remove("hide");   
}
​
//When right answer is clicked:
function rightAnswer(){
    alert("Correct!");
    question1.classList.add("hide");
    question2.classList.remove("hide");
}
​
//When wrong answer is clicked:
function wrongAnswer(){
    alert("Wrong!");
    question1.classList.add("hide");
    question2.classList.remove("hide");
}

​
​
//EVENT LISTENERS
//startButton.onclick = startQuiz
startButton.addEventListener("click", startQuiz);
rightAnswer01.addEventListener("click", rightAnswer);
wrongAnswer01.addEventListener("click", wrongAnswer);
wrongAnswer02.addEventListener("click", wrongAnswer);
wrongAnswer03.addEventListener("click", wrongAnswer);
