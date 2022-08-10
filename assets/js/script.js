//Creating variables for starting the game and the timer
var startButton = document.getElementById("start");
var timerElement = document.getElementById("time");
var startScreenElement = document.getElementById("start-screen");
var questionsElement = document.createElement("questions");
var questionTitleElement = document.getElementById("question-title");
var feedbackElement = document.getElementById("feedback");
var choicesElement = document.getElementById("choices");

var timeLeft = 60;
var questionNumber = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  // Hide the Start Screen
  startScreenElement.classList.add("hide");

  // Show the Questions section
  questionsElement.classList.remove("hide");
  questionsElement.style = "display: block";

  // Show the first question
  displayQuestion();

  //method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerElement` to show the remaining seconds
      timerElement.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerElement.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerElement.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);

      // Call the `displayMessage()` function
      displayMessage("Bad luck, you've run out of time :-(");
    }
  }, 1000);
}

function displayQuestion() {
  // Get the curremt Question
  var question = questions[questionNumber + 1];
  questionNumber++;

  if (questionNumber < questions.length) {
    // Show the Question.
    questionTitleElement.textContent = question.title;

    // Show the choices.
    choicesElement.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
      choicesElement.innerHTML +=
        "<button class='choice' onclick='onSelectAnswer(this)'>" +
        question.choices[i] +
        "</button>";
    }
  } else {
    displayMessage("game over");
  }
}

function displayMessage(message) {
  feedbackElement.textContent = message;
}

function onSelectAnswer(event) {
  var answer = event.innerText;

  var correctAnswer = questions[questionNumber].answer1;
  if (answer === correctAnswer) {
    displayMessage("correct");
  } else {
    displayMessage("incorrect");
  }

  // Create a 2 second timer to hide the answer then load the next questions
  setTimeout(function () {
    displayMessage("");

    displayQuestion();
  }, 2000);
}
