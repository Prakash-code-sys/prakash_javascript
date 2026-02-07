/*
________________________________________________________
Keyword		Scope		Redeclare	Reassign
________________________________________________________
var		   Function	    Yes		       Yes              - old
let		   Block		No		       Yes              - ES6
const	   Block		No		       No               - ES6
_________________________________________________________
*/
// var keyword 
var name = "Karthik";
var name = "Rahul";
console.log(name);


// let:
let count = 10; 
count = 20; //can't let count =20 (redeclare)
console.log(count);

// const:
const PI = 3.14; //cant redclare or reassign //const PI= 3.15 or PI =3.14
console.log(PI);

