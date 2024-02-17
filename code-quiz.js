var questionElement = document.querySelector(".question");
var timerElement = document.querySelector(".time-left");
var highScoresElement = $(".high-scores");

var buttonStartElement = $("#button-start");
var buttonOneElement = $("#button-one");
var buttonTwoElement = $("#button-two");
var buttonThreeElement = $("#button-three");
var buttonFourElement = $("#button-four");
var answerButtons = $(".button");

var scores = [];

const correctSound = new Audio("correct-ding-better.mp3");
const wrongSound = new Audio("wrong-ding.mp3");

var answersElement = $('ul');

var questionNumber = 0;
var timer;
var timerCount;

var instructionsText = "<h1>" + "Coding Quiz Challenge</h1><h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</H2>";

questions = ["Commonly used data types DO Not Include:",
             "The condition in an if / else statement is enclosed with ____________.",
             "Arrays in JavaScript can be used to store ____________.",
             "String values must be enclosed within ____________ when being assigned to variables.",
             "A very useful tool used during development and debugging for printing content to the debugger is:"]

options = [["strings", "booleans", "alerts", "numbers"], 
           ["quotes", "curly brackets", "parenthesis", "square brackets"],
           ["numbers and strings", "other arrays", "booleans", "all of the above"],
           ["commas", "curly brackets", "quotes", "parenthesis"],
           ["JavaScript", "termial/bash", "for loops", "console.log"]];

answers = ["alerts", "parenthesis", "all of the above", "quotes", "console.log"];


function resetInstructions() {
    // RESET BOARD
    questionNumber = 0;
    timerCount = 60;
    questionElement.innerHTML = instructionsText;
    toggleAnswerButtons("off");
    showCountDown();
}

function toggleAnswerButtons(state) {
    if (state == "on") {
        buttonStartElement.css('display', 'none');
        buttonOneElement.css('display', 'inline-block');
        buttonTwoElement.css('display', 'inline-block');
        buttonThreeElement.css('display', 'inline-block');
        buttonFourElement.css('display', 'inline-block');
    } else {
        buttonStartElement.css('display', 'inline-block');
        buttonOneElement.css('display', 'none');
        buttonTwoElement.css('display', 'none');
        buttonThreeElement.css('display', 'none');
        buttonFourElement.css('display', 'none');
    }
}

function startTimer() {
    console.log("STARTING TIMER");
    timer = setInterval(function() {
        if (timerCount <= 0) {
            endGame("time");
            clearInterval(timer);
            resetInstructions();
        }
        showCountDown();
        timerCount--;
    }, 1000);
}

function endGame(reason) {
    console.log("ENDING GAME HERE");
    if (reason == "time") {
         alert("Unfortunately, you failed to finish the quiz in time :(\nPress OK to try the quiz again.");
    } else {
        let userInitials = prompt("Congratulations!! You finished the quiz!!\nEnter Your Initials to record your score...\n(Only the first 3 characters will be used)");
        scores.push([userInitials.toUpperCase().slice(0, 3), timerCount]);
    }

}

function showCountDown() {
    timerElement.textContent = ("Time remaining: " + timerCount);
}


function nextQuestion(questionNumber) {
    console.log('Starting quiz on question number ' + (questionNumber + 1));

    var numberOfQuestions = questions.length;

    if (questionNumber < numberOfQuestions) {
        loadOptions(options[questionNumber]);
        questionElement.innerHTML=questions[questionNumber];
    } else {
        endGame("completed");
        resetInstructions();
        clearInterval(timer);        
    }

}

function loadOptions(questionNumber) {
    buttonOneElement.text(questionNumber[0]);
    buttonTwoElement.text(questionNumber[1]);
    buttonThreeElement.text(questionNumber[2]);
    buttonFourElement.text(questionNumber[3]);
}

answerButtons.on('click', function (event) {
    console.log(questionNumber);
    if (event.target.textContent == "START") {
        console.log("Start Button Clicked");
        startTimer();
        toggleAnswerButtons("on");
        nextQuestion(0);
    } else {
        var answerIsCorrect = checkAnswer(questionNumber, event.target.textContent);
        console.log(answerIsCorrect);
        if (answerIsCorrect) {
            correctSound.play();
        } else {
            wrongSound.play();
            timerCount  -= 10;
            timerCount < 0 ? timerCount = 0 : null;
            showCountDown();
        }
        questionNumber++;
        nextQuestion(questionNumber);
    }

});

highScoresElement.on('click', function (event) {
    console.log("Display high scores here");
    var highScoresText = "";
    for(i=0; i < scores.length; i++) {
        highScoresText += ("Player: " + scores[i][0] + "  Score: " + scores[i][1] + "\n");
        console.log(highScoresText);
    }
    alert(highScoresText);
});

function checkAnswer(number, answer) {
    return answers[number] == answer;
}

resetInstructions();


/* WORKS //////////
console.log(answersElement.children().length);
for(i=0; i < answersElement.children().length; i++) {
    console.log(answersElement.children().eq(i).text());
} //////////*/
