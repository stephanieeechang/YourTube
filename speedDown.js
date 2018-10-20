alert('Content script loaded');

var currentRate = document.querySelector('video').playbackRate;
speedDown();
document.querySelector('video').playbackRate = currentRate;

console.log(currentRate);
chrome.runtime.sendMessage({text: "slowedDown"}, function(response) {})

function adjustSpeed(rate) {
  document.querySelector('video').playbackRate = rate;
}

function speedDown() {
  currentRate -= 0.1;
}
