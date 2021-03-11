// Function to collect quotes from kanye.rest
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
                    console.log(data);
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
                console.log(data);

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
                    console.log(data);
            });
};

getDadJoke();

//Function to collect images of food from Foodish
function getFood(){

    //request data
        //find api url to fetch data
           var baseURL = "https://foodish-api.herokuapp.com/api/";

        //fetch the data
             fetch(baseURL)
    
        //collect data and convert to json format
            .then(function (response){
                return response.json();
             })
    
        //present data in console
            .then(function (image){
                console.log(image);
            });
};

getFood();
