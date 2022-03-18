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
var isLastQuestionCorrect = false;

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
    var highScoreButtonRemove = document.getElementById("score-page");
    if (highScoreButtonRemove != null) {
        document.getElementById("score-page").remove();
    };
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

    if (quiz.currentQuestionIndex != 0) {
        var answerText = "";
        
        if (isLastQuestionCorrect) {
            answerText = "Correct";
        } else {
            answerText = "Incorrect!";
        }

        var answerTextEl = document.createElement("h1");
        answerTextEl.textContent = answerText;
        document.getElementById("containerRemove").appendChild(answerTextEl);
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
        } else if (gameTimerEnd = 1) {
            clearInterval(timeInterval);
            timerH1.innerHTML = "Your score is: " + timer;
            window.alert("Game Over!")
            newGame();
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
    var mainPageElement = document.getElementById("main-page");
    if (mainPageElement != null){
        mainPageElement.remove();
    };
    var containerElement = document.getElementById("containerRemove");
    if (containerElement != null){
        containerElement.remove();
    };
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

function scorePage () {
    document.getElementById("main-page").remove();

    var highScoreTitle = document.createElement("h1");
    highScoreTitle.textContent = "High Scores:"
    document.getElementById("high-scores-page").appendChild(highScoreTitle);

    var myScoreData = localStorage.getItem(inputText);
    console.log(myScoreData);

    var highScoreInfo = document.createElement("div");
    highScoreInfo.setAttribute("id", "scoreList");
    document.getElementById("high-scores-page").appendChild("highScoreInfo");
}

function endGamePage() {
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
    var timerContainerElement = document.getElementById("timerContainer");
    if (timerContainerElement != null){
        timerContainerElement.remove();
    };
    var endGameElement = document.getElementById("endGame");
    if (endGameElement != null) {
        document.getElementById("endGame").remove();
    };
    var highScoreElement = document.getElementById("score-title-div");
    if (highScoreElement != null) {
        document.getElementById("score-title-div").remove();
    };
    var highScorePageElement = document.getElementById("score-page");
    if (highScorePageElement != null) {
        document.getElementById("score-page").remove();
    };
    var mainPageElement = document.getElementById("main-page");
    if (mainPageElement != null){
        document.mainPageElement.remove();
    };
    var containerElement = document.getElementById("containerRemove");
    if (containerElement != null){
        document.getElementById("containerRemove").remove();
    };
    
    var newHighScoreButton = document.createElement("button");
    newHighScoreButton.textContent = "View High Scores!";
    newHighScoreButton.setAttribute("id", "score-page");
    document.getElementById("high-scores-page").appendChild(newHighScoreButton);
    newHighScoreButton.addEventListener("click", showHighScores);


    var menuDivEl = document.createElement("div");
    menuDivEl.setAttribute("id", "main-page");
    document.getElementById("quiz").appendChild(menuDivEl);

    var h1NewGame = document.createElement("h1");
    h1NewGame.textContent = "Coding Quiz Challenge";
    h1NewGame.setAttribute("id", "containerRemove");
    document.getElementById("main-page").appendChild(h1NewGame);

    var pNewGame = document.createElement("p");
    pNewGame.textContent = "Welcome to the coding quiz challenge! Answer as many coding related questions you can before the time limit is up.  Wrong answers will deduct ten seconds from the time remaining.  Answer all questions before time is up for a chance at the new high score!";
    document.getElementById("main-page").appendChild(pNewGame);
        
    var buttonNewGame = document.createElement("button");
    buttonNewGame.textContent = "Start Quiz!";
    buttonNewGame.setAttribute("id", "start-game");
    document.getElementById("main-page").appendChild(buttonNewGame);

    var newStartButton = document.querySelector("#start-game");
    quiz.correctCount = 0;
    quiz.currentQuestionIndex = 0;

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
            isLastQuestionCorrect = true;
            resetScreen();
    
        } else {
            console.log("incorrect");
            timer = timer - 10;
            isLastQuestionCorrect = false;
            resetScreen();
        }
};

function endGame() {
    createHtmlContainerForEndScreen();
    appendEndGameTextToEndScreen();
    createEndGameForm();
};

function saveScore(event) {
    event.preventDefault();
    var name = document.getElementById("highScoreName").value; 
    if (name === "" || name === null) {
        window.alert("Please enter your initials!");
        return;
    }
    var quizHighScores = JSON.parse(localStorage.getItem("quizHighScores")) ?? [];

    var newScore = timer.toString();

    var highScoreObject = {
        name: name,
        score: newScore
    };

    quizHighScores.push(highScoreObject);

    var sortedHighScores = quizHighScores.sort((a, b) => b.score - a.score);

    var topTenScores = sortedHighScores.slice(0, 10);

    localStorage.setItem("quizHighScores", JSON.stringify(topTenScores));

    endGamePage();
}

// click the start button
startButton.addEventListener("click", startGame);
highScoreButton.addEventListener("click", showHighScores);

function createEndGameForm() {

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
    
    var clickSave = document.getElementById("submitScore")
    
    
    clickSave.addEventListener("click", saveScore);

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

    

    var scoreOrList = document.createElement("ul");
    scoreOrList.setAttribute("id", "scoresHigh");
    document.getElementById("score-title-div").appendChild(scoreOrList);

    var scoresHigh = JSON.parse(localStorage.getItem("quizHighScores")) ?? [];
    var scoresHighList = document.getElementById(highScoreList);

    scoresHighList.innerHTML = scoresHigh
        .map((score) => `<li>${score.score} - ${score.name}`)
        .join('');

    var scoreMenuButton = document.createElement("button");
    scoreMenuButton.setAttribute("id", "score-menu-button");
    scoreMenuButton.textContent = "Main Menu";
    scoreMenuButton.addEventListener("click", newGame);
    document.getElementById("score-title-div").appendChild(scoreMenuButton);  
}


//add so it says correct/incorrect
