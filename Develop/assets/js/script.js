//Creating variables for starting the game and the timer
var startButton = document.getElementById("start");
var timerElement = document.getElementById("time");
var div = document.createElement("question.title");

var timeLeft = 60;
var questionNumber = 0

startButton.addEventListener("click", startGame);

function startGame() {


    console.log("Game has started");
    displayQuestion();

    //method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerElement.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerElement.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage("you have timed out");
        }
    }, 1000);
}

function displayQuestion() {

    var question = questions[questionNumber];

    var question = prompt("title1 + choices1");

    if (question[0] !== "answer[0]") {
        alert("you have answered incorrectly");
    } else {
        var tag = document.createElement("tagName");
        // Adds text content to created tag
        tag.textContent = "You have answered" + tagName + "correctly";
        // Appends tag as child of document body
        document.body.appendChild(tag);
    }


}

function onSelectAnswer(event) {
    if (event.target.matches("button")) {

        var selectedButton = event.target;
        var selectedAnswer = selectedButton.textContent;
        var correctAnswer = questions[questionNumber].answer1;
        if (selectedAnswer === correctAnswer) {
            displayMessage("correct")
        } else {
            displayMessage("incorrect")
        }
    }

}