// Variables querying html document elements
var submitBtn = document.getElementById("Begin");
var inputName = document.getElementById("inputname");
var userName = document.getElementById("username");
var userInput = document.getElementById("userInput");
var yeBtn = document.getElementById("kanye-quotes");
var swiftBtn = document.getElementById("taylor-quotes");
var dadBtn = document.getElementById("dad-joke");
var resetBtn = document.getElementById("resetbtn");
var conversation = document.getElementById("Conversation");
var kanyeEats = document.getElementById("kanyeeating");
var taylorEats = document.getElementById("tayloreating");
var dadEats = document.getElementById("dadeating");
var userTopic;

// User inputs a name
// displays the user's name under the "please be seated" button
userName.style.display = "none";
submitBtn.addEventListener("click", function(){
  userName.textContent = "Welcome: " + inputName.value;
  userName.style.display = "flex";
  userName.style.direction = "column";
  userName.style.justifyContent = "center";
  localStorage.setItem("Username", inputName.value);
});

// When the user types in a subject
// the subject is asked to the table in a question format
// and appended to the conversation
userInput.addEventListener("click", function(e){
    e.preventDefault();
    var text = document.querySelector("#usertopic").value;
    console.log("text =", text);
    var userQuote = document.createElement("p");
    userQuote.textContent = "What are your thoughts on " + text +" ?";
    conversation.append(userQuote);
    console.log("userQuote=", userQuote);
    userTopic = text;
  })

// function to call on kanye.rest and return 
// kanye's quotes surrounding the user's topic
function getYe() {

  // request data
  // find api url to fetch data
  var baseUrl = "https://api.kanye.rest/";

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
      localStorage.setItem("Kanye", yeText);
      yeRetrieve = localStorage.getItem("Kanye");
      yeQuote.textContent = yeRetrieve;
      if(yeQuote.textContent.includes(userTopic) === true){
        kanyeEats.style.display = "none";
        conversation.append(yeQuote);
        return;
      }else if(yeQuote.textContent.includes(userTopic) === false){
        return;
      }
    });
}

// function to call on taylor.rest and return 
// taylor's quotes surrounding the user's topic
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
      localStorage.setItem("Taylor", swiftText);
      swiftRetrieve = localStorage.getItem("Taylor");
      swiftQuote.textContent = swiftRetrieve;
      if(swiftQuote.textContent.includes(userTopic) === true){
        taylorEats.style.display = "none";
        conversation.append(swiftQuote);
        return;
      }else if(swiftQuote.textContent.includes(userTopic) === false){
        return;
      }
    });
}

// function to call on icanhazdadjoke api and return 
// dad jokes surrounding the user's topic
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
      localStorage.setItem("Dad", dadJoke);
      dadRetrieve = localStorage.getItem("Dad");
      dadQuote.textContent = dadRetrieve;
      if(dadQuote.textContent.includes(userTopic) === true){
        dadEats.style.display = "none";
        conversation.append(dadQuote);
        return;
      }else if(dadQuote.textContent.includes(userTopic) === false){
        return;
      }
    });
}

// Hides the "... is eating" text on the quote buttons
kanyeEats.style.display = "none";
taylorEats.style.display = "none";
dadEats.style.display = "none";

// When a user clicks on a quote button, run function to call api and
// display "... is eating"
// until a quote containing the topic is found
// the button displays the person is eating
// the quote is appended to the conversation
// if the conversation reaches 10 quotes, 
// disable the buttons and display the reset button
yeBtn.addEventListener("click", function () {
  kanyeEats.textContent = "Kanye is eating...";
  kanyeEats.style.display = "inline";
  for(i = 0; i <= 10; i++){
    getYe();
    disableBtn();
    resetConversation();
  }
});

swiftBtn.addEventListener("click", function () {
  taylorEats.textContent = "Taylor is eating...";
  taylorEats.style.display = "inline";
  for(i = 0; i <= 10; i++){
    getSwift();
    disableBtn();
    resetConversation();
  }
});

dadBtn.addEventListener("click", function () {
  dadEats.textContent = "Dad is eating...";
  dadEats.style.display = "inline";
  for(i = 0; i <= 10; i++){
    getDadJoke();
    disableBtn();
    resetConversation();
  }
});

// disable quote buttons
// when the conversation div contains 10 quotes
// then the user cannot click the buttons
// to add more quotes
function disableBtn() {
  if(conversation.childElementCount >= 9) {
    userInput.disabled = true;
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
  if(conversation.childElementCount >= 9) {
    resetBtn.style.display = "inline";
    resetBtn.addEventListener("click", function () {
      console.log("Reset");
      location.reload();
      });
    }
  }

// Select a random image from a folder array and display on the document's header
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
