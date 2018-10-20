'use strict';

let initialSpeed = 1;


function loadSpeedUp() {
  initialSpeed += .1;
  playSpeed.innerHTML = initialSpeed + 'x';
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'speedUp.js'}
    )
  });
}

function loadSpeedDown() {
  initialSpeed -= .1;
  playSpeed.innerHTML = initialSpeed + 'x';
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'speedDown.js'}
    )
  });
}

document.getElementById('up').addEventListener('click', loadSpeedUp);
document.getElementById('down').addEventListener('click', loadSpeedDown);


// console.log("Loading the script");
// document.getElementById('up').addEventListener('click', function() {
//   console.log("element up clicked.");
//     callspeedUp();
// });
//
//
// function callspeedUp() {
//   console.log("this function is getting called");
//
//
// }
