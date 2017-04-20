/* what is this? */

function sum() {
	return this.a + this.b + this.c;
}

var o = {
	a: 1,
	b: 2,
	c: 3,
	get average() {
		return (this.a + this.b + this.c) / 3;
	}
};

var m = {
	a: 5,
	b: 11,
	c: 2,
	get average() {
		return (this.a + this.b) / 2;
	}
};

Object.defineProperty(o, 'sum', {
	get: sum, enumerable: true, configurable: true});

Object.defineProperty(m, 'sum', {
	get: sum, enumerable: true, configurable: true});

console.log(o.average, o.sum); // logs 2, 6

console.log(m.average, m.sum); // logs 8, 18