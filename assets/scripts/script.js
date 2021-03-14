// Variables querying html document elements
var addQuote = document.getElementById("Conversation");
var submitBtn = document.getElementById("Begin");
var userInput = document.getElementById("userinput");
var yeBtn = document.getElementById("kanye-quotes");
var swiftBtn = document.getElementById("taylor-quotes");
var dadBtn = document.getElementById("dad-joke");
var resetBtn = document.getElementById("resetbtn");

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

    //  present data in console
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
  //      find api url to fetch data
  var baseUrl = "https://api.taylor.rest/";

  //  fetch the data
  fetch(baseUrl)
    //  collect data and convert to json format
    .then(function (response) {
      return response.json();
    })

    //  present data in console
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

// getSwift();

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

    // present data in console
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
// If the array's length contains 10 quotes,
// Display a button to restart the conversation
var quoteArr = [];

// disable quote buttons
function disableBtn() {
  if (addQuote.childElementCount === 9) {
    yeBtn.disabled = true;
    swiftBtn.disabled = true;
    dadBtn.disabled = true;
  }
};

// reset conversation button
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

var $masthead = document.getElementsByClassName("masthead");
// Select a random image from a folder array
var randImg = ["Dinner2.png", "Dinner3.png", "Dinner4.png", "Dinner5.png"];
var basePath = "./assets/imgs/randImgs/";
function imgRandom() {
  for (i = 0; i < 1; i++) {
    var rand = randImg[Math.floor(Math.random() * randImg.length)];
    image = basePath + rand;
    // var image = new Image();
    // image.src = basePath + rand;
    imgURL = "url(" + "'" + image + "'" + ")";
    $masthead[0].style.backgroundImage = imgURL;
    // document.body.appendChild(image);
  }
}
console.log(imgRandom(randImg));

// Return api quotes based on specific userInput keywords

// //Function to collect images of food from Foodish
// function getFood(){

//     //request data
//         //find api url to fetch data
//            var baseURL = "https://foodish-api.herokuapp.com/api/";

//         //fetch the data
//              fetch(baseURL)

//         //collect data and convert to json format
//             .then(function (response){
//                 return response.json();
//              })

//         //present data in console
//             .then(function (image){
//                 var imgUrl = image["image"];
//                 console.log(imgUrl);
//             });
// };

// getFood();
