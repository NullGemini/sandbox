var fetch = require('node-fetch');

//Write an function that will convert bitcoins to USD using an API call to get current conversion rate

function convertBitCoinToUSD(amount) {
	fetch ('http://apilayer.net/api/live?access_key={{{}}}&currencies=USD,BTC&format=1')
		.then((res) => {
			return res.json();
		})
		.then((j) => {
			console.log(j);
			const bitCoinConversion = j.quotes.USDBTC
			console.log("Current Dollar to Bit Coin Conversion:" + bitCoinConversion)
			const total = Math.round((amount / bitCoinConversion) * 100) / 100;
			return total;
		})
		.then((total) => {
			console.log("inital input: " + total);
			
			const incrementAmounts = [100, 50, 20, 10 , 5, 2, 1, .25, .10, .05, .01];
			const final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

			for (let x = 0; x < incrementAmounts.length; x++) {
				while ( total >= incrementAmounts[x] ){
					final[x] = final[x] + 1;
					total = Math.round((total - incrementAmounts[x]) * 100) / 100;
					//console.log(total);
				}
			}

			console.log(final);
		})
		.catch(function(err) {
			console.log(err);
		})
	
}

convertBitCoinToUSD(5);