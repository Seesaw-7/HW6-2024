var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector(".video");

	video.autoplay = false;

	video.loop = false;

	updateVolumeDisplay();
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	
	updateVolumeDisplay();

	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;

    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate *= 1.111111;

    if (video.playbackRate.toFixed(5) > 1) {
        video.playbackRate = 1;
    }

    console.log("New speed is " + video.playbackRate.toFixed(5));
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;

    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }

    console.log("Current location is " + video.currentTime.toFixed(2) + " seconds");
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute"; 
    } else {
        video.muted = true;
        this.textContent = "Unmute"; 
    }
    console.log("Mute status is: " + video.muted);
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    
    updateVolumeDisplay();
    
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").textContent = "Mute";
    }
    
    console.log("Volume is set to " + video.volume.toFixed(2));
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");

    // video.classList.toggle("oldSchool");
    
    // if(video.classList.contains("oldSchool")) {
    //     console.log("OldSchool style applied.");
    // } else {
    //     console.log("OldSchool style removed.");
    // }

	console.log("OldSchool style applied.");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
    
    console.log("OldSchool style removed, original style restored.");
});

function updateVolumeDisplay() {
    var volumeDisplay = document.querySelector("#volume");
    var volumeLevel = Math.round(video.volume * 100); 
    volumeDisplay.textContent = volumeLevel + '%';
}

