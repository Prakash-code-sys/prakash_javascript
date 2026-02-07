/* Functions Definitions

Syntax:
A function is declared using the function keyword and 
called using its name followed by parentheses.
function greet(){ ---------->Function declaration
   console.log("Welcome") 
}
greet()  ----------> function calling
*/

// Function expression
/* A function can be assigned to a variable. This is known as a function expression.
Function expressions are not hoisted, so they must be defined before usage.
 */

//Anonmous function
/* Functions without a name are called anonymous functions. */

//Default parameter
/* Default parameters allow a function to use fallback values when arguments are not provided. */

// Function Overloading
/* JavaScript does not support traditional function overloading.
However, similar behavior can be achieved using:

    • arguments.length
    • Conditional checks */

//recursion
/* Recursion occurs when a function calls itself until a base condition is satisfied.
It is useful for repetitive and hierarchical problems. */

//return statement

/* The return keyword sends a value back to the caller and stops further execution of the function.*/

// Examples
let kmToMilesConverter = function(km){
    miles = km * 1.603
    return miles
}
console.log("1.KiloMeter is equal to",kmToMilesConverter(1))

setTimeout(function(){
    console.log("printing this after 2 seconds using anonymous function")
},2000)

function string(name = "Raj") {
    console.log("Welcome ",name)
}
string("Prakash")
string()


function multiplier(a=null,b=null,c=null){
    if (a!=null && b!=null && c!=null){
        multi =a*b*c;
    }else if (a!=null && b!=null){
        multi = a*b;
    }else if (a!=null){
        multi =a;
    }
    return multi;
}
console.log("Function overloading with 3 args",multiplier(4,5,6))




function factorial(n){
    if(n===0){
        return 1
    }
    return n * factorial(n-1)
    
}
console.log("Using recursion factorial of 5",factorial(5))



function add(a,b){
    return a+b
}      
console.log("Using return statement ",add(2,3))