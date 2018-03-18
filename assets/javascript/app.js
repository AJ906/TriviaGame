var correctCount=0;
var incorrectCount=0;
var counter=0;
var percentage=0;
// var numberOfCheckedRadio = $('').length;
var score = function() {
    return form.find(':checked[data-correct]').length;
  };


//***BEGINNING OF AREA FOR WHAT HAS BEEN TESTED AND WORKS

// hide questions initially
$(document).ready(function(){
    $("#timeRemaining").hide();
    $("#questions").hide();
    $(".score-holder").hide();
    

    // when start button is clicked, hide start button and show questions
$("#startButton").on("click", function(){
    $("#startButton").hide();
    $("#timeRemaining").show();
    $("#questions").show();
    setTimeout(allDone, 1000 * 15);
});


function allDone() {
    // console.log("Time's Up!!!");
  $("#timesUp").append("<h2>Time's Up!</h2>");
  $("#questions").hide();
  $(".score-holder").show();

  //***END OF AREA FOR WHAT HAS BEEN TESTED AND WORKS***

  $("#reStartButton").on("click", function(){
    $("#reStartButton").hide();
    $("#timeRemaining").show();
    $("#questions").show();
    $("#timesUp").hide();
    $(".score-holder").hide();
    setTimeout(allDone, 1000 * 3);
});
  console.log(score);
//   console.log("time is up");
}





});