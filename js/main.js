
var clock;

var distance;
var distanceInitial;

function timer(d) {

	if(d === 1500000 || d === 300000 || d === 600000) distanceInitial = d;

	clearInterval(clock);
	
	distance = d;

	clock = setInterval(function() {

		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		seconds = seconds >= 10 ? seconds : `0${seconds}`;
		minutes = minutes >= 10 ? minutes : `0${minutes}`;

		document.getElementById("clock").innerHTML = minutes + ":" + seconds;
		document.querySelector("title").innerHTML = "(" + minutes + ":" + seconds + ") TomatoTimer";

		distance -= 1000;

		if (distance < 0) {
			clearInterval(clock);

			let finalTextTimer = "";
			
			if(d == 1500000) finalTextTimer = "25:00";
			else if(d == 300000) finalTextTimer = "05:00";
			else finalTextTimer = "10:00";
					
			document.getElementById("clock").innerHTML = finalTextTimer;
			document.querySelector("title").innerHTML = "Buzzzzzzz!";
	  	}
	}, 1000);
	console.log(`distanceInitial desde timer ${distanceInitial}`);
}

function stopAnyTimer() {
	clearInterval(clock);
	console.log("distance desde stop: " + distanceInitial);
}

function startTimer(d) {
	timer(d);
	console.log("distance desde start: " + distanceInitial);
}

function resetTimer() {
	clearInterval(clock);
	distance = distanceInitial;
	console.log(`distanceInitial desde reset ${distanceInitial}`);
	let finalTextTimer = "";
			
	if(distanceInitial == 1500000) finalTextTimer = "25:00";
	else if(distanceInitial == 300000) finalTextTimer = "05:00";
	else if(distanceInitial == 600000) finalTextTimer = "10:00";
					
	document.getElementById("clock").innerHTML = finalTextTimer;
}

let btnStop = document.getElementById('stop');
btnStop.addEventListener("click", stopAnyTimer);



/**
 * year footer
 */

var year = new Date().getFullYear();

let a = document.getElementById("year");
a.innerHTML = year;
