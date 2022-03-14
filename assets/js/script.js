//array of questions and answers
var question1 = {
        question: "Which built in JavaScript function returns how many characters are in a string?",
        choices: ["count()", "length()", "charcount()", "number()"],
        correct: 1
    };
var question2 = {
        question: "Which CSS positioning property causes an item to scroll with its container?",
        choices: ["scroll", "top", "follow", "sticky"],
        correct: 3
    };
var question3 = {
        question: "What is the index value of the first item in an array?",
        choices: [1, 0, 100, 10],
        correct: 1
    };
var question4 = {
        question: "Which HTML element would create the largest heading?",
        choices: ["<h1>>", "<h6>", "<hmax>", "<header>"],
        correct: 0
    };
var question5 = {
        question: "Which is the correct way to define a function in JavaScript?",
        choices: ["function = newfunction()", "function newFunction()", "function:newFunction().", "var function newFunction()"],
        correct: 1
    };

var questions = [question1, question2, question3, question4, question5];
var correctCount = 0;
var currentQuestionIndex = 0;

// create the question html
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");

// query the start through the start-game id
var startButton = document.querySelector("#start-game");
var clearPage = document.querySelector("main-page");
var questionArea = document.querySelector("quiz");

// function to start the game
function startGame() {
    document.getElementById("main-page").remove();
    displayNextQuestion();
};

function displayNextQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var divEl = document.createElement("div");
            divEl.setAttribute("id", "containerRemove");
            document.getElementById("quiz").appendChild(divEl);
    var h1El = document.createElement("h1");
            h1El.textContent = currentQuestion['question'];
            document.getElementById("containerRemove").appendChild(h1El); 
    for (x = 0; x < currentQuestion['choices'].length; x++) {
        var div1 = document.createElement("div");
            div1.setAttribute("id", "button-text-"+x.toString());
            document.getElementById("containerRemove").appendChild(div1);
        var labelEl = document.createElement("button");
            labelEl.textContent = currentQuestion['choices'][x];
            document.getElementById("button-text-"+x.toString()).appendChild(labelEl);
        
            labelEl.addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    var buttonClicked = event.target.innerText;
    var buttonClickedString = buttonClicked.toString();
        console.log(buttonClickedString);
    var correctAnswerIndex = questions[currentQuestionIndex]['correct'];
        console.log(correctAnswerIndex);
    var totalQuestionCount = questions.length;
        console.log(totalQuestionCount);
        console.log(currentQuestionIndex);
    var correctAnswer = questions[currentQuestionIndex]['choices'][correctAnswerIndex];
        console.log(correctAnswer);
        if (buttonClickedString == correctAnswer) {
            console.log("correct");
            correctCount++;
            console.log(correctCount.toString());
            resetScreen();
    
        } else {
            console.log("incorrect");
            resetScreen();
        }

    function resetScreen() {
        currentQuestionIndex++;
        document.getElementById("containerRemove").remove();
        if (currentQuestionIndex == totalQuestionCount) {        
            console.log('endGame');
            endGame();
        } else{
            displayNextQuestion();
        }
    }
    function newScreenReset() {
            document.getElementById("containerRemove").remove();
            currentQuestionIndex = 0;
                displayNextQuestion();
    }
    function endGame() {
        var endGameDivEl = document.createElement("div");
            endGameDivEl.setAttribute("id", "endGame");
            document.getElementById("quiz").appendChild(endGameDivEl);
        var endGameText = document.createElement("h1");
            endGameText.textContent = "All Done!";
            document.getElementById("endGame").appendChild(endGameText);
        var finalScoreText = document.createElement("h1");
            finalScoreText.textContent = "You scored " + correctCount + " points.";
            document.getElementById("endGame").appendChild(finalScoreText);
        var formName = document.createElement("form");
            formName.setAttribute("id", "highScore");
            document.getElementById("endGame").appendChild(formName);
        var enterName = document.createElement("label");
            enterName.textContent = "Your Initials: ";
            document.getElementById("highScore").appendChild(enterName);
        var inputName = document.createElement("input");
            document.getElementById("highScore").appendChild(inputName);
        var submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
            document.getElementById("highScore").appendChild(submitButton);
            
            var submitButtonQ = document.querySelector("#highScore");
            submitButtonQ.addEventListener("click", highScorePage);

            function highScorePage() {
                document.getElementById("endGame").remove();
                var endGameDiv2El = document.createElement("div");
                    endGameDiv2El.setAttribute("id", "endGame");
                    document.getElementById("quiz").appendChild(endGameDiv2El);
                var clearScores = document.createElement("button");
                    clearScores.setAttribute("id", "scoreReset");
                    clearScores.textContent = "Clear High Scores";
                    document.getElementById("endGame").appendChild(clearScores);
                var mainMenu = document.createElement("button");
                    mainMenu.setAttribute("id", "mainMenuButton");
                    mainMenu.textContent = "Main Menu";
                    document.getElementById("endGame").appendChild(mainMenu);
        
                var mainMenuButton = document.querySelector("#mainMenuButton");
                mainMenuButton.addEventListener("click", newGame);
        
            };

            function newGame() {
                //div h1 p button
                document.getElementById("endGame").remove();
                var menuDivEl = document.createElement("div");
                    menuDivEl.setAttribute("id", "containerRemove");
                    document.getElementById("quiz").appendChild(menuDivEl);
                var h1NewGame = document.createElement("h1");
                    h1NewGame.textContent = "Coding Quiz Challenge";
                    document.getElementById("containerRemove").appendChild(h1NewGame);
                var pNewGame = document.createElement("p");
                    pNewGame.textContent = "Welcome to the coding quiz challenge! Answer as many coding related questions you can before the time limit is up.  Wrong answers will deduct ten seconds from the time remaining.  Answer all questions before time is up for a chance at the new high score!";
                    document.getElementById("containerRemove").appendChild(pNewGame);
                var buttonNewGame = document.createElement("button");
                    buttonNewGame.textContent = "Start Quiz!";
                    buttonNewGame.setAttribute("id", "start-game2");
                    document.getElementById("containerRemove").appendChild(buttonNewGame);
                
                var newStartButton = document.querySelector("#start-game2");
                var correctCount = 0;
                var currentQuestionIndex = 0;
                newStartButton.addEventListener("click", newScreenReset);
            };
};
};


/*function countdown() {
    var timeLeft = 5;

var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
    }, 1000); */


// click the start ion
startButton.addEventListener("click", startGame);
