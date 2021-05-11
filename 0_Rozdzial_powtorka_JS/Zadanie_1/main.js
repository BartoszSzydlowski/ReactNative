if (true) {
	let a = "A";
	const b = "B";
	var c = "C";

	//console.log(a)
	//console.log(b)
	//console.log(c)
}

//console.log(a)
//console.log(b)
//console.log(c)

let one = 1; 
const two = 2; 
var three = 3;

//console.log(one)
//console.log(two)
//console.log(three)

function testVars() {
	let dog = "pekińczyk";
	const cat = "syjamski";
	var chomik = "syryjski";

	//console.log(dog)
	//console.log(cat)
	//console.log(chomik)
}

//console.log(dog)
//console.log(cat)
//console.log(chomik)

/*
Wnioski:
zmienne a, b nie jest wypisywana w global scope
zmienna c jest wypisywana w global scope
zmienne a,b,c sa wypisywane w local scope

zmienne one, two, three sa wypisywane w global scope

zmienne dog, cat, chomik z funkcji sa niewidoczne w global scope


*/