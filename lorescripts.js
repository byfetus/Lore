<script>
// Function to fullscreen
if(document.fullscreenEnabled || document.webkitFullscreenEnabled) {
	const toggleBtn = document.querySelector('.fullscreen-element');

	const styleEl = document.createElement('link');
	styleEl.setAttribute('rel', 'stylesheet');
	styleEl.setAttribute('href', 'https://codepen.io/tiggr/pen/poJoLyW.css');
	styleEl.addEventListener('load', function() {
		toggleBtn.hidden = false;
	});
	document.head.appendChild(styleEl);
	
	toggleBtn.addEventListener('click', function() {
		if(document.fullscreen) {
			document.exitFullscreen();
		} else if(document.webkitFullscreenElement) {
			document.webkitCancelFullScreen()
		} else if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else {
			document.documentElement.webkitRequestFullScreen();
		}
	});
	
	document.addEventListener('fullscreenchange', handleFullscreen);
	document.addEventListener('webkitfullscreenchange', handleFullscreen);
	
	// Function to fullscreen
	function handleFullscreen() {
		if(document.fullscreen || document.webkitFullscreenElement) {
			toggleBtn.classList.add('on');
			toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
		} else {
			toggleBtn.classList.remove('on');
			toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
		}
	}




// Function to play hover sound
function playHoverSound() {
  var sound = document.getElementById("hover-sound");
  sound.volume = 0.2;
  sound.currentTime = 0;
  sound.play();
}

// Event listener to play sound when link is hovered
document.addEventListener("mouseover", function(event) {
  if (event.target.tagName === "A") {
    playHoverSound();
  }
});

// Storing sound state in localStorage
function storeSoundState(state) {
  localStorage.setItem("soundState", state);
}

// Retrieving sound state from localStorage
function getSoundState() {
  return localStorage.getItem("soundState");
}

// Checking sound state on page load
document.addEventListener("DOMContentLoaded", function() {
  var soundState = getSoundState();
  if (soundState === "on") {
    var sound = document.getElementById("hover-sound");
    sound.play();
  }
});

// Store sound state when navigating away from page
window.addEventListener("beforeunload", function() {
  var sound = document.getElementById("hover-sound");
  if (!sound.paused) {
    storeSoundState("on");
  } else {
    storeSoundState("off");
  }
});



}

  </script>
