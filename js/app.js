'use strict';

let yourName = prompt("What's your name my friend?");

while (yourName === '' || yourName === null) {
	yourName = prompt("What's your name my friend?");
}

if (yourName !== '' || yourName !== null) {
	alert('nice to meet you ' + yourName);
}

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
