var a,b,c;

a = 2; //???
b = 0;
c = -1; //???

for (b = 0; a < 12; b++)
{
	a = (a + a) * c;
	console.log(b);
}

console.log(a, b, c);


a2 = 32;
b2 = 4;
c2 = -1;

for (b2 = 4; b2 > 0; b2--) {
	a2 = (a2/2) / c2;
	console.log(b2);
}

console.log(a2, b2, c2);