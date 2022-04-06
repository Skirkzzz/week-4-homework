// list of all questions, choices, and answers
var timerElement
var startButton = document.getElementById("start");
var timerElement = document.querySelector(".timer");

var questions = [{
        title1: "Commonly used data types DO NOT include:",
        choices1: ["strings", "booleans", "alerts", "numbers"],
        answer1: "alerts"
    },
    {
        title2: "The condition in an if / else statement is enclosed within ____.",
        choices2: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer2: "parentheses"
    },
    {
        title3: "Arrays in JavaScript can be used to store ____.",
        choices3: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer3: "all of the above"
    },
    {
        title4: "String values must be enclosed within ____ when being assigned to variables.",
        choices4: ["commas", "curly brackets", "quotes", "parentheses"],
        answer4: "quotes"
    },
    {
        title5: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices5: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer5: "console.log"
    }
];

function startGame() {

    startButton.addEventListener("click, event => {
            if ("click" = true,
                var timeLeft)

                console.log("Game has started");
            var timeLeft = 60;


            //method to call a function to be executed every 1000 milliseconds
            var timeInterval = setTimeout(() => {}, timeout);
            (function() {
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

            if (question.title1 !== answer1) {
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
                            return ("correct, + score);
                            }