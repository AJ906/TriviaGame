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
var timeRemaining = 30;
var correctAnswerCount = 0;
var wrongAnswerCount = 0;


var questionBank = [{

        question: "1. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        correctAnswer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
},
{
        question: "2. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },

    {

        question: "3. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },
    {

        question: "4. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },
    {

        question: "5. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },
    {

        question: "6. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },
    {

        question: "7. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },
    {

        question: "8. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },
    {

        question: "9. What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },
    {

        question: "What's the name of the HW?",
        options: ['trivia', 'easy', 'hop-scotch'],
        answer: "trivia",
        userAnswer: "",
        correct: ''//boolean *if userAnswer = answer, set correct as true
    },];

console.log(questionBank);

var showQuestion;
var questionCount = 0;


