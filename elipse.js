"use-strict"

/*
This was a technical question that came up in an interview.
I got it half correct, but forgot to include the prototype portion.
*/

/*
Question:
	How would you write code to elipse (or truncate) a string?

Setup:
	let name ="1234567890"

	name.elipse(8);

	elipse {
		...
	}

My Initial Anser:
	function elipse(x) {
		return this.substring(0, x);
	}

*/

// Correct Answer
let name = "1234567890";

String.prototype.elipse = function (x) {
	return this.substring(0, x);
}

console.log(name.elipse(8));