var questionElement = document.querySelector(".question");
var timerElement = document.querySelector(".time-left");
var buttonOneElement = $("#button-one");
var buttonTwoElement = $("#button-two");
var buttonThreeElement = $("#button-three");
var buttonFourElement = $("#button-four");

var instructionsText = "<h1>" + "Coding Quiz Challenge</h1><h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorect answers will penalize your score/time by ten seconds!</H2>";

questions = ["Commonly used data types DO Not Include:",
             "The condition in an if / else statement is enclosed with ____________.",
             "Arrays in JavaScript can be used to store ____________."]

options = [["strings", "booleans", "alerts", "numbers"], 
           ["quotes", "curly brackets", "parenthesis", "square brackets"],
           ["numbers and strings", "other arrays", "booleans", "all of the above"]];

answers = ["alerts", "parenthesis", "all of the above"];


function resetInstructions() {
    console.log("RESET HERE");

    // RESET BOARD - 
    questionElement.innerHTML = instructionsText;

    // REMOVE: timerElement.innerHTML="Time: " + "59";

    // Reset buttons
    buttonTwoElement.css('display', 'none')
    buttonThreeElement.css('display', 'none')
    buttonFourElement.css('display', 'none');
    timerElement.innerHTML="Time: 0";
}



function startQuiz(questionNumber) {
    console.log('Starting quiz on question number ' + (questionNumber + 1));
    

}

/*function startGame() {
    buttonTwoElement.css('display', 'inline-block');
}*/

/*buttonOneElement.on('click', function () {
    console.log("Button One Clicked");

    if (buttonOneElement.text() == 'START') {
        buttonOneElement.css('display', 'inline-block');
        buttonTwoElement.css('display', 'inline-block');
        buttonThreeElement.css('display', 'inline-block');
        buttonFourElement.css('display', 'inline-block');
        startQuiz(0);
    } 
})*/

resetInstructions();
