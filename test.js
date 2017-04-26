/*
Console Cards
User Story
As a casual poker player, I want a console application that when executed shows me all of the cards in a standard deck of playing cards, in correct order then shuffled.
Definitions
Standard Deck of Playing Cards: 52 Cards. Each card is a unique combination of a suite and a rank.
Available Suites (in priority order): Hearts, Diamonds, Spades, Clubs
Available Ranks (in priority order): 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
4 Suites * 13 Ranks = 52 Cards
Estimate
Proof Of Concept - 20 Minutes
Minimum Viable - 60 Minutes
Production - 240 Minutes
Acceptance Criteria
When executed the console application should show the following:
Ordered: 2 Hearts, 3 Hearts, 4 Hearts, ...., Ace Hearts, 2 Diamonds, 3 Diamonds, ...., King Clubs, Ace Clubs
Shuffled: 8 Diamonds, Jack Clubs, 2 Hearts, .....
*/

// build deck
const deck = [];

const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

function makeAndShuffleDeck(suites, ranks) {

    let count = 0;

    for ( let x = 0; x < suits.length; x++) {
        for ( let y = 0; y < ranks.length; y ++) {
            deck.push([count, suits[x] + " " + ranks[y]]);
            count =+ count
        }
    }

    // display deck in ordr
    console.log (deck[2]);

    // shiffule deck
    for (let x = 0; x < deck.length; x++) {
        const tempCard = deck[x];
        const newPos = Math.floor((Math.random() * 52)) ;

        deck[x] = deck[newPos];
        deck[newPos] = tempCard;
    }

    // display shuffled deck
    console.log ("shuffled: ");
    console.log (deck);

}

makeAndShuffleDeck(suits, ranks);

/*
Data Access
User Story
As a front end web developer, I want to be able to get access to user information and save changes.
Definitions
A user consists of: name, email, birthdate
You will have to implement a database and web api.
Estimate
Proof Of Concept - 20 Minutes
Minimum Viable - 60 Minutes
Production - 240 Minutes
Acceptance Criteria
Through postman, you need to demonstrate:
Creation of a user
Read of a user
Update of a user
Deletion of a user
*/

// get the request

// Update / Read/ Create / deletion

//// Read
app.get('/api/read/{id}',(req,res,next) 

        return(readFunction(req.id));

}

app.get('/api/update',(req,res,next) 

        return(updateFunction(req.id, req.name, req.email, req.birthdate));

}

functon readFunction(id) {
    // make db connection
    require "dbConnection";
    let dbconnection = dbConnection;

    let sqlStatement = "Select name, email, birtday where id = *";
    return (sqlStatement(id);
}

functon updateFunction(id, name, email. birthdate) {
    // make db connection
    require "dbConnection";
    let dbconnection = dbConnection;

    ORM (name, email. birthdate)

    let sqlStatement = "SET (name, email. birthdate) = (name, email. birthdate)";
    return (sqlStatement(id);
}




// return JSON

//// Create

// make db connection

// insert

//// Update

// make db connect

// 



/*
SPA
User Story
As an owner of a Health and Beauty SPA, I need a single page application with a gripping front view and a second view with my products.
Definitions
A product consists of: name, price. The products are accessible via a RESTful API:
www.totally-made-up-api-that-is-not-real.com/products
[
    {
        'name':'Face Massage',
        'price':45.99
    },
    {
        'name':'Cucumber Treatment',
        'price':15.99
    }
]
Estimate
Proof Of Concept - 20 Minutes
Minimum Viable - 60 Minutes
Production - ???
Acceptance Criteria
Through we browser you need to go to a url:
First page: Contains the words 'Gripping Front View' and a link to the products
Products page: Contains the words 'Products' and a list of products returning from the API
*/

<div ng-app="app">

<div ng-repeat="product for products">
    <span>Name: {{product.name}}</span>
    <span>Price: {{product.price}}</span>
</div>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("www.totally-made-up-api-that-is-not-real.com/products")
    .then(function(response) {
        $scope.products = response.data;
    }), function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
</script>