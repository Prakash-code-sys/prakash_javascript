//Primitive datatypes

//String
let userName="Krish";

console.log("Username :",userName);// UserName : krish

console.log("Tyepe of " + typeof userName)

//Number

//Integer
let age=25;
console.log("Age :",age);// Age : 25
console.log("Tyepe of " + typeof age)

//float
let height=5.8;
console.log("Height :",height);// Height : 5.8
console.log("Tyepe of " + typeof height)

//Not an Number
let value="abc"/2;
console.log("Value :",value);// Value : NaN
console.log("Tyepe of " + typeof value)

//Infinity
let posinf=10/0;
console.log("Infinity Value :",posinf);// Infinity Value : Infinity
console.log("Tyepe of " + typeof posinf)

let negInf=-10/0;
console.log("Negative Infinity Value :",negInf);// Negative Infinity Value : -Infinity
console.log("Tyepe of " + typeof negInf)

//BigInt
let normalNum=12345677777777777777777777777777777777777777;
console.log("Normal Number :",normalNum);// Big Number : 1.2345677777777778e+43
console.log("Tyepe of " + typeof normalNum)

let bigIntNum=2345678199999999999999999999999999999999999n;
console.log("BigInt Number :",bigIntNum);// BigInt Number : 2345678199999999999999999999999999999999999n
console.log("Tyepe of " + typeof bigIntNum)

let bigIntFromNum=BigInt(9873546728199998765345678987654345678234567);
console.log("BigInt from Number :",bigIntFromNum);// BigInt from Number : 9873546728199998765345678987654345678234567n
console.log("Tyepe of " + typeof bigIntFromNum)

//Boolean
let isLoggedIn=true;
console.log("Is Logged In :",isLoggedIn);// Is Logged In : true
console.log("Tyepe of " + typeof isLoggedIn)

//Null
let emptyvalue=null;
console.log("Empty Value :",emptyvalue);// Empty Value : null
console.log("Tyepe of " + typeof emptyvalue)

//Undefined
let undefinedValue;
console.log("Undefined Value :",undefinedValue);// Undefined Value : undefined
console.log("Tyepe of " + typeof undefinedValue)

//Symbol
//Single Equla assign value to the variable
//=== Strict comparison operator compare the values and its datatype

let a="id";
let b="id";
console.log("a===b",a===b);// true

let sym1=Symbol("id");
let sym2=Symbol("id");

console.log("Sym1 === Sym2",sym1===sym2);// false
console.log("Tyepe of " + typeof sym1)

//Non Primitive datatypes

//Object
let person={"Name":"Krish","Age":25};
console.log("Person Object :",person);// Person Object : { Name: 'Krish', Age: 25 }
console.log("Tyepe of " + typeof person)

//Array
let colors=["Red","Green","Blue"];
console.log("Colors Array :",colors);// Colors Array : [ 'Red', 'Green', 'Blue' ]
console.log("Tyepe of " + typeof colors)

//Function
function greets(){
    console.log("Hello Welcome");
}

greets();// Hello Welcome

console.log("Tyepe of " + typeof greets)