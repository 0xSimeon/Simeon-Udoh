// Elements selection
const body = document.querySelector(".body");
const btnStart = document.getElementById("quiz-start");
const nextButton = document.querySelector("#next");
const quizWrapper = document.querySelector(".quiz__wrapper");
const quizBox = document.querySelector(".quiz__box");
const quizQuestion = document.querySelector(".quiz__heading");
const quizList = document.querySelector(".quiz__options");
const quiz = document.querySelector(".quiz");
const score = document.querySelector(".quiz__score-number");
let counter = document.querySelector(".quiz__counter-number");

// TRACKERS 
let points = 0,
	count = 0,
	option1,
	option2,
	option3,
	option4;

let sortQuestions, currentIndex, currentQuestion;

body.classList.add("body-flex");

function startQuiz() {
	quizWrapper.classList.add("hide");

	setTimeout(() => {
		body.classList.remove("body-flex");
		quizBox.classList.remove("hide");
	}, 500);

	currentIndex = 0;
	points = 0;

	// sort and randomize the questions. 
	sortQuestions = questions.sort(() => {
		return Math.random() - 0.5;
	});
	nextQuesiton();
}


// Clear previous quiz questions and options & hide next button
const resetState = () => {
	nextButton.classList.add("hide");
	if (quizList.firstChild) {
		quizList.innerHTML = "";
	}
};

const nextQuesiton = () => {
	resetState();
	currentQuestion = sortQuestions[currentIndex];
	showQuestions(currentQuestion);
};

/************************************************************
 * Display the questions on the quiz page
 */

const showQuestions = (question) => {
	quizQuestion.textContent = question.question;

	question.options.forEach((option, index) => {
		index++;
		const button = document.createElement("button");
		button.textContent = option;
		button.classList.add("quiz__options-list");
		button.classList.add(`quiz__options-list-${index}`);
		quizList.classList.remove("pointer-fix");

		quizList.appendChild(button);

		if (question.answer === index) {
			button.dataset.correct = question.answer;
		}
		option1 = document.querySelector(".quiz__options-list-1");
		option2 = document.querySelector(".quiz__options-list-2");
		option3 = document.querySelector(".quiz__options-list-3");
		option4 = document.querySelector(".quiz__options-list-4");
		button.addEventListener("click", checkAnswer);
	});
};

/**********************************
 * Check if the selected option is correct or wrong
 */

const checkAnswer = (event) => {
	const selectedOption = event.target;
	const correct = selectedOption.dataset.correct;

	if (correct) {
		count++;
		points += 10;
		score.textContent = `${points}`;
		quizList.classList.add("pointer-fix");
		selectedOption.classList.add("correct");
		selectedOption.classList.add("white");

		// Keep track of correct answers
		counter.innerText = `${count} of ${sortQuestions.length}`;
	} else {
		quizList.classList.add("pointer-fix"); 
		selectedOption.classList.add("wrong");
		selectedOption.classList.add("white");

		// check and add green background to correct option
		if (currentQuestion.answer === 1) {
			option1.classList.add("correct");
		} else if (currentQuestion.answer === 2) {
			option2.classList.add("correct");
		} else if (currentQuestion.answer === 3) {
			option3.classList.add("correct");
		} else if (currentQuestion.answer === 4) {
			option4.classList.add("correct");
		}
	}

	if (sortQuestions.length > currentIndex + 1) {
		nextButton.classList.remove("hide");
	} else {
		// Small delay before showing scores page;
		setTimeout(() => {
			showResults();
		}, 800);
	}
};

/*****************************
 * RESULTS PAGE
 */

const showResults = () => {
	quiz.innerHTML = "";
	document.body.classList.add("body-flex");
	const markup = `
    <div class="quiz__end">
        <h1 class="end__heading-1">Game Over!</h1>
        <h2 class="end__heading-2">
        Your score is: 
        </h2>
        <p class="score">${points}</p>
        <button id="btn__reload" class="btn__reload next">
            Return to homepage
        </button>
    </div>
    `;

	quiz.insertAdjacentHTML("afterbegin", markup);

	document.getElementById("btn__reload").addEventListener("click", () => {
		window.location.reload();
	});
};

/*****************************************************************
 * Questions
 */

const questions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		options: [
			'<javascript>',
			'<link>',
			'<style>',
			'<script>',
		],
		answer: 4,
	},

	{
		question: `What is the correct syntax for referring to an external script called "app.js"?`,
		options: [
			'<script name="app.js">',
			'<script href="app.js">',
			'<script src="app.js">',
			'<script url="app.js">',
		],
		answer: 3,
	},

	{
		question: `How do you write "Hello World" in an alert box?`,

		options: [
			`alert('Hello World');`,
			`msg('Hello World');`,
			`alertBox('Hello World');`,
			`prompt('Hello World');`,
		],
		answer: 1,
	},

	{
		question: 'How do you create a function in JavaScript?',

		options: [
			'function = myFunction() { }',
			'function myFunction() { }',
			'function: myFunction() { }',
			'myFunction() function { }',
		],
		answer: 2,
	},

	{
		question: 'How would you call a function called myFunction in javascript?',

		options: [
			'call myFunction()',
			'myFunction',
			'invoke myFunction',
			'myFunction()',
		],
		answer: 4,
	},
];

/*************************************
 * EVENT LISTENERS
 */

btnStart.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
	currentIndex++;
	nextQuesiton();
}); 

console.log(`Copyright 2020. 
Made by Simeon Udoh
`); 

