// as a user, i want a timed quiz to challenge my coding knowledge

// as a user, i'm going to be asked 5 questions
    // each question will have four choices
    // each question will have one correct answer
    // i will only see one question at a time
    // when i answer a question right, and the next question displays, 'correct!' will display at the bottom of the page
    // when i answer a question wrong, and the next question displays, 'Wrong!' will display at the bottom of the page

// as a user, when i'm done answering questions or the timer is up
    // the timer will stop
    // i will be presented with my score, my score is the remaining number of seconds on the clock
    // i will be presented with the previous high score
    // i will be able to delete the previous high score

// as a user, i will be timed
    // as a user, whenever i start a new game, the timer will start at 70 seconds
    // as a user, i see the timer subtracts 10 seconds when i get a question wrong
    // as a user, when i click 'return to menu' at the end of the game, the timer is no longer present on the screen


    //when i hit the main menu button, it deletes the div/area that is holding the timer that appears and then shows you your score
    //it also sets the value of the timer back to 70 and indexes back to 0

// find a way to store multiple high scores into a table




var quiz = {
    questions: [
        {
            question: "Which built in JavaScript function returns how many characters are in a string?",
            choices: ["count()", "length()", "charcount()", "number()"],
            correct: 1       
        },
        {
            question: "Which CSS positioning property causes an item to scroll with its container?",
            choices: ["scroll", "top", "follow", "sticky"],
            correct: 3
        },
        {
            question: "What is the index value of the first item in an array?",
            choices: [1, 0, 100, 10],
            correct: 1
        },
        {
            question: "Which HTML element would create the largest heading?",
            choices: ["<h1>>", "<h6>", "<hmax>", "<header>"],
            correct: 0
        },
        {
            question: "Which is the correct way to define a function in JavaScript?",
            choices: ["function = newfunction()", "function newFunction()", "function:newFunction().", "var function newFunction()"],
            correct: 1
        }
    ],
    currentQuestionIndex: 0,
    correctCount: 0
}

var gameTimerEnd = 0;
var highScore = localStorage.getItem('highScore') || 0;

// create the question html
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");

// query the start through the start-game id
var startButton = document.querySelector("#start-game");
var clearPage = document.querySelector("main-page");
var questionArea = document.querySelector("quiz");
var highScoreButton = document.querySelector("#score-page");

// function to start the game
function startGame() {
    countdown();
    document.getElementById("main-page").remove();
    displayNextQuestion();
};

function displayNextQuestion() {
    var currentQuestion = getCurrentQuestion();
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
        labelEl.setAttribute("id", "answer-buttons");
        document.getElementById("button-text-"+x.toString()).appendChild(labelEl);
        labelEl.addEventListener("click", checkAnswer);
    }
}

var timer = 70;

function getCurrentQuestion() {
    return quiz.questions[quiz.currentQuestionIndex];
}

function countdown() {
    var timerH1 = document.createElement("h1");
    timerH1.innerText = timer + ' seconds remaining';

    var timerDiv1 = document.createElement("div");
    timerDiv1.setAttribute("id", "timerContainer");
    document.getElementById("timer").appendChild(timerDiv1);
    document.getElementById("timerContainer").appendChild(timerH1);

    var timeInterval = setInterval(function () {
        if (timer > 1 && gameTimerEnd == 1) {
            clearInterval(timeInterval);
            timerH1.innerHTML = "Your score is: " + timer;
        } else if (timer > 1) {
            timerH1.innerHTML = timer + ' seconds remaining';
            timer--;
        } else if (timer == 1) {
            timerH1.innerHTML = timer + ' second remaining';
            timer--;
        } else if (gameTimeEnd = 1) {
            clearInterval(timeInterval);
            timerH1.innerHTML = "Your score is: " + timer;
        } else {
            timer == 0;
            clearInterval(timeInterval);
            timerH1.innerHTEML = "Your score is: " + timer;
        };
    }, 1000); 
};

function resetGame () {
        var timer = 70;
};

function resetScreen() {
    quiz.currentQuestionIndex++;
    document.getElementById("containerRemove").remove();
    if (quiz.currentQuestionIndex == quiz.questions.length) {        
        console.log('endGame');
        gameTimerEnd++;
        endGame();
    } else{
        displayNextQuestion();
    }
}

function newScreenReset() {
    document.getElementById("containerRemove").remove();
    quiz.currentQuestionIndex = 0;
    gameTimerEnd = 0;
    timer = 70;
        displayNextQuestion();
        countdown();
};

