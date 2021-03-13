// Variables querying html document elements
var yeQuote = document.querySelector("#kanye-quote1");
var taylorQuote = document.querySelector("#taylor-quote1");
var dadQuote = document.querySelector("#dad-joke1");
var submitBtn = document.querySelector("#Begin");
var userInput = document.querySelector("#userinput");
var yeBtn = document.querySelector("#kanye-quotes");
var swiftBtn = document.querySelector("#taylor-quotes");
var dadBtn = document.querySelector("#dad-joke");

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
      yeText = data["quote"];
      console.log("yeText: ", yeText);
      yeQuote.textContent = yeText;
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
      var swiftText = data["quote"];
      console.log("swiftText: ", swiftText);
      taylorQuote.textContent = swiftText;
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

    //present data in console
    .then(function (data) {
      var dadJoke = data["joke"];
      console.log("dadJoke: ", dadJoke);
      dadQuote.textContent = dadJoke;
      localStorage.setItem("Dad Joke", dadJoke);
      quoteArr.push(localStorage.getItem("Dad Joke"));
    });
}

// getDadJoke();

// When a user clicks on a quote button, run function to call api and
// set html <p> element text content to quote data
var quoteArr = [];

yeBtn.addEventListener("click", function () {
  getYe();
});

swiftBtn.addEventListener("click", function () {
  getSwift();
});

dadBtn.addEventListener("click", function () {
  getDadJoke();
});



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
    imgURL = "url(" + "'" + image + "'" + ")"
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
