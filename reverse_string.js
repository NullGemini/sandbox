

function reverseString (input) {
    var result = "";
    for( var x = input.length - 1 ; x > -1; x--) {
        result += input[x];
    }
	
    return result;
}

let myString = "hello";

console.log(reverseString(myString));