/* another interview question to understand scope

What would this code log out?

What if line 17 was commented oout?

*/


var x = 5;

function makeX10 () {

	var x = 10;
	//x = 10;
}

makeX10();
console.log(x);