function clearScoreScreen () {
    localStorage.clear();
    newGame();
};

// function highScorePageCreation() {
//     var highScoreLinkButton = document.createElement("button");
//     highScoreLinkButton.textContent = "High Scores - Click Here!";
//     highScoreLinkButton.setAttribute("id", "scorePageContainer");
//     document.getElementById("high-scores-page").appendChild(highScoreLinkButton);

//     highScoreLinkButton.addEventListener("click", scorePage);
// };


function scorePage () {
    document.getElementById("main-page").remove();
    //document.getElementById("scorePageContainer").remove();
    //document.getElementById("deleteScorePage").remove();

    var highScoreTitle = document.createElement("h1");
    highScoreTitle.textContent = "High Scores:"
    document.getElementById("high-scores-page").appendChild(highScoreTitle);

    //add here where to pull the list of high scores - getItem local storage?
    var myScoreData = localStorage.getItem(inputText);
    console.log(myScoreData);

    var highScoreInfo = document.createElement("div");
    highScoreInfo.setAttribute("id", "scoreList");
    document.getElementById("high-scores-page").appendChild("highScoreInfo");
}

function highScorePage() {
    //highScorePageCreation();
    document.getElementById("deleteScorePage").remove();
    var endGameDiv2El = document.createElement("div");
    endGameDiv2El.setAttribute("id", "endGame");
    document.getElementById("quiz").appendChild(endGameDiv2El);

    var clearScores = document.createElement("button");
    clearScores.setAttribute("id", "scoreReset");
    clearScores.textContent = "Clear High Scores";
    document.getElementById("endGame").appendChild(clearScores);

    clearScores.addEventListener("click", clearScoreScreen);

    var mainMenu = document.createElement("button");
    mainMenu.setAttribute("id", "mainMenuButton");
    mainMenu.textContent = "Main Menu";
    document.getElementById("endGame").appendChild(mainMenu);

    var mainMenuButton = document.querySelector("#mainMenuButton");
    mainMenuButton.addEventListener("click", newGame);

};

function newGame() {
    //highScorePageCreation();
    //div h1 p button
    var timerContainerElement = document.getElementById("timerContainer");
    if (timerContainerElement != null){
        document.getElementById("timerContainer").remove();
    };
    var endGameElement = document.getElementById("endGame");
    if (endGameElement != null) {
        document.getElementById("endGame").remove();
    };
    var highScoreElement = document.getElementById("score-title-div");
    if (highScoreElement != null) {
        document.getElementById("score-title-div").remove();
    };
    

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
    quiz.correctCount = 0;
    quiz.currentQuestionIndex = 0;

    /*timerStr = timer.toString();
    localStorage.setItem("High Score", timerStr);*/
    //var timer = 70;
    newStartButton.addEventListener("click", newScreenReset);
};

function checkAnswer(event) {
    var buttonClicked = event.target.innerText;
    var buttonClickedString = buttonClicked.toString();
        console.log(buttonClickedString);
    var correctAnswerIndex = quiz.questions[quiz.currentQuestionIndex]['correct'];
        console.log(correctAnswerIndex);
    var totalQuestionCount = quiz.questions.length;
        console.log(totalQuestionCount);
        console.log(quiz.currentQuestionIndex);
    var correctAnswer = quiz.questions[quiz.currentQuestionIndex]['choices'][correctAnswerIndex];
        console.log(correctAnswer);
        if (buttonClickedString == correctAnswer) {
            console.log("correct");
            quiz.correctCount++;
            console.log(quiz.correctCount.toString());
            resetScreen();
    
        } else {
            console.log("incorrect");
            timer = timer - 10;
            resetScreen();
        }
};

function endGame() {
    createHtmlContainerForEndScreen();
    appendEndGameTextToEndScreen();
    //appendFinalScoreText();
    createEndGameForm();
};

function saveScore() {
    var quizHighScores = JSON.parse(localStorage.getItem("quizHighScores")) ?? [];

    var name = document.getElementById("highScoreName").value; 
    var newScore = timer.toString();

    var highScoreObject = {
        name: name,
        score: newScore
    };

    quizHighScores.push(highScoreObject);

    var sortedHighScores = quizHighScores.sort((a, b) => b.score - a.score);

    var topTenScores = sortedHighScores.slice(0, 10);

    localStorage.setItem("quizHighScores", JSON.stringify(topTenScores));

    highScorePage();
}

