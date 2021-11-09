var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://currency-exchange.p.rapidapi.com/listquotes',
  headers: {
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    'x-rapidapi-key': ''
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});