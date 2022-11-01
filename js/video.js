var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	console.log("Autoplay is set to " + video.autoplay)
	video.loop = false
	console.log("Loop is set to " + video.loop)
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
	video.play();

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video")
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video")
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});