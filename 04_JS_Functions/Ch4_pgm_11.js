// Creating quiz question objects
var question1 = {
    question: "What is the capital of France?",
    options: ["Bordeaux", "F", "Paris", "Brussels"],
    correctAnswer: "Paris"
};

var question2 = {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Jane Austen", "Charles Dickens"],
    correctAnswer: "Harper Lee"
};

var question3 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
};

// Function to display question and options
var showQuestion = function (questionObj) {
    console.log(questionObj.question);
    console.log("------------------------------");
    for (var i = 0; i < questionObj.options.length; i++) {
        console.log("(" + (i + 1) + ") " + questionObj.options[i]);
    }
    console.log("------------------------------");
};

// Displaying all three quiz questions
showQuestion(question1);
showQuestion(question2);
showQuestion(question3);
