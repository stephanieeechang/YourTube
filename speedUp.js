alert('Content script loaded');

var currentRate = document.querySelector('video').playbackRate;
speedUp();
document.querySelector('video').playbackRate = currentRate;

console.log(currentRate);
chrome.runtime.sendMessage({text: "spedUp"}, function(response) {})

function adjustSpeed(rate) {
  document.querySelector('video').playbackRate = rate;
}

function speedUp() {
  currentRate += 0.1;
}
