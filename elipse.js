"use-strict"

let str1 = "1234567890";

String.prototype.elipse = function (x) {
	return this.substring(0, x);
}

console.log(str1.elipse(8));