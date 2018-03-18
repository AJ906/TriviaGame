var correctCount;
var incorrectCount;
var counter;
var percentage;



//***BEGINNING OF AREA FOR WHAT HAS BEEN TESTED AND WORKS

// hide questions initially
$(document).ready(function(){
    $("#questions").hide();

    // when start button is clicked, hide start button and show questions
$("#startButton").on("click", function(){
    $("#startButton").hide();

    $("#questions").show();
});


setTimeout(allDone, 1000 * 5);

function allDone() {
    // console.log("Time's Up!!!");
  $("#timesUp").append("<h2>Time's Up!</h2>");
//   console.log("time is up");
}

//***END OF AREA FOR WHAT HAS BEEN TESTED AND WORKS



});