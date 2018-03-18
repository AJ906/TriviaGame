//questions
//options
//answer
//user answer

//use object
//sample code below

/*HW 5 outline
On click display question 1
Set timeout for 15 seconds
If user gives answer before 15 seconds:
	Check if user answer equals correct answer
		If user answer equals correct answer:
			Display “Correct”
			Add to correct answer counter;
			Hide current question;
			Show next question;
			Repeat;
		If user answer does not equal correct answer:
			Display “Incorrect”
			Add to wrong answer counter
			Hide current question;
			Show next question;
			Repeat;
		If question times out:
			Check */


// $(document).ready(function() {

// $("#questions").hide();

var questionBank = [{

    question: "1. Five high school students from different walks of life endure a Saturday detention under a power-hungry principal.",
    options: [  "a. Uncle Buck", 
                "b. Sixteen Candles", 
                "c. The Breakfast Club",
                "d. Home Alone"],
    correctAnswer: "c. The Breakfast Club",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
},
{
    question: "2. When Cindy and her husband, Bob, have to leave town for a family emergency, there is only one person available to babysit for their three kids: Bob's lazy, carefree brother.",
    options: [  "a. Uncle Buck", 
                "b. Mr. Mom", 
                "c. Ferris Bueller's Day Off",
                "d. National Lampoon's Vacation"],
    correctAnswer: "a. Uncle Buck",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "3. When bratty 8-year-old Kevin McCallister (Macaulay Culkin) acts out the night before a family trip to Paris, his mother (Catherine O'Hara) makes him sleep in the attic. After the McCallisters mistakenly leave for the airport without Kevin, he awakens to an empty house.",
    options: [  "a. Weird Science", 
                "b. Ferris Bueller's Day Off", 
                "c. National Lampoon's Vacation",
                "d. Home Alone"],
    correctAnswer: "d. Home Alone",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "4. Easily excitable Neal Page (Steve Martin) is somewhat of a control freak. Trying to get home to Chicago to spend Thanksgiving with his wife (Laila Robins) and kids, his flight is rerouted to a distant city in Kansas because of a freak snowstorm, and his sanity begins to fray.",
    options: [  "a. Pretty in Pink", 
                "b. Sixteen Candles", 
                "c. Some Kind of Wonderful",
                "d. Planes, Trains and Automobiles"],
    correctAnswer: "d. Planes, Trains and Automobiles",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "5. With the occasion all but overshadowed by her sister's upcoming wedding, angst-ridden Samantha (Molly Ringwald) faces her birthday with typical adolescent dread. ",
    options: [  "a. Curly Sue", 
                "b. Sixteen Candles", 
                "c. Pretty in Pink",
                "d. Some Kind of Wonderful"],
    correctAnswer: "b. Sixteen Candles",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "6. Andie (Molly Ringwald) is an outcast at her Chicago high school, hanging out either with her older boss (Annie Potts), who owns the record store where she works, or her quirky classmate Duckie (Jon Cryer), who has a crush on her.",
    options: [  "a. Pretty in Pink", 
                "b. Weird Science", 
                "c. National Lampoon's Vacation",
                "d. Some Kind of Wonderful"],
    correctAnswer: "a. Pretty in Pink",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "7. A high school senior has an uncanny skill at cutting classes and getting away with it. Intending to make one last duck-out before graduation, he/she calls in sick, 'borrows' a Ferrari, and embarks on a one-day journey through the streets of Chicago.",
    options: [  "a. Curly Sue", 
                "b. Ferris Bueller's Day Off", 
                "c. National Lampoon's Vacation",
                "d. Some Kind of Wonderful"],
    correctAnswer: "b. Ferris Bueller's Day Off",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "8. Keith Nelson, an artsy high school outcast, tries to land a date with popular girl Amanda Jones with some help from his tomboy best friend, Watts.",
    options: [  "a. Weird Science", 
                "b. Curly Sue", 
                "c. National Lampoon's Vacation",
                "d. Some Kind of Wonderful"],
    correctAnswer: "d. Some Kind of Wonderful",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "9. Teen misfits, Gary and Wyatt, design their ideal woman on a computer, and a freak electrical accident brings her to life in the form of the lovely, superhuman Lisa",
    options: [  "a. Weird Science", 
                "b. Curly Sue", 
                "c. National Lampoon's Vacation",
                "d. Some Kind of Wonderful"],
    correctAnswer: "a. Weird Science",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
    },
    {
    question: "10. Automobile engineer Jack is fired from his job. When his wife, Caroline, finds a job before he does, they switch roles, placing him in the unfamiliar position of homemaker and caretaker to their three children.",
    options: [  "a. Dutch", 
                "b. Mr. Mom", 
                "c. National Lampoon's Vacation",
                "d. Career Opportunities"],
    correctAnswer: "b. Mr. Mom",
    userAnswer: "",
    correct: " "//boolean *if userAnswer = answer, set correct as true
},];

var timeRemaining = 30;
var correctAnswerCount = 0;
var wrongAnswerCount = 0;

var showQuestion;

var count = 0;

$("#startGame").on("click", function(){
    $("#startGame").hide;
    displayQuestion();
} )

//  $("#startGame").on("click", startTriviaGame());
 
//  $("#stopGame").click(stopTriviaGame);
 
 function displayQuestion() {
  $("#questions").html("<p>" + questionBank[count].question + "</p>" + 
  "<p>" + questionBank[count].options + "</p>");
}

function nextQuestion() {
  //  TODO: Increment the count by 1.
  count++;


    
setTimeout(displayQuestion, 30000);

if (count === questionBank.length) {
    count = 0;
  }
}
function startTriviaGame() {

// TODO: Use showImage to hold the setInterval to run nextImage.
showQuestion = setInterval(nextQuestion, 3000);

}
   
function stopTriviaGame() {

// TODO: Put our clearInterval here:
clearInterval(showQuestion);

};
// });
// {/* // This will run the display image function as soon as the page loads.
// displayQuestion(); */}

console.log(questionBank);