// click the start button
startButton.addEventListener("click", startGame);
highScoreButton.addEventListener("click", showHighScores);

function createEndGameForm() {
    //highScorePageCreation();
    var formName = document.createElement("form");
    formName.setAttribute("id", "highScore");
    //document.getElementById("endGame").appendChild(formName);
    document.body.appendChild(formName);

    // name input label
    var enterName = document.createElement("label");
    enterName.setAttribute("id", "deleteScorePage");
    enterName.textContent = "Your Initials: ";
    document.getElementById("highScore").appendChild(enterName);

    // name input element
    var inputName = document.createElement("input");
    inputName.setAttribute("id", "highScoreName");
    document.getElementById("deleteScorePage").appendChild(inputName);

    // input button element
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitScore");
    submitButton.textContent = "Submit";
    document.getElementById("deleteScorePage").appendChild(submitButton);
    var clickSave = document.getElementById("submitScore");
    //document.getElementById("highScore").appendChild(submitButton);

    clickSave.addEventListener("click", saveScore);

    //var submitButtonQ = document.querySelector("#highScore");
    //submitButtonQ.addEventListener("click", highScorePage);
}

function appendFinalScoreText() {
    var finalScoreText = document.createElement("h1");
    finalScoreText.textContent = "You scored " + quiz.correctCount + " points.";
    document.getElementById("endGame").appendChild(finalScoreText);
}

function appendEndGameTextToEndScreen() {
    var endGameText = document.createElement("h1");
    endGameText.textContent = "All Done!";
    document.getElementById("endGame").appendChild(endGameText);
}

function createHtmlContainerForEndScreen() {
    var endGameDivEl = document.createElement("div");
    endGameDivEl.setAttribute("id", "endGame");
    document.getElementById("quiz").appendChild(endGameDivEl);
}




// can either have it always keep the 1 high score, or look up how to print top 3-5 scores, and evaluate if new score is higher each time

//add if/then statements so if the question is right/wrong, it then shows it on the following screen under the next question

//make a link on all pages that will take you to high scores - maybe only on main menu?

//css to make it pretty

var highScoreNumber = 10;
var highScoreList = 'scoresHigh';
var highScoreString = localStorage.getItem(highScoreList);
var scoresHigh = JSON.parse(highScoreString) ?? [];
var lowestScore = scoresHigh[highScoreNumber - 1]?.score ?? 0;

function checkHighScore(score) {
    var scoresHigh = JSON.parse(localStorage.getItem(highScoreString)) ?? []; 
    var lowestScore = scoresHigh[highScoreNumber - 1]?.score ?? 0;

    if (score > lowestScore) {
        saveHighScore(score, scoresHigh);
        showHighScores();
    }
}




function showHighScores() {
    var highScorePageElement = document.getElementById("score-title-div");
    if (highScorePageElement != null) {
        return;
    }
    var mainMenuElement = document.getElementById("main-page");
    if (mainMenuElement != null) {
        mainMenuElement.remove();
    };
    var containerRemoveElement = document.getElementById("containerRemove");
    if (containerRemoveElement != null) {
        containerRemoveElement.remove();
    };

    var scoreTitleDiv = document.createElement("div");
    scoreTitleDiv.setAttribute("id", "score-title-div");
    document.getElementById("quiz").appendChild(scoreTitleDiv);

    var scoreTitleH1 = document.createElement("h1");
    scoreTitleH1.textContent = "High Scores: ";
    document.getElementById("score-title-div").appendChild(scoreTitleH1);

    var scoreMenuButton = document.createElement("button");
    scoreMenuButton.setAttribute("id", "score-menu-button");
    scoreMenuButton.textContent = "Main Menu";
    scoreMenuButton.addEventListener("click", newGame);
    document.getElementById("score-title-div").appendChild(scoreMenuButton);
    

    var scoreOrList = document.createElement("ol");
    scoreOrList.setAttribute("id", "scoresHigh");
    document.getElementById("score-title-div").appendChild(scoreOrList);

    var scoresHigh = JSON.parse(localStorage.getItem("quizHighScores")) ?? [];
    var scoresHighList = document.getElementById(highScoreList);

    scoresHighList.innerHTML = scoresHigh
        .map((score) => `<li>${score.score} - ${score.name}`)
        .join('');
    
        
    //var scoreMenu = document.querySelector("score-menu-button");    
}