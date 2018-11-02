//pseudo code for trivia game
//need array of multiple questions/answers
var quizQuestion = [    
    {
    text: "question text",
    choices: ["top", "bottom", "flex"],
    answer: "top"
},
    {
    text: "question text",
    choices: ["wrong", "correct", "close but no cigar"],
    answer: "whichever choice array index is correct"
},

    {
    text: "question text",
    choices: ["choice1", "chocie2", "choice3"],
    answer: "whichever choice array index is correct"
}
]


//displayQuestion();

i = 0




;
var displayQuestion = function(){
$("#question").text(quizQuestion[i].text)
    // forEach is the fucking worst
quizQuestion[i].choices.forEach((choice, index) => {
    console.log(choice, index)

    var choiceClass = choice + index.toString()
    $("#choices").append("<li class='" + choiceClass + "' value=" + choice + ">" + choice + "</li>")

    $(`.${choiceClass}`).on('click', function(event) {
        console.log(choice, index)
        console.log('click')
            if (choice === quizQuestion[i].answer){
                console.log("You win!")
            } else {
                console.log("You lose!")
            }
    })
}); i++
}

$("#play-game").on("click", displayQuestion)

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