function submitAnswers(){
    var total = 10;
    var score = 0;
    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;

    //Validation
    for (i=1; i<= total; i++){
        if(eval('q'+i)===null || eval('q'+i)=== ""){
            alert("You missed question " + i);
            return false;
        }    
    }
    //Set Correct Answers
    var answers = ["c","a","d","d","b","a","b","d","a","b"]

    //Check Answers
    for (i=1; i<= total; i++){
        if(eval('q'+i) === answers[i-1]){
            score++;
        }
    }
    //Display Results
    $("#results").html("<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span></h3>");
    return false;
    // var results = document.getElementbyId("results");
    // results.innerHTML="<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span></h3>";
    // return false;
    // alert("You scored " + score + " out of " + total + ".")
}

// var correctCount=0;
// var incorrectCount=0;
// var counter=0;
// var percentage=0;
// // var numberOfCheckedRadio = $('').length;
// var score = function() {
//     return form.find(':checked[data-correct]').length;
//   };
// // var submission = function () {
// //     $("#timesUp").append("<h2>All Done</h2>");
// //     $("#questions").hide();
// //     $(".score-holder").show();
// // }
// //***BEGINNING OF AREA FOR WHAT HAS BEEN TESTED AND WORKS

// // hide questions initially
// $(document).ready(function(){
//     $("#timeRemaining").hide();
//     $("#questions").hide();
//     $(".score-holder").hide();
    

//     // when start button is clicked, hide start button and show questions
// $("#startButton").on("click", function(){
//     $("#startButton").hide();
//     $("#timeRemaining").show();
//     $("#questions").show();
//     // setTimeout(allDone, 1000 * 15);
// });

// $("#submit").on("click", function () {
//     $("#timesUp").append("<h2>All Done</h2>");
//     $("#questions").hide();
//     $(".score-holder").show();
// });



// function allDone() {
//     // console.log("Time's Up!!!");
//   $("#timesUp").append("<h2>Time's Up!</h2>");
//   $("#questions").hide();
//   $(".score-holder").show();

//   //***END OF AREA FOR WHAT HAS BEEN TESTED AND WORKS***

//   $("#reStartButton").on("click", function(){
//     $("#reStartButton").hide();
//     $("#timeRemaining").show();
//     $("#questions").show();
//     $("#timesUp").hide();
//     $(".score-holder").hide();
//     setTimeout(allDone, 1000 * 3);
// });
//   console.log(score);
// //   console.log("time is up");
// }





// });