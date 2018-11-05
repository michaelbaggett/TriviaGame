//pseudo code for trivia game
//need array of multiple questions/answers

var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var time = 25;
var intervalID;
var unAnswered = 0;

$("#restart").hide();

var quizQuestions2 = [{
question: "In 1930, Bobby Jones won all 4 major tournaments held in the calendar year. What is this accomplisment called?",
answers: [{
        text: "The Jones Slam",
        correct: false
    },
    {
        text: "The Grand Slam",
        correct: true
    },
    {
        text: "The Ryder Cup",
        answer: false
    },
    {
        text: "None of the above",
        correct: false
    },
]
}, {
question: "The 2000 US Open, held at Pebble Beach Golf Links, was won by Tiger Woods in record setting fasion. He won the tournament by this many strokes, to this day the largest margin of victory in any Major Tournament.",
answers: [{
        text: "5",
        correct: false
    },
    {
        text: "9",
        correct: true
    },
    {
        text: "15",
        correct: true
    },
    {
        text: "22",
        correct: false
    }
]
}, {
question: "Holes 11, 12, and 13 at Augusta National Golf Club are famously known as what?",
answers: [{
        text: "Amen Corner",
        correct: true
    },
    {
        text: "Hot Corner",
        correct: false
    },
    {
        text: "Coffin-Corner",
        correct: false
    },
    {
        text: "The Turn",
        correct: false
    }
]
}, {
question: "Tiger Woods just recently won his 80th career golf Tournament. He is 2 wins shy of the all-time record currently held by who?",
answers: [{
        text: "Sam Snead",
        correct: true
    },
    {
        text: "Jack Nickalus",
        correct: false
    },
    {
        text: "Arnold Palmer",
        correct: false
    },
    {
        text: "Ben Hogan",
        correct: false
    }
]
}, {
question: "A regulation golfball has how many dimples?",
answers: [{
        text: "100",
        correct: false
    },
    {
        text: "515",
        correct: false
    },
    {
        text: "421",
        correct: false
    },
    {
        text: "339",
        correct: true
    }
]
}, {
question: "The cathedral of golf is located in Scotland and is consiered the oldest course in the world. What course do many call the Home of Golf?",
answers: [{
        text: "Muirfield",
        correct: false
    },
    {
        text: "Old Course at St. Andrews",
        correct: true
    },
    {
        text: "Pinehurst No. 2",
        answer: false
    },
    {
        text: "Shinnecock Hills",
        correct: false
    },
]
}];

function timer() {
    intervalID = setInterval(countdown, 1000)
};

function countdown() {
    time--;
    $("#time-display").text("Time left: " + time);
    if (time === 0) {
        unAnswered++;
        console.log(unAnswered);
        stop();
        $("#time-display").text("Time's up!");
        displayQuestion(quizQuestions2[questionIndex++]);
        reset();
    }
};

function stop() {
    clearInterval(intervalID)
};

function reset() {
    clearInterval(intervalID);
    time = 25;
    timer();
};

//need a show results function if user doen't answer final question
//MAKE A BUFFER FUNCTION THAT DISPLAYS A GIF FIGURE OUT WHERE TO RUN IT

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
        answerButton.attr("class", "answer btn btn-outline-warning btn-block")
        $("#first-Question").append(answerButton);
    }

};

$("#play-game").on("click", function () {
    $(this).hide();
    displayQuestion(quizQuestions2[questionIndex++]);
    timer();
});

$("#restart").on("click", function() {
    $(this).hide();
    questionIndex = 0;
    correct = 0;
    incorrect = 0;
    unAnswered = 0;
    $("#results-correct").empty();
    $("#results-incorrect").empty();
    displayQuestion(quizQuestions2[questionIndex++]);
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
            $("#restart").show();
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
            $("#restart").show();
        } else {
            displayQuestion(quizQuestions2[questionIndex++]);
            reset();
        }
    }
});