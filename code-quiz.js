// Connect to elements with jQuery or querySelector
var questionElement = document.querySelector(".question");
var timerElement = document.querySelector(".time-left");
var highScoresElement = $(".high-scores");

var buttonStartElement = $("#button-start");
var buttonOneElement = $("#button-one");
var buttonTwoElement = $("#button-two");
var buttonThreeElement = $("#button-three");
var buttonFourElement = $("#button-four");
var answerButtons = $(".button");

// List of scores
var scores = [];

// Audio Clips
const correctSound = new Audio("correct-ding-better.mp3");
const wrongSound = new Audio("wrong-ding.mp3");

// Program Variables
var instructionsText = "<h1>" + "Coding Quiz Challenge</h1><h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</H2>";
var questionNumber = 0;
var timer;
var timerCount;

/* Different approach - will focus on later
var answersElement = $('ul'); */

// Questions/Options/Answers Array Combos
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

// Reset Quiz Page
function resetInstructions() {
    questionNumber = 0;
    timerCount = 60;
    questionElement.innerHTML = instructionsText;
    toggleAnswerButtons("off");
    showCountDown();
}

// Disable Start Button once quiz has started
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

// Start Quiz Timer - Subtract 10 when a wrong answer occurs
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

// End game processes - evaluate if quiz was finished
function endGame(reason) {
    console.log("ENDING GAME HERE");
    if (reason == "time") {
         alert("Unfortunately, you failed to finish the quiz in time :(\nPress OK to try the quiz again.");
    } else {
        let userInitials = prompt("Congratulations!! You finished the quiz!!\nEnter Your Initials to record your score...\n(Only the first 3 characters will be used)");
        scores.push([userInitials.toUpperCase().slice(0, 3), timerCount]);
    }
}

// Display/update countdown clock
function showCountDown() {
    timerElement.textContent = ("Time remaining: " + timerCount);
}

// Continue to next question until quiz is complete
function nextQuestion(questionNumber) {
    if (questionNumber < questions.length) {
        loadOptions(options[questionNumber]);
        questionElement.innerHTML=questions[questionNumber];
    } else {
        endGame("completed");
        resetInstructions();
        clearInterval(timer);        
    }
}

// Setup answer button options based on question number
function loadOptions(questionNumber) {
    buttonOneElement.text(questionNumber[0]);
    buttonTwoElement.text(questionNumber[1]);
    buttonThreeElement.text(questionNumber[2]);
    buttonFourElement.text(questionNumber[3]);
}

// Once quiz has started answer buttons will alternate to question number until quiz is finished or time runs out
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
        // Inform user if they got the answer right or wrong with a sound clip
        if (answerIsCorrect) {
            correctSound.play();
        } else {
            wrongSound.play();
            timerCount  -= 10;
            showCountDown();
            timerCount < 0 ? timerCount = 0 : null;
        }
        questionNumber++;
        nextQuestion(questionNumber);
    }
});

// Alert the user of the scores that have been accomplished and by whom
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
};

// Make sure site starts with defaults
resetInstructions();


/* WORKS //////////
console.log(answersElement.children().length);
for(i=0; i < answersElement.children().length; i++) {
    console.log(answersElement.children().eq(i).text());
} //////////*/
