// Function to collect quotes from kanye.rest
var yeContainer = document.querySelector("#kanye-container");
var taylorContainer = document.querySelector("#taylor-container");
var dadContainer = document.querySelector("#dad-container");

function getYe(){

    // request data
    //      find api url to fetch data
        var baseUrl = "https://api.kanye.rest";
    
        //  fetch the data
            fetch(baseUrl)
    
        //  collect data and convert to json format
                .then(function (response){
                    return response.json();
            })
    
        //  present data in console
                .then(function (data){
                    var yeText = data["quote"];
                    console.log(yeText);
                    yeContainer.innerHTML = yeText;
                });
        };
    // };
            
        //  append quote text to list elements
        //  create potential array of quotes???
        //  which quotes to present first? Randomized? 
    //         var chatBox = document.createElement("li");
    //         var yeQuote = document.createElement("p");
    //         yeQuote.textContent = data[i];
    //         chatBox.append(yeQuote);
    //             });
    //     };
    // };
    
getYe();

// Function to collect quotes from taylor.rest
function getSwift(){

// request data
//      find api url to fetch data
	var baseUrl = "https://api.taylor.rest/";


    //  fetch the data
        fetch(baseUrl)

    //  collect data and convert to json format
            .then(function (response){
                return response.json();
	    })

    //  present data in console
            .then(function (data){
                var swiftText = data["quote"];
                console.log(swiftText);
                taylorContainer.innerHTML = swiftText;
	// data.quote - will show text from quote itself
            });

};

getSwift();

//Function to collect dad jokes
function getDadJoke(){

    //request data
        //find api url to fetch data
           var baseUrl = "https://icanhazdadjoke.com";

        //fetch the data
             fetch(baseUrl, {
            headers: {Accept: 'application/json'},
            })
    
        //collect data and convert to json format
            .then(function (response){
                return response.json();
             })
    
        //present data in console
            .then(function (data){
        
                var dadJoke = data["joke"];
                console.log(dadJoke);
                dadContainer.innerHTML = dadJoke;
            });
};

getDadJoke();

var $masthead = document.getElementsByClassName(".masthead")
    // Select a random image from a folder array
    var randImg = ["Dinner2.png", "Dinner3.png", "Dinner4.png", "Dinner5.png"];
    var basePath = "./assets/imgs/randImgs/";
    function imgRandom() {
        for (var i = 0; i < 1; i++) {
            var rand = randImg[Math.floor(Math.random() * randImg.length)];
            var image = new Image();
            image.src = basePath+rand;
            $masthead.style.background = "url(" + image + ") no-repeat center";
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