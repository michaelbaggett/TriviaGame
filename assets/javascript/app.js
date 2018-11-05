//pseudo code for trivia game
//need array of multiple questions/answers

var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var time = 10;
var intervalID;


var quizQuestions2 = [{
    question: "What is the velocity of an unladen swallow?",
    answers: [{
            text: "I don't know",
            correct: false
        },
        {
            text: "African or Europena?",
            correct: true
        }
    ]
}, {
    question: "What time is it now?",
    answers: [{
            text: "10:00am",
            correct: false
        },
        {
            text: "almost 11am",
            correct: true
        }
    ]
}, {
    question: "abbva?",
    answers: [{
            text: "12345",
            correct: false
        },
        {
            text: "67890",
            correct: true
        }
    ]
}, {
    question: "Who let the dogs out?",
    answers: [{
            text: "Who",
            correct: true
        },
        {
            text: "jeff",
            correct: false
        }
    ]

}, {
    question: "what is the best squat",
    answers: [{
        text: "overhead",
        correct: false
    },
    {
        text: "back",
        correct: true
    }]

}];

function timer() {
    intervalID = setInterval(countdown, 1000)
};

function countdown() {
    time--;
    $("#time-display").text("Time left: " + time);
    if (time === 0) {
        stop();
        $("#time-display").text("Time's up!");
        //displayQuestion(quizQuestions2[questionIndex++])
    }
};

function stop() {
    clearInterval(intervalID)
};

function reset() {
    clearInterval(intervalID);
    time = 10;
    timer();
};

var displayQuestion = function (questionObj) {
    $("#question").text(questionObj.question);
    // $("#incorrect").text(quizQuestions2[0].answers[0].text);
    // $("#correct").text(quizQuestions2[0].answers[1].text);
    // console.log(quizQuestions2[0].answers[1].correct);
    var quizQuestions = questionObj.answers;
    $("#first-Question").empty();
    for (var i = 0; i < quizQuestions.length; i++) {
        var answerButton = $("<button>");
        answerButton.text(quizQuestions[i].text);
        answerButton.attr("data-correct", quizQuestions[i].correct);
        answerButton.attr("class", "answer btn btn-outline-dark btn-block")
        $("#first-Question").append(answerButton);
    }

};

$("#play-game").on("click", function () {
    $(this).hide();
    displayQuestion(quizQuestions2[questionIndex++]);
    timer();
});

$("#test").on("click", ".answer", function () {

    if ($(this).attr("data-correct") === "true") {
        console.log("correct!");
        correct++;
        if (questionIndex === quizQuestions2.length) {
            $("#question").text("Well done!");
            $("#first-Question").empty();
            $("#results-correct").append("<p>").text("Correct Answers: " + correct);
            $("#results-incorrect").append("<p>").text("Incorrect Answers: " + incorrect);
            stop();
        } else {
            displayQuestion(quizQuestions2[questionIndex++])
            reset();
        }
    } else {
        console.log("incorrect");
        incorrect++;
        if (questionIndex === quizQuestions2.length) {
            $("#question").text("You gave it a shot!")
            $("#first-Question").empty();
            $("#results-correct").append("<p>").text("Correct Answers: " + correct);
            $("#results-incorrect").append("<p>").text("Incorrect Answers: " + incorrect);
            stop();
        } else {
            displayQuestion(quizQuestions2[questionIndex++]);
            reset();
        }
    }
});