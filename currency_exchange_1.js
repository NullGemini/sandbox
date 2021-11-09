var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://currency-exchange.p.rapidapi.com/listquotes',
  headers: {
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    'x-rapidapi-key': 'bafe5d1b21msh588f061f55a9bf5p1ee83cjsn63e72ce6b4e8'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});