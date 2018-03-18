var correctCount;
var incorrectCount;
var counter;
var percentage;
var numberOfCheckedRadio = $('input:radio:name:answer:value:correct').length;


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
    setTimeout(allDone, 1000 * 3);
});


function allDone() {
    // console.log("Time's Up!!!");
  $("#timesUp").append("<h2>Time's Up!</h2>");
  $("#questions").hide();
  $(".score-holder").show();
  console.log(numberOfCheckedRadio);
//   console.log("time is up");
}

//***END OF AREA FOR WHAT HAS BEEN TESTED AND WORKS



});