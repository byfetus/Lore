<script>

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





  </script>
