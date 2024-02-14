var questionElement = document.querySelector(".question");
var timerElement = document.querySelector(".time-left");

var buttonElementStart = document.querySelector(".start-button");
var buttonElementOne = document.querySelector("#buttonOne");
var buttonElementTwo = document.querySelector("#buttonTwo");
var buttonElementThree = document.querySelector("#buttonThree");
var buttonElementFour = document.querySelector("#buttonFour");

var instructionsText = "<h1>" + "Coding Quiz Challenge</h1><h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorect answers will penalize your score/time by ten seconds!</H2>";

questions = ["Commonly used data types DO Not Include:",
             "The condition in an if / else statement is enclosed with ____________.",
             "Arrays in JavaScript can be used to store ____________."]

options = [["strings", "booleans", "alerts", "numbers"], 
           ["quotes", "curly brackets", "parenthesis", "square brackets"],
           ["numbers and strings", "other arrays", "booleans", "all of the above"]];

answers = ["alerts", "parenthesis", "all of the above"];


function resetInstructions() {
    questionElement.innerHTML = instructionsText;
    buttonElementOne.setAttribute("dispaly", "none");
    buttonElementTwo.setAttribute("disabled", "false");
    buttonElementThree.setAttribute("disabled", "false");
    buttonElementFour.setAttribute("disabled", "false");
}

function startGame() {
    questionElement.innerHTML = "BACK TO BILLY HOSSNESS";
}

buttonElementOne.addEventListener("click", startGame);

resetInstructions();
timerElement.innerHTML="Time: " + "59";

