// create the question html
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");

// create the question text
h1El.textContent = "Which of the following is the built in method to append 2 strings into 1?";

// query the start button through the start-game id
var startButton = document.querySelector("#start-game");
var clearPage = document.querySelector("main-page");

// function to start the game
function startGame() {
    //PICK UP HERE, TRYING TO FIGURE OUT HOW TO REMOVE HTML BEFORE ADDING FIRST QUESTION
    document.getElementById("main-page").remove();
    var h1El = document.createElement("h1");
    h1El.textContent = "Which of the following is the built in method to append 2 strings into 1?";
    body.appendChild(h1El);
};

// click the start button
startButton.addEventListener("click", startGame);

//look up how to clear html on a page with a button click using javascript
//next screen, append the question, multiple choices
//make the multiple choice items selectable 
//with if/then statements for the answer text only if it is right or wrong
//after the question is clicked, it pulls up another question, with 4 new options
//at the bottom of the new question, it shows whether the prior question was answered right or wrong
