var clockId;
var distance;


function timerPomodoro() {
	clearInterval(clockId);

	distance = 1500000;

	clockId = setInterval(function(){
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;

		document.getElementById("clock").innerHTML = minutes + ":" + seconds;

		distance = distance - 1000;

		if (distance < 0) {
	    	clearInterval(clockId);
	    	document.getElementById("clock").innerHTML = "25:00";
	  	}
	}, 1000);
}

function timerShortBreak() {
	clearInterval(clockId);

	let distance = 300000;
	
	clockId = setInterval(function() {


		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;

		document.getElementById("clock").innerHTML = `0${minutes}` + ":" + seconds;

		distance = distance - 1000;

		if (distance < 0) {
	    	clearInterval(clockId);
	    	document.getElementById("clock").innerHTML = "05:00";
	  	}

	}, 1000);
}

function timerLongBreak() {

	clearInterval(clockId);

	let distance = 600000;
	
	clockId = setInterval(function() {


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
}

function stopAnyTimer() {
	clearInterval(clockId);
}

function startAnyTimer() {

}

function resetTimer() {

}


let btnPomodoro = document.getElementById('pomodoro');
btnPomodoro.addEventListener("click", timerPomodoro);

let btnShortBreak = document.getElementById('shortbreak');
btnShortBreak.addEventListener("click", timerShortBreak);

let btnLongBreak = document.getElementById('longbreak');
btnLongBreak.addEventListener("click", timerLongBreak);

let btnStop = document.getElementById('stop');
btnStop.addEventListener("click", stopAnyTimer);