//pseudo code for trivia game
//need array of multiple questions/answers
// var quizQuestion = [    
//     {
//     text: "question text",
//     choices: ["top", "bottom", "flex"],
//     answer: "top"
// },
//     {
//     text: "question text",
//     choices: ["wrong", "correct", "close but no cigar"],
//     answer: "correct"
// },

//     {
//     text: "question text",
//     choices: ["choice1", "chocie2", "choice3"],
//     answer: "choice3"
// }
// ]
var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var time = 30;
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
}];

function timer(){
    intervalID = setInterval(countdown, 1000)
};

function countdown(){
    time--;
    $("#time-display").text("Time left: " + time);
    if (time === 0){
        stop();
        console.log("Time's up!");
    }
};

function stop() {
    clearInterval(intervalID)
};

function reset(){
    clearInterval(intervalID);
    time = 30;
    timer();
};

//timer();

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
        answerButton.attr("class", "answer");
        $("#first-Question").append(answerButton);
    }

};

$("#play-game").on("click", function () {
    $(this).hide();
    displayQuestion(quizQuestions2[questionIndex++]);
    timer();
})

$("#test").on("click", ".answer", function () {

    if ($(this).attr("data-correct") === "true") {
        console.log("correct!");
        correct++;
        if (questionIndex === quizQuestions2.length) {
            console.log("Show Results");
        } else {
            displayQuestion(quizQuestions2[questionIndex++])
            reset();
        }
    } else {
        console.log("incorrect");
        incorrect++;
        if (questionIndex === quizQuestions2.length) {
            console.log("Show Results");
            stop();
        } else {
            displayQuestion(quizQuestions2[questionIndex++]);
            reset();
        }
    }
});








//Erik's comments to try and point me in right direction
// <div id="questionHolder">
//      <p>What is the velocity of an unladen swallow?</p>
// <div>
//     <button class="answer" data-correct="false">I don't know</button>
//     <button class="answer" data-correct="true">African or European?</button>
// </div>
// </div>




// $("#questionHolder").on("click", ".answer", function(){
//     //check and see if answer is correct
//     if ($(this).attr("data-correct") === "true" ){
//         console.log("correct!")
//     } else {
//         console.log("wrong!")
//     }
// });

//i = 0



// THIS WAS MY ORIGINAL ATTEMPT AT CODING THIS ASSIGNMENT. ABOVE IS A NEW POSSIBLE FRAME WORK AFTER TALKING W ERIK ON FRIDAY 11/2
// var displayQuestion = function(){
// $("#question").text(quizQuestion[i].text)
//     // forEach is the fucking worst
// quizQuestion[i].choices.forEach((choice, index) => {
//     console.log(choice, index)

//     var choiceClass = choice + index.toString()
//     $("#choices").append("<li class='" + choiceClass + "' value=" + choice + ">" + choice + "</li>")

//     $(`.${choiceClass}`).on('click', function(event) {
//         console.log(choice, index)
//         console.log('click')
//             if (choice === quizQuestion[i].answer){
//                 console.log("You win!")
//             } else {
//                 console.log("You lose!")
//             }
//     })
// }); i++
// }

//$("#play-game").on("click", displayQuestion)

// $(".btn-lrg").on("click", function(){
//     displayQuestion()

// })







//window shows one question at a time
//user has a set amount of time to answer the question

//only one answer may be selection

//if the player runs out of time before answering, display that time is up and display correct answer

//if the user guesses incorrectly, show correct answer

//if answer correct, say nice job, and display a new question

//have a timeout inbetween new question loading

//after all questions answered:
//on final screen show correct/incorrect amt of answers
//option to restart the game