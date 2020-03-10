
var clock;
var distance;

function timerPomodoro() {

	clearInterval(clock);

	distance = 1500000;

	clock = setInterval(function() {


		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;

		document.getElementById("clock").innerHTML = minutes + ":" + seconds;
		document.querySelector("title").innerHTML = "(" + minutes + ":" + seconds + ") TomatoTimer";

		distance -= 1000;

		if (distance < 0) {
	    	clearInterval(clock);
	    	document.getElementById("clock").innerHTML = "25:00";
	  	}

	}, 1000);
}

function timerShortBreak() {
	clearInterval(clock);

	distance = 300000;
	
	clock = setInterval(function() {


		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;

		document.getElementById("clock").innerHTML = `0${minutes}` + ":" + seconds;
		document.querySelector("title").innerHTML = "(" + `0${minutes}` + ":" + seconds + ") TomatoTimer";

		distance = distance - 1000;

		if (distance < 0) {
	    	clearInterval(clock);
	    	document.getElementById("clock").innerHTML = "05:00";
	  	}

	}, 1000);
}

function timerLongBreak() {

	clearInterval(clock);

	distance = 600000;
	
	clock = setInterval(function() {


		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;
		minutes = minutes === 10 ? minutes : `0${minutes}`;

		document.getElementById("clock").innerHTML = minutes + ":" + seconds;
		document.querySelector("title").innerHTML = "(" + minutes + ":" + seconds + ") TomatoTimer";
		
		distance = distance - 1000;

		if (distance < 0) {
	    	clearInterval(clock);
	    	document.getElementById("clock").innerHTML = "10:00";
	  	}

	}, 1000);
}

function stopAnyTimer() {
	clearInterval(clock);
}


let btnPomodoro = document.getElementById('pomodoro');
btnPomodoro.addEventListener("click", timerPomodoro);

let btnShortBreak = document.getElementById('shortbreak');
btnShortBreak.addEventListener("click", timerShortBreak);

let btnLongBreak = document.getElementById('longbreak');
btnLongBreak.addEventListener("click", timerLongBreak);

let btnStop = document.getElementById('stop');
btnStop.addEventListener("click", stopAnyTimer);


/**
 * year footer
 */

var year = new Date().getFullYear();

let a = document.getElementById("year");
a.innerHTML = year;
