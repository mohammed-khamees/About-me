'use strict';
let yourName = prompt("What's your name my friend?");
let correctAnswer = 0;

while (yourName === '' || yourName === null) {
	yourName = prompt("What's your name my friend?");
}
alert('nice to meet you ' + yourName);
alert(
	"let's start our little gussing game " +
		yourName +
		'. Please answer the questions y/n or yes/no',
);

const answer = (question, str, favorite) => {
	while (question === null) {
		question = prompt(str);
	}
	question = question.toLowerCase();
	while (
		question === '' ||
		(question !== 'yes' &&
			question !== 'y' &&
			question !== 'no' &&
			question !== 'n')
	) {
		question = prompt(str);
		while (question == null) {
			question = prompt(str);
		}
		question = question.toLowerCase();
	}

	if (question === 'yes' || question === 'y') {
		// console.log("you're right");
		alert("you're right");
		correctAnswer++;
	} else {
		// console.log("I'm sorry wrong answer");
		alert("I'm sorry wrong answer, It's " + favorite);
	}
};

let origin = prompt('Am i form in Jordan ?');
answer(origin, 'Am i form in Jordan ?', 'Jordan');

let food = prompt('Do you think my favorite meal is mansaf ?');
answer(food, 'Do you think my favorite meal is mansaf ?', 'mansaf');

let color = prompt('Is my favorite color black?');
answer(color, 'Is my favorite color black?', 'black');

let country = prompt(
	'The most country that i love more than anything is Germany. What do tou think? ',
);
answer(
	country,
	'The most country that i love more than anything is Germany. What do tou think? ',
	'Germany',
);

let footballer = prompt('Is my favorite player Schwanstiger?');
answer(footballer, 'Is my favorite player Schwanstiger?', 'Schwanstiger');

let flag = true;
function call1(num) {
	if (num > 60) {
		// console.log('too high');
		alert('too high');
	} else if (num < 40) {
		// console.log('too low');
		alert('too low');
	} else if (num === 50) {
		// console.log("great you got it, It's 50");
		alert("great you got it, It's 50");
		if (flag) {
			correctAnswer++;
			flag = false;
		}
	} else if (num <= 60 || num > 50 || num < 50 || num >= 40) {
		// console.log('pretty close');
		alert('pretty close');
	}
}

let attempt = 4;
do {
	let num = parseInt(
		prompt(`Now, ${yourName} guess a number from (1 - 100),please.`),
	);
	// while (typeof num !== 'number' || num > 100 || num < 1) {
	// 	num = parseInt(
	// 		prompt(`Now, ${yourName} guess a number from (1 - 100),please.`),
	// 	);
	// }
	call1(num);
	attempt--;
} while (attempt > 0);

if (attempt === 0) {
	console.log('Game Over, sorry about that the number is 50');
	alert('Game Over, sorry about that the number is 50');
}

let multiAnswer = [
	'Berlin',
	'Istanbul',
	'London',
	'Dubai',
	'Paris',
	'New York',
];

for (let i = multiAnswer.length; i > 0; i--) {
	let question = prompt(
		`Which city is my favorite to live in? 1.Berlin 2.Istanbul 3.London 4.Dubai `,
	);
	while (question === null || question === '') {
		question = prompt(
			`Which city is my favorite to live in? 1.Berlin 2.Istanbul 3.London 4.Dubai `,
		);
	}
	if (question.toLowerCase() === 'berlin') {
		alert("Great you're Correct Berlin my dream city to live in.");
		correctAnswer++;
		break;
	} else {
		alert(`Try again you still have ${i - 1}`);
	}
}

alert(`Thanks for playing with Us your score is ${correctAnswer} out of 7`);
alert(
	'The correct answers are: Q1.Jordan Q2.mansaf Q3.black Q4.Germany Q5.Schwanstiger Q6.50 Q7.Berlin',
);
