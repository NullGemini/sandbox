var cars = [
	{
		make: 'Honda',
		model: 'Civic',
		year: 1995,
		color: 'gray'
	},
	{
		make: 'Ford',
		model: 'Escape',
		year: 2005,
		color: 'blue'
	},
	{
		make: 'Honda',
		model: 'Civic',
		year: 2007,
		color: 'red'
	},
	{
		make: 'Dodge',
		model: 'Caravan',
		year: 1996,
		color: 'blue'
	},
]

// Get all blue cars
var newArr1 = [];
for (var i = 0; i  < cars.length; i++) {
	if (cars[i].color == 'blue') {
		newArr1.push(cars[i]);
	}
}
console.log(newArr1);

var newArr2 = [];
for (car of cars) {
	if (car.color == 'blue') {
		newArr2.push(car);
	}
}
console.log(newArr2);

// Is there a better way with es6?
const newArr3 = cars.filter(car => car.color === 'blue');
console.log(newArr3);