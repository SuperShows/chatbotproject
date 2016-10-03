function enter(event) {
  var x = event.keyCode;
  console.log(x);
  if (x  == 13) {
    askQuestion();
  }
}

var date = new Date();
var weekday = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();
var time = date.getTime();

var weekDayConversion = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wedsday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
}

var monthConversion = {
  0: "January",
  1: "Febuary",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
}

function askQuestion() {
  var input = document.getElementById("input").value;
  input = input.toLowerCase();
  var giveresponse = responses[input];

if(responses[input] == undefined) {
  var rand = Math.floor((Math.random() * fallBack.length));
  var fallBackAnswer = fallBack[rand];
  document.getElementById("chat-area").innerHTML += input + ": " + fallBackAnswer + " " + "<br>";
}
else {
  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " " + "<br>";
  }
}

var responses = {
  "how are you" : "I am Stinky. Thank you for asking. If you would like to ask StinkyJoe more questions that is ok.",
  "what is your age" : "I am eternal.",
  "what is your name" : "Stinky Joe",
  "what is the date" : "Today is " + weekDayConversion[weekday],
  "what month are we in" : "The month is " + monthConversion[month],
  "do you have any siblings" : "The trash",
  "what is your favorite food" : "Trash",
  "where are you from" : "The dumbster",
  "where do you live" : "Everywhere",
  "who created you" :  "Jesus"
}

var fallBack = ["Wǒ méiyǒu jiǎng yīngyǔ or me no speak the english."];
