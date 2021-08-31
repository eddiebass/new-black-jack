let sumCards = document.querySelector("#sum-cards");
let messageUser = document.querySelector("#message-user");
let myDecks = document.getElementById("my-decks");
const drawBtn = document.querySelector("#draw-btn");
const hitBth = document.querySelector("#hit-btn");
const newBtn = document.querySelector("#new-btn");

let sum = 0;
let message = "";
let cards = [];
let listItems = "";
const setDefault = ["default", "default"];

drawBtn.addEventListener("click", function () {
	if (cards.length === 0) {
		let firstCard = randomNum();
		let secondCard = randomNum();
		sum = firstCard + secondCard;
		cards.push(firstCard);
		cards.push(secondCard);
		listItems = "";
		renderGame(cards);
	}
});

hitBth.addEventListener("click", function () {
	if (sum <= 20 && sum != 0) {
		let thirdCard = randomNum();
		cards.push(thirdCard);
		sum += thirdCard;
		listItems = "";
		renderGame(cards);
	}
});

newBtn.addEventListener("click", function () {
	cards = [];
	listItems = "";
	sum = 0;
	renderGame(setDefault);
	messageUser.textContent = "Welcome to Blackjack";
});

//Random numbers btw 1 - 13
function randomNum() {
	let myRandom = Math.floor(Math.random() * 13) + 1;
	if (myRandom === 1) {
		return 11;
	} else if (myRandom >= 10) {
		return 10;
	} else {
		return myRandom;
	}
}

function renderGame(arr) {
	//myDecks.innerHTML = "";
	for (let i = 0; i < arr.length; i++) {
		listItems += `<li>
							<img src="img/${arr[i]}.png" >
					</li>`;
	}
	checkSum();
	myDecks.innerHTML = listItems;
	sumCards.textContent = sum;
	messageUser.textContent = message;
}

//compare sum of cards to value of 21
function checkSum() {
	if (sum < 21) {
		message = "Take a hit, today might be your lucky day 🤞";
	} else if (sum === 21) {
		message = "WOOHOO!! You've got a BLACKJACK!! 🥳";
	} else {
		message = "Game over. Try harder next time 😞";
	}
}
