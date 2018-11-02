//pseudo code for trivia game
//need array of multiple questions/answers
var question1 = {
    text: "question text",
    choices: ["choice1", "choice2", "choice3"],
    answer: "whichever choice array.index is correct answer"
}
var question2 = {
    text: "question text",
    choices: ["choice1", "chocie2", "choice3"],
    answer: "whichever choice array index is correct"
}
var questoin3 = {
    text: "question text",
    choices: ["choice1", "chocie2", "choice3"],
    answer: "whichever choice array index is correct"
}
displayQuestion = function(){
    console.log(question1.text)

}


    
;

$("#question").text(question1.text)
question1.choices.forEach(element => {$("#choices").text(element)
    
});
    

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