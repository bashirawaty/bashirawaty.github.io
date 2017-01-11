//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//or
//document.querySelector('h1').textContent = 'Hello World!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/firefox-logo.jpg') {
      myImage.setAttribute ('src','img/firefox-logo2.jpeg');
    } else {
      myImage.setAttribute ('src','img/firefox-logo.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}