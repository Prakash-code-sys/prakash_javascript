//1Function Basics & Syntax
/*A function is declared using the function keyword and called using 
its name followed by parentheses.*/
console.log("*****Function syntax****")

function myFirstFunc(){      //Function Declaration
    console.log("Hi, Prakash")
}
myFirstFunc() //Function calling


//2.Funtion Expression
console.log("*****Function Expression****")
let multiply = function (a,b) {
    c= a*b
    console.log("muliplication using Function Expression",c)
}
multiply(5,3)

//3.Anonymous function
//Functions without a name are called anonymous functions.
console.log("*****Anonymous Function******")
setTimeout(function(){
    console.log("This will be print after 2seconds")
},2000);

//4.Function Parameters and Arguments
/*
  Parameters are variables defined in the function declaration
  Arguments are actual values passed during function execution
*/
function displayDetails(name,age){ //name,age (parameters)
    console.log("Your name is",name)
    console.log("Your age is",age)
}
displayDetails("Prakash",28) //"prakash",28 (Arguments)

//5.Default Parameters
/*
Default parameters allow a function to use fallback values when arguments are not provided.
*/
function greetUser(name="Prakash"){
    console.log("Welcome",name)
}
greetUser("Raj");
greetUser();

//6.Return Statement
/* The return keyword sends a value back to the caller and stops further 
execution of the function */

function add(a,b){
    let c = a + b
    return c
}
console.log("Addition result",add(2,4))

//Execution Stack
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
}

first();
console.log("End of program");
/*xecution Flow:
----------------

Global Execution Context created

first() pushed to the stack

second() pushed to the stack

second() completes and pops

first() completes and pops
*/

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

function recursive(n){
    if (n >0){
        n=n+recursive(n-1);
        console.log(n);
    }else{
        n=0;
    }
    return n;
}

console.log(recursive(5));