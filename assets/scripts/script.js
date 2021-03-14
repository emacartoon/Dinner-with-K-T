// Variables querying html document elements

var addQuote = document.getElementById("Conversation");
var submitBtn = document.getElementById("Begin");
var userInput = document.getElementById("userInput");
var yeBtn = document.getElementById("kanye-quotes");
var swiftBtn = document.getElementById("taylor-quotes");
var dadBtn = document.getElementById("dad-joke");
var resetBtn = document.getElementById("resetbtn");


var conversation = document.getElementById("Conversation");
var userTopic;

userInput.addEventListener("click", function(e){
    e.preventDefault();
    var text = document.querySelector("#input").value;
    console.log("text =", text);
    var userQuote = document.createElement("p");
    userQuote.textContent = "What are your thoughts on " + text +" ?";
    conversation.append(userQuote);
    console.log("userQuote=",userQuote);
    userTopic=text
  })

function getYe() {

  // request data
  // find api url to fetch data
  var baseUrl = "https://api.kanye.rest";

  // fetch the data
  fetch(baseUrl)

    //  collect data and convert to json format
    .then(function (response) {
      return response.json();
    })

    // create new paragraph elements with a new css class,
    // collect the quote data and set the text content of the
    // new paragraph elements to be the collected quote,
    // append the paragraph element each for each quote button click
    // store the quote to local storage
    .then(function (data) {
      yeQuote = document.createElement("p");
      yeQuote.setAttribute("class", "kanye");
      yeText = data["quote"];
      console.log("yeText: ", yeText);
      yeQuote.textContent = yeText;
      addQuote.append(yeQuote);
      localStorage.setItem("Kanye Quote", yeText);
      quoteArr.push(localStorage.getItem("Kanye Quote"));
    });
}

// Function to collect quotes from taylor.rest
function getSwift() {

  // request data
  // find api url to fetch data
  var baseUrl = "https://api.taylor.rest/";

  // fetch the data
  fetch(baseUrl)

    // collect data and convert to json format
    .then(function (response) {
      return response.json();
    })

    // create new paragraph elements with a new css class,
    // collect the quote data and set the text content of the
    // new paragraph elements to be the collected quote,
    // append the paragraph element each for each quote button click
    // store the quote to local storage
    .then(function (data) {
      swiftQuote = document.createElement("p");
      swiftQuote.setAttribute("class", "taylor");
      var swiftText = data["quote"];
      console.log("swiftText: ", swiftText);
      swiftQuote.textContent = swiftText;
      addQuote.append(swiftQuote);
      localStorage.setItem("Swift Quote", swiftText);
      quoteArr.push(localStorage.getItem("Swift Quote"));
    });
}

//Function to collect dad jokes
function getDadJoke() {

  //request data
  //find api url to fetch data
  var baseUrl = "https://icanhazdadjoke.com";

  //fetch the data
  fetch(baseUrl, {
    headers: { Accept: "application/json" },
  })
  
    //collect data and convert to json format
    .then(function (response) {
      return response.json();
    })

    // create new paragraph elements with a new css class,
    // collect the quote data and set the text content of the
    // new paragraph elements to be the collected quote,
    // append the paragraph element each for each quote button click
    // store the quote to local storage
    .then(function (data) {
      dadQuote = document.createElement("p");
      dadQuote.setAttribute("class", "dad");
      var dadJoke = data["joke"];
      console.log("dadJoke: ", dadJoke);
      dadQuote.textContent = dadJoke;
      addQuote.append(dadQuote);
      localStorage.setItem("Dad Joke", dadJoke);
      quoteArr.push(localStorage.getItem("Dad Joke"));
    });
}

// When a user clicks on a quote button, run function to call api and
// set html <p> element text content to quote data

yeBtn.addEventListener("click", function () {
  getYe();
  disableBtn();
  resetConversation();
});

swiftBtn.addEventListener("click", function () {
  getSwift();
  disableBtn();
  resetConversation();
});

dadBtn.addEventListener("click", function () {
  getDadJoke();
  disableBtn();
  resetConversation();
});

// Create new array to store api quote data
var quoteArr = [];

// disable quote buttons
// when the conversation div contains 10 quotes
// then the user cannot click the buttons
// to add more quotes
function disableBtn() {
  if (addQuote.childElementCount === 9) {
    yeBtn.disabled = true;
    swiftBtn.disabled = true;
    dadBtn.disabled = true;
  }
}

// reset conversation button
// when the conversation div presents 10 quotes
// then the reset button will display
// when the user clicks the reset button
// then the page will refresh
  resetBtn.style.display = "none";
  function resetConversation() {
  if (addQuote.childElementCount === 9) {
    resetBtn.style.display = "inline";
    resetBtn.addEventListener("click", function () {
      console.log("Reset");
      location.reload();
      });
    }
  }

// Select a random image from a folder array
var $masthead = document.getElementsByClassName("masthead");
var randImg = ["Dinner2.png", "Dinner3.png", "Dinner4.png", "Dinner5.png"];
var basePath = "./assets/imgs/randImgs/";
function imgRandom() {
  for (i = 0; i < 1; i++) {
    var rand = randImg[Math.floor(Math.random() * randImg.length)];
    image = basePath + rand;
    imgURL = "url(" + "'" + image + "'" + ")";
    $masthead[0].style.backgroundImage = imgURL;
  }
}
console.log(imgRandom(randImg));
