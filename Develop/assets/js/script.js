//Creating variables for starting the game and the timer
var startButton = document.getElementById("start");
var timerElement = document.getElementById("time");

var timeLeft = 60;
var questionNumber = 0

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

    /*function displayQuestion() {

        var question = questions[questionNumber];
    }

    function onSelectAnswer(event) {
if (event.target.matches("button"))

    }

    startButton.addEventListener("click, event => {

            * //if (question.title1 !== answer1) {
            return "Incorrect, 10 seconds has been removed from the clock "
            return =="correct";

            Else
            if (question.title1 !== answer1) {
                return "Incorrect, 10 seconds has been removed from the clock "
                return =="correct";
                Else
                if (question.title1 !== answer1) {
                    return "Incorrect, 10 seconds has been removed from the clock "
                    return =="correct";
                }

                for score(var i = 0; i < questions.length; i++) {
                        // This statement will run each time the loop is executed
                        return ("correct, + score);'/*'