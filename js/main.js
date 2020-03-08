
var clock;


function timerPomodoro() {

	clearInterval(clock);

	let distance = new Date("Jan 5, 2021 00:25:00").getTime();

	clock = setInterval(function() {


		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;

		document.getElementById("clock").innerHTML = minutes + ":" + seconds;

		distance = distance - 1000;

		if (distance < 0) {
	    	clearInterval(clock);
	    	document.getElementById("clock").innerHTML = "25:00";
	  	}

	}, 1000);
}

function timerShortBreak() {
	clearInterval(clock);

	let distance = new Date("Jan 5, 2021 00:05:00").getTime();
	
	clock = setInterval(function() {


		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;

		document.getElementById("clock").innerHTML = `0${minutes}` + ":" + seconds;

		distance = distance - 1000;

		if (distance < 0) {
	    	clearInterval(clock);
	    	document.getElementById("clock").innerHTML = "05:00";
	  	}

	}, 1000);
	return clock;
}

function timerLongBreak() {

	clearInterval(clock);

	let distance = new Date("Jan 5, 2021 00:10:00").getTime();
	
	clock = setInterval(function() {


		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;
		minutes = minutes === 10 ? minutes : `0${minutes}`;

		document.getElementById("clock").innerHTML = minutes + ":" + seconds;

		distance = distance - 1000;

		if (distance < 0) {
	    	clearInterval(clock);
	    	document.getElementById("clock").innerHTML = "10:00";
	  	}

	}, 1000);
	return clock;
}

function stopAnyTimer(timerPomodoro) {
	let clock = timerPomodoro();
	clearInterval(clock);
}


let btnPomodoro = document.getElementById('pomodoro');
btnPomodoro.addEventListener("click", timerPomodoro);

let btnShortBreak = document.getElementById('shortbreak');
btnShortBreak.addEventListener("click", timerShortBreak);

let btnLongBreak = document.getElementById('longbreak');
btnLongBreak.addEventListener("click", timerLongBreak);

