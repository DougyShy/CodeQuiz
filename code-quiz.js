var questionElement = document.querySelector(".question");
var timerElement = document.querySelector(".time-left");
var buttonStartElement = $("#button-start");
var buttonOneElement = $("#button-one");
var buttonTwoElement = $("#button-two");
var buttonThreeElement = $("#button-three");
var buttonFourElement = $("#button-four");
var answerButtons = $(".button");

const correctSound = new Audio("correct-ding.mp3");

var answersElement = $('ul');

var questionNumber = 0;
var timerCount = 60;

var instructionsText = "<h1>" + "Coding Quiz Challenge</h1><h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</H2>";

questions = ["Commonly used data types DO Not Include:",
             "The condition in an if / else statement is enclosed with ____________.",
             "Arrays in JavaScript can be used to store ____________."]

options = [["strings", "booleans", "alerts", "numbers"], 
           ["quotes", "curly brackets", "parenthesis", "square brackets"],
           ["numbers and strings", "other arrays", "booleans", "all of the above"]];

answers = ["alerts", "parenthesis", "all of the above"];


function resetInstructions() {
    console.log("RESET HERE");
    questionNumber = 0;

    // RESET BOARD - 
    questionElement.innerHTML = instructionsText;

    // REMOVE: timerElement.innerHTML="Time: " + "59";

    // Reset buttons
    toggleAnswerButtons("off");
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
}

function nextQuestion(questionNumber) {
    console.log('Starting quiz on question number ' + (questionNumber + 1));

    var numberOfQuestions = questions.length;

    if (questionNumber < numberOfQuestions) {
        loadOptions(options[questionNumber]);
        questionElement.innerHTML=questions[questionNumber];
    } else {
        resetInstructions();
        console.log("END GAME HERE");
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
        toggleAnswerButtons("on");
        nextQuestion(0);
    } else {
        var answerIsCorrect = checkAnswer(questionNumber, event.target.textContent);
        console.log(answerIsCorrect);
        if (answerIsCorrect) {
            correctSound.play();
        }
        questionNumber++;
        nextQuestion(questionNumber);
    }

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
